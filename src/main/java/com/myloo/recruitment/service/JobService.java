package com.myloo.recruitment.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.myloo.recruitment.common.Util;
import com.myloo.recruitment.domain.Authority;
import com.myloo.recruitment.domain.Career;
import com.myloo.recruitment.domain.Company;
import com.myloo.recruitment.domain.Job;
import com.myloo.recruitment.domain.JobCareer;
import com.myloo.recruitment.domain.Profile;
import com.myloo.recruitment.domain.Province;
import com.myloo.recruitment.domain.Test;
import com.myloo.recruitment.domain.User;
import com.myloo.recruitment.repository.CareerRepository;
import com.myloo.recruitment.repository.JobCareerRepository;
import com.myloo.recruitment.repository.JobRepository;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.JobDTO;
import com.myloo.recruitment.service.dto.PaginationResponse;
import com.myloo.recruitment.web.rest.vm.JobCareerVM;
import com.myloo.recruitment.web.rest.vm.JobProvinceVM;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private CompanyService companyService;

    @Autowired
    private QuestionService questionService;

    @Autowired
    private ProfileService profileService;

    @Autowired
    private FileService fileService;

    @Autowired
    private CvService cvService;

    @Autowired
    private UserService userService;

    @Autowired
    private ApplyJobService applyJobService;

    @Autowired
    private ProvinceService provinceService;

    @Autowired
    private TestService testService;

    @Autowired
    private JobCareerRepository jobCareerRepository;
    
    @Autowired
    private CareerRepository careerRepository;

    public BaseResponse getAllForCurrentUser(String keyword, Pageable pageable) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        User user = userService.getCurrentUser();
        if (user == null) {
            response.setErrorCode("NOT_LOGIN");
            response.setDescription("Chưa đăng nhập");
            return response;
        }
        Page<Job> list = jobRepository.getAllByUser(keyword, user.getId(), pageable);
        for (Iterator<Authority> it = user.getAuthorities().iterator(); it.hasNext(); ) {
        	Authority f = it.next();
            if (f.getName().equals("ROLE_ADMIN")) {
            	list = jobRepository.getAll(keyword, pageable);
            }
        }
        if (list == null || list.isEmpty()) {
            response.setErrorCode("EMPTY_LIST");
            response.setDescription("Không có dữ liệu");
            return response;
        }
        Page<JobDTO> dtoList = list.map(this::domainToDTO);
        response.setData(dtoList);
        return response;
    }

    public BaseResponse update(JobDTO jobDTO) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        Job job;
        if (jobDTO.getId() == null) {
            job = new Job();
            job.setCreateAt(new Date());
            Company company = companyService.getCompanyByCurrentUser();
            if (company != null) {
                job.setCompanyId(company.getId());
            }
        } else {
            job = jobRepository.getOne(jobDTO.getId());
            if (job == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu");
                return response;
            }
            job.setUpdateAt(new Date());
        }
        job.setContent(jobDTO.getContent());
        job.setDeadline(jobDTO.getDeadline());
        job.setSalary(jobDTO.getSalary());
        job.setJobType(jobDTO.getJobType());
        job.setRecruiteNumber(jobDTO.getRecruiteNumber());
        job.setExperience(jobDTO.getExperience());
        job.setPosition(jobDTO.getPosition());
        job.setSkill(jobDTO.getSkill());
        job.setTitle(jobDTO.getTitle());
        job.setStatus(0);
        if (jobDTO.getLocationId() != null) {
            Province province = provinceService.getOne(jobDTO.getLocationId());
            if (province != null) {
                job.setLocationId(province.getId());
            }
        }
        if (jobDTO.getTestId() != null) {
            Test test = testService.getOne(jobDTO.getTestId());
            if (test != null) {
                job.setTestId(test.getId());
            }
        }
        job = jobRepository.save(job);
        if (jobDTO.getScopeWork() != null && jobDTO.getScopeWork().size() > 0) {
            for (Long scopeWordId: jobDTO.getScopeWork()) {
                JobCareer career = jobCareerRepository.getByJobIdAndCareerId(job.getId(), scopeWordId);
                if (career != null) {
                    jobCareerRepository.delete(career);
                }
                career = new JobCareer(job.getId(), scopeWordId);
                jobCareerRepository.save(career);
            }
        }
        response.setData(job);
        return response;
    }

    public BaseResponse updateStatus(Long jobId) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        Job job = jobRepository.getOne(jobId);
        if (job ==null) {
            response.setErrorCode("NOT_FOUND");
            response.setDescription("Không có dữ liệu!");
            return response;
        }
        job.setUpdateAt(new Date());
        Integer oldStatus = job.getStatus();
        job.setStatus(oldStatus == 1 ? 0 : 1);
        jobRepository.save(job);
        return response;
    }

    public BaseResponse delete(Long jobId) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        Job job = jobRepository.getOne(jobId);
        if (job ==null) {
            response.setErrorCode("NOT_FOUND");
            response.setDescription("Không có dữ liệu!");
            return response;
        }
        job.setDeleteAt(new Date());
        jobRepository.save(job);
        return response;
    }

    public BaseResponse getOne(Long id) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        Job job = jobRepository.getOne(id);
        if (job == null) {
            response.setErrorCode("NOT_FOUND");
            response.setDescription("Không có dữ liệu");
            return response;
        }
        JobDTO dto = this.domainToDTO(job);

        response.setData(dto);
        return response;
    }

    public BaseResponse getAllSuggest(String keyword, Long locationId, String career, String jobType, String salary,
                                      Integer pageSize, Integer page) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            Profile profile = profileService.getCurrentProfileDomain();
            List<JobDTO> list = jobRepository.findAll(keyword, locationId,
                Util.stringToList(career), Util.stringToList(jobType), Util.stringToList(salary), profile, pageSize, page);
            Long total = jobRepository.countAll(keyword, locationId,
                Util.stringToList(career), Util.stringToList(jobType), Util.stringToList(salary), profile);
            response.setData(new PaginationResponse(list, page, pageSize, total));
            return response;
        } catch (Exception e) {
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
    }

    public BaseResponse getJobDetail(Long jobId) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            Job job = jobRepository.getOne(jobId);
            if (job == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu!");
                return response;
            }
            JobDTO dto = this.domainToDTO(job);
            dto.setJobTypeName(Util.getJobTypeName(dto.getJobType()));
            dto.setSalaryName(Util.getSalaryName(dto.getSalary()));
            List<Long> scopeWorks = jobCareerRepository.getByJobId(job.getId())
                .stream().map(c -> c.getCareerId()).collect(Collectors.toList());
            dto.setScopeWork(scopeWorks);
            response.setData(dto);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
    }

    public BaseResponse updateView(Long jobId) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            Job job = jobRepository.getOne(jobId);
            if (job == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu!");
                return response;
            }
            Integer view = job.getView();
            if(view == null) {
            	view = 0;
            }
            job.setView(view+1);
            jobRepository.save(job);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
    }

    public BaseResponse getSixJobOpportunity(Pageable pageable) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            List<Job> job = jobRepository.getSixJobOpportunity(pageable);
            if (job == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu!");
                return response;
            }
            response.setData(job);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
    }

    public BaseResponse getJobHost(Pageable pageable) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            List<Job> job = jobRepository.getHotJob(pageable);
            if (job == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu!");
                return response;
            }
            response.setData(job);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
    }

    public BaseResponse getJobLastest(Pageable pageable) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            List<Job> job = jobRepository.getLastestJob(pageable);
            if (job == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu!");
                return response;
            }
            response.setData(job);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
    }
    // Đếm số lượng theo ngành nghề
    public BaseResponse countCareerwithJob(Pageable pageable) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            List<Object[]> jobs = jobCareerRepository.countCareerWithJob(pageable);
            List<JobCareerVM> listCount = new ArrayList<JobCareerVM>();
            for (Object[] ob : jobs){
            	JobCareerVM vm = new JobCareerVM();
            	vm.setCare(careerRepository.findById(Long.parseLong(ob[0].toString())).get());
            	vm.setQuantity(Long.parseLong(ob[1].toString()));
            	listCount.add(vm);
            }
            if (listCount == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu!");
                return response;
            }
            response.setData(listCount);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
    }
    
 // Đếm số lượng theo tỉnh thành
    public BaseResponse countLocation(Pageable pageable) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            List<Object[]> jobs = jobRepository.getCountLocation(pageable);
            List<JobProvinceVM> listCount = new ArrayList<JobProvinceVM>();
            for (Object[] ob : jobs){
            	JobProvinceVM vm = new JobProvinceVM();
            	vm.setProvince((Province)ob[0]);
            	vm.setQuantity(Long.parseLong(ob[1].toString()));
            	listCount.add(vm);
            }
            if (listCount == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu!");
                return response;
            }
            response.setData(listCount);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
    }

    public JobDTO domainToDTO(Job domain) {
        JobDTO dto = new JobDTO();
        dto.setId(domain.getId());
        dto.setContent(domain.getContent());
        dto.setDeadline(domain.getDeadline());
        dto.setSalary(domain.getSalary());
        dto.setSalaryName(Util.getSalaryName(domain.getSalary()));
        dto.setJobType(domain.getJobType());
        dto.setJobTypeName(Util.getJobTypeName(domain.getJobType()));
        dto.setRecruiteNumber(domain.getRecruiteNumber());
        dto.setExperience(domain.getExperience());

        dto.setPosition(domain.getPosition());
        dto.setSkill(domain.getSkill());
        dto.setProvince(domain.getProvince());
        dto.setLocationId(domain.getLocationId());
        dto.setStatus(domain.getStatus());
        dto.setView(domain.getView());
        dto.setCreateAt(domain.getCreateAt());
        dto.setTitle(domain.getTitle());
        dto.setTestId(domain.getTestId());
        Company company = domain.getCompany();
        if (company != null) {
            dto.setCompany(companyService.domainToDTO(company));
        }
        return dto;
    }


}
