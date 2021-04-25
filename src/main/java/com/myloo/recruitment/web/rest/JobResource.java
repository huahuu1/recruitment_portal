package com.myloo.recruitment.web.rest;

import com.myloo.recruitment.service.JobService;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.JobDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class JobResource {

	@Autowired
	private JobService jobService;

	@GetMapping(value = "/jobs")
	public ResponseEntity<BaseResponse> getAllSuggest(@RequestParam(name = "keyword", required = false) String keyword,
			@RequestParam(name = "provinceId", required = false) Long provinceId,
			@RequestParam(name = "career", required = false) String career,
			@RequestParam(name = "jobType", required = false) String jobType,
			@RequestParam(name = "salary", required = false) String salary,
			@RequestParam(name = "page", required = false) Integer page,
			@RequestParam(name = "pageSize", required = false) Integer pageSize) {
		BaseResponse response = jobService.getAllSuggest(keyword, provinceId, career, jobType, salary, pageSize, page);
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/jobs/detail/{jobId}")
	public ResponseEntity<BaseResponse> getJobDetail(@PathVariable("jobId") Long jobId) {
		BaseResponse response = jobService.getJobDetail(jobId);
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/jobs/update-view/{jobId}")
	public ResponseEntity<BaseResponse> updateView(@PathVariable("jobId") Long jobId) {
		BaseResponse response = jobService.updateView(jobId);
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/admin/jobs")
	public ResponseEntity<BaseResponse> getAllForCurrentUser(
			@RequestParam(name = "keyword", required = false) String keyword, Pageable pageable) {
		return ResponseEntity.ok(jobService.getAllForCurrentUser(keyword, pageable));
	}

	@PostMapping(value = "/admin/jobs")
	public ResponseEntity<BaseResponse> update(@RequestBody JobDTO jobDTO) {
		jobDTO.setStatus(0);
		return ResponseEntity.ok(jobService.update(jobDTO));
	}

	@PostMapping(value = "/admin/jobs/update-status/{id}")
	public ResponseEntity<BaseResponse> update(@PathVariable("id") Long id) {
		return ResponseEntity.ok(jobService.updateStatus(id));
	}

	@DeleteMapping(value = "/admin/jobs/{id}")
	public ResponseEntity<BaseResponse> delete(@PathVariable("id") Long id) {
		return ResponseEntity.ok(jobService.delete(id));
	}

}
