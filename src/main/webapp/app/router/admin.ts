import { Authority } from '@/shared/security/authority';
import AdminLayout from '@/core/admin/index.vue';
const UserManagementComponent = () => import('@/admin/user-management/user-management.vue');
const AdminProfileComponent = () => import('@/admin/admin-profile/admin-profile.vue');
const UserManagementViewComponent = () => import('@/admin/user-management/user-management-view.vue');
const UserManagementEditComponent = () => import('@/admin/user-management/user-management-edit.vue');
const JhiConfigurationComponent = () => import('@/admin/configuration/configuration.vue');
const CompanyEditComponent = () => import('@/admin/company/company-edit.vue');
const TestManagementComponent = () => import('@/admin/test-management/test-management.vue');
const TestManagementEditComponent = () => import('@/admin/test-management/test-management-edit.vue');
const JhiDocsComponent = () => import('@/admin/docs/docs.vue');
const JhiHealthComponent = () => import('@/admin/health/health.vue');
const JhiLogsComponent = () => import('@/admin/logs/logs.vue');
const JhiAuditsComponent = () => import('@/admin/audits/audits.vue');
const JhiMetricsComponent = () => import('@/admin/metrics/metrics.vue');
const DashboardComponent = () => import('@/admin/dashboard/dashboard.vue');
const AdminLoginComponent = () => import('@/admin/login/login.vue');
const AdminRegisterComponent = () => import('@/admin/register/register.vue');
const AdminForgotPasswordComponent = () => import('@/admin/forgot-password/forgot-password.vue');
const JobManagementComponent = () => import('@/admin/job-management/job-management.vue');
const JobManagementEditComponent = () => import('@/admin/job-management/job-management-edit.vue');
const ApplyManagementComponent = () => import('@/admin/apply-management/apply-management.vue');
const CategoryManagementComponent = () => import('@/admin/category-management/category-management.vue');
const PostManagementComponent = () => import('@/admin/post-management/post-management.vue');
const PostManagementEditComponent = () => import('@/admin/post-management/post-management-edit.vue');
const PostManagementViewComponent = () => import('@/admin/post-management/post-management-view.vue');
const InterviewCalendarComponent = () => import('@/admin/interview-calendar/interview-calendar.vue');
export default [
  {
    path: '/admin',
    component: AdminLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        meta: { authorities: [Authority.EMPLOYER, Authority.ADMIN] },
      },
      {
        path: '/admin/thong-tin-ca-nhan',
        name: 'AdminProfile',
        component: AdminProfileComponent,
        meta: { authorities: [Authority.EMPLOYER, Authority.ADMIN] },
      },
      {
        path: '/admin/quan-ly-viec-lam',
        name: 'JobManagement',
        component: JobManagementComponent,
        meta: { authorities: [Authority.EMPLOYER, Authority.ADMIN] },
      },
      {
        path: '/admin/quan-ly-viec-lam/them-moi',
        name: 'JobNewManagement',
        component: JobManagementEditComponent,
        meta: { authorities: [Authority.EMPLOYER] },
      },
      {
        path: '/admin/quan-ly-viec-lam/:jobId/cap-nhat',
        name: 'JobEditManagement',
        component: JobManagementEditComponent,
        meta: { authorities: [Authority.EMPLOYER] },
      },
      {
        path: '/admin/quan-ly-bai-kiem-tra',
        name: 'TestManagement',
        component: TestManagementComponent,
        meta: { authorities: [Authority.EMPLOYER] },
      },
      {
        path: '/admin/quan-ly-bai-kiem-tra/them-moi',
        name: 'TestCreate',
        component: TestManagementEditComponent,
        meta: { authorities: [Authority.EMPLOYER] },
      },
      {
        path: '/admin/quan-ly-bai-kiem-tra/:testId/cap-nhat',
        name: 'TestUpdate',
        component: TestManagementEditComponent,
        meta: { authorities: [Authority.EMPLOYER] },
      },
      {
        path: '/admin/quan-ly-ung-tuyen',
        name: 'ApplyManagementComponent',
        component: ApplyManagementComponent,
        meta: { authorities: [Authority.EMPLOYER] },
      },
      {
        path: '/admin/quan-ly-nguoi-dung',
        name: 'UserManagement',
        component: UserManagementComponent,
        meta: { authorities: [Authority.ADMIN] },
      },
      /*      {
        path: '/admin/quan-ly-nguoi-dung/them-moi',
        name: 'UserCreate',
        component: UserManagementEditComponent,
        meta: { authorities: [Authority.ADMIN] },
      },
      {
        path: '/admin/quan-ly-nguoi-dung/:userId/cap-nhat',
        name: 'UserEdit',
        component: UserManagementEditComponent,
        meta: { authorities: [Authority.ADMIN] },
      },*/
      {
        path: '/admin/quan-ly-nguoi-dung/:userId/chi-tiet',
        name: 'UserView',
        component: UserManagementViewComponent,
        meta: { authorities: [Authority.ADMIN] },
      },
      {
        path: '/admin/quan-ly-danh-muc',
        name: 'CategoryManagement',
        component: CategoryManagementComponent,
        meta: { authorities: [Authority.ADMIN] },
      },
      {
        path: '/admin/quan-ly-bai-viet',
        name: 'PostManagement',
        component: PostManagementComponent,
        meta: { authorities: [Authority.ADMIN] },
      },
      {
        path: '/admin/quan-ly-bai-viet/them-moi',
        name: 'PostCreate',
        component: PostManagementEditComponent,
        meta: { authorities: [Authority.ADMIN] },
      },
      {
        path: '/admin/quan-ly-bai-viet/:postId/cap-nhat',
        name: 'PostEdit',
        component: PostManagementEditComponent,
        meta: { authorities: [Authority.ADMIN] },
      },
      {
        path: '/admin/quan-ly-bai-viet/:postId/chi-tiet',
        name: 'PostView',
        component: PostManagementViewComponent,
        meta: { authorities: [Authority.ADMIN] },
      },

      {
        path: '/admin/thong-tin-cong-ty',
        name: 'CompanyDetail',
        component: CompanyEditComponent,
        meta: { authorities: [Authority.EMPLOYER] },
      },
      {
        path: '/admin/quan-ly-lich-phong-van',
        name: 'InterviewCalendar',
        component: InterviewCalendarComponent,
        meta: { authorities: [Authority.EMPLOYER, Authority.ADMIN] },
      },
    ],
  },
  {
    path: '/admin/dang-nhap',
    name: 'AdminLogin',
    component: AdminLoginComponent,
  },
  {
    path: '/admin/dang-ky',
    name: 'AdminRegister',
    component: AdminRegisterComponent,
  },
  {
    path: '/admin/quen-mat-khau',
    name: 'AdminForgotPassword',
    component: AdminForgotPasswordComponent,
  },
  {
    path: '/admin/docs',
    name: 'JhiDocsComponent',
    component: JhiDocsComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
];
