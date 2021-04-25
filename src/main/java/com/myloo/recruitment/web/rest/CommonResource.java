package com.myloo.recruitment.web.rest;

import com.myloo.recruitment.common.Constant;
import com.myloo.recruitment.domain.Cv;
import com.myloo.recruitment.service.CommonService;
import com.myloo.recruitment.service.CvService;
import com.myloo.recruitment.service.dto.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api")
public class CommonResource {

	@Autowired
	private CommonService commonService;

	@Autowired
	private CvService cvService;

	@GetMapping(value = "/common/get-image", produces = MediaType.IMAGE_JPEG_VALUE)
	public @ResponseBody byte[] getImage(@RequestParam String name) {
		try {

			return Files.readAllBytes(Paths.get(Constant.FILE_FOLDER + "/" + name));
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}

	@GetMapping(value = "/common/salary")
	public ResponseEntity<BaseResponse> getAllSalary() {
		BaseResponse response = commonService.getAllSalary();
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/common/job-type")
	public ResponseEntity<BaseResponse> getAllJobType() {
		BaseResponse response = commonService.getAllJobType();
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/common/position")
	public ResponseEntity<BaseResponse> getAllPosition() {
		BaseResponse response = commonService.getAllPosition();
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/common/qualification")
	public ResponseEntity<BaseResponse> getAllQualification() {
		BaseResponse response = commonService.getAllQualification();
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/common/english-skill")
	public ResponseEntity<BaseResponse> getAllEnglishSkill() {
		BaseResponse response = commonService.getAllEnglishSkill();
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/common/exp")
	public ResponseEntity<BaseResponse> getAllExp() {
		BaseResponse response = commonService.getAllExp();
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/common/company-size")
	public ResponseEntity<BaseResponse> getAllCompanySize() {
		BaseResponse response = commonService.getAllCompanySize();
		return ResponseEntity.ok(response);
	}

	@RequestMapping("/common/viewPdf/{cvId}")
	public ResponseEntity<?> viewPdf(@PathVariable("cvId") Long cvId) {
		try {
			Cv cv = cvService.getOne(cvId);
			if (cv == null) {
				return ResponseEntity.ok("Không có dữ liệu");
			}
			File file = new File(Constant.FILE_FOLDER + "/" + cv.getUrl());

			HttpHeaders header = new HttpHeaders();
			header.add(HttpHeaders.CONTENT_DISPOSITION, "inline;filename=Dummy.pdf");

			Path path = Paths.get(file.getAbsolutePath());

			ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

			return ResponseEntity.ok().headers(header).contentLength(file.length())
					.contentType(MediaType.parseMediaType("application/pdf")).body(resource);
		} catch (Exception e) {
			return ResponseEntity.ok("Không có dữ liệu");
		}
	}
}
