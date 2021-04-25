package com.myloo.recruitment.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myloo.recruitment.service.ApplyJobService;
import com.myloo.recruitment.service.dto.BaseResponse;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardResource {
	@Autowired
	private ApplyJobService applyJobService;
	
	@GetMapping(value = "/count-pass-fail")
	public ResponseEntity<BaseResponse> countPassFail() {
		BaseResponse response = applyJobService.countJobPassAndFail();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/count-pass-fail-by-user")
	public ResponseEntity<BaseResponse> countPassFailByUserId() {
		BaseResponse response = applyJobService.countJobPassAndFailByUserId();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/count-applyjob-monthofyear")
	public ResponseEntity<BaseResponse> countAJMonthOfYear() {
		BaseResponse response = applyJobService.countApplyJobByMonthOfYear();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/count-applyjob-monthofyear-by-user")
	public ResponseEntity<BaseResponse> countAJMonthOfYearByUserId() {
		BaseResponse response = applyJobService.countApplyJobByMonthOfYearByUserId();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/count-applyjob-career")
	public ResponseEntity<BaseResponse> countApplyJobByCareer() {
		BaseResponse response = applyJobService.countApplyJobByCareer();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/count-applyjob-career-user")
	public ResponseEntity<BaseResponse> countApplyJobByCareerByUserId() {
		BaseResponse response = applyJobService.countApplyJobByCareerByUserId();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/count-applyjob-top7-career")
	public ResponseEntity<BaseResponse> countTop7ApplyJobByCareer() {
		BaseResponse response = applyJobService.countTop7ApplyJobByCareer();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/count-applyjob-top7-career-user")
	public ResponseEntity<BaseResponse> countTop7ApplyJobByCareerByUserId() {
		BaseResponse response = applyJobService.countTop7ApplyJobByCareerByUserId();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/count-applyjob-top7-job")
	public ResponseEntity<BaseResponse> countTop7ApplyJobByJob() {
		BaseResponse response = applyJobService.countTop7ApplyJobByJob();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/count-applyjob-top7-job-user")
	public ResponseEntity<BaseResponse> countTop7ApplyJobByJobByUserId() {
		BaseResponse response = applyJobService.countTop7ApplyJobByJobByUserId();
		return ResponseEntity.ok(response);
	}
}
