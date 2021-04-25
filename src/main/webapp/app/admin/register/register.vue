<template>
<div style="margin-top:100px">
	<div class="container h-p100">
		<div class="row align-items-center justify-content-md-center h-p100">

			<div class="col-12">
				<div class="row justify-content-center no-gutters">
					<div class="col-lg-5 col-md-5 col-12">
						<div class="bg-white rounded30 shadow-lg">
							<div class="content-top-agile p-20 pb-0">
								<h2 class="text-primary">SIGN UP AN ACCOUNT</h2>
								<p class="mb-0">Register for an account as an employer </p>
								<div style="margin-top:20px" class="row justify-content-center">
									<div class="col-md-12 toastify-container">

										<div class="alert alert-success" role="alert" v-if="success">
											<strong>Sign Up Success!</strong> Please check your email registration
										</div>

										<div class="alert alert-danger" role="alert" v-if="error">
											<strong>Registration failed!</strong> Please try again
										</div>

										<div class="alert alert-danger" role="alert" v-if="errorUserExists" >
											<strong>Username already registered!</strong> Please choose another account
										</div>

										<div class="alert alert-danger" role="alert" v-if="errorEmailExists">
											<strong>Email already exists!</strong> Please choose another account
										</div>
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
											>
											Username is not empty
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.login.minLength"
											>
											Username contains at least 5 character
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.login.maxLength"
											>
											Username cannot be greater than 50 characters
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.login.pattern"
											>
											Username contain only letters and numbers
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
											>
											Email is not empty
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.email.email"
											>
											Email is invalid
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.email.minLength"
											>
											Email must contain at least 5 characters
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.email.maxLength"
											>
											Email must not exceed 100 characters
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
											>
											Password cannot be empty
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.password.minLength"
											>
											Password must be at least 4 characters
										</small>
										<small class="form-text text-danger" v-if="!$v.registerAccount.password.maxLength"
											>
											Password must not exceed 50 characters
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
											>
											Confirm password cannot be empty
										</small>
										<small class="form-text text-danger" v-if="!$v.confirmPassword.minLength"
											>
											Confirm password must be at least 4 characters
										</small>
										<small class="form-text text-danger" v-if="!$v.confirmPassword.maxLength"
											>
											Confirm password must not exceed 50 characters
										</small>
										<small class="form-text text-danger" v-if="!$v.confirmPassword.sameAsPassword"
											>
											Confirm password does not match
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
								<p class="mt-15 mb-0">Do you already have an account?<router-link to="/admin/dang-nhap" class="text-danger ml-5"> Sign in</router-link></p>
							</div>
						</div>
						</div>

						<!-- <div class="text-center">
						  <p class="mt-20 text-white">- Register With -</p>
						  <p class="gap-items-2 mb-20">
							  <a class="btn btn-social-icon btn-round btn-facebook" href="#"><i class="fa fa-facebook"></i></a>
							  <a class="btn btn-social-icon btn-round btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
							  <a class="btn btn-social-icon btn-round btn-instagram" href="#"><i class="fa fa-instagram"></i></a>
							</p>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script src="./register.component.ts">
</script>