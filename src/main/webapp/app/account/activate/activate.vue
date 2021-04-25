<template>
<!-- <div>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <h1 v-text="$t('activate.title')">Activation</h1>
          <div class="alert alert-success" v-if="success">
              <span v-html="$t('activate.messages.success')"><strong>Your user account has been activated.</strong> Please </span>
              <a class="alert-link" v-on:click="openLogin" v-text="$t('global.messages.info.authenticated.link')">sign in</a>.
          </div>
          <div class="alert alert-danger" v-if="error" v-html="$t('activate.messages.error')">
              <strong>Your user could not be activated.</strong> Please use the registration form to sign up.
          </div>
      </div>
  </div>
</div> -->
<div>
        <!---page Title --->
        <section class="bg-img pt-150 pb-20" data-overlay="7" style="background-image: url(../../content/images/front-end-img/background/bg-8.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center">
                            <h2 class="page-title text-white">Active account</h2>
                            <ol class="breadcrumb bg-transparent justify-content-center">
                                <li class="breadcrumb-item"><router-link :active-class="'text-white-50'" to="/"><i class="mdi mdi-home-outline"></i></router-link></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Active account</li>
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
                                <h2 class="text-primary">Active account</h2>
                            </div>
                            <div class="alert alert-success" v-if="success">
                                <span><strong>Your account has been activated</strong> please log in </span>
                            </div>
                            <div class="alert alert-danger" v-if="error" >
                                <strong>Your account has not been activated</strong> Please register to use the system
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" src="./activate.component.ts">
</script>
