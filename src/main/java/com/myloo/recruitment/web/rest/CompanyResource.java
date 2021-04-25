package com.myloo.recruitment.web.rest;

import com.myloo.recruitment.service.CompanyService;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.CompanyDTO;
import com.myloo.recruitment.service.dto.ProfileDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class CompanyResource {

    @Autowired
    private CompanyService companyService;

    @PostMapping(value = "/company")
    public ResponseEntity<BaseResponse> update(
        @RequestPart("company") CompanyDTO companyDTO
        , @RequestParam(value = "logoFile", required = false) MultipartFile logoFile)
    {
        BaseResponse response = companyService.update(companyDTO, logoFile);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "/company/detail")
    public ResponseEntity<BaseResponse> detail(
    )
    {
        BaseResponse response = companyService.getCompanyDetail();
        return ResponseEntity.ok(response);
    }
}
