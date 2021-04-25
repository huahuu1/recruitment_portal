import { Component, Inject, Vue } from 'vue-property-decorator';
import JobService from '@/client/job-list/job.service';
import { maxLength, required } from 'vuelidate/lib/validators';
import CommonService from '@/shared/common/common.service';
import TestService from '@/admin/test-management/test.service';
import moment from 'moment'

const validations: any = {
  job: {
    position: {
      required,
    },
    title: {
      required,
      maxLength: maxLength(200),
    },
    deadline: {
      required,
    },
  },
};

@Component({
  validations,
})
export default class JobManagementEditComponent extends Vue {
  @Inject('jobService') private jobService: () => JobService;
  @Inject('commonService') private commonService: () => CommonService;
  @Inject('testService') private testService: () => TestService;
  public jobs: any[] = [];
  public moment = moment;
  public today = new Date();
  /*  public customToolbar: any[] = [
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
  ];*/
  public job: any = {
    id: null,
    content: '',
    deadline: null,
    salary: 1,
    jobType: 1,
    recruiteNumber: 1,
    experience: 1,
    position: null,
    skill: null,
    locationId: '01',
    testId: null,
    title: '',
    scopeWork: [],
  };
  public salaryLst: any[] = [];
  public jobTypeLst: any[] = [];
  public locationLst: any[] = [];
  public experienceLst: any[] = [];
  public careerLst: any[] = [];
  public tests: any[] = [];
  public isSaving: boolean = false;

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
        if (res && res.data) {
          this.job = res.data.data;
          if (this.job.deadline) {
            this.job.deadline = this.job.deadline.split('T')[0];
          }
        }
      });
  }

  public mounted(): void {
    this.disableBeforeDate();
    this.loadAllJobType();
    this.loadAllProvince();
    this.loadAllSalary();
    this.loadAllTest();
    this.loadAllExp();
    this.loadAllCareer();
    this.loadAllJob();
  }

  public disableBeforeDate() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("deadline")[0].setAttribute('min', today);
  }

  public save() {
    var checkDuplicate = false;
    var update = true;
    this.isSaving = true;
    this.jobs.forEach(e => {
      if (e.id != this.job.id) {
        if (e.title.toLowerCase().trim() === this.job.title.toLowerCase().trim() && e.position.toLowerCase().trim() === this.job.position.toLowerCase().trim() && this.job.deadline <= moment(e.deadline).format('YYYY-MM-DD')) {
          checkDuplicate = true;
          if (checkDuplicate) {
            update = false;
            this.isSaving = false;
          }
        }
      }
    });
    if (checkDuplicate) {
      this.$toast.open({
        message: 'Data for this job already exists',
        type: 'error',
        position: 'bottom-right',
      });
    }
    if (update) {
      this.jobService()
        .update(this.job)
        .then(res => {
          if (res && res.data && res.data.errorCode === 'SUCCESS') {
            // @ts-ignore
            this.$toast.open({
              message: 'Success',
              type: 'success',
              position: 'bottom-right',
            });
            this.$router.push('/admin/quan-ly-viec-lam');
          }
          else {
            this.$toast.open({
              message: 'FAIL',
              type: 'error',
              position: 'bottom-right',
            });
          }
        })
        .finally(() => {
          this.isSaving = false;
        });
    }


  }

  public loadAllJob() {
    this.jobs = [];
    this.jobService()
      .getAllForAdmin()
      .then(res => {
        if (res && res.data && res.data.data) {
          this.jobs = res.data.data.content;
        }
      });
  }

  public loadAllTest(): void {
    this.tests = [];
    this.testService()
      .getAll({
        page: 0,
        size: 10000,
      })
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.tests = res.data.data.content;
          }
        }
      });
  }

  public loadAllExp(): void {
    this.experienceLst = [];
    this.commonService()
      .getAllExp()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.experienceLst = res.data.data;
          }
        }
      });
  }

  public loadAllCareer(): void {
    this.careerLst = [];
    this.commonService()
      .getAllCareer()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.careerLst = res.data.data;
          }
        }
      });
  }

  public loadAllJobType(): void {
    this.jobTypeLst = [];
    this.commonService()
      .getAllJobType()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.jobTypeLst = res.data.data;
          }
        }
      });
  }
  public loadAllSalary() {
    this.salaryLst = [];
    this.commonService()
      .getAllSalary()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.salaryLst = res.data.data;
          }
        }
      });
  }

  public loadAllProvince(): void {
    this.locationLst = [];
    this.commonService()
      .getAllProvince()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.locationLst = res.data.data;
          }
        }
      });
  }
}
