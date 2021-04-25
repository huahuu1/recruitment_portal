package com.myloo.recruitment.web.rest;

import com.myloo.recruitment.service.CareerService;
import com.myloo.recruitment.service.dto.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CareerResource {

    @Autowired
    private CareerService careerService;

    @GetMapping(value = "/common/careers")
    public ResponseEntity<BaseResponse> getAllCareer(
    )
    {
        BaseResponse response = careerService.findAll();
        return ResponseEntity.ok(response);
    }
}
