<template>
    <div class="content-wrapper" style="min-height: 800px">
        <notifications/>
        <div class="container-full">
            <!-- Main content -->
            <section class="content">
                <h2>
                    <span id="user-management-page-heading">Manage categories</span>
                    <b-button v-on:click="handleCreate()" variant="outline-danger" class="btn btn-primary float-right jh-create-entity">
                        <font-awesome-icon icon="plus"></font-awesome-icon>
                        <span class="d-none d-md-inline">Add new</span>
                    </b-button>

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
                                <div class="table-responsive">
                                    <table id="example" class="table mb-0 w-p100">
                                        <thead>
                                            <tr>
                                                <th class="text-center">ID</th>
                                                <th class="text-center">Title</th>
                                                <th class="text-center">Description</th>
                                                <th class="text-center">Create date</th>
                                                <th class="text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="categories && categories.length>0">
                                            <tr v-for="category in categories" :key="category.id" :id="category.id">
                                                <td class="text-center">{{category.id}}</td>
                                                <td>{{category.title}}</td>
                                                <td>{{category.description}}</td>
                                                <td class="text-center">{{category.createdAt | formatDate}}</td>
                                                <td class="text-center">
                                                    <div class="">
                                                        <b-button v-on:click="handleUpdate(category)" variant="outline-primary" class="btn btn-outline-primary btn-sm edit">
                                                            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">Edit</span>
                                                        </b-button>
                                                        <b-button v-on:click="prepareRemove(category)" variant="outline-danger" class="btn btn-sm btn-outline-danger delete">
                                                            <font-awesome-icon icon="times"></font-awesome-icon>
                                                            <span class="d-none d-md-inline">Delete</span>
                                                        </b-button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr class="text-center">
                                                <td colspan="5">No data</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <b-modal ref="removeCate" id="removeCate" title="Delete category" @ok="deleteCate()">
                                        <div class="modal-body">
                                            <p id="jhi-delete-user-heading">Are you sure you want to delete the category?</p>
                                        </div>
                                        <div class="text-right" slot="modal-footer">
                                            <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                                            <button type="button" class="btn btn-primary" id="confirm-delete-user" v-on:click="deleteCate()">Delete</button>
                                        </div>
                                    </b-modal>
                                     <b-modal ref="createCate" id="createCate" :title="!category.id?'Add new category':'Category update'" @ok="createCategory()">
                                        <div class="modal-body">
                                            <form name="editForm" role="form" novalidate v-if="category">
                                                <div>
                                                    <div class="form-group" :hidden="!category.id">
                                                        <label>ID</label>
                                                        <input type="text" class="form-control" name="id"
                                                            v-model="category.id" readonly>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="form-control-label">Title</label>
                                                        <input type="text" class="form-control" name="title"
                                                            :class="{'valid': !$v.category.title.$invalid, 'invalid': $v.category.title.$invalid }"
                                                            v-model="$v.category.title.$model">
                                                        <div v-if="$v.category.title.$anyDirty && $v.category.title.$invalid">
                                                            <small class="form-text text-danger"
                                                                v-if="!$v.category.title.required">
                                                            This information is required
                                                            </small>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="form-control-label">Description</label>
                                                        <textarea type="text" class="form-control" name="description"
                                                            v-model="category.description"></textarea>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="text-right" slot="modal-footer">
                                            <button type="button" class="btn btn-secondary" v-on:click="closeDialogCreate()">Cancel</button>
                                            <button :disabled="$v.category.$invalid" type="button" class="btn btn-primary" v-on:click="createCategory()">Save</button>
                                        </div>
                                    </b-modal>
                                    <b-modal ref="updateCate" id="updateCate" title="Update category" @ok="updateCategory()">
                                        <div class="modal-body">
                                            <form name="editForm" role="form" novalidate v-if="category">
                                                <div>
                                                    <div class="form-group" :hidden="!category.id">
                                                        <label>ID</label>
                                                        <input type="text" class="form-control" name="id"
                                                            v-model="category.id" readonly>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="form-control-label">Title</label>
                                                        <input type="text" class="form-control" name="title"
                                                            :class="{'valid': !$v.category.title.$invalid, 'invalid': $v.category.title.$invalid }"
                                                            v-model="$v.category.title.$model">
                                                        <div v-if="$v.category.title.$anyDirty && $v.category.title.$invalid">
                                                            <small class="form-text text-danger"
                                                                v-if="!$v.category.title.required">
                                                            This information is required
                                                            </small>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="form-control-label">Description</label>
                                                        <textarea type="text" class="form-control" name="description"
                                                            v-model="category.description"></textarea>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="text-right" slot="modal-footer">
                                            <button type="button" class="btn btn-secondary" v-on:click="closeDialogUpdate()">Cancel</button>
                                            <button :disabled="$v.category.$invalid" type="button" class="btn btn-primary" v-on:click="updateCategory()">Save</button>
                                        </div>
                                    </b-modal>
                                </div>
                                <div v-show="categories && categories.length > 0">
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

<script lang="ts" src="./category-management.component.ts"></script>
