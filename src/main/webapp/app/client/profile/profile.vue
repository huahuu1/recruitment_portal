<template>
    <div>
        <!---page Title --->
        <section class="bg-img pt-150 pb-20" data-overlay="7"
                 style="background-image: url(content/images/front-end-img/background/bg-8.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center">
                            <h2 class="page-title text-white">Personal page</h2>
                            <ol class="breadcrumb bg-transparent justify-content-center">
                                <li class="breadcrumb-item">
                                  <router-link :active-class="'text-white-50'" to="/">
                                    <i class="mdi mdi-home-outline"></i>
                                  </router-link>
                                </li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Personal page</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Page content -->

        <section class="py-50">
            <div class="container" v-if="profile">
                <div class="row" v-if="profile.user">
                    <div class="col-lg-3 col-md-4 col-12">
                        <div class="position-sticky t-100">
                            <div class="box box-widget widget-user-2">
                                <div class="widget-user-header bg-secondary-light">
                                    <input type="file" ref="files1" @change="handleAvatarUpload" style="display: none" id="avatarFile">
                                    <div class="widget-user-image">
                                        <img width="65" height="65" v-if="profile.user.imageUrl" class="rounded-circle bg-danger" :src="profile.user.imageUrl"
                                             alt="User Avatar">
                                        <img v-else class="rounded-circle bg-danger" src="content/images/avatar/avatar-1.png"
                                             alt="User Avatar">

                                    </div>
                                    <h3 class="widget-user-username">{{ fullName?fullName:'Not update' }} </h3>
                                    <h6 class="widget-user-desc">
                                        {{ profile.user.activated ? 'Active' : 'Deactive' }}
                                    </h6>
                                    <h5 class="upload-avatar">
                                        <label for="avatarFile">
                                            <i class="fa fa-upload"></i> Upload
                                        </label>
                                    </h5>
                                </div>
                                <div class="box-footer no-padding">
                                    <ul class="nav d-block nav-stacked font-size-16" id="pills-tab23" role="tablist">
                                        <li class="nav-item bb-1">
                                            <a class="py-10 nav-link active" id="pills-edit-tab" data-toggle="pill"
                                               href="#pills-edit" role="tab" aria-controls="pills-edit"
                                               aria-selected="true">
                                                <span class="mr-10 icon-Edit"><span class="path1"></span><span
                                                    class="path2"></span></span>Update information
                                            </a>
                                        </li>
                                        <li class="nav-item bb-1">
                                            <a @click="loadApplyJob" class="py-10 nav-link" id="pills-payments-tab" style="padding-right:0 !important"
                                               data-toggle="pill" href="#pills-payments" role="tab"
                                               aria-controls="pills-payments" aria-selected="true">
                                                <span class="mr-10 icon-Code1"><span class="path1"></span><span
                                                    class="path2"></span></span>Personal job management
                                            </a>
                                        </li>
                                        <!-- <li class="nav-item bb-1">
                                            <a class="py-10 nav-link" id="pills-calendar-tab" data-toggle="pill" href="#pills-calendar" role="tab" aria-controls="pills-calendar" aria-selected="true">
                                                <span class="mr-10 icon-Layout-grid"><span class="path1"></span><span class="path2"></span></span>Calendar
                                            </a>
                                        </li> -->
                                        <li class="nav-item">
                                            <a class="py-10 nav-link" @click="logout()">
                                                <span class="mr-10 icon-Unlock"></span>Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <!--<div class="box">
                                <div class="box-body">
                                    <div class="flexbox align-items-baseline mb-20">
                                      <h6 class="text-uppercase ls-2">Group</h6>
                                      <small>20</small>
                                    </div>
                                    <div class="gap-items-2 gap-y">
                                      <a class="avatar" href="#"><img src="content/images/avatar/1.jpg" alt="..."></a>
                                      <a class="avatar" href="#"><img src="content/images/avatar/3.jpg" alt="..."></a>
                                      <a class="avatar" href="#"><img src="content/images/avatar/4.jpg" alt="..."></a>
                                      <a class="avatar" href="#"><img src="content/images/avatar/5.jpg" alt="..."></a>
                                      <a class="avatar avatar-more" href="#">+15</a>
                                    </div>
                                </div>
                                <div class="box-footer">
                                    <a class="text-uppercase d-blockls-1 text-fade" href="#">Invite People</a>
                                </div>
                            </div>-->
                        </div>
                    </div>

                    <div class="col-lg-9 col-md-8 col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="tab-content" id="pills-tabContent23">
                                    <div class="tab-pane fade show active" id="pills-edit" role="tabpanel"
                                         aria-labelledby="pills-edit-tab">
                                        <div class="row">
                                            <div class="col-12">
                                                <form class="form">
                                                    <div>
                                                        <h4 class="box-title text-primary"><i class="ti-user mr-15"></i>
                                                            Personal information</h4>
                                                        <hr class="my-15">
                                                        <div class="row">
                                                            <div class="col-md-6">

                                                                <div class="form-group">
                                                                    <label class="required">Firstname</label>
                                                                    <input type="text" class="form-control"
                                                                           placeholder="First Name"
                                                                           v-model="profile.user.firstName">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="required">Last Name</label>
                                                                    <input type="text" class="form-control"
                                                                           placeholder="Last Name"
                                                                           v-model="profile.user.lastName">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="required">Email</label>
                                                                    <input type="email" class="form-control"
                                                                           placeholder="Email"
                                                                           v-model="profile.user.email">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label>Username</label>
                                                                    <input disabled type="text" class="form-control"
                                                                           placeholder="Username"
                                                                           v-model="profile.user.login">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label>Birthday</label>
                                                                    <input onkeydown="return false" type="date" class="form-control"
                                                                           placeholder="Email"
                                                                           v-model="profile.user.birthday ">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="gender">Gender</label>
                                                                    <select id="gender" class="form-control" v-model="profile.user.gender">
                                                                        <option :value="1">Male</option>
                                                                        <option :value="2">Female</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h4 class="box-title text-primary mt-30"><i
                                                            class="ti-envelope mr-15"></i> Practical experience</h4>
                                                        <hr class="my-15">
                                                        <div class="form-group">
                                                            <label>Skill</label>
                                                            <input class="form-control" type="text"
                                                                   placeholder="Skill" v-model="profile.skill">
                                                        </div>
                                                        <div class="form-group" v-if="experience">
                                                            <label for="experience">Years of experience</label>
                                                            <select class="form-control" id="experience"
                                                                    name="experience" v-model="profile.experience">
                                                                <option :value="null">--Choose--</option>
                                                                <option v-for="(e, key) in experience" :value="e.id"
                                                                        :key="key">{{ e.name }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Desired job</label>
                                                            <input class="form-control" type="tel" placeholder=""
                                                                   v-model="profile.jobExpect">
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Interests</label>
                                                            <input class="form-control" type="text" placeholder=""
                                                                   v-model="profile.interests">
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Additional description</label>
                                                            <textarea rows="4" class="form-control"
                                                                      placeholder="description"
                                                                      v-model="profile.description"></textarea>
                                                        </div>


                                                        <div class="form-group" v-if="qualification">
                                                            <label for="qualification">Qualification</label>
                                                            <select class="form-control" id="qualification"
                                                                    name="qualification"
                                                                    v-model="profile.qualification">
                                                                <option :value="null">--Choose--</option>
                                                                <option v-for="(q, key) in qualification" :value="q.id"
                                                                        :key="key">{{ q.name }}
                                                                </option>
                                                            </select>
                                                        </div>

                                                        <div class="form-group" v-if="englishSkill">
                                                            <label for="englishSkill">English level</label>
                                                            <select class="form-control" id="englishSkill"
                                                                    name="englishSkill" v-model="profile.englishSkill">
                                                                <option :value="null">--Choose--</option>
                                                                <option v-for="(e, key) in englishSkill" :value="e.id"
                                                                        :key="key">{{ e.name }}
                                                                </option>
                                                            </select>
                                                        </div>


                                                        <div class="form-group" v-if="jobType">
                                                            <label for="jobType">Job type</label>
                                                            <select class="form-control" id="jobType" name="jobType"
                                                                    v-model="profile.jobType">
                                                                <option :value="null">--Choose--</option>
                                                                <option v-for="(j, key) in jobType" :value="j.id"
                                                                        :key="key">{{ j.name }}
                                                                </option>
                                                            </select>
                                                        </div>


                                                        <div class="form-group" v-if="salaryExpect">
                                                            <label for="salaryExpect">Desired salary</label>
                                                            <select class="form-control" id="salaryExpect"
                                                                    name="salaryExpect" v-model="profile.salaryExpect">
                                                                <option :value="null">--Choose--</option>
                                                                <option v-for="(s, key) in salaryExpect" :value="s.id"
                                                                        :key="key">{{ s.name }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="exampleFormControlFile1">Upload cv
                                                                <a v-if="profile.cv" href="javascript:void(0)" @click="viewCV(profile.cv.id)"> <span
                                                                    class="badge bg-primary text-white">{{ profile.cv.title }}</span></a>
                                                            </label>
                                                            <input ref="files" type="file" class="form-control-file"
                                                                   id="exampleFormControlFile1"
                                                                   v-on:change="handleFilesUpload()">
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-end gap-items-2">
                                                        <button type="button" @click="save" class="btn btn-success">
                                                            <i class="ti-save-alt"></i> Save changes
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-payments" role="tabpanel"
                                         aria-labelledby="pills-payments-tab">
                                        <h4 class="box-title mb-0">
                                            Job list to apply
                                        </h4>
                                        <hr>
                                        <div class="table-responsive mt-30">
                                            <table class="table table-striped">
                                                <thead>
                                                <tr class="bg-dark text-center">
                                                    <th>No.</th>
                                                    <th>Apply date</th>
                                                    <th>Company</th>
                                                    <th>CV</th>
                                                    <th>Total questions</th>
                                                    <th>Total correct questions</th>
                                                    <th>Interview schedule</th>
                                                    <th>Status</th>
                                                </tr>
                                                </thead>
                                                <tbody v-if="applyJob">
                                                <tr v-for="(a, index) in applyJob" :key="index">
                                                    <td class="text-center">{{ index + 1 }}</td>
                                                    <td>{{ a.applyDate  | formatDate }}</td>
                                                    <td class="text-center">{{ a.jobDTO.company ? a.jobDTO.company.name : '' }}</td>
                                                    <td>

                                                        <b-button v-if="a.cv" v-on:click="viewCV(a.cv.id)" class="btn btn-xs btn-warning">
                                                            <font-awesome-icon icon="eye"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">{{ a.cv.title }}</span>
                                                        </b-button>
                                                    </td>
                                                    <td class="text-center">{{ a.totalQuestion ? a.totalQuestion : 0 }}</td>
                                                    <td class="text-center">{{ a.totalCorrectAnswer ? a.totalCorrectAnswer : 0 }}</td>
                                                    <td class="text-center">
                                                        <b-button class="label btn-primary label-xs" v-if="a.status === 3" v-b-popover.click.blur.html="'<strong>Interview time: </strong>'+convertTime(a.applyJobInterview.interviewTime) + ' ' + formatDateInterview(a.applyJobInterview.interviewTime) + '<hr> <strong>Location: </strong>'+a.applyJobInterview.address+'<hr> <strong>Interviewer: </strong>' + (a.applyJobInterview.interviewer?a.applyJobInterview.interviewer:'Not update') + '<hr><strong>Appointment person: </strong>'+(a.applyJobInterview.user.firstName?a.applyJobInterview.user.firstName:'') + ' ' + (a.applyJobInterview.user.lastName?a.applyJobInterview.user.lastName:'') " title="Interview schedule">Interview</b-button>
                                                        <span v-else>-</span>
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-primary btn-xs" v-if="a.status === 1">New application</button>
                                                        <button class="btn btn-success btn-xs" v-if="a.status === 2">Contact interview</button>
                                                        <button class="btn btn-info btn-xs" v-if="a.status === 3">Waiting for interview</button>
                                                        <button class="btn btn-warning btn-xs" v-if="a.status === 4">Wait for the results of the interview</button>
                                                        <button class="btn btn-success btn-xs" v-if="a.status === 5">Pass</button>
                                                        <button class="btn btn-danger btn-xs" v-if="a.status === 6">Fail</button>
                                                    </td>

                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-calendar" role="tabpanel"
                                         aria-labelledby="pills-calendar-tab">
                                        <h4 class="box-title mb-0">
                                            Calendar
                                        </h4>
                                        <hr>
                                        <div class="row">
                                            <div class="col-12">
                                                <div id="calendar"></div>
                                            </div>
                                            <div class="col-12">
                                                <div class="box no-border no-shadow">
                                                    <div class="box-header with-border">
                                                        <h4 class="box-title">Draggable Events</h4>
                                                    </div>
                                                    <div class="box-body p-0">
                                                        <!-- the events -->
                                                        <div id="external-events">
                                                            <div class="external-event m-15 bg-primary"
                                                                 data-class="bg-primary"><i
                                                                class="fa fa-hand-o-right"></i>Lunch
                                                            </div>
                                                            <div class="external-event m-15 bg-warning"
                                                                 data-class="bg-warning"><i
                                                                class="fa fa-hand-o-right"></i>Go home
                                                            </div>
                                                            <div class="external-event m-15 bg-info"
                                                                 data-class="bg-info"><i class="fa fa-hand-o-right"></i>Do
                                                                homework
                                                            </div>
                                                            <div class="external-event m-15 bg-success"
                                                                 data-class="bg-success"><i
                                                                class="fa fa-hand-o-right"></i>Work on UI design
                                                            </div>
                                                            <div class="external-event m-15 bg-danger"
                                                                 data-class="bg-danger"><i
                                                                class="fa fa-hand-o-right"></i>Sleep tight
                                                            </div>
                                                        </div>
                                                        <div class="event-fc-bt mx-15 my-20">
                                                            <!-- checkbox -->
                                                            <div class="checkbox">
                                                                <input id="drop-remove" type="checkbox">
                                                                <label for="drop-remove">
                                                                    Remove after drop
                                                                </label>
                                                            </div>
                                                            <a href="#" data-toggle="modal"
                                                               data-target="#add-new-events"
                                                               class="btn btn-success btn-block my-10">
                                                                <i class="ti-plus"></i> Add New Event
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts" src="./profile.component.ts">
</script>
<style lang="css" scoped>
.container {
    max-width: 1350px;
}

.nav-link {
    font-weight: normal;
}
.widget-user-image img {
    height: 65px !important;
}
.upload-avatar {
    margin-left: 75px;
    margin-bottom: 0px;
}
</style>
