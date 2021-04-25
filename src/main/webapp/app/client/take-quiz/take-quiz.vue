<template id="events-template'">
<div>
    <section class="bg-img pt-150 pb-20" data-overlay="7" style="background-image: url(content/images/front-end-img/background/bg-8.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="text-center">
                        <h2 class="page-title text-white">Entrance Test</h2>
                        <ol class="breadcrumb bg-transparent justify-content-center">
                            <li class="breadcrumb-item"><router-link :active-class="'text-white-50'" to="/"><i class="mdi mdi-home-outline"></i></router-link></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Quiz</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div v-if="test">
        <div class="card"
          style=" background-color: #e9ecef;
                  width: 80%;
                  margin: 2rem auto;">
          <div class="card-body">
            <div class="container page__heading-container my-3 p-0">
                <div class="page__heading d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between" style="padding-left:1rem;">
                    <div>
                        <h1 class="m-lg-3 text-center">Title: <strong>{{test.name}}</strong></h1>
                    </div>
                </div>
            </div>
            <div class="container page__container">
                <div class="text-body" style="padding-left: 0.6rem;font-size: 1.2rem;">You must correct at least <strong class="text-primary">{{questionPass}}</strong>  out of <strong class="text-primary">{{totalQuestion}}</strong>  questions to pass  </div>
                <div class="alert alert-soft-blue d-flex align-items-center card-margin p-2" role="alert">
                    <i class="fa fa-clock-o" style="font-size:1.4rem"></i>
                    <div class="text-body" style="font-size: 1.2rem;">Time: <strong class="text-primary">{{test.time}} minutes</strong>  </div>
                    <div v-if="applyJob" style="margin-left:auto; display:flex;font-size: 1.2rem;">
                      <span>Time Remaining：</span>
                      <div v-for="(a, index) in applyJob" :key="index" style="font-weight:700;">
                        <!-- <countdown class="text-warning" v-if="a.jobDTO.testId && ((((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) / (test.time * 60) * 100) < 50) && ((((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) / (test.time * 60) * 100) >= 30)" :time="((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) * 1000"
                          v-slot="{minutes, seconds}" >
                          {{ minutes }} minutes : {{ seconds }} seconds.
                        </countdown> -->

                        <countdown class="text-primary" v-if="a.jobDTO.testId && ((((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) / (test.time * 60) * 100) >= 50)" :time="((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) * 1000"
                          v-slot="{hours, minutes, seconds}" >
                          {{ hours }} hours : {{ minutes }} minutes : {{ seconds }} seconds.
                        </countdown>

                        <countdown class="text-warning" v-if="a.jobDTO.testId && ((((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) / (test.time * 60) * 100) < 50) && ((((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) / (test.time * 60) * 100) >= 30)" :time="((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) * 1000"
                          v-slot="{minutes, seconds}" >
                          {{ minutes }} minutes : {{ seconds }} seconds.
                        </countdown>
                        <countdown class="text-danger" v-if="a.jobDTO.testId && ((((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) / (test.time * 60) * 100) < 30)" :time="((test.time * 60) -
                          (moment.utc(new Date()).diff(moment.utc(a.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'))) * 1000"
                          v-slot="{minutes, seconds}" >
                          {{ minutes }} minutes : {{ seconds }} seconds.
                        </countdown>
                      </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8 mx-auto" v-if="test.questions">
                        <div class="card" v-for="(q, i) in test.questions" :key="i">
                            <div class="card-header">
                                <div class="media align-items-center" style="width:100%;">
                                    <div class="media-left">
                                        <h4 class="m-0 text-primary mr-2"><strong>{{i+1}}</strong></h4>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="card-title m-0">
                                            {{q.questionTitle}}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div v-if="q.answerOne != null">
                                  <div class="form-group">
                                        <div class="custom-control ">
                                            <input v-model="q.correctAnswer" :id="'customCheck01'+q.id+i" type="radio" :name="'question'+q.id" :value="1" class="filled-in">
                                            <label :for="'customCheck01'+q.id+i" class="custom-control-label">{{q.answerOne}}</label>
                                        </div>
                                    </div>
                                  </div>
                                  <div v-if="q.answerTwo != null">
                                    <div class="form-group">
                                        <div class="custom-control">
                                            <input v-model="q.correctAnswer" :id="'customCheck02'+q.id+i" type="radio" :name="'question'+q.id" :value="2" class="filled-in">
                                            <label :for="'customCheck02'+q.id+i" class="custom-control-label">{{q.answerTwo}}</label>
                                        </div>
                                    </div>
                                  </div>
                                  <div v-if="q.answerThree != null">
                                    <div class="form-group">
                                        <div class="custom-control">
                                            <input v-model="q.correctAnswer" :id="'customCheck03'+q.id+i" type="radio" :name="'question'+q.id" :value="3" class="filled-in">
                                            <label :for="'customCheck03'+q.id+i" class="custom-control-label">{{q.answerThree}}</label>
                                        </div>
                                    </div>
                                  </div>
                                  <div v-if="q.answerFour != null">
                                    <div class="form-group">
                                        <div class="custom-control">
                                            <input v-model="q.correctAnswer" :id="'customCheck04'+q.id+i" type="radio" :name="'question'+q.id" :value="4" class="filled-in">
                                            <label :for="'customCheck04'+q.id+i" class="custom-control-label">{{q.answerFour}}</label>
                                        </div>
                                    </div>
                                  </div>
                                </div>

                        </div>

                        <!--                submit-->

                        <div class="card">

                            <div class="card-footer">
                                <!-- <button type="button" class="btn btn-secondary" @click="reset" >Reset </button> -->
                                <button type="button" class="btn btn-success float-right" @click="submit">Submit </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</div>
</template>

<script lang="ts" src="./take-quiz.component.ts">
</script>

<style scoped>

</style>
