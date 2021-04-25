<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <div class="container-full">
            <!-- Main content -->
            <section class="content" style="min-height: 800px">
                <h2>
                    <span id="user-management-page-heading">Test management</span>
                    <router-link tag="button" class="btn btn-primary float-right jh-create-entity" :to="{name: 'TestCreate'}"> <font-awesome-icon icon="plus"></font-awesome-icon> <span>Add new</span> </router-link>
                </h2>
                <div class="row">
                        <div class="col-12">
                            <div class="box">
                                <div class="box-body">
                                    <div class="row float-right">
                                        <div class="form-group">
                                            <input type="text" v-model="keyword" @input="handleSearch()" id="search" name="search" placeholder="Search" class="form-control valid">
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table mb-0 w-p100">
                                            <thead>
                                            <tr>
                                                <th> STT </th>
                                                <th> Title of post </th>
                                                <th> Time </th>
                                                <th> Number of questions </th>
                                                <th> Status </th>
                                                <th> Creation date </th>
                                                <th> Actions </th>
                                            </tr>
                                            </thead>
                                            <tbody v-if="!tests || tests.length === 0">
                                            <tr>
                                                <td colspan="6" class="text-center">No data</td>
                                            </tr>
                                            </tbody>
                                            <tbody v-else>
                                            <tr v-for="(t, i) in tests" :key="i">
                                                <td>{{i+1}}</td>
                                                <td>{{t.name}}</td>
                                                <td>{{t.time}}</td>
                                                <td>{{t.questions ? t.questions.length : 0}}</td>
                                                <td class="text-center">
                                                    <button class="btn btn-danger btn-xs deactivated" v-on:click="updateStatus(t, true)" v-if="!t.status"><i class="mdi mdi-lock-outline"></i>Lock</button>
                                                    <button class="btn btn-success btn-xs" v-on:click="updateStatus(t, false)" v-if="t.status" ><i class="mdi mdi-lock-open-outline"></i>Active</button>
                                                </td>
                                                <td>{{t.createAt | formatDate}}</td>
                                                <td class="text-center">
                                                    <div class="">
                                                        <router-link :to="{name: 'TestUpdate', params: {testId: t.id}}" tag="button" class="btn btn-outline-primary btn-sm edit">
                                                            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">Edit</span>
                                                        </router-link>
                                                        <b-button v-on:click="prepareRemove(t)" variant="outline-danger" class="btn btn-sm btn-outline-danger delete">
                                                            <font-awesome-icon icon="times"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">Delete</span>
                                                        </b-button>
                                                    </div>
                                                </td>
                                            </tr>

                                            </tbody>

                                        </table>
                                        <b-modal ref="removeUser" id="removeUser" title="Delete user" @ok="deleteApply()">
                                            <div class="modal-body">
                                                <p id="jhi-delete-user-heading">Are you sure you want to delete?</p>
                                            </div>
                                            <div class="text-right" slot="modal-footer">
                                                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Hủy</button>
                                                <button type="button" class="btn btn-primary" id="confirm-delete-user" v-on:click="deleteApply()">Delete</button>
                                            </div>
                                        </b-modal>
                                    </div>
                                    <div v-show="tests && tests.length > 0">
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
        </div>
    </div>

</template>

<script lang="ts" src="./test-management.component.ts"></script>

<style scoped>
th, td {
    text-align: center;
}
</style>
