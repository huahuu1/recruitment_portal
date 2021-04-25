package com.myloo.recruitment.service.dto;

import java.util.Date;

import com.myloo.recruitment.domain.Category;

public class CategoryDTO {
	private Long id;
	private String title;
	private String description;
	private Date createdAt;
	private Date updatedAt;
	private Date deletedAt;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	public Date getDeletedAt() {
		return deletedAt;
	}
	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}
	public CategoryDTO() {
		
	}
	public CategoryDTO(Category c) {
		this.id = c.getId();
		this.title = c.getTitle();
		this.description = c.getDescription();
		this.createdAt = c.getCreatedAt();
		this.updatedAt = c.getUpdatedAt();
		this.deletedAt = c.getDeletedAt();
	}
}
