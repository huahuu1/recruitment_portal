<template>
    <div class="row justify-content-center" style="min-height: 800px">
        <div class="col-6 offset-3">
            <div class="box">
                <div class="box-body">
                    <div v-if="user">
                <h2 class="jh-entity-heading">
                    <span >Detailed user information </span> <b>{{user.login}}</b>
                </h2>
                <dl class="row jh-entity-details">
                    <dt><span>Account</span></dt>
                    <dd>
                        <span>{{user.login}}</span>
                        <b-badge variant="success" v-if="user.activated" >Active</b-badge>
                        <b-badge variant="danger" v-if="!user.activated">Lock</b-badge>
                    </dd>
                    <dt><span>First Name</span></dt>
                    <dd>{{user.firstName}}</dd>
                    <dt><span>Last Name</span></dt>
                    <dd>{{user.lastName}}</dd>
                    <dt><span>Email</span></dt>
                    <dd>{{user.email}}</dd>
                    <dt><span>Phone</span></dt>
                    <dd>{{user.phone}}</dd>
                    <dt><span>Date of Birth</span></dt>
                    <dd v-if="user.birthday">{{user.birthday | formatDate}}</dd> <dd v-else>Updating</dd>
                    <dt><span>Address</span></dt>
                    <dd v-if="user.address">{{user.address}}</dd> <dd v-else>Updating</dd>
                    <dt><span>Language</span></dt>
                    <dd>{{user.langKey}}</dd>
                    <dt><span>Create date</span></dt>
                    <dd>{{user.createdDate | formatDate}}</dd>
                    <dt><span>Role</span></dt>
                    <dd>
                        <ul class="list-unstyled">
                            <li v-for="authority of user.authorities" :key="authority">
                                <b-badge variant="info">{{authority}}</b-badge>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <router-link tag="button" type="submit"
                        :to="{name: 'UserManagement'}"
                        class="btn btn-primary">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Come back</span>
                </router-link>
            </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./user-management-view.component.ts">
</script>
