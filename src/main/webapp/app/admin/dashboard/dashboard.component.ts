import { Component, Inject, Vue } from 'vue-property-decorator';
import JobService from '@/client/job-list/job.service';
import UserManagementService from '@/admin/user-management/user-management.service';
import ApplyService from '@/admin/apply-management/apply.service';
import TestService from '@/admin/test-management/test.service';
import PostManagementService from '@/admin/post-management/post-management.service';
import AccountService from '@/account/account.service';
import { Authority } from '@/shared/security/authority';
import PieChart from './PieChart';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import DashboardService from './dashboard.service';
@Component({
  components: {
    PieChart,
    BarChart,
    DoughnutChart
  }
})
export default class Dashboard extends Vue {
  @Inject('jobService') private jobService: () => JobService;
  @Inject('userService') private userManagementService: () => UserManagementService;
  @Inject('applyService') private applyService: () => ApplyService;
  @Inject('testService') private testService: () => TestService;
  @Inject('postService') private postManagementService: () => PostManagementService;
  @Inject('accountService') private accountService: () => AccountService;
  @Inject('dashboardService') private dashboardService: () => DashboardService;
  public ADMIN = Authority.ADMIN;
  public EMPLOYER = Authority.EMPLOYER;
  public jobs: any[] = [];
  public users: any[] = [];
  public applyLst: any[] = [];
  public tests: any[] = [];
  public posts: any[] = [];
  public itemsPerPage = 6;
  public queryCount: number = 2;
  public page = 1;
  public totalJob = 0;
  public totalInterview = 0;
  public totalUser = 0;
  public totalCandidate = 0;
  public totalTest = 0;
  public totalPost = 0;
  public previousPage = 1;
  public keyword = null;
  public propOrder = 'id';
  public reverse = false;
  public userId: any;
  year: any;
  loaded = false;
  loadedUser = false;
  loadedMonth = false;
  loadedMonthUser = false;
  loadedCareer = false;
  loadedCareerUser = false;
  public dataPassFail = {
    labels: ['Pass', 'Fail'],
    data: null,
    colors: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']
  };
  public dataPassFailUserId = {
    labels: ['Pass', 'Fail'],
    data: null,
    colors: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']
  };
  public dataMonthOfYear = {
    labels: [],
    data: [],
    colors: ['rgba(54, 162, 235, 0.2)']
  };
  public dataMonthOfYearByUserId = {
    labels: [],
    data: [],
    colors: ['rgba(54, 162, 235, 0.2)']
  };
  public dataCareer = {
    labels: [],
    data: [],
    colors: ['rgba(54, 162, 235, 0.2)']
  };
  public dataCareerByUserId = {
    labels: [],
    data: [],
    colors: ['rgba(54, 162, 235, 0.2)']
  };
  public top7Career: any[] = [];
  public top7CareerByUserId: any[] = [];
  public top7Job: any[] = [];
  public top7JobByUserId: any[] = [];
  created() {
    this.countPassFailByUserId();
    this.countApplyJobMonthOfYearByUserId();
    this.countPassFail();
    this.countApplyJobMonthOfYear();
    this.countAJCareer();
    this.countTop7AJCareer();
    this.countTop7AJJob();
  }
  public mounted(): void {
    this.loadAllJob();
    this.loadAllUser();
    this.loadAllCandidate();
    this.loadAllTest();
    this.loadAllPost();
    this.loadAllInterview();
  }
  public countTop7AJCareer() {
    this.dashboardService().countTop7ApplyJobCareer().then(
      res => {
          if (res.error !== 'ERROR') {
            this.top7Career = res.data.data;
          }
      }
    );
  }

  public countTop7AJCareerByUserId() {
    this.dashboardService().countTop7ApplyJobCareerByUserId().then(
      res => {
          if (res.error !== 'ERROR') {
            this.top7CareerByUserId = res.data.data;
          }
      }
    );
  }

  public countTop7AJJob() {
    this.dashboardService().countTop7ApplyJobByJob().then(
      res => {
          if (res.error !== 'ERROR') {
            this.top7Job = res.data.data;
          }
      }
    );
  }

  public countTop7AJJobByUserId() {
    this.dashboardService().countTop7ApplyJobCareerByUserId().then(
      res => {
          if (res.error !== 'ERROR') {
            this.top7JobByUserId = res.data.data;
          }
      }
    );
  }

