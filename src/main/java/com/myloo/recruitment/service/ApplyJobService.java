package com.myloo.recruitment.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.myloo.recruitment.common.Constant;
import com.myloo.recruitment.domain.ApplyJob;
import com.myloo.recruitment.domain.ApplyJobInterview;
import com.myloo.recruitment.domain.Authority;
import com.myloo.recruitment.domain.Cv;
import com.myloo.recruitment.domain.Profile;
import com.myloo.recruitment.domain.User;
import com.myloo.recruitment.repository.ApplyJobInterviewRepository;
import com.myloo.recruitment.repository.ApplyJobRepository;
import com.myloo.recruitment.repository.UserRepository;
import com.myloo.recruitment.security.SecurityUtils;
import com.myloo.recruitment.service.dto.ApplyJobDTO;
import com.myloo.recruitment.service.dto.ApplyJobInterviewDTO;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.ProfileDTO;
import com.myloo.recruitment.service.dto.UserDTO;
import com.myloo.recruitment.web.rest.vm.EmailInfoVM;

import liquibase.pro.packaged.cu;

@Service
public class ApplyJobService {

	@Autowired
	private ApplyJobRepository applyJobRepository;

	@Autowired
	private ApplyJobInterviewRepository applyJobInterviewRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserService userService;

	@Autowired
	private JobService jobService;

	@Autowired
	private ProfileService profileService;

	@Autowired
	private FileService fileService;

	@Autowired
	private CvService cvService;

	@Autowired
	private MailService mailService;

	public ApplyJob save(ApplyJob applyJob) {
		return applyJobRepository.save(applyJob);
	}

	public BaseResponse getAllApplyJob(String keyword, Pageable pageable) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			User currentUser = userService.getCurrentUser();
			if (currentUser == null) {
				response.setErrorCode("NOT_LOGIN");
				response.setDescription("Có lỗi xảy ra");
				return response;
			}
			Page<ApplyJob> list = applyJobRepository.findAllByUserId(keyword, currentUser.getId(), pageable);
			for (Iterator<Authority> it = currentUser.getAuthorities().iterator(); it.hasNext();) {
				Authority f = it.next();
				if (f.getName().equals("ROLE_ADMIN")) {
					list = applyJobRepository.getAll(keyword, pageable);
				}
			}
			if (list == null || list.isEmpty()) {
				response.setErrorCode("EMPTY_LIST");
				response.setDescription("Không có dữ liệu");
				return response;
			}
			Page<ApplyJobDTO> dtoList = list.map(this::domainToDTO);
			response.setData(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			response.setErrorCode("SERVER_ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
		return response;
	}
	
	public BaseResponse getAllApplyJob2(String keyword, Pageable pageable) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			User currentUser = userService.getCurrentUser();
			if (currentUser == null) {
				response.setErrorCode("NOT_LOGIN");
				response.setDescription("Có lỗi xảy ra");
				return response;
			}
			Page<ApplyJob> list = applyJobRepository.findAllByUserId2(keyword, currentUser.getId(), pageable);
			for (Iterator<Authority> it = currentUser.getAuthorities().iterator(); it.hasNext();) {
				Authority f = it.next();
				if (f.getName().equals("ROLE_ADMIN")) {
					list = applyJobRepository.getAll2(keyword, pageable);
				}
			}
			if (list == null || list.isEmpty()) {
				response.setErrorCode("EMPTY_LIST");
				response.setDescription("Không có dữ liệu");
				return response;
			}
			Page<ApplyJobDTO> dtoList = list.map(this::domainToDTO);
			response.setData(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			response.setErrorCode("SERVER_ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
		return response;
	}

	public BaseResponse getAllCurrentApplyJob(String keyword, Pageable pageable) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			User currentUser = userService.getCurrentUser();
			if (currentUser == null) {
				response.setErrorCode("NOT_LOGIN");
				response.setDescription("Có lỗi xảy ra");
				return response;
			}
			Page<ApplyJob> list = applyJobRepository.findAllByUserApplyId(keyword, currentUser.getId(), pageable);
			if (list == null || list.isEmpty()) {
				response.setErrorCode("EMPTY_LIST");
				response.setDescription("Không có dữ liệu");
				return response;
			}
			Page<ApplyJobDTO> dtoList = list.map(this::domainToDTO);
			response.setData(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			response.setErrorCode("SERVER_ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
		return response;
	}

	@Transactional
	public BaseResponse delete(Long applyId) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		ApplyJob applyJob = applyJobRepository.getOne(applyId);
		if (applyJob == null) {
			response.setErrorCode("NOT_FOUND");
			response.setDescription("Không có dữ liệu");
			return response;
		}
		applyJob.setDeleteAt(new Date());
		applyJobRepository.save(applyJob);
		return response;
	}

	@Transactional
	public BaseResponse checkCurrentUserApplyJob(Long jobId) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		User currentUser = userService.getCurrentUser();
		if (currentUser == null) {
			response.setErrorCode("NOT_LOGIN");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
		ApplyJob applyJob = applyJobRepository.getByJobIdAndUserId(jobId, currentUser.getId());
		if (applyJob == null) {
			response.setErrorCode("NOT_FOUND");
			response.setDescription("Không có dữ liệu");
			return response;
		}
		applyJob.setDeleteAt(new Date());
		applyJobRepository.save(applyJob);
		return response;
	}

	@Transactional
	public BaseResponse applyNow(Long jobId, MultipartFile cvFile) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		Profile profile = profileService.getCurrentProfileDomain();
		if (profile == null) {
			response.setErrorCode("PROFILE_EMPTY");
			response.setDescription("Chưa có thông tin cá nhân");
			return response;
		}
		ApplyJob applyJob = new ApplyJob();
		applyJob.setCreateAt(new Date());
		applyJob.setJobId(jobId);
		applyJob.setProfileId(profile.getId());
		applyJob.setApplyDate(new Date());
		applyJob.setStatus(1);
		if (cvFile != null) {
			Cv cv = new Cv();
			cv.setCreateAt(new Date());
			cv.setType(Constant.CV_PHU);
			cv.setTitle(cvFile.getOriginalFilename());
			cv.setUrl(fileService.uploadFile(Constant.CV_FOLDER, cvFile));
			cv = cvService.save(cv);
			applyJob.setCvId(cv.getId());
		} else {
			if (profile.getCv() == null) {
				response.setErrorCode("CV_EMPTY");
				response.setDescription("Chưa có thông tin CV cá nhân");
				return response;
			}
			applyJob.setCvId(profile.getCv().getId());
		}
		applyJobRepository.save(applyJob);
		return response;
	}

	@Transactional
	public BaseResponse updateStatus(Long applyId, Integer newStatus) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		ApplyJob applyJob = applyJobRepository.getOne(applyId);
		if (applyJob == null) {
			response.setErrorCode("NOT_FOUND");
			response.setDescription("Không có dữ liệu");
			return response;
		}
		applyJob.setUpdateAt(new Date());
		applyJob.setStatus(newStatus);
		applyJobRepository.save(applyJob);
		return response;
	}

