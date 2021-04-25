package com.myloo.recruitment.web.rest.vm;

import com.myloo.recruitment.domain.Province;

public class JobProvinceVM {
	private Province province;
	private Long quantity;
	public Province getProvince() {
		return province;
	}
	public void setProvince(Province province) {
		this.province = province;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	
}
