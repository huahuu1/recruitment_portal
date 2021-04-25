package com.myloo.recruitment.web.rest;

import com.myloo.recruitment.service.ProfileService;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.ProfileDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api")
public class ProfileResource {

    @Autowired
    private ProfileService profileService;

    @PostMapping(value = "/profile")
    public ResponseEntity<BaseResponse> update(
        @RequestPart("profile") ProfileDTO profile
        , @RequestParam(value = "cvFile", required = false) MultipartFile cvFile
        , @RequestParam(value = "avatar", required = false) MultipartFile avatar
    )
    {
        BaseResponse response = profileService.update(profile, cvFile, avatar);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "/profile/current")
    public ResponseEntity<BaseResponse> getCurrentProfile()
    {
        BaseResponse response = profileService.getCurrentProfile();
        return ResponseEntity.ok(response);
    }


}
