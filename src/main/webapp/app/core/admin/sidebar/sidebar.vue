<template>
    <aside class="main-sidebar" style="font-size:1.1rem;">
        <!-- sidebar-->
        <section class="sidebar">
            <div class="user-profile px-20 pt-15 pb-10">
                <div class="d-flex align-items-center">
                    <div class="image">
                        <img v-if="!imageUrl" alt="User Image" class="avatar avatar-lg bg-primary-light rounded100"
                             src="content/images/avatar/avatar-13.png">
                         <img v-else alt="User Image" class="avatar avatar-lg bg-primary-light rounded100" style="border-radius:50%"
                             :src="loadImage()">
                    </div>
                    <div class="info">
                        <a class="dropdown-toggle px-20 text-uppercase" data-toggle="dropdown"
                           href="#">{{ username ? username : '' }}</a>
                        <div class="dropdown-menu">
                            <router-link :to="'/admin/thong-tin-ca-nhan'" class="dropdown-item">
                                <i class="ti-user"></i> Personal information
                            </router-link>
                            <router-link :to="'/admin/thong-tin-cong-ty'" class="dropdown-item" v-if="hasRole(EMPLOYER)">
                                <i class="ti-user"></i> Company information
                            </router-link>
                            <a @click="logout()" class="dropdown-item"><i class="ti-email"></i> Sign out</a>
                            <!-- <a class="dropdown-item" href="#"><i class="ti-link"></i> Connections</a>
                            <div class="dropdown-divider"></div> -->
                           <!--  <a class="dropdown-item" href="#"><i class="ti-settings"></i> Settings</a>-->
                        </div>
                    </div>
                </div>
                <ul class="list-inline profile-setting mt-20 mb-0 d-flex justify-content-between">
                    <li><a data-placement="top" data-toggle="tooltip" href="#" title="Search"><i
                        data-feather="search"></i></a></li>
                    <li><a data-placement="top" data-toggle="tooltip" href="#" title="Notification"><i
                        data-feather="bell"></i></a></li>
                    <li><a data-placement="top" data-toggle="tooltip" href="#" title="Chat"><i
                        data-feather="message-square"></i></a></li>
                    <li><a data-placement="top" data-toggle="tooltip" href="#" title="Logout"><i
                        data-feather="log-out"></i></a></li>
                </ul>
            </div>
            <!-- sidebar menu-->
            <ul class="sidebar-menu" data-widget="tree">
                <li>
                    <router-link :active-class="'active-menu'" to="/admin/dashboard">
                        <i class="icon-Layout-4-blocks"><span class="path1"></span><span class="path2"></span></i>
                        <span>Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link :active-class="'active-menu'" to="/admin/quan-ly-viec-lam">
                        <i class="icon-Briefcase"><span class="path1"></span><span class="path2"></span></i>
                        <span>Job management</span>
                    </router-link>
                </li>
                <li>
                    <router-link v-if="hasRole(EMPLOYER)" :active-class="'active-menu'" to="/admin/quan-ly-ung-tuyen">
                        <i class="icon-File"><span class="path1"></span><span class="path2"></span><span
                            class="path3"></span></i>
                        <span>Application management</span>
                    </router-link>
                </li>
                 <li>
                    <router-link v-if="hasRole(EMPLOYER)" :active-class="'active-menu'" to="/admin/quan-ly-lich-phong-van">
                        <i class="icon-File"><span class="path1"></span><span class="path2"></span><span
                            class="path3"></span></i>
                        <span>Interview schedule</span>
                    </router-link>
                </li>
                <li v-if="hasRole(ADMIN)">
                    <router-link :active-class="'active-menu'" to="/admin/quan-ly-nguoi-dung">
                        <i class="icon-Add-user"><span class="path1"></span><span class="path2"></span></i>
                        <span>User management</span>
                    </router-link>
                </li>

                <li>
                    <router-link v-if="hasRole(EMPLOYER)" :active-class="'active-menu'" to="/admin/quan-ly-bai-kiem-tra">
                        <i class="icon-Credit-card"><span class="path1"></span><span class="path2"></span><span
                            class="path3"></span></i>
                        <span>Test management</span>
                    </router-link>
                </li>
                <li v-if="hasRole(ADMIN)">
                    <router-link :active-class="'active-menu'" to="/admin/quan-ly-bai-viet">
                        <i class="icon-Write"><span class="path1"></span><span class="path2"></span></i>
                        <span>List of post</span>
                    </router-link>
                </li>
                <!-- <li v-if="hasRole(ADMIN)">
                    <router-link :active-class="'active-menu'" to="/admin/quan-ly-danh-muc">
                        <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>
                        <span>Category management</span>
                    </router-link>
                </li> -->
            </ul>
        </section>
    </aside>
</template>

<script lang="ts" src="./sidebar.component.ts">
</script>

<style scoped>
.active-menu i, .active-menu span {
    color: white !important;
}
.sidebar-menu > li {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.sidebar-menu > li > a {
    padding-left: 25px !important;
    padding-right: 25px !important;
}
.sidebar-menu > li > a.active-menu {
    background-color: #cccccc4f !important;
}
</style>
