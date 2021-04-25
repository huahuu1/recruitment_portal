<template>
    <div class="row justify-content-center">
        <div class="col-6 offset-3">
            <div class="box">
                <div class="box-header">
                  <h2 class="jh-entity-heading">
                    <span >Detail article: </span> <b>{{post.title}}</b>
                  </h2>
                </div>
                <div class="box-body">
                    <div v-if="post">
                <dl class="row jh-entity-details">
                    <dt><span>Avatar</span></dt>
                    <dd v-if="post.thumbnail">
                       <img :src="loadImage(post.thumbnail)" alt="">
                    </dd>
                    <dd v-else>
                       <span>Updating</span>
                    </dd>
                    <dt><span>Title</span></dt>
                    <dd>
                        <span>{{post.title}}</span>
                        <b-badge variant="success" v-if="post.status" >Show</b-badge>
                        <b-badge variant="danger" v-if="!post.status">Hide</b-badge>
                    </dd>
                    <dt><span>Description</span></dt>
                    <dd>{{post.description}}</dd>
                    <dt><span>Posted by</span></dt>
                    <dd>{{post.user.login}}</dd>
                    <dt><span>Date Submitted</span></dt>
                    <dd>{{post.createdAt | formatDate}}</dd>
                    <dt><span>Category</span></dt>
                    <dd>{{post.category.title}}</dd>
                    <dt><span>Content</span></dt>
                    <dd v-html="post.content"></dd>
                </dl>
                <router-link tag="button" type="submit"
                        :to="{name: 'PostManagement'}"
                        class="btn btn-primary">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Come back</span>
                </router-link>
            </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./post-management-view.component.ts">
</script>
