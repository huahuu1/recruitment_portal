package com.myloo.recruitment.web.rest.vm;

public class EmailInfoVM {
	private Long applyJobId;
	private String name;
	private String email;
	private String subject;
	private String content;
	private Integer isSendTest;
	public Long getApplyJobId() {
		return applyJobId;
	}
	public void setApplyJobId(Long applyJobId) {
		this.applyJobId = applyJobId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Integer getIsSendTest() {
		return isSendTest;
	}
	public void setIsSendTest(Integer isSendTest) {
		this.isSendTest = isSendTest;
	}
	
	
	
}
