<template>
    <div class="content-wrapper" style="min-height: 800px;">
        <div class="container-full">
            <!-- Main content -->
            <section class="content">
                <h2>
                    <span id="user-management-page-heading">Managing post</span>
                    <router-link tag="button" class="btn btn-primary float-right jh-create-entity" :to="{name: 'PostCreate'}"> <font-awesome-icon icon="plus"></font-awesome-icon> <span>Add new</span> </router-link>
                </h2>
                <b-alert :show="dismissCountDown" dismissible :variant="alertType" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
                    {{alertMessage}}
                </b-alert>
                <div class="row">
                    <div class="col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="row float-right">
                                    <div class="form-group">
                                        <input type="text" v-model="keyword" @input="handleSearch()" id="search" name="search" placeholder="Search" class="form-control valid">
                                    </div>
                                </div>
                                <div class="table-responsive" v-if="posts">
                                    <table id="example" class="table mb-0 w-p100">
                                        <thead>
                                            <tr>
                                                <th class = "text-center"> ID </th>
                                                <th class = "text-center"> Avatar </th>
                                                <th class = "text-center"> Title </th>
                                                <th class = "text-center"> Short description </th>
                                                <th class = "text-center"> Category </th>
                                                <th class = "text-center"> Status </th>
                                                <th class = "text-center"> Actions </th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="posts && posts.length > 0">
                                            <tr v-for="post in posts" :key="post.id" :id="post.id">
                                                <td class="text-center"><router-link tag="a" :to="{name: 'PostView', params: {postId: post.id}}">{{post.id}}</router-link></td>
                                                <td class="text-center">
                                                    <img style="max-width:100px; max-height:100px" :src="loadImage(post.thumbnail)">
                                                </td>
                                                <td class="text-center">{{post.title}}</td>
                                                <td class="" style="width: 23rem;">{{post.description}}</td>
                                                <td class="">{{post.category.title}}</td>
                                                <td class="text-center">
                                                    <button class="btn btn-danger btn-xs deactivated" v-on:click="setActive(post, 1)" v-if="!post.status"><i class="mdi mdi-lock-outline"></i>Hide</button>
                                                    <button class="btn btn-success btn-xs" v-on:click="setActive(post, 0)" v-if="post.status"><i class="mdi mdi-lock-open-outline"></i>Show</button>
                                                </td>
                                                <td class="text-center">
                                                    <div class="">
                                                        <router-link :to="{name: 'PostView', params: {postId: post.id}}" tag="button" class="btn btn-outline-info btn-sm details">
                                                            <font-awesome-icon icon="eye"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">View</span>
                                                        </router-link>
                                                        <router-link :to="{name: 'PostEdit', params: {postId: post.id}}" tag="button" class="btn btn-outline-primary btn-sm edit">
                                                            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">Edit</span>
                                                        </router-link>
                                                        <b-button v-on:click="prepareRemove(post)" variant="outline-danger" class="btn btn-sm btn-outline-danger delete">
                                                            <font-awesome-icon icon="times"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">Delete</span>
                                                        </b-button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr class="text-center">
                                                <td colspan="7">No data</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <b-modal ref="removeUser" id="removeUser" title="Delete post" @ok="deletePost()">
                                        <div class="modal-body">
                                            <p id="jhi-delete-user-heading">Are you sure you want to delete this post?</p>
                                        </div>
                                        <div class="text-right" slot="modal-footer">
                                            <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">cancel</button>
                                            <button type="button" class="btn btn-primary" id="confirm-delete-user" v-on:click="deletePost()">Delete</button>
                                        </div>
                                    </b-modal>
                                </div>
                                <div v-show="posts && posts.length > 0">
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

<script lang="ts" src="./post-management.component.ts"></script>
