package com.myloo.recruitment.service;

import com.myloo.recruitment.domain.Authority;
import com.myloo.recruitment.domain.Category;
import com.myloo.recruitment.repository.CategoryRepository;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.CategoryDTO;
import com.myloo.recruitment.service.dto.UserDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	public Page<CategoryDTO> getAll(Pageable pageable, String keyword) {
		return categoryRepository.findAll(pageable, keyword).map(CategoryDTO::new);
	}

	@Transactional
	public BaseResponse update(Category category) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			Category categoryUpdate;
			if (category.getId() == null) {
				categoryUpdate = new Category();
			} else {
				categoryUpdate = categoryRepository.getOne(category.getId());
				if (categoryUpdate == null) {
					response.setErrorCode("NOT_FOUND");
					response.setDescription("Không có dữ liệu category");
					return response;
				}
			}
			categoryUpdate.setTitle(category.getTitle());
			categoryUpdate.setDescription(category.getDescription());
			categoryUpdate = categoryRepository.save(categoryUpdate);
			response.setData(categoryUpdate);
			return response;
		} catch (Exception e) {
			response.setErrorCode("SERVER_ERROR");
			response.setDescription(e.getMessage());
			return response;
		}
	}

	public Category createCategory(CategoryDTO categoryDTO) {
		Category cate = new Category();
		cate.setTitle(categoryDTO.getTitle());
		cate.setDescription(categoryDTO.getDescription());
		cate.setCreatedAt(new Date());
		categoryRepository.save(cate);
		return cate;
	}

	@Transactional
	public void deleteCategory(Long categoryId) {
		categoryRepository.findById(categoryId).ifPresent(cate -> {
			cate.setDeletedAt(new Date());
			categoryRepository.save(cate);
		});
	}

	@Transactional
	public BaseResponse delete(Long categoryId) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			Category category = categoryRepository.getOne(categoryId);
			if (category == null) {
				response.setErrorCode("NOT_FOUND");
				response.setDescription("Không có dữ liệu category");
				return response;
			}
			categoryRepository.delete(category);
			return response;
		} catch (Exception e) {
			response.setErrorCode("SERVER_ERROR");
			response.setDescription(e.getMessage());
			return response;
		}
	}

	public Category updateCate(CategoryDTO categoryDTO) {
		Optional<Category> cateUpdate = categoryRepository.findById(categoryDTO.getId());
		cateUpdate.get().setTitle(categoryDTO.getTitle());
		cateUpdate.get().setDescription(categoryDTO.getDescription());
		cateUpdate.get().setUpdatedAt(new Date());
		categoryRepository.save(cateUpdate.get());
		return cateUpdate.get();
	}
}
