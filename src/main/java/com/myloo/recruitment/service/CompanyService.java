package com.myloo.recruitment.service;

import com.myloo.recruitment.common.Constant;
import com.myloo.recruitment.domain.*;
import com.myloo.recruitment.repository.CompanyRepository;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.CompanyCareerDTO;
import com.myloo.recruitment.service.dto.CompanyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private FileService fileService;

    @Autowired
    private UserService userService;

    @Transactional
    public BaseResponse update(CompanyDTO companyDTO, MultipartFile logoFile) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            Company company = null;
            User currentUser = userService.getCurrentUser();
            if (currentUser == null) {
                response.setErrorCode("NOT_LOGIN");
                response.setDescription("Chưa đăng nhập!");
                return response;
            }
            if (companyDTO.getId() != null) {
                company = companyRepository.getOne(companyDTO.getId());
                if (company == null) {
                    response.setErrorCode("NOT_FOUND");
                    response.setDescription("Không tìm thấy thông tin!");
                    return response;
                }
                company.setUpdateAt(new Date());
            } else {
                company = new Company();
                company.setCreateAt(new Date());
            }
            company = this.dtoToDomain(companyDTO, company);
            if (logoFile != null) {
                String logo = fileService.uploadFile(Constant.IMAGE_FOLDER, logoFile);
                company.setLogo(logo);
            }
            company.setUser(currentUser);
            company = companyRepository.save(company);
            CompanyCareerDTO career;
            if (companyDTO.getScopeWork() != null && companyDTO.getScopeWork().size() > 0) {
                for (Long scopeWordId: companyDTO.getScopeWork()) {
                    career = companyRepository.getByCompanyIdAndCareerId(company.getId(), scopeWordId);
                    if (career != null) {
                        companyRepository.delete(career);
                    }
                    career = new CompanyCareerDTO(company.getId(), scopeWordId);
                    companyRepository.insert(career);
                }
            }
            response.setData(company.getId());
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra");
            return response;
        }
    }

    public BaseResponse getCompanyDetail() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            Company company = this.getCompanyByCurrentUser();
            if (company == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không tìm thấy thông tin!");
                return response;
            }
            CompanyDTO dto = this.domainToDTO(company);
            List<Long> scopeWorks = companyRepository.getByCompanyId(company.getId())
                .stream().map(c -> c.getCareerId()).collect(Collectors.toList());
            dto.setScopeWork(scopeWorks);
            response.setData(dto);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra");
            return response;
        }
    }



    public Company getCompanyByCurrentUser() {
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            return null;
        }
        return companyRepository.getOneByUser(currentUser.getId());
    }

    public Company save(Company company) {
        return companyRepository.save(company);
    }

    public CompanyDTO domainToDTO(Company domain) {
        CompanyDTO dto = new CompanyDTO();
        dto.setId(domain.getId());
        dto.setCode(domain.getCode());
        dto.setName(domain.getName());
//        dto.setScopeWork(domain.getScopeWork());
        dto.setAddress(domain.getAddress());
        dto.setPhone(domain.getPhone());
        dto.setEmail(domain.getEmail());
        dto.setLogo(domain.getLogo());
        dto.setWebsite(domain.getWebsite());
        dto.setDescription(domain.getDescription());
        dto.setCompanySize(domain.getCompanySize());
        return dto;
    }

    public Company dtoToDomain(CompanyDTO dto, Company domain) {
        domain.setName(dto.getName());
        domain.setCode(dto.getCode());
//        dto.setScopeWork(domain.getScopeWork());
        domain.setAddress(dto.getAddress());
        domain.setPhone(dto.getPhone());
        domain.setEmail(dto.getEmail());
        domain.setWebsite(dto.getWebsite());
        domain.setDescription(dto.getDescription());
        domain.setCompanySize(dto.getCompanySize());
        return domain;
    }
}
