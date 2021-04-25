<template>
    <div class="row justify-content-center">
        <div class="col-6 offset-3">
            <div class="box">
                <div class="box-body">
                    <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" v-if="userAccount">
                <h2 id="myUserLabel">
                    <span v-if="!userAccount.id">Add a new user</span><span v-else>Edit user</span>
                </h2>
                <div>
                    <div class="form-group" :hidden="!userAccount.id">
                        <label v-text="$t('global.field.id')">ID</label>
                        <input type="text" class="form-control" name="id"
                               v-model="userAccount.id" readonly>
                    </div>

                    <div class="form-group">
                        <label class="form-control-label">Username</label>
                        <input type="text" class="form-control" name="login"
                               :class="{'valid': !$v.userAccount.login.$invalid, 'invalid': $v.userAccount.login.$invalid }"
                               v-model="$v.userAccount.login.$model">

                        <div v-if="$v.userAccount.login.$anyDirty && $v.userAccount.login.$invalid">
                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.login.required">
                               This information is required
                            </small>

                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.login.maxLength">
                                This information allows up to 50 characters
                            </small>

                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.login.pattern">
                               This information contains only numbers, letters or email addresses
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Enter your first name"
                               :class="{'valid': !$v.userAccount.firstName.$invalid, 'invalid': $v.userAccount.firstName.$invalid }"
                               v-model="$v.userAccount.firstName.$model">
                        <div v-if="$v.userAccount.firstName.$anyDirty && $v.userAccount.firstName.$invalid">
                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.firstName.maxLength">
                                This information allows up to 50 characters
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Enter your last name"
                               :class="{'valid': !$v.userAccount.lastName.$invalid, 'invalid': $v.userAccount.lastName.$invalid }"
                               v-model="$v.userAccount.lastName.$model">
                        <div v-if="$v.userAccount.lastName.$anyDirty && $v.userAccount.lastName.$invalid">
                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.lastName.maxLength">
                               This information allows up to 50 characters
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="email" v-text="$t('userManagement.email')">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Your email"
                               :class="{'valid': !$v.userAccount.email.$invalid, 'invalid': $v.userAccount.email.$invalid }"
                               v-model="$v.userAccount.email.$model" email required>
                        <div v-if="$v.userAccount.email.$anyDirty && $v.userAccount.email.$invalid">
                            <small class="form-text text-danger" v-if="!$v.userAccount.email.required"
                                   >
                               Email information is required
                            </small>
                            <small class="form-text text-danger" v-if="!$v.userAccount.email.email"
                                   >
                                The email address is not in the correct format
                            </small>
                            <small class="form-text text-danger" v-if="!$v.userAccount.email.minLength"
                                   >
                                Email address contains a minimum of 5 characters
                            </small>
                            <small class="form-text text-danger" v-if="!$v.userAccount.email.maxLength"
                                   v-text="$t('global.messages.validate.email.maxlength')">
                               Email addresses contain up to 50 characters
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="phone">Phone number</label>
                        <input type="text" class="form-control" id="phone" name="phone" placeholder="Enter your phone number"
                               :class="{'valid': !$v.userAccount.phone.$invalid, 'invalid': $v.userAccount.phone.$invalid }"
                               v-model="$v.userAccount.phone.$model">
                        <div v-if="$v.userAccount.phone.$anyDirty && $v.userAccount.phone.$invalid">
                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.phone.required">
                                Phone number information is required
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="address">Address</label>
                        <input type="text" class="form-control" id="address" name="address" placeholder="Enter your address"
                               v-model="userAccount.address">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="birthday">Date of birth</label>
                        <input type="date" class="form-control" id="birthday" name="birthday" placeholder="Enter your date of birth"
                               v-model="userAccount.birthday">
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="activated">
                            <input class="form-check-input" :disabled="userAccount.id === null" type="checkbox" id="activated" name="activated" v-model="userAccount.activated">
                            <span v-text="$t('userManagement.activated')">Activated</span>
                        </label>
                    </div>

                    <div class="form-group" v-if="languages && Object.keys(languages).length > 0">
                        <label for="langKey">Language</label>
                        <select class="form-control" id="langKey" name="langKey" v-model="userAccount.langKey">
                            <option v-for="(language, key) in languages" :value="key" :key="key">{{language.name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label >Role</label>
                        <select class="form-control" multiple name="authority" v-model="userAccount.authorities">
                            <option v-for="authority of authorities" :value="authority" :key="authority">{{authority}}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span
                           >Cancel</span>
                    </button>
                    <button type="submit" :disabled="$v.userAccount.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span >Save</span>
                    </button>
                </div>
            </form>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./user-management-edit.component.ts">
</script>
