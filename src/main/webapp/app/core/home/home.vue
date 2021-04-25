<template>
   <div>
       <section class="bg-img vh-100" style="background-image: url(content/images/front-end-img/banners/banner-2.png); background-position: top left;">
		<div class="container-fluid h-p100">
			<div class="row align-items-center h-p100 justify-content-center">
				<div class="col-12 col-xl-1 d-none d-lg-block">
				</div>
				<div class="col-md-8 col-xl-4 col-lg-5">
					<div class="text-left mb-30 pt-180">
						<h1 class="box-title font-weight-700 font-size-50">Your passion starts here!</h1>
						<p class="font-weight-600 font-size-18">Join to easily find the best job for you.</p>
					</div>
					<div class="form row cours-searchpx-0">
						<div class="form-group col-12">
							<input type="text" v-model="keyword" class="form-control input-lg b-0 br-1 border-light rounded-0" placeholder="Title of job, company,...." style="border: none !important;">
						</div>
						<!--<div class="form-group col-12">
							<input type="text" class="form-control input-lg b-0 br-1 border-light rounded-0" placeholder="city, state/territory of postcode">
							<span class="position-absolute r-30 t-16"><i class="fa fa-map-marker"></i> </span>
						</div>-->
                        <div class="form-group col-12" v-if="provinceLst">
                            <v-select
                                style="border: none !important;"
                                name="scopeWork"
                                placeholder="Enter the province, city, or locality"
                                class="form-control"
                                label="name"
                                v-model="location"
                                :options="provinceLst"
                                :reduce="c => c.id"
                            />
