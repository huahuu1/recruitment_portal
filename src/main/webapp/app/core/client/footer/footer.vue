<template>
<footer class="footer_three">
		<div class="footer-top bg-dark3 pt-80">
            <div class="container">
                <div class="row">
					<div class="col-lg-3 col-12">
                        <div class="widget">
                            <h4 class="footer-title">About</h4>
							<p class="text-capitalize mb-20">Welcome to Job Market, Vietnam's leading job transaction network.The mission of Job Market is simple: connect the Vietnam's professionals to make them more productive and successful.<br><br>Sharing your professional journey in an authentic and engaging way is the starting point for connecting with the communities that matter most to you.</p>
                        </div>
                    </div>
					<div class="col-lg-2 col-12">
						<div class="widget">
							<h4 class="footer-title">Quick Link</h4>
							<ul class="list list-arrow mb-30">
								<li>
                  <router-link :active-class="'active'" to="/danh-sach-viec-lam">Latest jobs</router-link>
                </li>
								<li>
                  <router-link :active-class="'active'" to="/bai-viet">Posts</router-link>
                </li>
							</ul>
						</div>
                    </div>
					<div class="col-lg-4 col-12">
						<div class="widget">
							<h4 class="footer-title">Contact Info</h4>
							<ul class="list list-unstyled mb-30">
								<li> <i class="fa fa-map-marker"></i> 590 Cach Mang Thang Tam, Ward 11, District 3, Ho Chi Minh City</li>
								<li> <i class="fa fa-phone"></i> <span class="mr-5">028 3846 0846 </span> | <span class="ml-5">027 3426 0445 </span></li>
								<li> <i class="fa fa-envelope"></i> <span class="mr-5">aptech.fpt.edu.vn </span></li>
							</ul>
							<!-- <div class="social-icons mt-30">
								<ul class="list-unstyled d-flex gap-items-1">
									<li><a href="#" class="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#" class="waves-effect waves-circle btn btn-social-icon btn-circle btn-twitter"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#" class="waves-effect waves-circle btn btn-social-icon btn-circle btn-linkedin"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="#" class="waves-effect waves-circle btn btn-social-icon btn-circle btn-youtube"><i class="fa fa-youtube"></i></a></li>
								</ul>
							</div> -->
						</div>
					</div>

					<div class="col-lg-3 col-12">
                        <div class="widget">
                            <h4 class="footer-title">Sign up now</h4>
							<p class="text-capitalize mb-20">Sign Up to our Newsletter and get the latest offers.</p>
                            <div class="mb-20">

									<button name="submit" value="Submit" type="button" class="btn btn-info mt-5"> Sign up </button>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<div class="footer-bottom bg-dark3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 text-md-left text-center"> © 2021 <span class="text-white">Job Market</span>  All Rights Reserved.</div>
					<div class="col-lg-6 col-md-6 mt-md-0 mt-20">
						<ul class="payment-icon list-unstyled d-flex gap-items-1 justify-content-md-end justify-content-center">
							<li class="pl-0">
								<a href="javascript:;"><i class="fa fa-cc-amex" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href="javascript:;"><i class="fa fa-cc-visa" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href="javascript:;"><i class="fa fa-credit-card-alt" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href="javascript:;"><i class="fa fa-cc-mastercard" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href="javascript:;"><i class="fa fa-cc-paypal" aria-hidden="true"></i></a>
							</li>
						</ul>
					</div>
                </div>
            </div>
        </div>
	</footer>
</template>

<script lang="ts" src="./footer.component.ts">
</script>

<style scoped>
    .footer {
        text-align: left;
    }
</style>
