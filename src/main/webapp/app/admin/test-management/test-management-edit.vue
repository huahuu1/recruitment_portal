<template>
    <div class="content-wrapper">
        <div class="container-full">
            <!-- Main content -->
            <section class="content" style="min-height: 800px">
                <div class="container">
                    <h2>
                        <span id="user-management-page-heading">Add new test</span>
                        <button type="button" class="ml-3 btn btn-primary float-right" @click="save"><font-awesome-icon
                            icon="save"></font-awesome-icon>&nbsp;Save</button>
                        <router-link tag="button" class="btn btn-primary float-right jh-create-entity" :to="{name: 'TestManagement'}" :disabled='this.questions.length === 0 || isDisabled' > <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                        </router-link>
                    </h2>
                </div>
                <div class="row my-3">
                    <div class="form-group row w-100">
                        <div class="col-md-1"></div>
                        <label for="testName" class="control-label col-md-1 pt-3">Title:
                            <span class="text-danger">*</span></label>
                        <div class="col-md-8">
                            <input type="text" id="testName" name="name"
                                   placeholder="Title of test"
                                   :class="{'border-red' : !test.name && isError}"
                                   class="form-control" v-model="test.name"></div>
                    </div>
                    <div class="form-group row w-100">
                        <div class="col-md-1"></div>
                        <label for="testTime" class="control-label col-md-1 pt-3">Time:
                            <span class="text-danger">*</span>
                        </label>
                        <div class="col-md-8">
                            <input type="number" id="testTime" name="time"
                                   placeholder="Time of test"
                                   :class="{'border-red' : !test.time && isError}"
                                   class="form-control" v-model="test.time">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="container page__container">
                        <div class="card">
                            <div class="card-body card-form__body">
                                <div>
                                    <div class="form-group mb-3">
                                        <label class="control-label h6">Question:</label>
                                        <input type="text" name="questionTitle" v-model="qTitle" class="form-control">
                                    </div>
                                    <button type="button" @click="addQuestion" class="btn btn-primary"><font-awesome-icon icon="plus"></font-awesome-icon> Add</button>
                                </div>
                            </div>
                        </div>
                        <div id="questions_wrapper" v-if="questions">
                            <div class="card mb-4" data-position="1" data-question-id="1" v-for="(q, i) in questions" :key="i">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="d-flex align-items-center ">
                                        <div class="h4 m-0 ml-4">Q: {{q.questionTitle}}</div>
                                        <span>
                                            <strong class="text-danger" v-if="q.error">{{q.error}}</strong>
                                        </span>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-danger btn-sm" @click="prepareRemove(q)">Delete</button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div id="answerWrapper_1" class="mb-4">
                                        <div class="row mb-1">
                                            <div class="col"><strong></strong></div>
                                            <div class="col text-right"><strong>Answer</strong></div>
                                        </div>
                                        <form action="#">
                                            <ul class="list-group" id="answer_container_1">
                                                <li class="list-group-item d-flex" >
                                                    <span class="mr-2 pt-2">1. </span>
                                                    <div class="w-70">
                                                        <input type="text" v-model="q.answerOne" class="form-control">
                                                    </div>
                                                    <div class="ml-auto">
                                                        <input type="radio" :disabled="!q.answerOne || !q.answerOne.trim()" :value="1" v-model="q.correctAnswer" name="correctAnswer" :id="'correctAnswer_' + 1" >
                                                    </div>
                                                </li>
                                                <li class="list-group-item d-flex" >
                                                    <span class="mr-2 pt-2">2. </span>
                                                    <div class="w-70">
                                                        <input type="text" v-model="q.answerTwo" class="form-control">
                                                    </div>
                                                    <div class="ml-auto">
                                                        <input type="radio" :disabled="!q.answerTwo || !q.answerTwo.trim()" :value="2" v-model="q.correctAnswer" name="correctAnswer" :id="'correctAnswer_' + 2" >
                                                    </div>
                                                </li>
                                                <li class="list-group-item d-flex" >
                                                    <span class="mr-2 pt-2">3. </span>
                                                    <div class="w-70">
                                                        <input type="text" v-model="q.answerThree" class="form-control">
                                                    </div>
                                                    <div class="ml-auto">
                                                        <input type="radio" :disabled="!q.answerThree || !q.answerThree.trim()" :value="3" v-model="q.correctAnswer" name="correctAnswer" :id="'correctAnswer_' + 3" >
                                                    </div>
                                                </li>
                                                <li class="list-group-item d-flex" >
                                                    <span class="mr-2 pt-2">4. </span>
                                                    <div class="w-70">
                                                        <input type="text" v-model="q.answerFour" class="form-control">
                                                    </div>
                                                    <div class="ml-auto">
                                                        <input type="radio" :disabled="!q.answerFour || !q.answerFour.trim()" :value="4" v-model="q.correctAnswer" name="correctAnswer" :id="'correctAnswer_' + 4" >
                                                    </div>
                                                </li>

                                            </ul>
                                        </form>
                                    </div>
                                    <!--<div class="">
                                        <form action="#">
                                            <div class="form-group mb-0">
                                                <button class="btn btn-success">New Answer</button>
                                            </div>
                                        </form>
                                    </div>-->
                                </div>
                            </div>
                            <b-modal ref="removeQuestion" id="removeQuestion" title="Delete question" @ok="deleteQuestion()">
                                <div class="modal-body">
                                    <p id="jhi-delete-user-heading">Are you sure you want to delete this question?</p>
                                </div>
                                <div class="text-right" slot="modal-footer">
                                    <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Hủy</button>
                                    <button type="button" class="btn btn-primary" id="confirm-delete-user" v-on:click="deleteQuestion()">Delete</button>
                                </div>
                            </b-modal>

                        </div>
                        <div class="row justify-content-end px-3">
                            <router-link tag="button" class="btn btn-primary float-right jh-create-entity" :to="{name: 'TestManagement'}" :disabled='this.questions.length === 0 || isDisabled'> <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span
                            >Cancel</span> </router-link>
                            <button type="button" class="ml-3 btn btn-primary" @click="save"><font-awesome-icon
                                icon="save"></font-awesome-icon>&nbsp;Save</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts" src="./test-management-edit.component.ts">
</script>

<style scoped>
input[type="radio"] {
    position: unset !important;
    opacity: 1 !important;
}
.w-70 {
    width: 70% !important;
}
input[type="text"], input[type="number"] {
    border-color: #0A246A;
}
.border-red {
    border-color: red !important;
}
.w-100 {
    width: 100% !important;
}

</style>
