package com.myloo.recruitment.service.dto;

import java.util.Date;

import com.myloo.recruitment.domain.User;

public class ApplyJobInterviewDTO {
	private Long id;
	private Long applyJobId;
	private Date interviewTime;
	private String address;
	private String interviewer;
	private User user;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getApplyJobId() {
		return applyJobId;
	}
	public void setApplyJobId(Long applyJobId) {
		this.applyJobId = applyJobId;
	}
	public Date getInterviewTime() {
		return interviewTime;
	}
	public void setInterviewTime(Date interviewTime) {
		this.interviewTime = interviewTime;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getInterviewer() {
		return interviewer;
	}
	public void setInterviewer(String interviewer) {
		this.interviewer = interviewer;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
}
