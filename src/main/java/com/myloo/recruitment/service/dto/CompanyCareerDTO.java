package com.myloo.recruitment.service.dto;

public class CompanyCareerDTO {
    private Long careerId;
    private Long companyId;

    public CompanyCareerDTO() {
    }

    public Long getCareerId() {
        return careerId;
    }

    public void setCareerId(Long careerId) {
        this.careerId = careerId;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public CompanyCareerDTO(Long companyId, Long careerId) {
        this.careerId = careerId;
        this.companyId = companyId;
    }
}
