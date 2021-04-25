import { loadImage } from '@/shared/common/util';
import HomeService from '@/core/home/home.service';
import Component from 'vue-class-component';
import { Inject, Vue } from 'vue-property-decorator';
import LoginService from '@/account/login.service';
import CommonService from '@/shared/common/common.service';

@Component
export default class Home extends Vue {
  @Inject('homeService') private homeService: () => HomeService;

  @Inject('loginService')
  private loginService: () => LoginService;

  @Inject('commonService')
  private commonService: () => CommonService;
  public jobOpportunity: any[] = [];
  public jobHot: any[] = [];
  public jobLastest: any[] = [];
  public postLastest: any[] = [];
  public provinceLst: any[] = [];
  public careerWithJobCount: any[] = [];
  public countProvince: any[] = [];
  public keyword: String = '';
  public location: String = '';

  public mounted() {
    this.loadProvince();
  }

  created() {
    this.loadJobOpportunity();
    this.loadCareerWithJobCount();
    this.loadJobHot();
    this.loadCountProvince();
    this.loadPostLastest();
  }
  loadJobOpportunity() {
    this.homeService()
      .getSixJobOpportunity()
      .then(res => {
        this.jobOpportunity = res.data.data;
      });
  }

  loadCareerWithJobCount() {
    this.homeService()
      .getCareerWithJobCount()
      .then(res => {
        this.careerWithJobCount = res.data.data;
      });
  }
  loadCountProvince() {
    this.homeService()
      .getCountProvince()
      .then(res => {
        this.countProvince = res.data.data;
      });
  }
  randomClassTagi() {
    // tslint:disable-next-line:max-line-length
    const array = [
      'flaticon-bars',
      'flaticon-interview',
      'flaticon-antenna',
      'flaticon-customer-support',
      'flaticon-care',
      'flaticon-work',
      'flaticon-support',
      'flaticon-company',
    ];
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  randomBackground() {
    // tslint:disable-next-line:max-line-length
    const array = ['austin.jpg', 'atlanta.jpg', 'boston.jpg', 'chicago.jpg', 'losangeles.jpg', 'newyork.jpg', 'tampa.jpg'];
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  public loadProvince() {
    this.provinceLst = [];
    this.commonService()
      .getAllProvince()
      .then(res => {
        if (res && res.data && res.data.errorCode === 'SUCCESS') {
          this.provinceLst = res.data.data;
        }
      });
  }
  public search() {
    if (!this.keyword && !this.location) {
      this.$router.push('/danh-sach-viec-lam');
      return;
    }
    let query = {};
    if (this.keyword && this.keyword.trim()) {
      query['keyword'] = this.keyword;
    }
    if (this.location && this.location.trim()) {
      query['location'] = this.location;
    }
    this.$router.push({ name: 'JobList', query: query });
  }

  public clickCareer(careerId) {
    let query = {};
    query['career'] = careerId;
    this.$router.push({ name: 'JobList', query: query });
  }
  public clickLocation(locationId) {
    let query = {};
    query['location'] = locationId;
    this.$router.push({ name: 'JobList', query: query });
  }

  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }
  loadJobHot() {
    this.homeService()
      .getHotJob()
      .then(res => {
        this.jobHot = res.data.data;
      });
  }
  loadJobLastest() {
    this.homeService()
      .getLastestJob()
      .then(res => {
        this.jobLastest = res.data.data;
      });
  }
  loadPostLastest() {
    this.homeService()
      .getLastestPost()
      .then(res => {
        this.postLastest = res.data.data;
      });
  }
  loadImage(url) {
    return loadImage(url);
  }
}
