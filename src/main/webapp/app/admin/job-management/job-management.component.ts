import { Component, Inject, Vue } from 'vue-property-decorator';
import JobService from '@/client/job-list/job.service';
import { loadImage } from '@/shared/common/util';
import AccountService from '@/account/account.service';
import { Authority } from '@/shared/security/authority';

@Component
export default class JobManagement extends Vue {
  @Inject('jobService') private jobService: () => JobService;
  @Inject('accountService') private accountService: () => AccountService;
  public jobs: any[] = [];
  public itemsPerPage = 6;
  public queryCount = 2;
  public page = 1;
  public totalItems = 5;
  public previousPage = 1;
  public keyword = null;
  public removeId: number = null;
  public isEmployer: Boolean = false;
  public ADMIN = Authority.ADMIN;
  public EMPLOYER = Authority.EMPLOYER;

  public mounted(): void {
    this.loadAll();
    this.checkEmployer();
  }
  public checkEmployer() {
    const authorities = this.accountService().userAuthorities;
    if (!authorities) {
      return false;
    }
    if (authorities.indexOf(Authority.EMPLOYER) > -1 && authorities.indexOf(Authority.ADMIN) < 0) {
      this.isEmployer = true;
    } else this.isEmployer = false;
  }

  public loadPage(page: number): void {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadAll();
    }
  }
  changeStatusJob(jobId) {
      if (jobId != null) {
        this.jobService().changeStatusJob(jobId).then(res => {
            if( res.data.errorCode === 'SUCCESS') {
              // @ts-ignore
              this.$toast.open({
                message: 'Successful status change !',
                type: 'success',
                position: 'bottom-right',
              });
              this.loadAll();
            } else {
              // @ts-ignore
              this.$toast.open({
                message: 'An error occurred!',
                type: 'error',
                position: 'bottom-right',
              });
            }
        });
      }
  }
  public handleSearch() {
    this.loadAll();
  }

  public deleteJob(): void {
    this.jobService()
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

  public loadAll() {
    this.jobs = [];
    const query = {
      page: this.page - 1,
      size: this.itemsPerPage,
    };
    if (this.keyword) {
      query['keyword'] = this.keyword;
    }
    this.jobService()
      .getAllForAdmin(query)
      .then(res => {
        if (res && res.data && res.data.data) {
          this.jobs = res.data.data.content;
          this.totalItems = Number(res.data.data.totalElements);
          this.queryCount = this.totalItems;
        }
      });
  }

  public prepareRemove(instance): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeJob) {
      (<any>this.$refs.removeJob).show();
    }
  }

  public closeDialog(): void {
    (<any>this.$refs.removeJob).hide();
  }

  public loadImage(name) {
    return loadImage(name);
  }

  public hasRole(role) {
    if (typeof role === 'string') {
      role = [role];
    }
    const authorities = this.accountService().userAuthorities;
    if (!authorities) {
      return false;
    }
    for (let i = 0; i < role.length; i++) {
      if (authorities.includes(role[i])) {
        return true;
      }
    }
    return false;
  }
}
