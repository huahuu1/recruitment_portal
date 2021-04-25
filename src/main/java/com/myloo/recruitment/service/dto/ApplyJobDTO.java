package com.myloo.recruitment.service.dto;

import com.myloo.recruitment.domain.ApplyJobInterview;
import com.myloo.recruitment.domain.Cv;

import java.util.Date;

public class ApplyJobDTO {
    private Long id;
    private JobDTO jobDTO;
    private Cv cv;
    private ProfileDTO profileDTO;
    private Date applyDate;
    private ApplyJobInterview applyJobInterview;
    private Integer totalCorrectAnswer;
    private Integer totalQuestion;
    private Integer status;
    private Integer oldStatus;
    private String tokenId;
    private Date sendAt;
    private Date createdAt;

    public Integer getOldStatus() {
        return oldStatus;
    }

    public void setOldStatus(Integer oldStatus) {
        this.oldStatus = oldStatus;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public JobDTO getJobDTO() {
        return jobDTO;
    }

    public void setJobDTO(JobDTO jobDTO) {
        this.jobDTO = jobDTO;
    }

    public Cv getCv() {
        return cv;
    }

    public void setCv(Cv cv) {
        this.cv = cv;
    }

    public ProfileDTO getProfileDTO() {
        return profileDTO;
    }

    public void setProfileDTO(ProfileDTO profileDTO) {
        this.profileDTO = profileDTO;
    }

    public Date getApplyDate() {
        return applyDate;
    }

    public void setApplyDate(Date applyDate) {
        this.applyDate = applyDate;
    }

    public Integer getTotalCorrectAnswer() {
        return totalCorrectAnswer;
    }

    public void setTotalCorrectAnswer(Integer totalCorrectAnswer) {
        this.totalCorrectAnswer = totalCorrectAnswer;
    }

    public Integer getTotalQuestion() {
        return totalQuestion;
    }

    public void setTotalQuestion(Integer totalQuestion) {
        this.totalQuestion = totalQuestion;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

	public String getTokenId() {
		return tokenId;
	}

	public void setTokenId(String tokenId) {
		this.tokenId = tokenId;
	}

	public Date getSendAt() {
		return sendAt;
	}

	public void setSendAt(Date sendAt) {
		this.sendAt = sendAt;
	}

	public ApplyJobInterview getApplyJobInterview() {
		return applyJobInterview;
	}

	public void setApplyJobInterview(ApplyJobInterview applyJobInterview) {
		this.applyJobInterview = applyJobInterview;
	}

	
    
}
