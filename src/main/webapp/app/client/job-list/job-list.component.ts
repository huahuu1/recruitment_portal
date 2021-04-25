import Component from 'vue-class-component';
import { Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import JobService from '@/client/job-list/job.service';
import CommonService from '@/shared/common/common.service';
import { loadImage } from '@/shared/common/util';

@Component({
  mixins: [Vue2Filters.mixin],
})
@Component({})
export default class JobListComponent extends Vue {
  @Inject('jobService') private jobService: () => JobService;
  @Inject('commonService') private commonService: () => CommonService;
  public jobs: any[] = [];
  public jobType: any[] = [];
  public salary: any[] = [];
  public position: any[] = [];
  public career: any[] = [];
  public province: any[] = [];
  public careerSelected: any[] = [];
  public jobTypeSelected: any[] = [];
  public salarySelected: any[] = [];
  public positionSelected: any[] = [];
  public provinceSelected: any;
  public keyword: any = '';
  public itemsPerPage = 10;
  public page = 1;
  public total = 1;
  public totalPage = 1;
  public provinceName: String = '';
  public selected: any;
  public loading = false;

  public mounted(): void {
    if (this.$route.query.location) {
      this.provinceSelected = this.$route.query.location;
    }
    if (this.$route.query.career) {
      this.careerSelected.push(this.$route.query.career);
    }
    if (this.$route.query.keyword) {
      this.keyword = this.$route.query.keyword;
    }
    this.loadAll();
    this.loadAllJobType();
    this.loadAllPosition();
    this.loadAllSalary();
    this.loadAllCareer();
    this.loadAllProvince();
  }

  public goToPage(page) {
    this.page = page;
    this.loadAll();
  }

  public loadAll(): void {
    this.loading = true;
    this.jobs = [];
    let query = {
      page: this.page - 1,
      pageSize: this.itemsPerPage,
    };
    if (this.keyword) {
      this.page = 1;
      query['page'] = this.page - 1;
      query['keyword'] = this.keyword;
    }
    if (this.careerSelected.length > 0) {
      this.page = 1;
      query['page'] = this.page - 1;
      query['career'] = this.careerSelected.join(',');
    }
    if (this.jobTypeSelected.length > 0) {
      this.page = 1;
      query['page'] = this.page - 1;
      query['jobType'] = this.jobTypeSelected.join(',');
    }
    if (this.salarySelected.length > 0) {
      this.page = 1;
      query['page'] = this.page - 1;
      query['salary'] = this.salarySelected.join(',');
    }
    if (this.positionSelected.length > 0) {
      this.page = 1;
      query['page'] = this.page - 1;
      query['position'] = this.positionSelected.join(',');
    }
    if (this.provinceSelected) {
      this.page = 1;
      query['page'] = this.page - 1;
      query['provinceId'] = this.provinceSelected;
    }
    this.jobService()
      .getAll(query)
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.jobs = res.data.data.list;
            this.total = Number(res.data.data.total);
            this.totalPage = Math.ceil(this.total / this.itemsPerPage);
          }
          this.loading = false;
        }
      });
  }
  public loadAllJobType(): void {
    this.loading = true;
    this.jobType = [];
    this.commonService()
      .getAllJobType()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.jobType = res.data.data;
          }
        }
      });
    this.loading = false;
  }
  public loadAllSalary() {
    this.loading = true;
    this.commonService()
      .getAllSalary()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.salary = res.data.data;
          }
        }
      });
    this.loading = false;
  }
  public loadAllPosition(): void {
    this.loading = true;
    this.position = [];
    this.commonService()
      .getAllPosition()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.position = res.data.data;
          }
        }
      });
    this.loading = false;
  }
  public loadAllCareer(): void {
    this.loading = true;
    this.career = [];
    this.jobService()
      .getAllCareer()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.career = res.data.data;
          }
        }
      });
    this.loading = false;
  }
  public loadAllProvince(): void {
    this.loading = true;
    this.province = [];
    this.jobService()
      .getAllProvince()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.province = res.data.data;
          }
        }
      });
    this.loading = false;
  }

  public loadImage(name) {
    return loadImage(name);
  }
}
