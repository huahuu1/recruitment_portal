package com.myloo.recruitment.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.myloo.recruitment.config.Constants;
import com.myloo.recruitment.domain.Post;
import com.myloo.recruitment.repository.PostRepository;
import com.myloo.recruitment.service.PostService;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.CategoryDTO;
import com.myloo.recruitment.service.dto.CompanyDTO;
import com.myloo.recruitment.service.dto.PostDTO;
import com.myloo.recruitment.service.dto.UserDTO;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;

@RestController
@RequestMapping("/api")
public class PostResource {

	@Autowired
	private PostService postService;

	@Autowired
	private PostRepository postRepository;

	// Lấy ra danh sách các bài viết admin
	@GetMapping("/posts")
	public ResponseEntity<List<PostDTO>> getAll(Pageable pageable,
			@RequestParam(required = false, name = "keyword") String keyword) {
		final Page<PostDTO> page = postService.getAll(pageable, keyword);
		HttpHeaders headers = PaginationUtil
				.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
		return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
	}

	// Tạo mới và sửa bài viết
	@PostMapping(value = "/posts")
	public ResponseEntity<BaseResponse> create(@RequestPart("post") PostDTO postDTO,
			@RequestParam(value = "thumbnail", required = false) MultipartFile thumbnail) {
		BaseResponse response = postService.createandupdate(postDTO, thumbnail);
		return ResponseEntity.ok(response);
	}

	// Lấy ra bài viết theo ID
	@GetMapping("/posts/{postId}")
	public ResponseEntity<Post> getPost(@PathVariable Long postId) {
		return ResponseEntity.ok(postRepository.getOne(postId));
	}

	// Xóa danh mục bài viết
	@DeleteMapping("/posts/{postId}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long postId) {
		postService.deletePost(postId);
		return ResponseEntity.noContent()
				.headers(HeaderUtil.createAlert("recruitment-portal", "postManagement.deleted", postId.toString()))
				.build();
	}

	// Lấy ra danh sách các bài viết hiển thị ở client
	@GetMapping("/posts/public")
	public ResponseEntity<List<PostDTO>> getAllPostPublic(Pageable pageable,
			@RequestParam(required = false, name = "keyword") String keyword) {
		final Page<PostDTO> page = postService.getAll(pageable, keyword);
		HttpHeaders headers = PaginationUtil
				.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
		return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
	}
	// Chi tiết bài viết ở client
	@GetMapping(value = "/posts/public/{slug}")
	public ResponseEntity<BaseResponse> getJobDetail(@PathVariable("slug") String slug) {
		BaseResponse response = postService.getPostDetail(slug);
		return ResponseEntity.ok(response);
	}
}
