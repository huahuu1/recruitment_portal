import Component from 'vue-class-component';
import { Vue, Inject } from 'vue-property-decorator';
import JobService from '@/client/job-list/job.service';
import { loadImage } from '@/shared/common/util';
import AccountService from '@/account/account.service';
import ApplyService from '@/admin/apply-management/apply.service';
import axios from 'axios';

@Component({})
export default class JobDetail extends Vue {
  @Inject('jobService') private jobService: () => JobService;
  @Inject('accountService') private accountService: () => AccountService;
  @Inject('applyService') private applyService: () => ApplyService;
  public job: any = null;
  public isApplyJob: boolean = false;
  public selectedFile: any;
  public uploadError = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.jobId) {
        vm.init(to.params.jobId);
      }
    });
  }

  public init(jobId: number): void {
    this.jobService()
      .get(jobId)
      .then(res => {
        if (res && res.data && res.data.errorCode === 'SUCCESS') {
          this.job = res.data.data;
          this.checkApplyJob(this.job.id);
          this.updateView(this.job.id);
        }
      });
  }

  public applyNow() {
    const formdata: FormData = new FormData();
    formdata.append('cvFile', this.selectedFile ? this.selectedFile : null);
    this.applyService()
      .applyNow(this.job.id, formdata)
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'PROFILE_EMPTY') {
            // @ts-ignore
            this.$toast.open({
              message: res.data.description,
              type: 'error',
              position: 'bottom-right',
            });
            this.$router.push('/trang-ca-nhan');
          }
          if (res.data.errorCode === 'CV_EMPTY') {
            // @ts-ignore
            this.$toast.open({
              message: res.data.description,
              type: 'error',
              position: 'bottom-right',
            });
          }
          if (res.data.errorCode === 'SUCCESS') {
            // @ts-ignore
            this.$toast.open({
              message: res.data.description,
              type: 'success',
              position: 'bottom-right',
            });
            this.closeDialog();
            this.isApplyJob = true;
          }
        }
      });
  }

  public applyWithCV() {
    if (!this.selectedFile) {
      this.uploadError = 'Please select CV';
      return;
    }
    if (this.selectedFile.type !== 'application/pdf') {
      this.uploadError = 'Use only pdf files';
      return;
    }
    this.uploadError = '';
    this.applyNow();
  }

  public handleFilesUpload(e) {
    this.selectedFile = (this.$refs['files'] as any).files[0];
  }

  public handleUploadCV(): void {
    axios
      .get('api/account')
      .then(res => {
        if (res && res.data) {
          if (<any>this.$refs.uploadCV) {
            (<any>this.$refs.uploadCV).show();
          }
        }
      })
      .catch(err => {
        sessionStorage.setItem('requested-url', '/chi-tiet-viec-lam/' + this.job.id);
        this.$router.push('/dang-nhap');
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.uploadCV).hide();
  }

  public updateView(jobId) {
    this.jobService().updateView(jobId).then();
  }

  public checkApplyJob(jobId) {
    this.applyService()
      .checkCurrentUserApplyJob(jobId)
      .then(res => {
        if (res && res.data && res.data.errorCode === 'SUCCESS') {
          this.isApplyJob = true;
        }
      })
      .catch(() => {
        this.isApplyJob = false;
      });
  }

  public loadImage(name) {
    return loadImage(name);
  }
}
