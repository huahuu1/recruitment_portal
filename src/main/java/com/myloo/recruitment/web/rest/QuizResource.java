package com.myloo.recruitment.web.rest;

import com.myloo.recruitment.service.QuizService;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.TestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class QuizResource {

    @Autowired
    private QuizService quizService;

    @GetMapping(value = "/quiz/{tokenId}")
    public ResponseEntity<BaseResponse> checkTokenQuiz(
        @PathVariable("tokenId") String tokenId
    )
    {
        BaseResponse response = quizService.checkTokenQuiz(tokenId);
        return ResponseEntity.ok(response);
    }

    @PostMapping(value = "/quiz/submit/{tokenId}")
    public ResponseEntity<BaseResponse> submitQuiz(
        @PathVariable("tokenId") String tokenId,
        @RequestBody TestDTO testDTO
        )
    {
        BaseResponse response = quizService.submitQuiz(tokenId, testDTO);
        return ResponseEntity.ok(response);
    }
}
