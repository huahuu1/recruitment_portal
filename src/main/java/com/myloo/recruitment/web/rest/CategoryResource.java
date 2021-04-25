package com.myloo.recruitment.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.myloo.recruitment.config.Constants;
import com.myloo.recruitment.domain.Category;
import com.myloo.recruitment.domain.User;
import com.myloo.recruitment.repository.CategoryRepository;
import com.myloo.recruitment.security.AuthoritiesConstants;
import com.myloo.recruitment.service.CategoryService;
import com.myloo.recruitment.service.dto.CategoryDTO;
import com.myloo.recruitment.service.dto.UserDTO;
import com.myloo.recruitment.web.rest.errors.BadRequestAlertException;
import com.myloo.recruitment.web.rest.errors.EmailAlreadyUsedException;
import com.myloo.recruitment.web.rest.errors.LoginAlreadyUsedException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;

@RestController
@RequestMapping("/api")
public class CategoryResource {

	@Autowired
	private CategoryService categoryService;

	@Autowired
	private CategoryRepository categoryRepository;

	// Lấy ra danh sách các danh mục bài viết
	@GetMapping("/categories")
	public ResponseEntity<List<CategoryDTO>> getAllUsers(Pageable pageable,
			@RequestParam(required = false, name = "keyword") String keyword) {

		final Page<CategoryDTO> page = categoryService.getAll(pageable, keyword);
		HttpHeaders headers = PaginationUtil
				.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
		return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
	}

	// Tạo mới danh mục bài viết
	@PostMapping("/categories")
	public ResponseEntity<Category> createCategory(@Valid @RequestBody CategoryDTO categoryDTO)
			throws URISyntaxException {
		if (categoryDTO.getId() != null) {
			throw new BadRequestAlertException("A new category cannot already have an ID", "categoryManagement",
					"idexists");
			// Lowercase the user login before comparing with database
		} else {
			Category newCategory = categoryService.createCategory(categoryDTO);
			return ResponseEntity.created(new URI("/api/categories/" + newCategory.getId())).headers(HeaderUtil
					.createAlert("recruitment-portal", "categoryManagement.created", newCategory.getId().toString()))
					.body(newCategory);
		}
	}

	// Cập nhật danh mục bài viết
	@PutMapping("/categories")
	public ResponseEntity<Category> updateCategory(@Valid @RequestBody CategoryDTO categoryDTO) {
		Optional<Category> existingCate = categoryRepository.findById(categoryDTO.getId());
		Category updatedCate = null;
		if (existingCate.isPresent()) {
			updatedCate = categoryService.updateCate(categoryDTO);
		}
		return ResponseEntity.ok(updatedCate);
	}

	// Xóa danh mục bài viết
	@DeleteMapping("/categories/{categoryId}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long categoryId) {
		categoryService.deleteCategory(categoryId);
		return ResponseEntity.noContent().headers(
				HeaderUtil.createAlert("recruitment-portal", "categoryManagement.deleted", categoryId.toString()))
				.build();
	}

}