	@Transactional
	public BaseResponse createInterviewCalendar(ApplyJobInterviewDTO applyJobInterviewDTO) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			ApplyJobInterview applyJobInterview = new ApplyJobInterview();
			if (applyJobInterviewDTO.getId() == null) {
				applyJobInterview.setCreatedAt(new Date());
			}else {
				applyJobInterview = applyJobInterviewRepository.getOne(applyJobInterviewDTO.getId());
				applyJobInterview.setUpdatedAt(new Date());
				
			}
			ApplyJob applyJob = applyJobRepository.getOne(applyJobInterviewDTO.getApplyJobId()); 
			applyJobInterview.setAddress(applyJobInterviewDTO.getAddress());
			applyJobInterview.setInterviewTime(applyJobInterviewDTO.getInterviewTime());
			applyJobInterview.setInterviewer(applyJobInterviewDTO.getInterviewer());
			User user = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin().get()).get();
			if (user != null) {
				applyJobInterview.setUser(user);
			}
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(applyJobInterview.getInterviewTime());
			calendar.add(Calendar.HOUR_OF_DAY, 7);
			applyJobInterview.setInterviewTime(calendar.getTime());
			ApplyJobInterview newInterview = applyJobInterviewRepository.save(applyJobInterview);
			if (applyJobInterviewDTO.getId() == null) {
				applyJob.setApplyJobInterview(newInterview);
				applyJobRepository.save(applyJob);
			}
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Đã xảy ra lỗi");
			return response;
		}
	}

	public ApplyJob getOneByTokenId(String tokenId) {
		return applyJobRepository.getByTokenId(tokenId);
	}

	private ApplyJobDTO domainToDTO(ApplyJob domain) {
		ApplyJobDTO dto = new ApplyJobDTO();
		dto.setId(domain.getId());
		dto.setApplyDate(domain.getApplyDate());
		dto.setStatus(domain.getStatus());
		dto.setTotalCorrectAnswer(domain.getTotalCorrectAnswer());
		dto.setTotalQuestion(domain.getTotalQuestion());
		dto.setOldStatus(domain.getStatus());
		dto.setApplyJobInterview(domain.getApplyJobInterview());
		if (domain.getTokenId() != null) {
			dto.setTokenId(domain.getTokenId());
		}
		if (domain.getSentAt() != null) {
			dto.setSendAt(domain.getSentAt());
		}
		dto.setCv(domain.getCv());
		if (domain.getJob() != null) {
			dto.setJobDTO(jobService.domainToDTO(domain.getJob()));
		}
		if (domain.getProfile() != null) {
			ProfileDTO profileDTO = profileService.domainToDTO(domain.getProfile());
			profileDTO.setUser(new UserDTO(domain.getProfile().getUser()));
			dto.setProfileDTO(profileDTO);
		}

		return dto;
	}

	public BaseResponse sendEmailTest(EmailInfoVM info) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		ApplyJob applyJob = applyJobRepository.getOne(info.getApplyJobId());
		if (applyJob == null) {
			response.setErrorCode("NOT_FOUND");
			response.setDescription("Không có dữ liệu");
			return response;
		}
		String link = "";
		if (info.getIsSendTest() == 1) {
			link = createQuizLink(applyJob);
		}
		applyJob.setMailContent(info.getContent());
		mailService.sendEmailTest(info.getEmail(), info.getContent(), info.getSubject(), link);
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		calendar.add(Calendar.HOUR_OF_DAY, 7);
		applyJob.setSentAt(calendar.getTime());
		applyJobRepository.save(applyJob);
		return response;
	}

	private String createQuizLink(ApplyJob applyJob) {
		String tokenId = UUID.randomUUID().toString() + System.currentTimeMillis();
		applyJob.setTokenId(tokenId);
		return "http://localhost:9000/kiem-tra/" + tokenId;
	}

	// Đếm số lượng ứng viên apply pass/fail
	@Transactional
	public BaseResponse countJobPassAndFail() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			Integer pass = applyJobRepository.countApplyJobPass();
			Integer fail = applyJobRepository.countApplyJobFail();
			HashMap<String, Integer> data = new HashMap<String, Integer>();
			data.put("pass", pass);
			data.put("fail", fail);
			response.setData(data);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}
	
	// Đếm số lượng ứng viên apply pass/fail theo user id
	@Transactional
	public BaseResponse countJobPassAndFailByUserId() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			User currentUser = userService.getCurrentUser();
			if (currentUser == null) {
				response.setErrorCode("NOT_LOGIN");
				response.setDescription("Có lỗi xảy ra");
				return response;
			}
			Integer pass = applyJobRepository.countApplyJobPassByUserId(currentUser.getId());
			Integer fail = applyJobRepository.countApplyJobFailByUserId(currentUser.getId());
			HashMap<String, Integer> data = new HashMap<String, Integer>();
			data.put("passuser", pass);
			data.put("failuser", fail);
			response.setData(data);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}

	@Transactional
	public BaseResponse countApplyJobByMonthOfYear() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			int year = Calendar.getInstance().get(Calendar.YEAR);
			ArrayList<Integer> result = new ArrayList<Integer>();
			for (int i = 1; i <= 12; i++) {
				result.add(applyJobRepository.countApplyJobByMonthInYear(i, year));
			}
			response.setData(result);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}
	
	@Transactional
	public BaseResponse countApplyJobByMonthOfYearByUserId() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			User currentUser = userService.getCurrentUser();
			if (currentUser == null) {
				response.setErrorCode("NOT_LOGIN");
				response.setDescription("Có lỗi xảy ra");
				return response;
			}
			
			int year = Calendar.getInstance().get(Calendar.YEAR);
			ArrayList<Integer> result = new ArrayList<Integer>();
			for (int i = 1; i <= 12; i++) {
				result.add(applyJobRepository.countApplyJobByMonthInYearByUserId(currentUser.getId(),i, year));
			}
			response.setData(result);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}

	@Transactional
	public BaseResponse countApplyJobByCareer() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			List<Map<String, Integer>> list = applyJobRepository.countApplyJobByCareer();
			response.setData(list);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}
	
	@Transactional
	public BaseResponse countApplyJobByCareerByUserId() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			User currentUser = userService.getCurrentUser();
			if (currentUser == null) {
				response.setErrorCode("NOT_LOGIN");
				response.setDescription("Có lỗi xảy ra");
				return response;
			}
			
			List<Map<String, Integer>> list = applyJobRepository.countApplyJobByCareerByUserId(currentUser.getId());
			response.setData(list);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}

	@Transactional
	public BaseResponse countTop7ApplyJobByCareer() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			List<Map<String, Integer>> list = applyJobRepository.countTop7ApplyJobByCareer();
			response.setData(list);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}
	
	@Transactional
	public BaseResponse countTop7ApplyJobByCareerByUserId() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			User currentUser = userService.getCurrentUser();
			if (currentUser == null) {
				response.setErrorCode("NOT_LOGIN");
				response.setDescription("Có lỗi xảy ra");
				return response;
			}
			
			List<Map<String, Integer>> list = applyJobRepository.countTop7ApplyJobByCareerByUserId(currentUser.getId());
			response.setData(list);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}

	@Transactional
	public BaseResponse countTop7ApplyJobByJob() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			List<Map<String, Integer>> list = applyJobRepository.countTop7ApplyJobByJob();
			response.setData(list);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}
	
	@Transactional
	public BaseResponse countTop7ApplyJobByJobByUserId() {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			User currentUser = userService.getCurrentUser();
			if (currentUser == null) {
				response.setErrorCode("NOT_LOGIN");
				response.setDescription("Có lỗi xảy ra");
				return response;
			}
			
			List<Map<String, Integer>> list = applyJobRepository.countTop7ApplyJobByJobByUserId(currentUser.getId());
			response.setData(list);
			return response;
		} catch (Exception e) {
			response.setErrorCode("ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}

}
