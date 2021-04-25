<template>
    <div>
        <!---page Title --->
	<section class="bg-img pt-150 pb-20" data-overlay="7" style="background-image: url(content/images/front-end-img/background/bg-8.jpg);">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="text-center">
						<h2 class="page-title text-white">Latest job list</h2>
						<ol class="breadcrumb bg-transparent justify-content-center">
							<li class="breadcrumb-item"><router-link :active-class="'text-white-50'" to="/"><i class="mdi mdi-home-outline"></i></router-link></li>
							<li class="breadcrumb-item text-white active" aria-current="page">Job listing</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--Page content -->
	<section class="py-50">
		<div class="container" id="job-list-box">
			<div class="row">
				<div class="col-lg-3 col-md-4 col-sm-12">
					<div class="side-block px-20 py-10 bg-white">

                        <button class="btn btn-block btn-primary mb-2" style="width: 100%" @click="loadAll()">Filter</button>
						<div class="widget courses-search-bx placeholdertx mb-30">
							<div class="form-group">
								<div class="input-group">
									<input name="name" placeholder="Search" type="text" required="" class="form-control" v-model="keyword" style="border-color:#e4e6ef !important;">
								</div>
							</div>
						</div>
						<div class="widget">
							<h4 class="mb-25">Place</h4>
							<div class="widget placeholdertx mb-10">
								<div class="form-group">
									<div class="input-group">
                      <select class="form-control" v-model="provinceSelected" style="border-color:#e4e6ef !important;">
                          <option value="">All</option>
                          <option v-for="(p, i) in province" :key="i" :value="p.id">{{p.name}}</option>
                      </select>
									</div>
								</div>
							</div>
						</div>
						<div class="widget">
							<h4 class="mb-25">Career</h4>
							<ul class="list-unstyled" v-if="career">
								<li v-for="(c, index) in career" :key="index">
									<input type="checkbox" :value="c.id" :id="'basic_checkbox_'+index" class="filled-in" v-model="careerSelected">
									<label :for="'basic_checkbox_'+index" class="d-flex justify-content-between align-items-center">
										{{c.title}}
<!--										<span class="badge badge-sm badge-secondary-light">10</span> -->
									</label>
								</li>
							</ul>
						</div>
						<div class="widget">
							<h4 class="pb-15 mb-25 bb-1">Type of job</h4>
							<ul class="list-unstyled" v-if="jobType">
								<li v-for="(j, index) in jobType" :key="index">
									<input type="checkbox" :value="j.id" :id="'levels_'+index" class="filled-in" v-model="jobTypeSelected">
									<label :for="'levels_'+index" class="d-flex justify-content-between align-items-center">
										{{j.name}}
