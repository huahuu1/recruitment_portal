<template>
    <div>
        <!---page Title --->
        <section class="bg-img pt-150 pb-20" data-overlay="7" style="background-image: url(../../content/images/front-end-img/background/bg-8.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center">
                            <h2 class="page-title text-white">Sign in</h2>
                            <ol class="breadcrumb bg-transparent justify-content-center">
                                <li class="breadcrumb-item"><router-link :active-class="'text-white-50'" to="/"><i class="mdi mdi-home-outline"></i></router-link></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Sign in</li>
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
                        <div class="box box-body">
                            <div class="content-top-agile pb-0 pt-20">
                                <h2 class="text-primary">Let's Get Started</h2>
                                <p class="mb-0">Sign in to continue to Job Market.</p>
                            </div>
                            <br>
                            <div class="col-md-12 toastify-container" style="margin-top:20px">
                                <div v-if="authenticationError" class="alert alert-danger" role="alert">
                                    <strong>Login failed!</strong> Please check again
                                </div>
                            </div>
                            <div class="p-40">
                                <b-form role="form" v-on:submit.prevent="doLogin()">
                                    <div class="form-group">
                                        <div class="input-group mb-15">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text bg-transparent"><i class="ti-user"></i></span>
                                            </div>
                                            <input id="username" name="username" autofocus v-bind:placeholder="$t('global.form[\'username.placeholder\']')" v-model="login" type="text" class="form-control pl-15 bg-transparent">
                                        </div>
                                        <div v-if="$v.login.$anyDirty && $v.login.$invalid">
                                            <small class="form-text text-danger" v-if="!$v.login.required">
                                                You must enter an username
                                            </small>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group mb-15">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text  bg-transparent"><i class="ti-lock"></i></span>
                                            </div>
                                            <input id="password" type="password" name="password" v-bind:placeholder="$t('login.form[\'password.placeholder\']')" v-model="password" class="form-control pl-15 bg-transparent">
                                        </div>
                                        <div v-if="$v.password.$anyDirty && $v.password.$invalid">
                                            <small class="form-text text-danger" v-if="!$v.password.required">
                                                You must enter a password
                                            </small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                        <!-- <div class="checkbox ml-5">
                                            <input type="checkbox" id="basic_checkbox_1" name="rememberMe" v-model="rememberMe" checked >
                                            <label for="basic_checkbox_1">Remember Me</label>
                                        </div> -->
                                        </div>
                                        <!-- /.col -->
                                        <div class="col-6">
                                        <div class="fog-pwd text-right">
                                            <router-link to="/quen-mat-khau" class="hover-warning"><i class="ion ion-locked"></i> Forgot password?</router-link><br>
                                        </div>
                                        </div>
                                        <!-- /.col -->
                                        <div class="col-12 text-center">
                                        <button type="submit" class="btn btn-info btn-block mt-15">Sign in</button>
                                        </div>
                                        <!-- /.col -->
                                    </div>
                                </b-form>
                                <div class="text-center">
                                    <p class="mt-15 mb-0">Don't have an account? <router-link to="/dang-ky-tai-khoan" class="text-warning ml-5">Registration</router-link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts" src="./login.component.ts">
</script>