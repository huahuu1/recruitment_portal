package com.myloo.recruitment.service.dto;

import java.util.Date;

import com.myloo.recruitment.domain.Category;
import com.myloo.recruitment.domain.Post;
import com.myloo.recruitment.domain.User;

public class PostDTO {
	private Long id;
	private String title;
	private String description;
	private String content;
	private Integer status;
	private String slug;
	private String tag;
	private String thumbnail;
	private Date createdAt;
	private Date updatedAt;
	private Date deletedAt;
	private Category category;
	private User user;
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
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public String getSlug() {
		return slug;
	}
	public void setSlug(String slug) {
		this.slug = slug;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
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
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	public PostDTO() {
		
	}
	public PostDTO(Post p) {
		this.id = p.getId();
		this.title = p.getTitle();
		this.description = p.getDescription();
		this.content = p.getContent();
		this.status = p.getStatus();
		this.tag = p.getTag();
		this.createdAt = p.getCreatedAt();
		this.updatedAt = p.getUpdatedAt();
		this.deletedAt = p.getDeletedAt();
		this.category = p.getCategory();
		this.user = p.getUser();
		this.slug = p.getSlug();
		this.thumbnail = p.getThumbnail();
	}
}
