package com.myloo.recruitment.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myloo.recruitment.service.JobService;
import com.myloo.recruitment.service.PostService;
import com.myloo.recruitment.service.dto.BaseResponse;

@RestController
@RequestMapping("/api/home")
public class HomeResource {
	@Autowired
	private JobService jobService;
	
	@Autowired
	private PostService postService;

	// Lấy ra 6 job cơ hội random từ csdl
	@GetMapping(value = "/job-opportunity")
	public ResponseEntity<BaseResponse> getSixJobOpportunity() {
		Pageable topSixRandom = PageRequest.of(0, 6);
		BaseResponse response = jobService.getSixJobOpportunity(topSixRandom);
		return ResponseEntity.ok(response);
	}

	// Lấy ra 8 job hot nhất theo view
	@GetMapping(value = "/job-hot")
	public ResponseEntity<BaseResponse> getJobHot() {
		Pageable topEight = PageRequest.of(0, 8,Sort.by("view").descending());
		BaseResponse response = jobService.getJobHost(topEight);
		return ResponseEntity.ok(response);
	}
	// Lấy ra 8 job mới nhâts
	@GetMapping(value = "/job-lastest")
	public ResponseEntity<BaseResponse> getJobLastest() {
		Pageable topEight = PageRequest.of(0, 8, Sort.by("createAt").descending());
		BaseResponse response = jobService.getJobLastest(topEight);
		return ResponseEntity.ok(response);
	}
	// Lấy ra 3 job hot nhất theo view
	@GetMapping(value = "/post-lastest")
	public ResponseEntity<BaseResponse> getPostLastest() {
		Pageable topThree = PageRequest.of(0, 3, Sort.by("createdAt").descending());
		BaseResponse response = postService.getPostLastest(topThree);
		return ResponseEntity.ok(response);
	}
	// Lấy ra 8 ngành nghề và số lương vị trí đi kèm
	@GetMapping(value = "/count-career")
	public ResponseEntity<BaseResponse> coutCareer() {
		Pageable topEight = PageRequest.of(0,8);
		BaseResponse response = jobService.countCareerwithJob(topEight);
		return ResponseEntity.ok(response);
	}
	// Lấy ra 8 tỉnh thành kèm theo SL vị trí đi kèm
		@GetMapping(value = "/count-location")
		public ResponseEntity<BaseResponse> coutLocation() {
			Pageable topEight = PageRequest.of(0,8);
			BaseResponse response = jobService.countLocation(topEight);
			return ResponseEntity.ok(response);
		}
}
