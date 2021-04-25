package com.myloo.recruitment.web.rest;

import com.myloo.recruitment.service.ProvinceService;
import com.myloo.recruitment.service.dto.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProvinceResource {

    @Autowired
    private ProvinceService provinceService;

    @GetMapping(value = "/common/provinces")
    public ResponseEntity<BaseResponse> getAll(
    )
    {
        BaseResponse response = provinceService.findAll();
        return ResponseEntity.ok(response);
    }
}
