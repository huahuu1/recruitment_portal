package com.myloo.recruitment.web.rest;

import com.myloo.recruitment.service.ApplyJobService;
import com.myloo.recruitment.service.dto.ApplyJobInterviewDTO;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.web.rest.vm.EmailInfoVM;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class ApplyJobResource {

	@Autowired
	private ApplyJobService applyJobService;

	@GetMapping(value = "/admin/apply-job")
	public ResponseEntity<BaseResponse> getAllApplyJob(@RequestParam(name = "keyword", required = false) String keyword,
			Pageable pageable) {
		BaseResponse response = applyJobService.getAllApplyJob(keyword, pageable);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/admin/apply-job-2")
	public ResponseEntity<BaseResponse> getAllApplyJob2(@RequestParam(name = "keyword", required = false) String keyword,
			Pageable pageable) {
		BaseResponse response = applyJobService.getAllApplyJob2(keyword, pageable);
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/client/apply-job")
	public ResponseEntity<BaseResponse> getAllCurrentApplyJob(
			@RequestParam(name = "keyword", required = false) String keyword, Pageable pageable) {
		BaseResponse response = applyJobService.getAllCurrentApplyJob(keyword, pageable);
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/client/apply-job/check-apply/{jobId}")
	public ResponseEntity<BaseResponse> checkCurrentUserApplyJob(@PathVariable("jobId") Long jobId) {
		BaseResponse response = applyJobService.checkCurrentUserApplyJob(jobId);
		return ResponseEntity.ok(response);
	}

	@PostMapping(value = "/client/apply-job/apply-now/{jobId}")
	public ResponseEntity<BaseResponse> applyNow(@PathVariable("jobId") Long jobId,
			@RequestParam(value = "cvFile", required = false) MultipartFile cvFile) {
		BaseResponse response = applyJobService.applyNow(jobId, cvFile);
		return ResponseEntity.ok(response);
	}

	@DeleteMapping(value = "/admin/apply-job/{id}")
	public ResponseEntity<BaseResponse> delete(@PathVariable("id") Long id) {
		BaseResponse response = applyJobService.delete(id);
		return ResponseEntity.ok(response);
	}

	@PostMapping(value = "/admin/apply-job/update-status/{id}/{status}")
	public ResponseEntity<BaseResponse> updateStatus(@PathVariable("id") Long id,
			@PathVariable("status") Integer newStatus) {
		BaseResponse response = applyJobService.updateStatus(id, newStatus);
		return ResponseEntity.ok(response);
	}
	
	@PostMapping(value = "/admin/apply-job/send-test")
	public ResponseEntity<BaseResponse> sendMailTest(@RequestBody EmailInfoVM emailInfo) {
		BaseResponse response = applyJobService.sendEmailTest(emailInfo);
		return ResponseEntity.ok(response);
	}
	
	@PostMapping(value = "/admin/apply-job/interview-calendar")
	public ResponseEntity<BaseResponse> createInterviewCalendar(@RequestBody ApplyJobInterviewDTO applyJobInterviewDTO) {
		BaseResponse response = applyJobService.createInterviewCalendar(applyJobInterviewDTO);
		return ResponseEntity.ok(response);
	}

}
