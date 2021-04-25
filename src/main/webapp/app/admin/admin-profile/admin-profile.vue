<template>
<div style="min-height: 800px;" class="container">
        <div class="row">
            <div class="col-sm-8 mx-auto">
                <div class="row">
                    <div class="col mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="e-profile">
                                    <div class="row" v-if="userAccount">
                                        <div class="col-12 col-sm-auto mb-3">
                                            <div class="mx-auto" style="width: 140px;">
                                                <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
                                                    <span v-if="!userAccount.imageUrl" style="color: rgb(166, 168, 170); font: bold 8pt Arial;">140x140</span>
                                                    <img v-else :src="userAccount.imageUrl" width="140" height="140" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                            <div class="text-center text-sm-left mb-2 mb-sm-0">
                                                <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{userAccount.firstName}} {{userAccount.lastName}}</h4>
                                                <p class="mb-0">{{userAccount.email}}</p>
                                                <div class="mt-2">
                                                    <button class="btn btn-primary" type="button">
                                                        <i class="fa fa-fw fa-camera"></i>
                                                        <label class="mb-0" for="avatar">Change avatar</label>
                                                    </button>
                                                    <input @change="handleFilesUpload" type="file" ref="files" style="display: none" id="avatar">
                                                </div>
                                            </div>
                                            <div class="text-center text-sm-right">
                                                <span class="badge badge-secondary">{{userAccount.login}}</span>
                                                <div v-if="userAccount.createdDate" class="text-muted"><small>Tạo: {{userAccount.createdDate | formatDateWithoutTime}}</small></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-content pt-3">
                                        <div class="tab-pane active">
                                            <form class="form" name="editForm" role="form" novalidate v-on:submit.prevent="save()" v-if="userAccount">
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="row">
                                                            <div class="col">
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
                                                            </div>
                                                            <div class="col">
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
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col">
                                                                <label class="form-control-label" for="email" v-text="$t('userManagement.email')">Email</label>
                                                                <input disabled type="email" class="form-control" id="email" name="email" placeholder="Your email address"
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
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col">
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
                                                        </div>
                                                        <div class="row">

                                                            <div class="form-group col">
                                                                <label class="form-control-label" for="birthday">Date of Birth</label>
                                                                <input type="date" class="form-control" id="birthday" name="birthday" placeholder="Enter your date of birth"
                                                                       v-model="userAccount.birthday">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col">
                                                                <label class="form-control-label" for="address">Address</label>
                                                                <input type="text" class="form-control" id="address" name="address" placeholder="Enter your address"
                                                                       v-model="userAccount.address">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col d-flex justify-content-end">
                                                        <button type="button" class="btn btn-secondary" v-on:click="previousState()">
                                                            Cancel
                                                        </button>
                                                        <button class="btn btn-primary ml-3" type="submit" :disabled="$v.userAccount.$invalid || isSaving">Save</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
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

<script lang="ts" src="./admin-profile.component.ts">
</script>

<style scoped>

</style>
