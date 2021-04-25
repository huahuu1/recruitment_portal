<template>
    <div>
        <!---page Title --->
            <section class="bg-img pt-150 pb-20" data-overlay="7" style="background-image: url(content/images/front-end-img/background/bg-8.jpg);">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="text-center">
                                <h2 class="page-title text-white">Job details</h2>
                                <ol class="breadcrumb bg-transparent justify-content-center">
                                    <li class="breadcrumb-item"><router-link :active-class="'text-white-50'" to="/"><i class="mdi mdi-home-outline"></i></router-link></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Job details</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--Page content -->

            <section class="py-50" v-if="job">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-md-7 col-12">
                            <div class="d-lg-flex mb-30">
                                <div class="left-inner text-center">
                                    <div class="job-detail-thumbnail">
                                        <a href="#">
                                            <img width="180" height="75" :src="loadImage(job.company.logo)" class="img-thumbnail max-w-170" alt="">
                                        </a>
                                    </div>
                                    <div class="clearfix text-center">
                                        <router-link to="/danh-sach-viec-lam" class="btn-link my-10 d-block">View all jobs <span class="fa fa-arrow-right"></span></router-link>
                                    </div>
                                </div>
                                <div class="inner-info pl-lg-30 mt-20">
                                    <a class="text-success font-weight-500" href="#">{{job.jobTypeName}}</a>
                                    <div>
                                        <h3 class="job-detail-title d-inline-block mt-0 mb-10">{{job.title}}</h3>
                                        <span class="badge badge-danger">HOT</span>
                                    </div>
                                    <div class="job-date-author font-size-14 mb-10">
                                        Post date: {{job.createAt | formatDateWithoutTime}}
                                    </div>
                                    <div class="job-metas d-flex align-items-center">
                                        <div class="job-location font-size-18 mr-20"><i class="fa fa-map-marker mr-10"></i>{{job.province.name}}</div>
                                        <div class="job-salary font-size-18"><i class="fa fa-money mr-10"></i>{{job.salaryName}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                            <div class="box-body" v-html="job.content">
                                <!--<h4 class="box-title mb-0 font-weight-500">Mô tả công việc</h4>
                                <hr>
                                <p class="font-size-16 mb-30">Due to ongoing growth, this fun & energetic International corporate based on the outskirts of Oxford, is seeking a UX/UI Designer to join an innovative team, focused on delivering exciting User Experiences and great functionality, across both Web & Mobile platforms.<br><br>The UX/UI Designer will be working with a world-class team of designers, engineers, and product managers to develop innovative user experiences that will shape the industry’s pioneering products.</p>

                                <h4 class="box-title mb-0 font-weight-500">Responsibilities Include:</h4>
                                <hr>
                                <ul class="list list-mark mb-25">
                                    <li> Partnering with product and engineering to translate business and user goals into elegant and practical designs that can deliver on key business and user metrics</li>
                                    <li> Collaborating with internal stakeholders and team members to brainstorm new products, features and functionalities that enhance the mobile and web experiences</li>
                                    <li> Giving and soliciting feedback with designers</li>
                                </ul>
                                <h4 class="box-title mb-0 font-weight-500">Background, Skills & Experience</h4>
                                <hr>
                                <ul class="list list-mark">
                                    <li>Circa 3+ years experience designing for web and mobile platforms</li>
                                    <li>Through your online portfolio, you are able to share your UX/UI design capabilities by showcasing your design chops and demonstrates originality, innovation and strong problem solving skills</li>
                                    <li>Prototyping skills – experience with Axure or similar is useful</li>
                                    <li>Demonstrable experience with end-to-end product design, including consumer product/s</li>
                                    <li>Talent for managing multiple projects simultaneously, from concept through to completion</li>
                                    <li>You are comfortable designing within iOS and Android native guideles, and have portfolio examples to show it</li>
                                    <li>Excellent communicator who has conviction to champion of view, but can also successfully collaborate with others</li>
                                    <li>A Degree in Design or related field is preferred</li>
                                    <li>You enjoy a fast paced and dynamic working environment</li>
                                </ul>-->
                            </div>
                            </div>
                            <div class="box">
                            <div class="box-body">
                                <h4 class="box-title mb-0 font-weight-500">Place: <i class="fa fa-map-marker mr-10"></i>{{job.province.name}} </h4>
                                <hr>
                            </div>
                            </div>
                            <!-- <div class="box">
                                <div class="box-body">
                                    <div class="d-md-flex align-items-center justify-content-around">
                                        <div class="font-size-20 text-center">
                                            <i class="fa fa-clock-o text-primary mr-10"></i>
                                            <span class="text-fade"><span class="text-dark">1 year</span> ago</span>
                                        </div>
                                        <div class="font-size-20 text-center">
                                            <i class="fa fa-eye text-primary mr-10"></i>
                                            <span class="text-fade"><span class="text-dark">{{job.view}} </span> Views</span>
                                        </div>
                                        <div class="font-size-20 text-center">
                                            <i class="fa fa-file-text-o text-primary mr-10"></i>
                                            <span class="text-fade"><span class="text-dark">12</span> Applicants</span>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="mt-30">
                                <h4>Related Jobs</h4>
                                <div class="box">
                                    <div class="box-body">
                                        <div class="d-lg-flex">
                                            <div class="w-p100">
                                                <div class="d-flex align-items-center mb-30">
                                                    <div class="mr-15">
                                                        <img src="content/images/logo/logo-2.jpg" class="avatar avatar-lg rounded100 bg-primary-light b-1" alt="">
                                                    </div>
                                                    <div class="d-flex flex-column flex-grow-1 font-weight-500">
                                                        <a href="#" class="text-dark hover-primary mb-1 font-size-20">Monek Ltd . <span class="badge badge-success-light badge-sm">Full Time</span></a>
                                                        <span class="font-size-14"><i class="fa fa-map-marker mr-10"></i><span class="text-fade">New York</span> Nevada <em><small>30 min ago</small></em></span>
                                                    </div>
                                                </div>
                                                <div class="d-lg-flex align-items-center justify-content-between">
                                                    <div class="d-lg-flex d-block align-items-center">
                                                        <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded"><span class="text-fade font-weight-400 mr-10">Salary:</span> $1,200 - $1,800</h6>
                                                        <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded my-10 my-lg-0 mx-lg-15 mx-0"><span class="text-fade font-weight-400 mr-10">Position:</span> 12</h6>
                                                        <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded"><span class="text-fade font-weight-400 mr-10">Experience:</span> 2+ year</h6>
                                                    </div>
                                                    <div class="ml-lg-10">
                                                        <a href="#" class="waves-effect waves-light btn btn-primary-light btn-sm mt-lg-0 mt-10">More Info</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="position-relative w-xl-300 w-lg-250 pl-lg-20 bl-1 ml-lg-20">
                                                <h4 class="mt-lg-0 mt-25 mb-25">
                                                    <small class="text-fade font-size-12">Openings Postition</small><br>
                                                    Sales Assistant
                                                </h4>
                                                <a href="#" class="waves-effect waves-light btn btn-block btn-primary">Ứng tuyển ngay!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="col-xl-4 col-md-5 col-sm-12">
                            <div class="course-detail-bx">
                                <div class="box box-body">
                                    <div class="course-price">
                                        <div class="mb-5">
                                            <p class="text-danger text-center">
                                                <i class="fa fa-clock-o mr-1"></i>
                                                Application deadline: <strong>{{job.deadline | formatDateWithoutTime}}</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <!-- <button type="button" class="waves-effect waves-light btn btn-block btn-secondary mb-10"><i class="fa fa-star-o mr-10"></i>Shortlist</button> -->
                                        <button v-if="!isApplyJob" type="button" @click="handleUploadCV()" class="waves-effect waves-light btn btn-block btn-success">Apply now<i class="fa fa-arrow-right ml-10"></i></button>
                                        <button v-else type="button" class="waves-effect waves-light btn btn-block btn-light">Applied</button>
                                    </div>
                                </div>
                                <h4>Employment information</h4>
                                <div class="box box-body">
                                    <div class="d-flex align-items-center mb-30">
                                        <div class="mr-15">
                                            <i class="font-size-36 text-primary mdi mdi-wallet"></i>
                                        </div>
                                        <div class="details">
                                            <div class="font-size-18">Salary</div>
                                            <div class="font-size-18 text-fade">{{job.salaryName}}</div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mb-30">
                                        <div class="mr-15">
                                            <i class="font-size-36 text-primary mdi mdi-tag-multiple"></i>
                                        </div>
                                        <div class="details">
                                            <div class="font-size-18">Number of recruitment</div>
                                            <div class="font-size-18 text-fade">{{job.recruiteNumber}}</div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mb-30">
                                        <div class="mr-15">
                                            <i class="font-size-36 text-primary mdi mdi-chart-line"></i>
                                        </div>
                                        <div class="details">
                                            <div class="font-size-18">Skill</div>
                                            <div class="font-size-18 text-fade">{{job.skill}}</div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mb-30">
                                        <div class="mr-15">
                                            <i class="font-size-36 text-primary mdi mdi-book-open-page-variant"></i>
                                        </div>
                                        <div class="details">
                                            <div class="font-size-18">Experience required</div>
                                            <div class="font-size-18 text-fade" v-if="job.experience == 1">No experience</div>
                                            <div class="font-size-18 text-fade" v-if="job.experience == 2">Less than 1 year</div>
                                            <div class="font-size-18 text-fade" v-if="job.experience == 3">1 year</div>
                                            <div class="font-size-18 text-fade" v-if="job.experience == 4">2 year</div>
                                            <div class="font-size-18 text-fade" v-if="job.experience == 5">3 year</div>
                                            <div class="font-size-18 text-fade" v-if="job.experience == 6">4 year</div>
                                            <div class="font-size-18 text-fade" v-if="job.experience == 7">5 year</div>
                                            <div class="font-size-18 text-fade" v-if="job.experience == 8">Over 5 year</div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mb-30">
                                        <div class="mr-15">
                                            <i class="font-size-36 text-primary mdi mdi-settings"></i>
                                        </div>
                                        <div class="details">
                                            <div class="font-size-18">Position</div>
                                            <div class="font-size-18 text-fade">{{job.position}}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <h4>Share Link:</h4>
                                <div class="box box-body">
                                    <div class="d-flex gap-items-2">
                                        <button class="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook"><i class="fa fa-facebook"></i></button>
                                        <button class="waves-effect waves-circle btn btn-social-icon btn-circle btn-twitter"><i class="fa fa-twitter"></i></button>
                                        <button class="waves-effect waves-circle btn btn-social-icon btn-circle btn-linkedin"><i class="fa fa-linkedin"></i></button>
                                        <button class="waves-effect waves-circle btn btn-social-icon btn-circle btn-pinterest"><i class="fa fa-pinterest"></i></button>
                                        <button class="waves-effect waves-circle btn btn-social-icon btn-circle btn-instagram"><i class="fa fa-instagram"></i></button>
                                    </div>
                                </div> -->
                                <!--<h4>People Also Viewed</h4>
                                <div class="box box-body box-solid bg-pink">
                                    <div class="mb-15 pb-5 bb-1">
                                        <a href="#" class="font-size-16 mb-10 text-white">ACB Product Sales Specialist</a>
                                        <p class="mb-0">Mencap Co</p>
                                        <p class="text-white-60"><i class="fa fa-map-marker"></i> Brooklyn , NY USA</p>
                                    </div>
                                    <div class="mb-15 pb-5 bb-1">
                                        <a href="#" class="font-size-16 mb-10 text-white">General Ledger Accountant</a>
                                        <p class="mb-0">NonStop Co</p>
                                        <p class="text-white-60"><i class="fa fa-map-marker"></i> Brooklyn , NY USA</p>
                                    </div>
                                    <div>
                                        <a href="#" class="font-size-16 mb-10 text-white">UX/UI Designer Web</a>
                                        <p class="mb-0">Personnel Ltd</p>
                                        <p class="text-white-60"><i class="fa fa-map-marker"></i> Brooklyn , NY USA</p>
                                    </div>
                                </div>-->

                                <!-- <div class="box box-body bg-transparent no-shadow pb-0 px-0">
                                    <div class="course-price">
                                        <div>
                                            <p class="text-danger text-center">
                                                <i class="fa fa-clock-o mr-1"></i>
                                                Application deadline: <strong>{{job.deadline | formatDateWithoutTime}}</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="waves-effect waves-light btn btn-block btn-success">Ứng tuyển ngay<i class="fa fa-arrow-right ml-10"></i></button>
                                    </div>
                                </div> -->
                                <!-- <div class="text-center">
                                    <p>OR APPLY AT</p>
                                    <div class="d-flex gap-items-2 mb-10 justify-content-around">
                                        <button type="button" class="waves-effect waves-light btn btn-facebook w-p100"><i class="mr-10 fa fa-facebook"></i>Facebook</button>
                                        <button type="button" class="waves-effect waves-light btn btn-google w-p100"><i class="mr-10 fa fa-google"></i>Google</button>
                                    </div>
                                    <div class="d-flex gap-items-2 justify-content-around">
                                        <button type="button" class="waves-effect waves-light btn btn-twitter w-p100"><i class="mr-10 fa fa-twitter"></i>Twitter</button>
                                        <button type="button" class="waves-effect waves-light btn btn-linkedin w-p100"><i class="mr-10 fa fa-linkedin"></i>Linkedin</button>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <b-modal ref="uploadCV" id="uploadCV" :title="'Upload your CV'">
            <div class="modal-body">
                <div class="my-3">
                    <p class="text-danger">{{uploadError}}</p>
                </div>
                <input type="file" class="form-control" ref="files" @change="handleFilesUpload">
            </div>
            <div class="text-right" slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" @click="applyNow">Personal CV</button>
                <button type="button" class="btn btn-primary" @click="applyWithCV">Save</button>
            </div>
        </b-modal>
    </div>
</template>
<script lang="ts" src="./job-detail.component.ts">
</script>
