<template>
    <div class="row justify-content-center">
        <div class="col col-md-8 offset-md-2">
            <div class="box">
                <div class="box-body">
                    <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" v-if="post">
                        <h2 id="myUserLabel">
                            <span v-if="!post.id">Create post</span><span v-else>Edit post</span>
                        </h2>
                        <div class="row">
                             <!-- <div class="form-group" :hidden="!post.id">
                                <label v-text="$t('global.field.id')">ID</label> -->
                                <input type="hidden" class="form-control" name="id"
                                    v-model="post.id" readonly>
                            <!-- </div> -->
                            <div class="col-12 col-md-4">
                                 <label class="form-control-label" for="thumbnail">Thumbnail</label>
                                <div @click="handleChooseFile" class="image-preview" v-if="imageData.length > 0">
                                    <img class="preview" :src="imageData">
                                    <input ref="files" id="file-input" type="file" @change="previewImage" accept="image/*">
                                </div>
                            </div>
                            <div class="col-12 col-md-8">
                                <div class="form-group">
                                    <label class="form-control-label" for="title">Title</label>
                                    <input type="text" class="form-control" id="title" name="title" placeholder="Enter the article title"
                                        :class="{'valid': !$v.post.title.$invalid, 'invalid': $v.post.title.$invalid }"
                                        v-model="$v.post.title.$model">
                                    <div v-if="$v.post.title.$anyDirty && $v.post.title.$invalid">
                                        <small class="form-text text-danger"
                                            v-if="!$v.post.title.required">
                                            This information cannot be left blank
                                        </small>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="form-control-label" for="description">Description</label>
                                    <textarea class="form-control" id="description" name="description" placeholder="Enter description"
                                        :class="{'valid': !$v.post.description.$invalid, 'invalid': $v.post.description.$invalid }"
                                        v-model="$v.post.description.$model"></textarea>
                                    <div v-if="$v.post.description.$anyDirty && $v.post.description.$invalid">
                                        <small class="form-text text-danger"
                                            v-if="!$v.post.description.required">
                                            This information cannot be left blank
                                        </small>
                                    </div>
                                </div>
                               <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                        <label for="category">List of category</label>
                                            <select class="form-control" id="category" name="category" v-model="post.category">
                                                <option v-if="categories.length==0">Please create a category</option>
                                                <option v-else v-for="category in categories" :key="category.id" :value="category">{{category.title}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group">
                                            <label for="status">Status</label>
                                            <select class="form-control" id="status" name="status" v-model="post.status">
                                                <option value="1">Show</option>
                                                <option value="0" >Hide</option>
                                            </select>
                                    </div>
                                    </div>
                               </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="status">Content</label>
                                    <div class="form-control">
                                        <vue-editor v-model="$v.post.content.$model"></vue-editor>
                                    </div>
                                     <div v-if="$v.post.content.$anyDirty && $v.post.content.$invalid">
                                        <small class="form-text text-danger"
                                            v-if="!$v.post.content.required">
                                            This information cannot be left blank
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="float-right">
                            <button type="button" class="btn btn-secondary" v-on:click="previousState()">
                                <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span
                                >Cancel</span>
                            </button>
                            <button type="submit" :disabled="$v.post.$invalid || isSaving" class="btn btn-primary">
                                <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span >Save</span>
                            </button>
                        </div>
                    </form>
                        </div>
                    </div>
        </div>
    </div>
</template>

<script lang="ts" src="./post-management-edit.component.ts">
</script>
<style lang="css">
    #file-input{
        display: none;
    }
    .image-preview{
        border: 1px dotted #ccc;
        width: 100%;
        height: 17em;
        padding: 15px;
    }
    .preview{
        width: 100%;
        height: 100%;
    }
</style>
