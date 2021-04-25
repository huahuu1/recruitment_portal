package com.myloo.recruitment.repository;

import com.myloo.recruitment.service.dto.CompanyCareerDTO;

import java.util.List;

public interface CompanyRepositoryCustom {
    CompanyCareerDTO getByCompanyIdAndCareerId(Long companyId, Long careerId);
    List<CompanyCareerDTO> getByCompanyId(Long compayId);
    void delete(CompanyCareerDTO dto);
    void insert(CompanyCareerDTO dto);
}
