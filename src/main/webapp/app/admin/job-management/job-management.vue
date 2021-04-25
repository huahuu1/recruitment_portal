<template>
     <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
	  <div class="container-full">
		<!-- Main content -->
		<section class="content" style="min-height: 800px">
            <h2>
                <span id="user-management-page-heading">Job management</span>
                <div class="row float-right">
                    <div class="form-group " :class="{'col-sm-6': isEmployer, 'col-sm-12': !isEmployer }">
                        <input type="text" v-model="keyword" @input="handleSearch()" id="search" name="search" placeholder="Search" class="form-control valid">
                    </div>
                    <div class="col-sm-6" v-if="isEmployer">
                        <router-link tag="button" class="btn btn-primary jh-create-entity" :to="{name: 'JobNewManagement'}">
                            <font-awesome-icon icon="plus"></font-awesome-icon> <span>Add new</span>
                        </router-link>
                    </div>
                </div>

            </h2>
			<br><br>

			<div class="row" v-if="jobs && jobs.length > 0">
				<div class="col-lg-4 col-12" v-for="(job, i) in jobs" :key="i">
					<div class="box">
						<div class="box-body">
							<div class="d-flex flex-wrap align-items-center">
								<div class="mr-25 bg-danger-light h-60 w-60 rounded text-center b-1">
									  <img :src="loadImage(job.company.logo)" class="align-self-center" alt="">
								</div>
								<div class="d-flex flex-column flex-grow-1 my-lg-0 my-10 pr-15">
									<span class="text-fade font-weight-600 font-size-16">
										{{job.company.name}}
									</span>
									<a href="javascript:void(0)" class="text-dark font-weight-600 hover-danger font-size-18">
										{{job.position}}
									</a>
								</div>
							</div>
							<div class="mt-20">
								<h4 class="text-primary mb-20">{{job.salaryName}}</h4>
								<p>{{job.title}} </p>
								<p>Status:
									<span style="cursor: pointer" class="label label-success" @click="changeStatusJob(job.id)" v-if="job.status==1">Show</span>
									<span style="cursor: pointer" class="label label-danger" @click="changeStatusJob(job.id)" v-if="job.status==0">Hide</span>
								</p>
								<!--<div class="d-flex flex-column w-p100 mt-30">
									<span class="text-dark mr-10 font-size-16 font-weight-600 pb-15">
										Opening Jobs (15/20)
									</span>

									<div class="progress progress-xs w-p100">
										<div class="progress-bar bg-danger" role="progressbar" style="width: 65%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>-->
								<div class="mt-10 d-flex justify-content-between align-items-center">
                  <div>
                    <router-link v-if="hasRole(EMPLOYER)" :to="{name: 'JobEditManagement', params: {jobId: job.id}}">
                        <a href="#" class="waves-effect waves-light btn btn-sm btn-primary mb-5" style="padding: 0.5rem 1.5rem;">Edit</a>
                    </router-link>
                    <!-- <a v-if="hasRole(EMPLOYER)" href="javascript:void(0)" @click="prepareRemove(job)" class="waves-effect waves-light btn btn-sm btn-danger mb-5">Delete</a> -->
                  </div>

									<p v-if="job.province" class="mb-0 text-fade"><i class="fa fa-map-marker"></i> {{job.province.name}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
            <div v-else>
                <p class="text-center">No data!</p>
            </div>

            <div v-show="jobs && jobs.length > 0">
                <div class="row justify-content-center">
                    <jhi-item-count :page="page" :total="queryCount" :itemsPerPage="itemsPerPage"></jhi-item-count>
                </div>
                <br />
                <div class="row justify-content-center">
                    <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
                </div>
            </div>

            <b-modal ref="removeJob" id="removeJob" title="Delete " @ok="deleteJob()">
                <div class="modal-body">
                    <p id="jhi-delete-user-heading">You definitely want to delete ?</p>
                </div>
                <div class="text-right" slot="modal-footer">
                    <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                    <button type="button" class="btn btn-primary" id="confirm-delete-user" v-on:click="deleteJob()">Delete</button>
                </div>
            </b-modal>
		</section>
		<!-- /.content -->
	  </div>
  </div>
  <!-- /.content-wrapper -->
</template>
<script src="./job-management.component.ts">
</script>
<style lang="css" scoped>
</style>
