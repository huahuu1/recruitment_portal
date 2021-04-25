<template>
    <div class="content-wrapper" style="min-height: 800px">
        <div class="container-full">
            <!-- Main content -->
            <section class="content">
                <!--<h2>
                    <span id="user-management-page-heading">Quản lý người dùng</span>
                    <router-link tag="button" class="btn btn-primary float-right jh-create-entity" :to="{name: 'UserCreate'}"> <font-awesome-icon icon="plus"></font-awesome-icon> <span>Thêm mới</span> </router-link>
                </h2>-->
                <b-alert :show="dismissCountDown" dismissible :variant="alertType" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
                    {{alertMessage}}
                </b-alert>
                <div class="row">
                    <div class="col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="table-responsive" v-if="users">
                                    <table id="example" class="table mb-0 w-p100">
                                        <thead>
                                            <tr>
                                                <th class = "text-center"> ID </th>
                                                <th class = "text-center"> Account </th>
                                                <th class = "text-center"> Email </th>
                                                <th class = "text-center"> Phone</th>
                                                <th class = "text-center"> Role </th>
                                                <th class = "text-center"> Status </th>
                                                <th class = "text-center"> Actions </th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="users">
                                            <tr v-for="user in users" :key="user.id" :id="user.login">
                                                <td class="text-center"><router-link tag="a" :to="{name: 'UserView', params: {userId: user.login}}">{{user.id}}</router-link></td>
                                                <td class="text-center">{{user.login}}</td>
                                                <td class="jhi-user-email">{{user.email}}</td>
                                                <td class="">{{user.phone}}</td>
                                                <td class="text-center">
                                                    <div v-for="authority of user.authorities" :key="authority">
                                                        <span class="badge badge-primary">{{ authority }}</span>
                                                    </div>
                                                </td>
                                                <td class="text-center">
                                                    <button class="btn btn-danger btn-xs deactivated" v-on:click="setActive(user, true)" v-if="!user.activated"><i class="mdi mdi-lock-outline"></i>Lock</button>
                                                    <button class="btn btn-success btn-xs" v-on:click="setActive(user, false)" v-if="user.activated" :disabled="username === user.login"><i class="mdi mdi-lock-open-outline"></i>Active</button>
                                                </td>
                                                <td class="text-center">
                                                    <div class="">
                                                        <router-link :to="{name: 'UserView', params: {userId: user.login}}" tag="button" class="btn btn-outline-info btn-sm details">
                                                            <font-awesome-icon icon="eye"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">View</span>
                                                        </router-link>
                                                        <!--<router-link :to="{name: 'UserEdit', params: {userId: user.login}}" tag="button" class="btn btn-outline-primary btn-sm edit">
                                                            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">Sửa</span>
                                                        </router-link>-->
                                                        <!-- <b-button v-on:click="prepareRemove(user)" variant="outline-danger" class="btn btn-sm btn-outline-danger delete" :disabled="username === user.login">
                                                            <font-awesome-icon icon="times"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">Delete</span>
                                                        </b-button> -->
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr>
                                                <td colspan="7">No data</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <b-modal ref="removeUser" id="removeUser" title="Delete user" @ok="deleteUser()">
                                        <div class="modal-body">
                                            <p id="jhi-delete-user-heading">Are you sure you want to delete this user?</p>
                                        </div>
                                        <div class="text-right" slot="modal-footer">
                                            <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                                            <button type="button" class="btn btn-primary" id="confirm-delete-user" v-on:click="deleteUser()">Delete</button>
                                        </div>
                                    </b-modal>
                                </div>
                                <div v-show="users && users.length > 0">
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
</template>

<script lang="ts" src="./user-management.component.ts"></script>
