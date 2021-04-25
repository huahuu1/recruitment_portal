<template>
<div style="margin-top:200px">
	<div class="container h-p100">
		<div class="row align-items-center justify-content-md-center h-p100">
			<div class="col-12">
				<div class="row justify-content-center no-gutters">
					<div class="col-lg-5 col-md-5 col-12">
						<div class="bg-white rounded30 shadow-lg">
							<div class="content-top-agile p-20 pb-0">
								<h2 class="text-primary">SIGN IN</h2>
								<p class="mb-0">Sign in to continue to Job Market Admin.</p>
							</div>
							<div class="col-md-12 toastify-container" style="margin-top:20px">
                                <div v-if="authenticationError" class="alert alert-danger" role="alert">
                                    <strong>Login failed!</strong> Please try again
                                </div>
                            </div>
							<div class="p-40">
								<b-form role="form" v-on:submit.prevent="doLogin()">
									<div class="form-group">
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text bg-transparent"><i class="ti-user"></i></span>
											</div>
											<input id="username" name="username" autofocus placeholder="Username" v-model="login" type="text" class="form-control pl-15 bg-transparent">
										</div>
										<div v-if="$v.login.$anyDirty && $v.login.$invalid">
                                            <small class="form-text text-danger" v-if="!$v.login.required">
                                                You must enter an username
                                            </small>
                                        </div>
									</div>
									<div class="form-group">
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text  bg-transparent"><i class="ti-lock"></i></span>
											</div>
											<input id="password" type="password" name="password" placeholder="Password" v-model="password" class="form-control pl-15 bg-transparent">
										</div>
										<div v-if="$v.password.$anyDirty && $v.password.$invalid">
                                            <small class="form-text text-danger" v-if="!$v.password.required">
                                                You must enter a password
                                            </small>
                                        </div>
									</div>
									  <div class="row">
										<!-- <div class="col-6">
										  <div class="checkbox">
											<input type="checkbox" id="basic_checkbox_1" v-model="rememberMe" >
											<label for="basic_checkbox_1">Ghi nhớ mật khẩu</label>
										  </div>
										</div> -->
										<!-- /.col -->
										<div class="col-6">
										 <div class="fog-pwd text-right">
											<router-link class="hover-warning" to="/quen-mat-khau"><i class="ion ion-locked"></i> Forgot password?</router-link><br>
										  </div>
										</div>
										<!-- /.col -->
										<div class="col-12 text-center">
										  <button type="submit" class="btn btn-danger mt-10">SIGN IN</button>
										</div>
										<!-- /.col -->
									  </div>
								</b-form>
								<div class="text-center">
									<p class="mt-15 mb-0">Don't have an employer account? <router-link to="/admin/dang-ky" class="text-warning ml-5">Registration</router-link></p>
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
<script src="./login.component.ts">
</script>