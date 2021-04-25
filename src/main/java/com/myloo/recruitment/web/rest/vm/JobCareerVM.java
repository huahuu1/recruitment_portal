package com.myloo.recruitment.web.rest.vm;

import com.myloo.recruitment.domain.Career;

public class JobCareerVM {
	private Career care;
	private Long quantity;
	public Career getCare() {
		return care;
	}
	public void setCare(Career care) {
		this.care = care;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	
}
