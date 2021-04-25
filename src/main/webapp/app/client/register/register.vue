<template>
    <div>
        <!---page Title --->
	<section class="bg-img pt-150 pb-20" data-overlay="7" style="background-image: url(../../content/images/front-end-img/background/bg-8.jpg);">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="text-center">
						<h2 class="page-title text-white">Sign up for an account</h2>
						<ol class="breadcrumb bg-transparent justify-content-center">
							<li class="breadcrumb-item"><router-link :active-class="'text-white-50'" to="/"><i class="mdi mdi-home-outline"></i></router-link></li>
							<li class="breadcrumb-item text-white active" aria-current="page">Sign up for an account</li>
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
							<h2 class="text-primary">Finding work is easier</h2>
							<p class="mb-0">Sign up to become a member</p>
						</div>
						<div style="margin-top:20px" class="row justify-content-center">
							<div class="col-md-12 toastify-container">

								<div class="alert alert-success" role="alert" v-if="success">
									<strong>Sign Up Success!</strong> Please check your email registration
								</div>

								<div class="alert alert-danger" role="alert" v-if="error">
									<strong>Sign Up failed!</strong> Please try again
								</div>

								<div class="alert alert-danger" role="alert" v-if="errorUserExists" >
									<strong>Username already registered!</strong> Please choose another account
								</div>

								<div class="alert alert-danger" role="alert" v-if="errorEmailExists">
									<strong>Email already exists!</strong> Please choose another account
								</div>
							</div>
						</div>
						<div class="p-40">
							 <form id="register-form" name="registerForm" role="form" v-on:submit.prevent="register()" v-if="!success" no-validate>
								<div class="form-group">
									<div class="input-group mb-15">
										<div class="input-group-prepend">
											<span class="input-group-text bg-transparent"><i class="ti-user"></i></span>
										</div>
										<input placeholder="Username" type="text" class="form-control pl-15 bg-transparent" v-model="$v.registerAccount.login.$model" id="username" name="login"
                               :class="{'valid': !$v.registerAccount.login.$invalid, 'invalid': $v.registerAccount.login.$invalid }"
                               required minlength="1" maxlength="50" pattern="^[a-zA-Z0-9!#$&'*+=?^_`{|}~.-]+@?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$">
									</div>
									 <div v-if="$v.registerAccount.login.$anyDirty && $v.registerAccount.login.$invalid">
										<small class="form-text text-danger" v-if="!$v.registerAccount.login.required"
											v-text="$t('register.messages.validate.login.required')">
											Your username is required.
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.login.minLength"
											v-text="$t('register.messages.validate.login.minlength')">
											Your username is required to be at least 5 character.
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.login.maxLength"
											v-text="$t('register.messages.validate.login.maxlength')">
											Your username cannot be longer than 50 characters.
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.login.pattern"
											v-text="$t('register.messages.validate.login.pattern')">
											Your username can only contain letters and digits.
										</small>
									</div>
								</div>
								<div class="form-group">
									<div class="input-group mb-15">
										<div class="input-group-prepend">
											<span class="input-group-text bg-transparent"><i class="ti-email"></i></span>
										</div>
										 <input type="email" class="form-control pl-15 bg-transparent" id="email" name="email"
                               :class="{'valid': !$v.registerAccount.email.$invalid, 'invalid': $v.registerAccount.email.$invalid }"
                               v-model="$v.registerAccount.email.$model" minlength=5 maxlength=254 email required placeholder="Email">
									</div>
									 <div v-if="$v.registerAccount.email.$anyDirty && $v.registerAccount.email.$invalid">
										<small class="form-text text-danger" v-if="!$v.registerAccount.email.required"
											v-text="$t('global.messages.validate.email.required')">
											Your email is required.
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.email.email"
											v-text="$t('global.messages.validate.email.invalid')">
											Your email is invalid.
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.email.minLength"
											v-text="$t('global.messages.validate.email.minlength')">
											Your email is required to be at least 5 characters.
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.email.maxLength"
											v-text="$t('global.messages.validate.email.maxlength')">
											Your email cannot be longer than 100 characters.
										</small>
									</div>
								</div>
								<div class="form-group">
									<div class="input-group mb-15">
										<div class="input-group-prepend">
											<span class="input-group-text bg-transparent"><i class="ti-lock"></i></span>
										</div>
										<input type="password" class="form-control pl-15 bg-transparent" id="firstPassword" name="password"
                               :class="{'valid': !$v.registerAccount.password.$invalid, 'invalid': $v.registerAccount.password.$invalid }"
                               v-model="$v.registerAccount.password.$model" minlength=4 maxlength=50 required placeholder="Password">
									</div>
									<div v-if="$v.registerAccount.password.$anyDirty && $v.registerAccount.password.$invalid">
										<small class="form-text text-danger" v-if="!$v.registerAccount.password.required"
											v-text="$t('global.messages.validate.newpassword.required')">
											Your password is required.
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.password.minLength"
											v-text="$t('global.messages.validate.newpassword.minlength')">
											Your password is required to be at least 4 characters.
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.password.maxLength"
											v-text="$t('global.messages.validate.newpassword.maxlength')">
											Your password cannot be longer than 50 characters.
										</small>
									</div>
								</div>
								<div class="form-group">
									<div class="input-group mb-15">
										<div class="input-group-prepend">
											<span class="input-group-text bg-transparent"><i class="ti-lock"></i></span>
										</div>
										<input type="password" class="form-control  pl-15 bg-transparent" id="secondPassword" name="confirmPasswordInput"
                               :class="{'valid': !$v.confirmPassword.$invalid, 'invalid': $v.confirmPassword.$invalid }"
                               v-model="$v.confirmPassword.$model" minlength=4 maxlength=50 required  placeholder="Confirm password">
									</div>
									<div v-if="$v.confirmPassword.$dirty && $v.confirmPassword.$invalid">
										<small class="form-text text-danger" v-if="!$v.confirmPassword.required"
											v-text="$t('global.messages.validate.confirmpassword.required')">
											Your confirmation password is required.
										</small>
										<small class="form-text text-danger" v-if="!$v.confirmPassword.minLength"
											v-text="$t('global.messages.validate.confirmpassword.minlength')">
											Your confirmation password is required to be at least 4 characters.
										</small>
										<small class="form-text text-danger" v-if="!$v.confirmPassword.maxLength"
											v-text="$t('global.messages.validate.confirmpassword.maxlength')">
											Your confirmation password cannot be longer than 50 characters.
										</small>
										<small class="form-text text-danger" v-if="!$v.confirmPassword.sameAsPassword"
											v-text="$t('global.messages.error.dontmatch')">
											The password and its confirmation do not match!
										</small>
									</div>
								</div>
								  <div class="row">
									<!-- /.col -->
									<div class="col-12 text-center">
									  <button type="submit" :disabled="$v.$invalid " class="btn btn-info btn-block mt-15">Sign up</button>
									</div>
									<!-- /.col -->
								  </div>
							</form>
							<div class="text-center">
								<p class="mt-15 mb-0">Do you already have an account? <router-link to="/dang-nhap" class="text-danger ml-5"> Sign in</router-link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
</template>
<script lang="ts" src="./register.component.ts">
</script>