<!--                            <span class="position-absolute r-30 t-16"><i class="fa fa-map-marker"></i> </span>-->
                        </div>

						<div class="col-12">
							<a href="javascript:void(0)" class="btn btn-block btn-primary" @click="search">Find Jobs</a>
						</div>
					</div>
					<div class="text-left mt-30">
						<p class="font-weight-600 font-size-18">Finding the future is easy. <router-link to="/dang-ky-tai-khoan" class="text-primary">Register now</router-link>  </p>
					</div>
				</div>

				<div class="col-12 col-xl-7 col-lg-7 d-none d-lg-block">
					<div class="text-right mb-30 pt-180">
						<img src="content/images/front-end-img/banners/ban-img.png" alt="" class="img-fluid max-w-850" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="py-50">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 col-12 text-center">
					<h1 class="mb-15">Explore Opportunities</h1>
					<hr class="w-100 bg-primary">
				</div>
			</div>
			<div class="row mt-30">
				<div v-for="job in jobOpportunity" :key="job.id" class="col-md-4 col-12">
					 <router-link :to="'chi-tiet-viec-lam/' + job.id">
					    <div class="box pull-up">
							<div class="box-body">
								<img v-if="job.company.logo" :src="loadImage(job.company.logo)" alt="" style="display:block;margin:0 auto;max-width:20rem;"/><br>
								<h4 class="my-15 font-size-20 font-weight-500">{{job.title}} </h4>
								<p class="text-primary mb-0"> {{job.company.name}}</p>
								<div class="text-fade font-size-18 my-15 font-weight-500">
									<span class="text-dark" v-if="job.salary===0">Under 3 million</span>
									<span class="text-dark" v-else-if="job.salary===1">From 3 - 5 million</span>
									<span class="text-dark" v-else-if="job.salary===2">From 5 - 7 million</span>
									<span class="text-dark" v-else-if="job.salary===3">From 7 - 15 million</span>
									<span class="text-dark" v-else-if="job.salary===4">From 15 - 20 million</span>
									<span class="text-dark" v-else-if="job.salary===5">From 20 - 25 million</span>
									<span class="text-dark" v-else-if="job.salary===6">Over 25 million</span>
									<span class="text-dark" v-else-if="job.salary===7">Wage agreement</span>
								</div>
								<p class="text-fade"><i class="fa fa-map-marker"></i>&nbsp;{{job.province.name}}</p>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</section>

	<section class="py-50 bg-white">
		<div class="container">
			<div class="row align-items-center">
			  <div class="col-xl-3 col-lg-3">
				<div class="section-title">
				  <h1 class="title">Popular profession</h1>
				  <p class="mb-30 font-size-16">Each month, more than 7 million job seekers visit their website to find jobs, generating more than 160,000 applications per day.</p>
				</div>
				<router-link class="btn btn-outline btn-primary" to="danh-sach-viec-lam">View jobs now</router-link>
			  </div>
			  <div class="col-xl-9 col-lg-9 mt-0 mt-md-50" v-if="careerWithJobCount && careerWithJobCount.length>0">
				<div class="sector-style text-center mx-0">
				  <a @click="clickCareer(care.care.id)" v-for="care in careerWithJobCount" :key="care.care.id" href="javascript:void(0);" class="sector-item">
					<div class="sector-icon font-size-50 mb-4 text-primary">
					  <i :class="randomClassTagi()"></i>
					</div>
					<h5>{{care.care.title}}</h5>
					<span class="mb-0">{{care.quantity}} Position </span>
				  </a>
				</div>
			  </div>
			</div>
		</div>
	</section>

	<section class="py-50">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 col-12 text-center">
					<h1 class="mb-15">Operating model</h1>
					<hr class="w-100 bg-primary">
				</div>
			</div>
			<div class="row mt-30">
				<div class="col-md-4">
					<a href="javascript:void(0);" class="box text-center pull-up">
						<div class="box-body p-50">
							<span class="text-primary font-size-60 icon-Add-user"><span class="path1"></span><span class="path2"></span></span>
							<div class="font-weight-600 font-size-20 mb-10 mt-25">Create Account</div>
							<div class="text-fade font-size-16">Create an account and access your saved settings on any device.</div>
						</div>
					</a>
				</div>
				<div class="col-md-4">
					<a href="javascript:void(0);" class="box text-center pull-up">
						<div class="box-body p-50">
							<span class="text-primary font-size-60 icon-Search"><span class="path1"></span><span class="path2"></span></span>
							<div class="font-weight-600 font-size-20 mb-10 mt-25">Find your vacancy</div>
							<div class="text-fade font-size-16">Don't just look. Be found. Put your CV in front of great employers.</div>
						</div>
					</a>
				</div>
				<div class="col-md-4">
					<a href="javascript:void(0);" class="box text-center pull-up">
						<div class="box-body p-50">
							<span class="text-primary font-size-60 icon-Armchair"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
							<div class="font-weight-600 font-size-20 mb-10 mt-25">Ready to work</div>
							<div class="text-fade font-size-16">Your next career starts here. Choose jobs from thousands of companies</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="py-50 bg-white">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 col-12 text-center">
					<h1 class="mb-15">Latest jobs</h1>
					<hr class="w-100 bg-primary">
				</div>
			</div>
			<div class="row mt-30">
				<div class="col-12">
					<ul class="nav nav-tabs justify-content-center bb-0 mb-10" role="tablist">
						<li class="nav-item" @click="loadJobHot()"> <a class="nav-link active px-20 py-10 btn-outline btn-danger-light" data-toggle="tab" href="#tab9" role="tab">Hotest</a> </li>
						<li class="nav-item" @click="loadJobLastest()"> <a class="nav-link px-20 py-10" data-toggle="tab" href="#tab8" role="tab">Latest</a></li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="tab9" role="tabpanel">
							<div class="px-15 pt-15">
								<div class="row justify-content-center">
									<div class="col-xl-11 col-12">
										<div class="table-responsive">
											<table class="table">
												<tbody v-if="jobHot && jobHot.length>0">
													<tr v-for="job in jobHot" :key="job.id">
                            <router-link :to="'chi-tiet-viec-lam/' + job.id">
														<td style="width:40rem">
															<div class="d-flex align-items-center">
																<img style="max-width:38px; max-height:40px" :src="loadImage(job.company.logo)" class="p-5 rounded bg-lightest mr-15" alt="">
																<div style="padding-left:2rem">
																	<h4 class="mb-0 font-weight-500">{{job.title}}</h4>
																	<p class="mb-0">{{job.company.name}}</p>
																</div>
															</div>
														</td>
                            </router-link>
														<td v-if="job.jobType===1" class="text-left" style="width:7rem;">Full-time</td>
														<td v-else-if="job.jobType===2" class="text-left"  style="width:7rem;">Part-time</td>
														<td v-else-if="job.jobType===3" class="text-left"  style="width:7rem;">Intership</td>
														<td v-else-if="job.jobType===4" class="text-left"  style="width:7rem;">Remote work</td>
														<td class="text-right"><p class="text-fade mb-0"><i class="fa fa-map-marker"></i> {{job.company.address}}</p></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="tab8" role="tabpanel">
							<div class="px-15 pt-15">
								<div class="row justify-content-center">
									<div class="col-xl-11 col-12">
										<div class="table-responsive">
											<table class="table">
												<tbody v-if="jobLastest && jobLastest.length>0">
													<tr v-for="job in jobLastest" :key="job.id">
                            <router-link :to="'chi-tiet-viec-lam/' + job.id">
														<td style="width:40rem">
															<div class="d-flex align-items-center">
																<img style="max-width:38px; max-height:40px" :src="loadImage(job.company.logo)" class="p-5 rounded bg-lightest mr-15" alt="">
																<div style="padding-left:2rem">
																	<h4 class="mb-0 font-weight-500">{{job.title}}</h4>
																	<p class="mb-0">{{job.company.name}}</p>
																</div>
															</div>
														</td>
                            </router-link>
														<td v-if="job.jobType===1" class="text-left" style="width:7rem;">Full-time</td>
														<td v-else-if="job.jobType===2" class="text-left" style="width:7rem;">Part-time</td>
														<td v-else-if="job.jobType===3" class="text-left" style="width:7rem;">Intership</td>
														<td v-else-if="job.jobType===4" class="text-left" style="width:7rem;">Remote work</td>
														<td class="text-right"><p class="text-fade mb-0"><i class="fa fa-map-marker"></i> {{job.company.address}}</p></td>
													</tr>
												</tbody>
											</table>
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

	<section class="py-50">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 col-12 text-center">
					<h1 class="mb-15">Employment by province</h1>
					<hr class="w-100 bg-primary">
				</div>
			</div>
			<div class="row mt-30" v-if="countProvince && countProvince.length > 0">
				<div @click="clickLocation(p.province.id)" class="col-lg-3 col-md-6 col-12" v-for="p in countProvince" :key="p.province.id">
					<a class="box bg-img text-center pt-100 pull-up" href="javascript:void(0)" :style="'background-image: url(content/images/front-end-img/city/'+randomBackground()" data-overlay="5">
						<div class="box-body pb-0">
							<span class="text-white"> <strong>{{p.quantity}}</strong> Vacancies</span>
						</div>
						<div class="box-body pb-15 pt-5 rounded-0">
							<h4 class="text-white">{{p.province.name}}</h4>
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- <section class="py-50 bg-white">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 col-12 text-center">
					<h1 class="mb-15">Our top Company Partners.</h1>
					<hr class="w-100 bg-primary">
				</div>
			</div>
			<div class="row mt-30">
				<div class="col-12">
					<div class="owl-carousel owl-theme owl-btn-1" data-nav-arrow="false" data-nav-dots="false" data-items="6" data-md-items="4" data-sm-items="3" data-xs-items="2" data-xx-items="2">
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-1.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-2.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-3.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-4.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-5.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-6.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-7.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-8.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-9.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-10.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-11.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
						<div class="item"><img src="content/images/front-end-img/unilogo/uni-12.jpg" class="img-fluid my-15 rounded box-shadowed pull-up" alt="" ></div>
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<!-- <section class="py-50 bg-img countnm-bx" style="background-image: url(content/images/front-end-img/background/bg-3.jpg)" data-overlay="5">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6 col-12">
					<div class="text-center">
						<div class="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center mx-auto">
							<span class="text-white font-size-40 icon-Selected-file"><span class="path1"></span><span class="path2"></span></span>
						</div>
						<h1 class="countnm my-10 text-white font-weight-300">1321</h1>
						<div class="text-uppercase text-white">Jobs Posted</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<div class="text-center">
						<div class="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center mx-auto">
							<span class="text-white font-size-40 icon-Edit"><span class="path1"></span><span class="path2"></span></span>
						</div>
						<h1 class="countnm my-10 text-white font-weight-300">56</h1>
						<div class="text-uppercase text-white">Jobs Filled</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<div class="text-center">
						<div class="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center mx-auto">
							<span class="text-white font-size-40 icon-Briefcase"><span class="path1"></span><span class="path2"></span></span>
						</div>
						<h1 class="countnm my-10 text-white font-weight-300">9</h1>
						<div class="text-uppercase text-white">Companies</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<div class="text-center">
						<div class="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center mx-auto">
							<span class="text-white font-size-40 icon-Add-user"><span class="path1"></span><span class="path2"></span></span>
						</div>
						<h1 class="countnm my-10 text-white font-weight-300">46</h1>
						<div class="text-uppercase text-white">Members</div>
					</div>
				</div>
			</div>
		</div>
	</section> -->

	<section class="py-50">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 col-12 text-center">
					<h1 class="mb-15">Latest news</h1>
					<hr class="w-100 bg-primary">
				</div>
			</div>
			<div class="row mt-30" v-if="postLastest && postLastest.length > 0">
				<div class="col-xl-4 col-md-4 col-12" v-for="post in postLastest" :key="post.id">
					<div class="blog-post">
						<div class="entry-image clearfix">
							<img style="max-width: 100%; max-height:300px" class="img-fluid" :src="loadImage(post.thumbnail)" alt="">
						</div>
						<div class="blog-detail">
							<div class="entry-title mb-10">
								<router-link :to="{name: 'BlogDetail', params: {slug: post.slug}}" >{{post.title}}</router-link>
							</div>
							<div class="entry-meta mb-10">
								<ul class="list-unstyled">
									<li><a href="javascript:void(0);"><i class="fa fa-folder-open-o"></i> {{post.category.title}}</a></li>
									<!-- <li><a href="#"><i class="fa fa-comment-o"></i> 5</a></li> -->
									<li><a href="javascript:void(0);"><i class="fa fa-calendar-o"></i>{{post.createdAt | formatDate}} </a></li>
								</ul>
							</div>
							<div class="entry-content">
								<p>{{post.description}}</p>
							</div>
							<div class="entry-share d-flex justify-content-between align-items-center">
								<div class="entry-button">
									<router-link class="btn btn-primary btn-sm" :to="{name: 'BlogDetail', params: {slug: post.slug}}" >See more</router-link>
								</div>
								<div class="social">
									<strong>Share : </strong>
									<ul class="list-unstyled">
										<li>
											<a href="#"> <i class="fa fa-facebook"></i> </a>
										</li>
										<li>
											<a href="#"> <i class="fa fa-twitter"></i> </a>
										</li>
										<li>
											<a href="#"> <i class="fa fa-pinterest-p"></i> </a>
										</li>
										<li>
											<a href="#"> <i class="fa fa-dribbble"></i> </a>
										</li>
									</ul>
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

<script lang="ts" src="./home.component.ts">
</script>
<style>
.vs__dropdown-toggle, vs--searchable {
    border: none !important;
}
</style>
