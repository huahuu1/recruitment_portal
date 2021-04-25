<template>
    <div>
        <!---page Title --->
        <section class="bg-img pt-150 pb-20" data-overlay="7" style="background-image: url(../../content/images/front-end-img/background/bg-8.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center">
                            <h2 class="page-title text-white">Forgot password</h2>
                            <ol class="breadcrumb bg-transparent justify-content-center">
                                <li class="breadcrumb-item"><router-link :active-class="'text-white-50'" to="/"><i class="mdi mdi-home-outline"></i></router-link></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Forgot password</li>
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
                            </div>
                            <div class="p-40">
                                 <form v-if="!success" name="form" role="form" v-on:submit.prevent="requestReset()">
                                    <div class="form-group">
                                        <div class="input-group mb-15">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-transparent"><i class="ti-email"></i></span>
                                            </div>
                                            <input type="email" class="form-control pl-15 bg-transparent" id="email" name="email" v-bind:placeholder="$t('global.form[\'email.placeholder\']')"
                                                :class="{'valid': !$v.resetAccount.email.$invalid, 'invalid': $v.resetAccount.email.$invalid }"
                                                v-model="$v.resetAccount.email.$model" minlength=5 maxlength=254  email required>
                                        </div>
                                        <div v-if="$v.resetAccount.email.$anyDirty && $v.resetAccount.email.$invalid">
                                                <small class="form-text text-danger" v-if="!$v.resetAccount.email.required">
                                                    Required email information
                                                </small>
                                                <small class="form-text text-danger" v-if="!$v.resetAccount.email.email"
                                                   >
                                                    Email invalid
                                                </small>
                                                <small class="form-text text-danger" v-if="!$v.resetAccount.email.minLength"
                                                   >
                                                    Email must be at least 5 characters
                                                </small>
                                                <small class="form-text text-danger" v-if="!$v.resetAccount.email.maxLength"
                                                    >
                                                    Email must not exceed 100 characters
                                                </small>
                                            </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 text-center">
                                        <button type="submit" :disabled="$v.resetAccount.$invalid" class="btn btn-info btn-block mt-15">Forgot password</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts" src="./forgot-password.component.ts">
</script>