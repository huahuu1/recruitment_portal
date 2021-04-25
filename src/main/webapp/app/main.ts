// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.common with an alias.
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// @ts-ignore
import Notifications from 'vue-notification';
import App from './app.vue';
import Vue2Filters from 'vue2-filters';
import router from './router';
import * as config from './shared/config/config';
import * as bootstrapVueConfig from './shared/config/config-bootstrap-vue';
import JhiItemCountComponent from './shared/jhi-item-count.vue';
import JhiSortIndicatorComponent from './shared/sort/jhi-sort-indicator.vue';
import InfiniteLoading from 'vue-infinite-loading';
import AuditsService from './admin/audits/audits.service';

import HealthService from './admin/health/health.service';
import MetricsService from './admin/metrics/metrics.service';
import LogsService from './admin/logs/logs.service';
import ActivateService from './account/activate/activate.service';
import RegisterService from './client/register/register.service';
import UserManagementService from '@/admin/user-management/user-management.service';
import CategoryManagementService from '@/admin/category-management/category-management.service';
import LoginService from './account/login.service';
import AccountService from './account/account.service';
import DashboardService from '@/admin/dashboard/dashboard.service';
import '../content/scss/vendor.scss';
import AlertService from '@/shared/alert/alert.service';
import TranslationService from '@/locale/translation.service';
import ConfigurationService from '@/admin/configuration/configuration.service';
import JobService from '@/client/job-list/job.service';
import ProfileService from '@/client/profile/profile.service';
import CommonService from '@/shared/common/common.service';
import { VueEditor } from 'vue2-editor';
import vSelect from 'vue-select';
import CompanyService from '@/admin/company/company.service';
import ApplyService from '@/admin/apply-management/apply.service';
import TestService from '@/admin/test-management/test.service';
import PostService from '@/admin/post-management/post-management.service';
import TakeQuizService from '@/client/take-quiz/take-quiz.service';
import HomeService from '@/core/home/home.service';
import BlogService from '@/client/blog/blog.service';
// @ts-ignore
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
/* tslint:disable */

// jhipster-needle-add-entity-service-to-main-import - JHipster will import entities services here

/* tslint:enable */
Vue.config.productionTip = false;
Vue.config.silent = true;

config.initVueApp(Vue);
config.initFortAwesome(Vue);
bootstrapVueConfig.initBootstrapVue(Vue);
Vue.use(Vue2Filters);
Vue.use(Notifications);
Vue.use(VueToast);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('jhi-item-count', JhiItemCountComponent);
Vue.component('vue-editor', VueEditor);
Vue.component('jhi-sort-indicator', JhiSortIndicatorComponent);
Vue.component('infinite-loading', InfiniteLoading);
Vue.component('v-select', vSelect);
const i18n = config.initI18N(Vue);
const store = config.initVueXStore(Vue);

const alertService = new AlertService(store);
const translationService = new TranslationService(store, i18n);
const loginService = new LoginService();
const accountService = new AccountService(store, translationService, router);

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/not-found');
  }

  if (to.meta && to.meta.authorities && to.meta.authorities.length > 0) {
    accountService.hasAnyAuthorityAndCheckAuth(to.meta.authorities).then(value => {
      if (!value) {
        sessionStorage.setItem('requested-url', to.fullPath);
        if (to.fullPath.indexOf('/admin/') > -1) {
          next('/admin/dang-nhap');
        } else next('/dang-nhap');
      } else {
        next();
      }
    });
  } else {
    // no authorities, so just proceed
    next();
  }
});

/* tslint:disable */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  provide: {
    loginService: () => loginService,
    activateService: () => new ActivateService(),
    registerService: () => new RegisterService(),
    userService: () => new UserManagementService(),
    categoryService: () => new CategoryManagementService(),
    jobService: () => new JobService(),
    profileService: () => new ProfileService(),
    commonService: () => new CommonService(),
    companyService: () => new CompanyService(),
    applyService: () => new ApplyService(),
    testService: () => new TestService(),
    postService: () => new PostService(),
    blogService: () => new BlogService(),
    takeQuizService: () => new TakeQuizService(),
    homeService: () => new HomeService(),
    auditsService: () => new AuditsService(),
    dashboardService:() => new DashboardService(),
    healthService: () => new HealthService(),

    configurationService: () => new ConfigurationService(),
    logsService: () => new LogsService(),
    metricsService: () => new MetricsService(),
    alertService: () => alertService,
    translationService: () => translationService,
    // jhipster-needle-add-entity-service-to-main - JHipster will import entities services here
    accountService: () => accountService,
  },
  i18n,
  store,
});
