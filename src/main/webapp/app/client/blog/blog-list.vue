<template>
    <div>
		<!---page Title --->
		<section class="bg-img pt-150 pb-20" data-overlay="7" style="background-image: url(content/images/front-end-img/background/bg-8.jpg);">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="text-center">
							<h2 class="page-title text-white">List of Post</h2>
							<ol class="breadcrumb bg-transparent justify-content-center">
								<li class="breadcrumb-item"><router-link :active-class="'text-white-50'" to="/"><i class="mdi mdi-home-outline"></i></router-link></li>
								<li class="breadcrumb-item text-white active" aria-current="page">Posts</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--Page content -->
    <div class="card"
          style=" background-color: #e9ecef;
                  width: 80%;
                  margin: 1rem auto !important;">
		<section class="py-50">
			<div class="container">

				<div class="row justify-content-center">
					<div class="col-lg-9 col-12" v-if="posts && posts.length>0">
						<div v-for="post in posts" :key="post.id" class="box">
							<div class="row no-gutters">
								<div class="col-md-4 col-12 bg-img h-md-auto h-250" :style="'background-image: url('+loadImage(post.thumbnail)+')'"></div>
								<div class="col-md-8 col-12">
								<div class="box-body">
									<h4><router-link :to="{name: 'BlogDetail', params: {slug: post.slug}}" >{{post.title}}</router-link></h4>
									<div class="d-flex mb-10">
										<div class="mr-10">
											<i class="fa fa-user mr-5"></i> {{post.user.login}}
										</div>
										<div>
											<i class="fa fa-calendar mr-5"></i> {{post.createdAt | formatDate}}
										</div>
									</div>

									<p>{{post.description}}</p>

									<div class="flexbox align-items-center mt-3">


									<div class="gap-items-4 float-right">
										<router-link class="btn btn-sm btn-primary" :to="{name: 'BlogDetail', params: {slug: post.slug}}" >View more</router-link>
									</div>
									</div>
								</div>
								</div>
							</div>
						</div>
						<div aria-label="Page navigation example">
						<ul class="pagination mb-0" v-if="posts && posts.length > 0">
							<li class="page-item"><a :class="{'not-active' : page === 1}" class="page-link" href="javascript:void(0)" @click="goToPage(page-1)">Previous</a></li>
							<li v-for="(p, index) in totalPage" :key="index" class="page-item"><a :class="{'p-active' : page === p}" @click="goToPage(p)" class="page-link" href="javascript:void(0)">{{p}}</a></li>
							<li class="page-item"><a class="page-link" :class="{'not-active' : page === totalPage}" href="javascript:void(0)" @click="goToPage(page+1)">Next</a></li>
						</ul>
						</div>
					</div>
				</div>
        </div>
		</section>
		</div>
    </div>
</template>
<script lang="ts" src="./blog-list.component.ts">
</script>
<style lang="css" scoped>
    #job-list-box{
        max-width: 1350px;
    }
    .p-active {
        border: 1px solid #0c7cd5;
        color: white !important;
        background-color: #0c7cd5 !important;
    }
    .not-active {
        pointer-events: none;
        cursor: default;
        text-decoration: none;
        color: #ccc;
    }
    .pagination {
        cursor: unset !important;
    }
    .w-100 {
        width: 100% !important;
    }
</style>
