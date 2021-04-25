import { Component, Inject, Vue } from 'vue-property-decorator';
import ApplyService from '@/admin/apply-management/apply.service';
import { loadImage } from '@/shared/common/util';
import AlertService from '@/shared/alert/alert.service';
import DatePicker from 'vue2-datepicker';
import { format, parseISO } from 'date-fns';
import 'vue2-datepicker/index.css';
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators';
const validations: any = {
  emailInfo: {
    subject: {
      required,
    },
    content: {
      required,
    },
  },
  applyJobInterview: {
    interviewTime: {
      required
    },
    address: {
      required
    }
  }
};
@Component({
  validations,
  components: {
    DatePicker
  }
})
export default class ApplyManagementComponent extends Vue {
  @Inject('applyService') private applyService: () => ApplyService;
  public applyLst: any[] = [];
  public itemsPerPage = 10;
  public queryCount: number = 2;
  public page = 1;
  public totalItems = 5;
  public previousPage = 1;
  public keyword = null;
  public removeId: number = null;
  public applyUpdate: any = null;
  public addTimeInterview = false;
  public emailInfo: any = {
    applyJobId: null,
    name: null,
    email: null,
    subject: null,
    content: null,
    isSendTest: 0,
  };
  public applyJobInterview: any = {
    id: null,
    user: null,
    applyJobId: null,
    interviewTime: null,
    interviewer: null,
    address: null,
  };
  changeCheckbox(): void {
    if (this.emailInfo.isSendTest) {
      this.emailInfo.isSendTest = false;
    } else {
      this.emailInfo.isSendTest = true;
    }
  }
  disableDate(date) {
    const today = new Date(Date.now() - 8640000);
    return date < today;
  }
  public mounted(): void {
    this.loadAll();
  }

  public viewCV(id) {
    window.open('http://localhost:8080/api/common/viewPdf/' + id, '_blank');
  }

  public loadPage(page: number): void {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadAll();
    }
  }

  public handleSearch() {
    this.loadAll();
  }

  public loadAll() {
    this.applyLst = [];
    let query = {
      page: this.page - 1,
      size: this.itemsPerPage,
    };
    if (this.keyword) {
      query['keyword'] = this.keyword;
    }
    this.applyService()
      .getApplyJob(query)
      .then(res => {
        if (res && res.data) {
          this.applyLst = res.data.data.content;
          this.totalItems = Number(res.data.data.totalElements);
          this.queryCount = this.totalItems;
        }
      });
  }

  public deleteApply(): void {
    this.applyService()
      .remove(this.removeId)
      .then(res => {
        if (res && res.data) {
          // @ts-ignore
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'bottom-right',
          });
          this.loadAll();
          this.closeDialog();
        }
      });
  }

  public preUpdateStatus(apply, event): void {
    this.applyUpdate = apply;
    if (apply.status === 3) {
      this.addTimeInterview = true;
      this.applyJobInterview.applyJobId = apply.id;
      if (apply.applyJobInterview != null ) {
          this.applyJobInterview.id  = apply.applyJobInterview.id;
          this.applyJobInterview.user  = apply.applyJobInterview.user;
          const date = new Date(apply.applyJobInterview.interviewTime);
          date.setHours(date.getHours() - 7);
          this.applyJobInterview.interviewTime  = date;
          this.applyJobInterview.interviewer  = apply.applyJobInterview.interviewer;
          this.applyJobInterview.address  = apply.applyJobInterview.address;
      }
    } else {
      this.addTimeInterview = false;
    }
    if (<any>this.$refs.updateStatus) {
      (<any>this.$refs.updateStatus).show();
    }
  }

  public updateStatus(): void {
    this.applyService()
      .updateStatus(this.applyUpdate.id, this.applyUpdate.status)
      .then(res => {
        if (res && res.data && res.data.errorCode === 'SUCCESS') {
          if (this.addTimeInterview || this.applyUpdate.status === 3) {
            this.applyService().interviewCalendar(this.applyJobInterview).then( resp => {
                if (resp.data.errorCode === 'SUCCESS') {
                   // @ts-ignore
                  this.$toast.open({
                    message: 'Status update and successful interview scheduling!',
                    type: 'success',
                    position: 'bottom-right',
                  });
                  this.closeDialogUpdateStatus();
                  this.loadAll();
                }
            });
          } else {
             // @ts-ignore
            this.$toast.open({
                message: 'Success!',
                type: 'success',
                position: 'bottom-right',
              });
            this.closeDialogUpdateStatus();
            this.loadAll();
          }
          this.addTimeInterview = false;
        }
      });
  }

  public cancelUpdateStatus() {
    this.applyUpdate.status = this.applyUpdate.oldStatus;
    this.applyJobInterview = {
      id: null,
      user: null,
      applyJobId: null,
      interviewTime: null,
      interviewer: null,
      address: null,
    };
  }

  public prepareRemove(instance): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeUser) {
      (<any>this.$refs.removeUser).show();
    }
  }

  public closeDialog(): void {
    (<any>this.$refs.removeUser).hide();
  }

  public closeDialogUpdateStatus(): void {
    this.cancelUpdateStatus();
    (<any>this.$refs.updateStatus).hide();
  }

  public loadImage(name) {
    return loadImage(name);
  }

  public viewEmail(apply): void {
    this.emailInfo.applyJobId = apply.id;
    if (apply.profileDTO.user) {
      this.emailInfo.name = apply.profileDTO.user.fisrtName
        ? apply.profileDTO.user.fisrtName
        : '' + ' ' + apply.profileDTO.user.lastName
        ? apply.profileDTO.user.lastName
        : '';
      this.emailInfo.email = apply.profileDTO.user.email;
    }
    if (<any>this.$refs.viewEmail) {
      (<any>this.$refs.viewEmail).show();
    }
  }
  convertTime(dateTime) {
    const d = new Date(dateTime);
    return d.getUTCHours() + 'h:' + d.getUTCMinutes() + 'p';
  }
  formatDateInterview(date) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }
  sendEmail(): void {
    if (this.emailInfo.email && this.emailInfo.subject) {
      if (this.emailInfo.isSendTest === true) {
        this.emailInfo.isSendTest = 1;
      } else {
        this.emailInfo.isSendTest = 0;
      }
      this.applyService()
        .sendTest(this.emailInfo)
        .then(res => {
          if (res) {
            if (res.status === 200 && res.data.errorCode === 'SUCCESS') {
              if (<any>this.$refs.viewEmail) {
                (<any>this.$refs.viewEmail).hide();
              }
              this.emailInfo = {
                applyJobId: null,
                name: null,
                email: null,
                subject: null,
                content: null,
                isSendTest: 0,
              };
              this.$toast.open({
                message: 'Email is successfully sent!',
                type: 'success',
                position: 'top-right',
              });
            }
          }
        });
    }
  }
}
