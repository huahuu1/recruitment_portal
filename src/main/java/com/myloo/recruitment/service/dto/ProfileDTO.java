package com.myloo.recruitment.service.dto;

import com.myloo.recruitment.domain.Cv;

public class ProfileDTO {
    private Long id;

    private String skill;

    private Integer experience;

    private String interests;

    private String jobExpect;

    private String description;

    private Long qualification;

    private Long englishSkill;

    private Long cvId;

    private Long jobType;

    private Long salaryExpect;

    private String career;

    private Cv cv;

    private UserDTO user;

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public Cv getCv() {
        return cv;
    }

    public void setCv(Cv cv) {
        this.cv = cv;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public Integer getExperience() {
        return experience;
    }

    public void setExperience(Integer experience) {
        this.experience = experience;
    }

    public String getInterests() {
        return interests;
    }

    public void setInterests(String interests) {
        this.interests = interests;
    }

    public String getJobExpect() {
        return jobExpect;
    }

    public void setJobExpect(String jobExpect) {
        this.jobExpect = jobExpect;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getQualification() {
        return qualification;
    }

    public void setQualification(Long qualification) {
        this.qualification = qualification;
    }

    public Long getEnglishSkill() {
        return englishSkill;
    }

    public void setEnglishSkill(Long englishSkill) {
        this.englishSkill = englishSkill;
    }

    public Long getCvId() {
        return cvId;
    }

    public void setCvId(Long cvId) {
        this.cvId = cvId;
    }

    public Long getJobType() {
        return jobType;
    }

    public void setJobType(Long jobType) {
        this.jobType = jobType;
    }

    public Long getSalaryExpect() {
        return salaryExpect;
    }

    public void setSalaryExpect(Long salaryExpect) {
        this.salaryExpect = salaryExpect;
    }

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }
}
