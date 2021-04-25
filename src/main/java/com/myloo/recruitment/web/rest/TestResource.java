package com.myloo.recruitment.web.rest;

import com.myloo.recruitment.domain.Test;
import com.myloo.recruitment.service.TestService;
import com.myloo.recruitment.service.dto.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TestResource {

    @Autowired
    private TestService testService;

    @GetMapping(value = "/admin/tests")
    public ResponseEntity<BaseResponse> getAll(
        @RequestParam(name = "keyword", required = false) String keyword,
        Pageable pageable
    )
    {
        BaseResponse response = testService.getAllByCurrentUser(keyword, pageable);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "/admin/tests/{id}")
    public ResponseEntity<BaseResponse> getDetail(
        @PathVariable("id") Long id
    )
    {
        BaseResponse response = testService.getDetail(id);
        return ResponseEntity.ok(response);
    }


    @PostMapping(value = "/admin/tests")
    public ResponseEntity<BaseResponse> upadte(
        @RequestBody Test test
        )
    {
        BaseResponse response = testService.update(test);
        return ResponseEntity.ok(response);
    }

    @PostMapping(value = "/admin/tests/update-status/{id}")
    public ResponseEntity<BaseResponse> updateStatus(
        @PathVariable("id") Long id
    )
    {
        BaseResponse response = testService.updateStatus(id);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value = "/admin/tests/{id}")
    public ResponseEntity<BaseResponse> delete(
        @PathVariable("id") Long id
    )
    {
        BaseResponse response = testService.delete(id);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(value = "/admin/tests/question/{id}")
    public ResponseEntity<BaseResponse> deleteQuestion(
        @PathVariable("id") Long id
    )
    {
        BaseResponse response = testService.deleteQuestion(id);
        return ResponseEntity.ok(response);
    }
}
