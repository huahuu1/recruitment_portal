<template>
    <div>
        <!---page Title --->
        <section class="bg-img pt-150 pb-20" data-overlay="7" style="background-image: url(../../content/images/front-end-img/background/bg-8.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center">
                            <h2 class="page-title text-white">Recover password</h2>
                            <ol class="breadcrumb bg-transparent justify-content-center">
                                <li class="breadcrumb-item"><router-link :active-class="'text-white-50'" to="/"><i class="mdi mdi-home-outline"></i></router-link></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Recover password</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Page content -->

        <section class="py-50">
            <div class="container">
                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-5 col-md-5 col-12">
                        <div class="box box-body mb-0">
                            <div class="content-top-agile pb-0 pt-20">
                                <h2 class="text-primary">Retrieve your password</h2>
                                <div class="alert alert-danger"
                                    v-if="keyMissing">
                                    <strong>Unlock to reset the faulty password</strong>
                                </div>

                                <div class="alert alert-danger" v-if="error">
                                    <p>Recovery failed! You can only use this key for 24 hours</p>
                                </div>

                                <div class="alert alert-success" v-if="success">
                                    <span><strong>Your password has been updated</strong> Please log in again</span>
                                </div>
                                <div class="alert alert-danger" v-if="doNotMatch">
                                    <p>Password and confirmation password do not match!</p>
                                </div>

                                <div v-if="!success && !keyMissing">
                                    <p>Please enter a new password to recover</p>
                                </div>
                            </div>
                            <div class="p-40" v-if="!keyMissing" >
                                <form v-if="!success" name="form" role="form" v-on:submit.prevent="finishReset()">
                                    <div class="form-group">
                                        <label class="form-control-label" for="newPassword">New password</label>
                                        <input type="password" class="form-control" id="newPassword" name="newPassword"
                                            placeholder="Enter your new password"
                                            :class="{'valid': !$v.resetAccount.newPassword.$invalid, 'invalid': $v.resetAccount.newPassword.$invalid }"
                                            v-model="$v.resetAccount.newPassword.$model" minlength=4 maxlength=50 required>
                                        <div v-if="$v.resetAccount.newPassword.$anyDirty && $v.resetAccount.newPassword.$invalid">
                                            <small class="form-text text-danger"
                                            v-if="!$v.resetAccount.newPassword.required">
                                                Your password is required
                                            </small>
                                            <small class="form-text text-danger"
                                            v-if="!$v.resetAccount.newPassword.minLength">
                                               Your password must be at least 4 characters long
                                            </small>
                                            <small class="form-text text-danger"
                                            v-if="!$v.resetAccount.newPassword.maxLength">
                                                 Your password must be at least 4 characters long
                                            </small>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label" for="confirmPassword" >Confirm new password</label>
                                        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword"
                                        :class="{'valid': !$v.resetAccount.confirmPassword.$invalid, 'invalid': $v.resetAccount.confirmPassword.$invalid }"
                                        placeholder="Enter confirm password"
                                        v-model="$v.resetAccount.confirmPassword.$model" minlength=4 maxlength=50 required>
                                        <div v-if="$v.resetAccount.confirmPassword.$anyDirty && $v.resetAccount.confirmPassword.$invalid">
                                            <small class="form-text text-danger"
                                            v-if="!$v.resetAccount.confirmPassword.required">
                                               Password confirmation is required
                                            </small>
                                            <small class="form-text text-danger"
                                            v-if="!$v.resetAccount.confirmPassword.minLength">
                                                 Your confirmation password must be at least 4 characters long
                                            </small>
                                            <small class="form-text text-danger"
                                            v-if="!$v.resetAccount.confirmPassword.maxLength">
                                                  Your confirmation password must be at least 4 characters long
                                            </small>
                                        </div>
                                    </div>
                                    <button type="submit" :disabled="$v.resetAccount.$invalid" class="btn btn-primary">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" src="./reset-password-finish.component.ts">
</script>
