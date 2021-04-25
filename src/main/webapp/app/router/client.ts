import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore

// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

const LoginClient = () => import('@/client/login/login.vue');
const JobList = () => import('@/client/job-list/job-list.vue');
const JobDetail = () => import('@/client/job-detail/job-detail.vue');
const ProfileClient = () => import('@/client/profile/profile.vue');
const ForgotPasswordClient = () => import('@/client/forgot-password/forgot-password.vue');
const RegisterClient = () => import('@/client/register/register.vue');
const TakeQuizComponent = () => import('@/client/take-quiz/take-quiz.vue');
const BlogClient = () => import('@/client/blog/blog-list.vue');
const BlogDetailClient = () => import('@/client/blog/blog-detail.vue');
const ResetPasswordFinish = () => import('@/client/forgot-password/reset-password-finish.vue');
const Activate = () => import('@/account/activate/activate.vue');
export default [
  {
    path: '/dang-nhap',
    name: 'LoginClient',
    component: LoginClient,
    meta: {},
  },
  {
    path: '/kiem-tra/:tokenId',
    name: 'TakeQuiz',
    component: TakeQuizComponent,
    meta: {
      authorities: [Authority.USER],
    },
  },
  {
    path: '/danh-sach-viec-lam',
    name: 'JobList',
    component: JobList,
    meta: {},
  },
  {
    path: '/chi-tiet-viec-lam/:jobId',
    name: 'JobDetail',
    component: JobDetail,
    meta: {},
  },
  {
    path: '/trang-ca-nhan',
    name: 'ProfileClient',
    component: ProfileClient,
    meta: {
      authorities: [Authority.USER],
    },
  },
  {
    path: '/quen-mat-khau',
    name: 'ForgotPassword',
    component: ForgotPasswordClient,
    meta: {},
  },
  {
    path: '/dang-ky-tai-khoan',
    name: 'RegisterClient',
    component: RegisterClient,
    meta: {},
  },
  {
    path: '/bai-viet',
    name: 'Blog',
    component: BlogClient,
    meta: {},
  },
  {
    path: '/bai-viet/:slug',
    name: 'BlogDetail',
    component: BlogDetailClient,
    meta: {},
  },
  {
    path: '/khoi-phuc-mat-khau',
    name: 'ResetPasswordFinish',
    component: ResetPasswordFinish,
  },
  {
    path: '/kich-hoat-tai-khoan',
    name: 'Activate',
    component: Activate,
  },
];