<!--										<span class="badge badge-sm badge-secondary-light">04</span>-->
									</label>
								</li>

							</ul>
						</div>
						<div class="widget">
							<h4 class="pb-15 mb-25 bb-1">Salary</h4>
							<ul class="list-unstyled" v-if="salary">
								<li v-for="(s, index) in salary" :key="index">
									<input type="checkbox" :id="'oftype_'+index" :value="s.id" v-model="salarySelected" class="filled-in">
									<label :for="'oftype_'+index">
										{{s.name}}
									</label>
								</li>

							</ul>
						</div>
						<div class="widget">
							<h4 class="pb-15 mb-25 bb-1">Position</h4>
							<ul class="list-unstyled" v-if="position">
								<li v-for="(p, index) in position" :key="index">
									<input type="checkbox" :id="'indutype_1'+index" :value="p.id" v-model="positionSelected" class="filled-in">
									<label :for="'indutype_1'+index">
										{{p.name}}
									</label>
								</li>

							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-9 col-md-8 col-12">
					<div class="box">
						<div class="box-body">
							<div class="bg-light p-10 d-lg-flex justify-content-between align-items-center rounded">
								 <jhi-item-count :page="page" :total="total" :itemsPerPage="itemsPerPage"></jhi-item-count>
								<div class="d-flex justify-lg-content-end align-items-center">

									<ul class="nav nav-pills" id="pills-tab" role="tablist">
									 <!-- <li class="nav-item mx-5" role="presentation">
										  <a class="nav-link b-0 font-size-18" id="pills-grid-tab" data-toggle="pill" href="#pills-grid" role="tab" aria-controls="pills-grid" aria-selected="false">
											<i class="fa fa-th mr-0"></i>
										  </a>
									  </li>-->
									  <li class="nav-item mx-5" role="presentation">
										  <a class="nav-link active b-0 font-size-18" id="pills-list-tab" data-toggle="pill" href="#pills-list" role="tab" aria-controls="pills-list" aria-selected="true">
											<i class="fa fa-list mr-0"></i>
										  </a>
									  </li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="tab-content" id="pills-tabContent">
                        <div class="loader" v-if="loading"></div>

						<div class="tab-pane fade show active" id="pills-list" role="tabpanel" aria-labelledby="pills-list-tab" v-if="jobs && jobs.length > 0">
							<div class="box" v-for="job in jobs" :key="job.id">
								<div class="box-body">
									<div class="d-lg-flex">
										<div class="w-p100">
											<div class="d-flex align-items-center mb-30">
												<div class="mr-15">
													<img :src="loadImage(job.company.logo)" class="avatar avatar-lg rounded100 bg-primary-light b-1" alt="">
												</div>
												<div class="d-flex flex-column flex-grow-1 font-weight-500">

													<a class="text-dark hover-primary mb-1 font-size-20">
                                                        <router-link :to="'chi-tiet-viec-lam/' + job.id">
                                                            {{job.title}}
                                                        </router-link>

                                                         <span class="badge badge-success-light badge-sm" v-if="job.jobType">{{job.jobTypeName}}</span></a>
                                                    <p><strong class="text-danger">{{job.company.name}}</strong></p>
													<span class="font-size-14"><i class="fa fa-map-marker mr-10"></i><span class="text-fade">{{job.company.address}}</span> </span>
                          <!-- <em><small>{{job.createAt | formatDateWithoutTime}}</small></em> -->
												</div>
											</div>
											<div class="d-lg-flex align-items-center justify-content-between">
												<div class="d-lg-flex d-block align-items-center">
													<h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded"><span class="text-fade font-weight-400 mr-10">Salary:</span> {{job.salaryName}}</h6>
													<h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded my-10 my-lg-0 mx-lg-15 mx-0"><span class="text-fade font-weight-400 mr-10">Amount:</span> {{job.recruiteNumber}}</h6>
													<h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded" v-if="job.experience == 1">
                            <span class="text-fade font-weight-400 mr-10">Experience:</span> No experience
                          </h6>
                          <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded" v-if="job.experience == 2">
                            <span class="text-fade font-weight-400 mr-10" v-if="job.experience == 2">Experience:</span> Less than 1 year
                          </h6>
                          <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded" v-if="job.experience == 3">
                            <span class="text-fade font-weight-400 mr-10" v-if="job.experience == 3">Experience:</span> 1 year
                          </h6>
                          <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded" v-if="job.experience == 4">
                            <span class="text-fade font-weight-400 mr-10" v-if="job.experience == 4">Experience:</span> 2 years
                          </h6>
                          <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded" v-if="job.experience == 5">
                            <span class="text-fade font-weight-400 mr-10" v-if="job.experience == 5">Experience:</span> 3 years
                          </h6>
                          <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded" v-if="job.experience == 6">
                            <span class="text-fade font-weight-400 mr-10" v-if="job.experience == 6">Experience:</span> 4 years
                          </h6>
                          <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded" v-if="job.experience == 7">
                            <span class="text-fade font-weight-400 mr-10" v-if="job.experience == 7">Experience:</span> 5 years
                          </h6>
                          <h6 class="bg-secondary-light d-inline-block font-weight-500 px-10 py-5 mb-0 rounded" v-if="job.experience == 8">
                            <span class="text-fade font-weight-400 mr-10" v-if="job.experience == 8">Experience:</span> Over 5 years
                          </h6>

												</div>
												<div class="ml-lg-10">
                                                    <router-link :to="'chi-tiet-viec-lam/' + job.id">
                                                        <a href="#" class="waves-effect waves-light btn btn-primary-light btn-sm mt-lg-0 mt-10">View more</a>
                                                    </router-link>

												</div>
											</div>
										</div>
										<div class="position-relative w-xl-300 w-lg-250 pl-lg-20 bl-1 ml-lg-20">
											<h4 class="mt-lg-0 mt-25 mb-25">
												<small class="text-fade font-size-12">Position</small><br>
												{{job.position}}
											</h4>
                                            <router-link class="waves-effect waves-light btn btn-block btn-primary" :to="'chi-tiet-viec-lam/' + job.id">
                                                Apply
                                            </router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
                        <div v-else>
                            <p class="text-center">No data!</p>
                        </div>
						<!--<div class="tab-pane fade" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
							<div class="row">
								<div class="col-md-4 col-12">
									<div class="card text-center">
										<a href="#">
											<img src="content/images/logo/logo-1.jpg" class="img-fluid w-auto" alt="">
										</a>
										<div class="position-absolute r-10 t-10">
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-heart-o"></i></button>
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-share-alt"></i></button>
										</div>
									  <div class="card-body">
										  <div class="mb-15">
											  <h4 class="card-title mb-0">Sales Assistant</h4>
											  <span class="badge badge-success-light my-10">Full Time</span>
										  </div>
										<p class="card-text">via <a href="#">Monek Ltd</a> <i class="fa fa-map-marker ml-20 mr-5"></i> New york</p>
										<p class="card-text"><i class="mr-5 fa fa-filter"></i> Customer Service <i class="ml-20 mr-5 fa fa-user"></i> Position: 12</p>
									  </div>
									  <div class="card-footer justify-content-between d-flex align-items-center">
										<div class="text-muted"><i class="text-muted mr-2 fa fa-clock-o"></i> 2W ago </div>
										<a href="#" class="waves-effect waves-light btn btn-primary">Apply Now!</a>
									  </div>
									</div>
								</div>
								<div class="col-md-4 col-12">
									<div class="card text-center">
										<a href="#">
											<img src="content/images/logo/logo-2.jpg" class="img-fluid w-auto" alt="">
										</a>
										<div class="position-absolute r-10 t-10">
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-heart-o"></i></button>
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-share-alt"></i></button>
										</div>
									  <div class="card-body">
										  <div class="mb-15">
											  <h4 class="card-title mb-0">Customer Service Assistant</h4>
											  <span class="badge badge-success-light my-10">Full Time</span>
										  </div>
										<p class="card-text">via <a href="#">Monek Ltd</a> <i class="fa fa-map-marker ml-20 mr-5"></i> New york</p>
										<p class="card-text"><i class="mr-5 fa fa-filter"></i> Customer Service <i class="ml-20 mr-5 fa fa-user"></i> Position: 12</p>
									  </div>
									  <div class="card-footer justify-content-between d-flex align-items-center">
										<div class="text-muted"><i class="text-muted mr-2 fa fa-clock-o"></i> 2W ago </div>
										<a href="#" class="waves-effect waves-light btn btn-primary">Apply Now!</a>
									  </div>
									</div>
								</div>
								<div class="col-md-4 col-12">
									<div class="card text-center">
										<a href="#">
											<img src="content/images/logo/logo-3.jpg" class="img-fluid w-auto" alt="">
										</a>
										<div class="position-absolute r-10 t-10">
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-heart-o"></i></button>
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-share-alt"></i></button>
										</div>
									  <div class="card-body">
										  <div class="mb-15">
											  <h4 class="card-title mb-0">Data Entry Administrator</h4>
											  <span class="badge badge-success-light my-10">Full Time</span>
										  </div>
										<p class="card-text">via <a href="#">Monek Ltd</a> <i class="fa fa-map-marker ml-20 mr-5"></i> New york</p>
										<p class="card-text"><i class="mr-5 fa fa-filter"></i> Customer Service <i class="ml-20 mr-5 fa fa-user"></i> Position: 12</p>
									  </div>
									  <div class="card-footer justify-content-between d-flex align-items-center">
										<div class="text-muted"><i class="text-muted mr-2 fa fa-clock-o"></i> 2W ago </div>
										<a href="#" class="waves-effect waves-light btn btn-primary">Apply Now!</a>
									  </div>
									</div>
								</div>
								<div class="col-md-4 col-12">
									<div class="card text-center">
										<a href="#">
											<img src="content/images/logo/logo-4.jpg" class="img-fluid w-auto" alt="">
										</a>
										<div class="position-absolute r-10 t-10">
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-heart-o"></i></button>
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-share-alt"></i></button>
										</div>
									  <div class="card-body">
										  <div class="mb-15">
											  <h4 class="card-title mb-0">Sales Assistant</h4>
											  <span class="badge badge-danger-light my-10">Part Time</span>
										  </div>
										<p class="card-text">via <a href="#">Monek Ltd</a> <i class="fa fa-map-marker ml-20 mr-5"></i> New york</p>
										<p class="card-text"><i class="mr-5 fa fa-filter"></i> Customer Service <i class="ml-20 mr-5 fa fa-user"></i> Position: 12</p>
									  </div>
									  <div class="card-footer justify-content-between d-flex align-items-center">
										<div class="text-muted"><i class="text-muted mr-2 fa fa-clock-o"></i> 2W ago </div>
										<a href="#" class="waves-effect waves-light btn btn-primary">Apply Now!</a>
									  </div>
									</div>
								</div>
								<div class="col-md-4 col-12">
									<div class="card text-center">
										<a href="#">
											<img src="content/images/logo/logo-5.jpg" class="img-fluid w-auto" alt="">
										</a>
										<div class="position-absolute r-10 t-10">
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-heart-o"></i></button>
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-share-alt"></i></button>
										</div>
									  <div class="card-body">
										  <div class="mb-15">
											  <h4 class="card-title mb-0">Customer Service Assistant</h4>
											  <span class="badge badge-danger-light my-10">Part Time</span>
										  </div>
										<p class="card-text">via <a href="#">Monek Ltd</a> <i class="fa fa-map-marker ml-20 mr-5"></i> New york</p>
										<p class="card-text"><i class="mr-5 fa fa-filter"></i> Customer Service <i class="ml-20 mr-5 fa fa-user"></i> Position: 12</p>
									  </div>
									  <div class="card-footer justify-content-between d-flex align-items-center">
										<div class="text-muted"><i class="text-muted mr-2 fa fa-clock-o"></i> 2W ago </div>
										<a href="#" class="waves-effect waves-light btn btn-primary">Apply Now!</a>
									  </div>
									</div>
								</div>
								<div class="col-md-4 col-12">
									<div class="card text-center">
										<a href="#">
											<img src="content/images/logo/logo-1.jpg" class="img-fluid w-auto" alt="">
										</a>
										<div class="position-absolute r-10 t-10">
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-heart-o"></i></button>
											<button type="button" class="waves-effect waves-circle btn btn-circle btn-dark btn-xs mr-5"><i class="fa fa-share-alt"></i></button>
										</div>
									  <div class="card-body">
										  <div class="mb-15">
											  <h4 class="card-title mb-0">Data Entry Administrator</h4>
											  <span class="badge badge-danger-light my-10">Part Time</span>
										  </div>
										<p class="card-text">via <a href="#">Monek Ltd</a> <i class="fa fa-map-marker ml-20 mr-5"></i> New york</p>
										<p class="card-text"><i class="mr-5 fa fa-filter"></i> Customer Service <i class="ml-20 mr-5 fa fa-user"></i> Position: 12</p>
									  </div>
									  <div class="card-footer justify-content-between d-flex align-items-center">
										<div class="text-muted"><i class="text-muted mr-2 fa fa-clock-o"></i> 2W ago </div>
										<a href="#" class="waves-effect waves-light btn btn-primary">Apply Now!</a>
									  </div>
									</div>
								</div>
							</div>
						</div>-->
					</div>
					<div aria-label="Page navigation example">
					  <ul class="pagination mb-0" v-if="jobs && jobs.length > 0">
                          <li class="page-item"><a :class="{'not-active' : page === 1}" class="page-link" href="javascript:void(0)" @click="goToPage(page-1)">Previous</a></li>
						    <li v-for="(p, index) in totalPage" :key="index" class="page-item"><a :class="{'p-active' : page === p}" @click="goToPage(p)" class="page-link" href="javascript:void(0)">{{p}}</a></li>
                          <li class="page-item"><a class="page-link" :class="{'not-active' : page === totalPage}" href="javascript:void(0)" @click="goToPage(page+1)">Next</a></li>
					  </ul>
					</div>
				</div>
			</div>
		</div>
	</section>

    </div>
</template>
<script lang="ts" src="./job-list.component.ts">
</script>
<style lang="css" scoped>
    #job-list-box{
        max-width: 1350px;
    }
    .p-active {
        border: 1px solid #0c7cd5;
        color: white !important;
        background-color: #0c7cd5 !important;
    }
    .not-active {
        pointer-events: none;
        cursor: default;
        text-decoration: none;
        color: #ccc;
    }
    .pagination {
        cursor: unset !important;
    }
    .w-100 {
        width: 100% !important;
    }
    #pills-tabContent {
        position: relative;
        min-height: 300px;
    }
    .loader{
        position: absolute;
        opacity: 0.5;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: url('../../../content/images/loading1.gif')
        50% 50% no-repeat;
    }
</style>
