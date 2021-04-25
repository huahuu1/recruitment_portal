<template>
    <div class="content-wrapper">
      <div class="container-full">
        <section class="content">
          <div class="row justify-content-center">
              <div class="col-11">
                  <div class="box">
                      <div class="box-header">
                        <h2 class="box-title" id="myUserLabel"><span v-if="!job.id">Add new job</span><span v-else>Edit job</span></h2>
                      </div>
                      <div class="box-body">
                          <form name="editForm" role="form" novalidate v-on:submit.prevent="save()">
                              <div>
                                  <div class="form-group">
                                      <label class="form-control-label" for="title">Job name</label>
                                      <input type="text" class="form-control" id="title" name="title" placeholder="Enter the job name"
                                            :class="{'valid': !$v.job.title.$invalid, 'invalid': $v.job.title.$invalid }"
                                            v-model="$v.job.title.$model">
                                      <div v-if="$v.job.title.$anyDirty && $v.job.title.$invalid">
                                          <small class="form-text text-danger"
                                                v-if="!$v.job.title.required">
                                              This information is required
                                          </small>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="form-control-label" for="position">Position</label>
                                      <input type="text" class="form-control" id="position" name="position" placeholder="Enter position"
                                            :class="{'valid': !$v.job.position.$invalid, 'invalid': $v.job.position.$invalid }"
                                            v-model="$v.job.position.$model">
                                      <div v-if="$v.job.position.$anyDirty && $v.job.position.$invalid">
                                          <small class="form-text text-danger"
                                                v-if="!$v.job.position.required">
                                              This information is required
                                          </small>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="form-control-label" for="skill">Skill</label>
                                      <input type="text" class="form-control" id="skill" name="skill" placeholder="Enter skill"
                                            v-model="job.skill">
                                  </div>
                                  <div class="form-group">
                                      <label for="scopeWork" class="form-control-label">Scope work </label>
                                      <div class="" v-if="careerLst">
                                          <v-select
                                              id="scopeWork"
                                              name="scopeWork"
                                              class="form-control"
                                              multiple
                                              label="title"
                                              v-model="job.scopeWork"
                                              :options="careerLst"
                                              :reduce="c => c.id"
                                          />
                                      </div>
                                  </div>
                                  <div class="form-group" v-if="locationLst && locationLst.length > 0">
                                      <label for="salary">Location</label>
                                      <select class="form-control" id="locationId" name="locationId" v-model="job.locationId">
                                          <option v-for="(s) in locationLst" :value="s.id" :key="s.id">{{s.name}}</option>
                                      </select>
                                  </div>
                                  <div class="row">
                                      <div class="form-group col-sm-6" v-if="salaryLst && salaryLst.length > 0">
                                          <label for="salary">Salary</label>
                                          <select class="form-control" id="salary" name="salary" v-model="job.salary">
                                              <option v-for="(s) in salaryLst" :value="s.id" :key="s.id">{{s.name}}</option>
                                          </select>
                                      </div>
                                      <div class="form-group col-sm-6" v-if="jobTypeLst && jobTypeLst.length > 0">
                                          <label for="jobType">Job type</label>
                                          <select class="form-control" id="jobType" name="jobType" v-model="job.jobType">
                                              <option v-for="(j, key) in jobTypeLst" :value="j.id" :key="key">{{j.name}}</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="form-group col-sm-6" v-if="experienceLst && experienceLst.length > 0">
                                          <label for="experience">Years of experience</label>
                                          <select class="form-control" id="experience" name="experience" v-model="job.experience">
                                              <option v-for="(e, key) in experienceLst" :value="e.id" :key="key">{{e.name}}</option>
                                          </select>
                                      </div>
                                      <div class="form-group col-sm-6">
                                          <label class="form-control-label" for="recruiteNumber">Number of recruitment</label>
                                          <input type="number" class="form-control" id="recruiteNumber" name="recruiteNumber" placeholder="Enter the quantity"
                                                v-model="job.recruiteNumber">
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="form-control-label" for="deadline">Application deadline</label>
                                      <!-- <input type="date" class="form-control" id="deadline" name="deadline" placeholder="Enter application deadline"
                                            v-model="job.deadline"> -->
                                      <input onkeydown="return false" type="date" class="form-control" id="deadline" name="deadline" placeholder="Enter application deadline"
                                            :class="{'valid': !$v.job.deadline.$invalid, 'invalid': $v.job.deadline.$invalid }"
                                            v-model="$v.job.deadline.$model">
                                      <div v-if="$v.job.deadline.$anyDirty && $v.job.deadline.$invalid">
                                          <small class="form-text text-danger"
                                                v-if="!$v.job.deadline.required">
                                              This information is required
                                          </small>
                                      </div>
                                  </div>
                                  <div class="form-group" v-if="tests && tests.length > 0">
                                      <label for="experience">Test</label>
                                      <select class="form-control" id="testId" name="testId" v-model="job.testId">
                                          <option v-for="(t, key) in tests" :value="t.id" :key="key">{{t.name}}</option>
                                      </select>
                                  </div>
                                  <div class="form-group">
                                  <vue-editor v-model="job.content"
                                              ></vue-editor>
                                  </div>
                              </div>
                              <div>
                                  <router-link tag="button" :to="{name: 'JobManagement'}" class="btn btn-secondary">
                                      <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;
                                      <span >Cancel</span>
                                  </router-link>
                                  <button type="submit" class="btn btn-primary" :disabled="$v.job.$invalid || isSaving">
                                      <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span >Save</span>
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>

              </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script lang="ts" src="./job-management-edit.component.ts">
</script>

<style scoped>
.form-control,input[type="text"], input[type="number"] {
    border-color: #0A246A;
}
</style>
