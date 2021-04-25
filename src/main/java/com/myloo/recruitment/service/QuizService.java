package com.myloo.recruitment.service;

import com.myloo.recruitment.common.Util;
import com.myloo.recruitment.domain.*;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.QuestionDTO;
import com.myloo.recruitment.service.dto.TestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class QuizService {


    @Autowired
    private ProfileService profileService;

    @Autowired
    private ApplyJobService applyJobService;

    @Autowired
    private TestService testService;

    public BaseResponse checkTokenQuiz(String tokenId) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Token hợp lệ");
        try {
            TestDTO test = this.getTestByToken(tokenId);
            if (test == null) {
                response.setErrorCode("FAIL");
                response.setDescription("Token không hợp lệ");
                return response;
            }
            response.setData(test);
            return response;
        } catch (Exception e) {
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra");
            return response;
        }
    }

    public BaseResponse submitQuiz(String tokenId, TestDTO testDTO) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        try {
            TestDTO test = this.getTestByToken(tokenId);
            if (test == null) {
                response.setErrorCode("FAIL");
                response.setDescription("Token không hợp lệ");
                return response;
            }
            List<QuestionDTO> questionDTOS = testDTO.getQuestions();
            if (questionDTOS == null || questionDTOS.isEmpty()) {
                response.setErrorCode("ANSWER_NULL");
                response.setDescription("Lỗi trả lời câu hỏi");
                return response;
            }
            TestDTO testCheck = (TestDTO) testService.getDetail(test.getId()).getData();
            if (testCheck == null) {
                response.setErrorCode("QUESTION_NOT_FOUND");
                response.setDescription("Lỗi trả lời câu hỏi");
                return response;
            }
            List<QuestionDTO> questionChecks = testCheck.getQuestions();
            Integer totalQuestion = testCheck.getQuestions().size();
            Integer totalAnswerCorrect = 0;
            for (QuestionDTO questionDTO: questionDTOS) {
                for (QuestionDTO qCheck: questionChecks) {
                    if (qCheck.getId() == questionDTO.getId() && qCheck.getCorrectAnswer() == questionDTO.getCorrectAnswer()) {
                        totalAnswerCorrect ++;
                    }
                }
            }
            ApplyJob applyJob = applyJobService.getOneByTokenId(tokenId);
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(new Date());
            calendar.add(Calendar.HOUR_OF_DAY, 7);
            applyJob.setSubmitAt(calendar.getTime());
            applyJob.setTotalCorrectAnswer(totalAnswerCorrect);
            applyJob.setTotalQuestion(totalQuestion);
            applyJob.setStatus(2);
            applyJobService.save(applyJob);
            return response;
        } catch (Exception e) {
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra");
            return response;
        }
    }

    private TestDTO getTestByToken(String tokenId) {
        ApplyJob applyJob = applyJobService.getOneByTokenId(tokenId);
        if (applyJob == null) {
            return null;
        }
        if (applyJob.getSubmitAt() != null) {
            return null;
        }
        if (applyJob.getSentAt() == null) {
            return null;
        }
        if (Util.minutesBetweenTwoDate(applyJob.getSentAt(), new Date(System.currentTimeMillis() + 7 * 3600 * 1000)) > 120) {
            System.out.println("Quá 120 phút từ lúc gửi mail");
            return null;
        }
        Profile currentProfile = profileService.getCurrentProfileDomain();
        if (currentProfile == null) {
            return null;
        }
        if (applyJob.getProfileId() != currentProfile.getId()) {
            return null;
        }
        Job job = applyJob.getJob();
        if (job == null) {
            return null;
        }
        TestDTO test = testService.getTestWithoutCorrectAnswer(job.getTestId());
        if (test == null) {
            return null;
        }
        return test;
    }
}
