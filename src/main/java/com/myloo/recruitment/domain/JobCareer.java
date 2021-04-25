package com.myloo.recruitment.domain;

import javax.persistence.*;

@Entity
@Table(name = "job_careers")
public class JobCareer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "job_id")
    private Long jobId;

    @Column(name = "career_id")
    private Long careerId;

    public JobCareer(Long jobId, Long careerId) {
        this.jobId = jobId;
        this.careerId = careerId;
    }

    public JobCareer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getJobId() {
        return jobId;
    }

    public void setJobId(Long jobId) {
        this.jobId = jobId;
    }

    public Long getCareerId() {
        return careerId;
    }

    public void setCareerId(Long careerId) {
        this.careerId = careerId;
    }
}
