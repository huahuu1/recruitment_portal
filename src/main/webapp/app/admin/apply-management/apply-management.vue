<template>
    <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
	  <div class="container-full">
		<!-- Main content -->
		<section class="content" style="min-height: 800px">
            <h2>
                <span id="user-management-page-heading">Managing candidates</span>
            </h2>
			<div class="row">
				<div class="col-12">
					<div class="box">
						<div class="box-body">
                            <div class="row float-right">
                                <div class="form-group">
                                    <input type="text" v-model="keyword" @input="handleSearch()" id="search" name="search" placeholder="Tìm kiếm" class="form-control valid">
                                </div>
                            </div>
							<div class="table-responsive">
							  <table class="table mb-0 w-p100">
								<thead>
									<tr>
										<th>No.</th>
										<th>Full name</th>
										<th>Application date</th>
										<th>Job</th>
										<th>Type</th>
										<th>Position</th>
										<th>Result</th>
                    <th>Send test</th>
										<th>Status</th>
										<th>Actions</th>
									</tr>
								</thead>
                                  <tbody v-if="!applyLst || applyLst.length === 0">
                                  <tr>
                                      <td colspan="10">No data</td>
                                  </tr>
                                  </tbody>
								<tbody v-else>
									<tr v-for="(apply, i) in applyLst" :key="i">
										<td>{{i+1}}</td>
										<td style="width:9rem;">{{apply.profileDTO.user.firstName + ' ' + apply.profileDTO.user.lastName}}</td>
										<td>{{apply.applyDate | formatDate}}</td>
										<td>
											<div class="d-flex justify-content-center" style="width:10rem;">
												<!-- <div class="mr-25 h-60 w-60 rounded text-center b-1">
													  <img :src="loadImage(apply.jobDTO.company.logo)" class="align-self-center" alt="">
												</div> -->
												<span class="text-fade font-weight-600 font-size-14">
													{{apply.jobDTO.title}}
                          <!-- <br><small>{{apply.jobDTO.company.address}}</small> -->
												</span>
											</div>
										</td>
										<td style="width:5rem;">{{apply.jobDTO.jobTypeName}}</td>
										<td>{{apply.jobDTO.position}}</td>
										<td title= "Number of correct answers/ Total">{{ (apply.totalCorrectAnswer && apply.totalQuestion)
                                            ? (Math.ceil(apply.totalCorrectAnswer * 100/apply.totalQuestion) ) + '% ' + '(' +apply.totalCorrectAnswer + '/' + apply.totalQuestion + ')'
                                            : "Haven't done the test yet"}}</td>
										<!--<td>
											<div class="d-flex align-items-center gap-items-2">
												<button type="button" class="waves-effect waves-circle btn btn-circle btn-success btn-xs"><i class="mdi mdi-phone"></i></button>
												<button type="button" class="waves-effect waves-circle btn btn-circle btn-warning btn-xs"><i class="mdi mdi-email"></i></button>
											</div>
										</td>-->
                                        <td class="text-center">
                                            <span style="color:red" v-if="!apply.tokenId">Have not sent the test yet</span>
                                            <span style="color:green" v-else-if="apply.tokenId&&apply.sendAt">Sent the test</span>
                                        </td>
                                        <td class="text-center" style="width:16rem">
                                            <select class="custom-select" @change="preUpdateStatus(apply, $event)" v-model="apply.status">
                                                <option :value="1">New application</option>
                                                <option :value="2">Contact interview</option>
                                                <option :value="3">Waiting for interview</option>
                                                <option :value="4">Wait for the results of the interview</option>
                                                <option :value="5">Pass</option>
                                                <option :value="6">Fail</option>
                                            </select>
                                        </td>
                                        <td class="text-center">
                                            <div class="">
                                                <b-button v-if="apply.cv" v-on:click="viewCV(apply.cv.id)" variant="outline-primary" class="btn btn-sm btn-outline-primary">
                                                    <font-awesome-icon icon="eye"></font-awesome-icon>
                                                    <span class="d-none d-md-inline">CV</span>
                                                </b-button>
                                                <b-button v-if="apply.status == 3 && !addTimeInterview"  variant="outline-success" class="btn btn-sm btn-outline-success" v-b-popover.click.blur.html="'<strong>Interview time: </strong>'+convertTime(apply.applyJobInterview.interviewTime) + ' ' + formatDateInterview(apply.applyJobInterview.interviewTime) + '<hr><strong>Location: </strong>'+apply.applyJobInterview.address+'<hr> <strong>Interviewer: </strong>' + (apply.applyJobInterview.interviewer?apply.applyJobInterview.interviewer:'Not update') + '<hr> <strong>Appointment person: </strong>'+(apply.applyJobInterview.user.firstName?apply.applyJobInterview.user.firstName:'') + ' ' + (apply.applyJobInterview.user.lastName?apply.applyJobInterview.user.lastName:'') " title="Schedule">Schedule</b-button>
                                                <b-button v-if="apply.profileDTO.user.email" v-on:click="viewEmail(apply)" variant="outline-warning" class="btn btn-sm btn-outline-warning">
                                                    <font-awesome-icon icon="flag"></font-awesome-icon>
                                                    <span class="d-none d-md-inline">Email</span>
                                                </b-button>
                                                <b-button v-on:click="prepareRemove(apply)" variant="outline-danger" class="btn btn-sm btn-outline-danger delete">
                                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                                    <span class="d-none d-md-inline">Delete</span>
                                                </b-button>
                                            </div>
                                        </td>
									</tr>

								</tbody>

							</table>
                                <b-modal ref="removeUser" id="removeUser" title="Delete " @ok="deleteApply()">
                                    <div class="modal-body">
                                        <p id="jhi-delete-user-heading">Are you sure you want to delete?</p>
                                    </div>
                                    <div class="text-right" slot="modal-footer">
                                        <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                                        <button type="button" class="btn btn-primary" id="confirm-delete-user" v-on:click="deleteApply()">Delete</button>
                                    </div>
                                </b-modal>
                                <b-modal ref="updateStatus" id="updateStatus" title="Update schedule" @hidden="cancelUpdateStatus()" @ok="updateStatus()">
                                    <div class="modal-body">
                                        <p id="jhi-update-status-heading">Are you sure you want to change your status?</p>
                                        <div v-if="addTimeInterview">
                                            <form name="editForm" role="form" novalidate>
                                                <div>
                                                    <div class="form-group">
                                                        <label class="form-control-label">Interview time</label>
                                                        <br>
                                                        <date-picker :disabled-date="disableDate"  style="width:100%" class="form-control" :class="{'valid': !$v.applyJobInterview.interviewTime.$invalid, 'invalid': $v.applyJobInterview.interviewTime.$invalid }" v-model="$v.applyJobInterview.interviewTime.$model" type="datetime"></date-picker>
                                                        <div v-if="$v.applyJobInterview.interviewTime.$anyDirty && $v.applyJobInterview.interviewTime.$invalid">
                                                            <small class="form-text text-danger"
                                                                v-if="!$v.applyJobInterview.interviewTime.required">
                                                            This information is required
                                                            </small>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="form-control-label">Interview address</label>
                                                            <textarea :class="{'valid': !$v.applyJobInterview.address.$invalid, 'invalid': $v.applyJobInterview.address.$invalid}" class="form-control" name="description"
                                                        v-model="$v.applyJobInterview.address.$model"></textarea>
                                                        <div v-if="$v.applyJobInterview.address.$anyDirty && $v.applyJobInterview.address.$invalid">
                                                            <small class="form-text text-danger"
                                                                v-if="!$v.applyJobInterview.address.required">
                                                                This information cannot be left blank
                                                            </small>
                                                        </div>
                                                    </div>
                                                     <div class="form-group">
                                                        <label class="form-control-label">Interviewer</label>
                                                            <input type="text" class="form-control" name="description"
                                                        v-model="applyJobInterview.interviewer">
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="text-right" slot="modal-footer">
                                        <button type="button" class="btn btn-secondary" v-on:click="closeDialogUpdateStatus()">Cancel</button>
                                        <button :disabled="$v.applyJobInterview.$invalid && addTimeInterview" type="button" class="btn btn-primary" id="confirm-update-status" v-on:click="updateStatus()">Confirm</button>
                                    </div>
                                </b-modal>
                                <b-modal ref="viewEmail" id="viewEmail" title="Send email to candidate" @ok="sendEmail()" v-if="emailInfo.email">
                                    <div class="modal-body">
                                        <p v-if="emailInfo.name"><strong>Full name: </strong>{{emailInfo.name}}</p>
                                        <p v-if="emailInfo.email"><strong>Email: </strong>{{emailInfo.email}}</p>
                                        <br>
                                        <form name="editForm" role="form" novalidate>
                                            <div>
                                                <div class="form-group">
                                                    <label class="form-control-label">Topic</label>
                                                    <input type="text" class="form-control" name="title"
                                                        :class="{'valid': !$v.emailInfo.subject.$invalid, 'invalid': $v.emailInfo.subject.$invalid }"
                                                        v-model="$v.emailInfo.subject.$model">
                                                    <div v-if="$v.emailInfo.subject.$anyDirty && $v.emailInfo.subject.$invalid">
                                                        <small class="form-text text-danger"
                                                            v-if="!$v.emailInfo.subject.required">
                                                        This information is required
                                                        </small>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-control-label">Content</label>
                                                    <div class="form-control">
                                                        <vue-editor v-model="$v.emailInfo.content.$model"></vue-editor>
                                                    </div>
                                                    <div v-if="$v.emailInfo.content.$anyDirty && $v.emailInfo.content.$invalid">
                                                        <small class="form-text text-danger"
                                                            v-if="!$v.emailInfo.content.required">
                                                            This information cannot be left blank
                                                        </small>
                                                    </div>
                                                </div>
                                                <div class="checkbox">
                                                    <input type="checkbox" id="basic_checkbox_1" v-model="emailInfo.isSendTest">
                                                    <label @click="changeCheckbox()" for="basic_checkbox_1">Attach the test</label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="text-right" slot="modal-footer">
                                        <button :disabled="$v.emailInfo.$invalid" type="button" class="btn btn-primary" v-on:click="sendEmail()">Send email</button>
                                    </div>
                                </b-modal>
							</div>
                            <div v-show="applyLst && applyLst.length > 0">
                                <div class="row justify-content-center">
                                    <jhi-item-count :page="page" :total="queryCount" :itemsPerPage="itemsPerPage"></jhi-item-count>
                                </div>
                                <br />
                                <div class="row justify-content-center">
                                    <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
                                </div>
                            </div>
						</div>
						<!-- /.box-body -->
					  </div>
				</div>
			</div>
		</section>
		<!-- /.content -->
	  </div>
  </div>
  <!-- /.content-wrapper -->
</template>
<script src="./apply-management.component.ts">
</script>
<style lang="css" scoped>
th , td{
    text-align: center;
}
.custom-select {
    width: 70% !important;
}
</style>