  public countAJCareer() {
    this.dashboardService().countApplyJobCareer().then(
      res => {
          const dataInput = [];
          const labelsInput = [];
          const colorInput = [];
          res.data.data.forEach(element => {
            labelsInput.push(element.title);
            dataInput.push(element.number);
            colorInput.push('#' + Math.floor(Math.random() * 16777215).toString(16));
          });
          this.dataCareer.data = dataInput;
          this.dataCareer.labels = labelsInput;
          this.dataCareer.colors = colorInput;
          this.loadedCareer = true;
      }
    );
  }

  public countAJCareerByUserId() {
    this.dashboardService().countApplyJobCareerByUserId().then(
      res => {
          const dataInput = [];
          const labelsInput = [];
          const colorInput = [];
          res.data.data.forEach(element => {
            console.log(element)
            labelsInput.push(element.title);
            dataInput.push(element.number);
            colorInput.push('#' + Math.floor(Math.random() * 16777215).toString(16));
          });
          this.dataCareerByUserId.data = dataInput;
          this.dataCareerByUserId.labels = labelsInput;
          this.dataCareerByUserId.colors = colorInput;
          this.loadedCareerUser = true;
      }
    );
  }

  public countApplyJobMonthOfYear() {
    this.dashboardService().countApplyJobMonthOfYear().then(
      res => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
        ];
          this.dataMonthOfYear.labels = monthNames;
          this.dataMonthOfYear.data = res.data.data;
          this.year = new Date().getFullYear();
          this.loadedMonth = true;
      }
    );
  }

  public countApplyJobMonthOfYearByUserId() {
    this.dashboardService().countApplyJobMonthOfYearByUserId().then(
      res => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
        ];
          this.dataMonthOfYearByUserId.labels = monthNames;
          this.dataMonthOfYearByUserId.data = res.data.data;
          this.year = new Date().getFullYear();
          this.loadedMonthUser = true;
      }
    );
  }

  public countPassFail() {
    this.dashboardService().countJobPassFail().then(
      res => {
          this.dataPassFail.data = [res.data.data.pass, res.data.data.fail];
          this.loaded = true;
      }
    );
  }

  public countPassFailByUserId() {
    this.dashboardService().countJobPassFailByUserId().then(
      res => {
          this.dataPassFailUserId.data = [res.data.data.passuser, res.data.data.failuser];
          this.loadedUser = true;
      }
    );
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

  public loadAllInterview() {
    this.applyLst = [];
    const query = {
      page: this.page - 1,
      pageSize: this.itemsPerPage,
    };
    if (this.keyword) {
      query['keyword'] = this.keyword;
    }
    this.applyService()
      .getApplyJob2(query)
      .then(res => {
        if (res && res.data) {
          this.applyLst = res.data.data.content;
          this.totalInterview = Number(res.data.data.totalElements);
          this.queryCount = this.totalInterview;
        }
      });
  }

  public loadAllJob() {
    this.jobs = [];
    let query = {
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
          this.totalJob = Number(res.data.data.totalElements);
          this.queryCount = this.totalJob;
        }
      });
  }

  public loadAllUser(): void {
    this.userManagementService()
      .retrieve({
        page: this.page,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .then(res => {
        this.users = res.data;
        this.totalUser = Number(res.headers['x-total-count']);
        this.queryCount = this.totalUser;
      });
  }

  public loadAllCandidate() {
    this.applyLst = [];
    let query = {
      page: this.page - 1,
      pageSize: this.itemsPerPage,
    };
    if (this.keyword) {
      query['keyword'] = this.keyword;
    }
    this.applyService()
      .getApplyJob(query)
      .then(res => {
        if (res && res.data) {
          this.applyLst = res.data.data.content;
          this.totalCandidate = Number(res.data.data.totalElements);
          this.queryCount = this.totalCandidate;
        }
      });
  }

  public loadAllTest() {
    this.tests = [];
    let query = {
      page: this.page - 1,
      size: this.itemsPerPage,
    };
    if (this.keyword) {
      query['keyword'] = this.keyword;
    }
    this.testService()
      .getAll(query)
      .then(res => {
        if (res && res.data) {
          this.tests = res.data.data.content;
          this.totalTest = Number(res.data.data.totalElements);
          this.queryCount = this.totalTest;
        }
      });
  }

  public loadAllPost(): void {
    this.postManagementService()
      .retrieve({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .then(res => {
        this.posts = res.data;
        this.totalPost = Number(res.headers['x-total-count']);
        this.queryCount = this.totalPost;
      });
  }

  public sort(): any {
    const result = [this.propOrder + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.propOrder !== 'id') {
      result.push('id');
    }
    return result;
  }

}
