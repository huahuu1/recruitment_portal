package com.myloo.recruitment.service;

import com.myloo.recruitment.domain.Authority;
import com.myloo.recruitment.domain.Question;
import com.myloo.recruitment.domain.Test;
import com.myloo.recruitment.domain.User;
import com.myloo.recruitment.repository.QuestionRepository;
import com.myloo.recruitment.repository.TestRepository;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.QuestionDTO;
import com.myloo.recruitment.service.dto.TestDTO;
import liquibase.pro.packaged.D;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private QuestionRepository questionRepository;

    public Test getOne(Long id) {
        return testRepository.getOne(id);
    }

    public BaseResponse getAllByCurrentUser(String keyword, Pageable pageable) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            User user = userService.getCurrentUser();
            if (user == null) {
                response.setErrorCode("NOT_LOGIN");
                response.setDescription("Chưa đăng nhập");
                return response;
            }
            Page<Test> list = testRepository.getAllWithQuestionByUser(keyword, user.getId(), pageable);
            for (Iterator<Authority> it = user.getAuthorities().iterator(); it.hasNext(); ) {
                Authority f = it.next();
                if (f.getName().equals("ROLE_ADMIN")) {
                    list = testRepository.getAll(keyword, pageable);
                }
            }
            if (list == null || list.isEmpty()) {
                response.setErrorCode("EMPTY_LIST");
                response.setDescription("Không có dữ liệu");
                return response;
            }
            Page<TestDTO> dtoList = list.map(this::domainToDTO);
            response.setData(dtoList);

        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra");
            return response;
        }
        return response;
    }

    public BaseResponse getDetail(Long testId) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        Test test = testRepository.getAllWithQuestionById(testId);
        if (test == null) {
            response.setErrorCode("NOT_FOUND");
            response.setDescription("Không có dữ liệu!");
            return response;
        }
        response.setData(this.domainToDTO(test));
        return response;
    }

    public TestDTO getTestWithoutCorrectAnswer(Long testId) {

        Test test = testRepository.getAllWithQuestionById(testId);
        if (test == null) {
            return null;
        }
        TestDTO testDTO = this.domainToDTO(test);
        List<QuestionDTO> questionDTOS = testDTO.getQuestions();
        Collections.shuffle(questionDTOS, new Random());
        if (questionDTOS != null && questionDTOS.size() > 0) {
            for(QuestionDTO dto : questionDTOS) {
                dto.setCorrectAnswer(null);
            }
            testDTO.setQuestions(questionDTOS);
        }
        return testDTO;
    }


    public BaseResponse updateStatus(Long testId) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        Test test = testRepository.getAllWithQuestionById(testId);
        if (test == null) {
            response.setErrorCode("NOT_FOUND");
            response.setDescription("Không có dữ liệu");
            return response;
        }
        Integer status = test.getStatus();
        test.setStatus(status == 1 ? 0 : 1);
        test.setUpdateAt(new Date());
        testRepository.save(test);
        return response;
    }

    @Transactional
    public BaseResponse update(Test test) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            User user = userService.getCurrentUser();
            if (user == null) {
                response.setErrorCode("NOT_LOGIN");
                response.setDescription("Chưa đăng nhập");
                return response;
            }
            Test testUpdate = null;
            Question questionUpdate = null;
            if (test.getId() != null) {
                testUpdate = testRepository.getAllWithQuestionById(test.getId());
                if (testUpdate == null) {
                    response.setErrorCode("NOT_FOUND");
                    response.setDescription("Không có dữ liệu");
                    return response;
                }
                testUpdate.setUpdateAt(new Date());
            } else {
                testUpdate = new Test();
                testUpdate.setCreateAt(new Date());
            }
            testUpdate.setName(test.getName());
            testUpdate.setStatus(1);
            testUpdate.setTime(test.getTime());
            testUpdate.setUser(user);
            testUpdate = testRepository.save(testUpdate);
            List<Question> questions = test.getQuestions();
            if (questions != null && questions.size() > 0) {
                for(Question q: questions) {
                    if (q.getId() == null) {
                        System.out.println(2);
                    }
                    if (q.getId() != null) {
                        questionUpdate = questionRepository.getOneById(q.getId());
                        if (questionUpdate == null) {
                            response.setErrorCode("NOT_FOUND");
                            response.setDescription("Không có dữ liệu");
                            return response;
                        }
                        questionUpdate.setUpdateAt(new Date());
                    } else {
                        questionUpdate = new Question();
                        questionUpdate.setCreateAt(new Date());
                    }
                    questionUpdate.setQuestionTitle(q.getQuestionTitle());
                    questionUpdate.setAnswerOne(q.getAnswerOne());
                    questionUpdate.setAnswerTwo(q.getAnswerTwo());
                    questionUpdate.setAnswerThree(q.getAnswerThree());
                    questionUpdate.setAnswerFour(q.getAnswerFour());
                    questionUpdate.setCorrectAnswer(q.getCorrectAnswer());
                    questionUpdate.setTestId(testUpdate.getId());
                    questionRepository.save(questionUpdate);
                }
            }
            response.setData(testUpdate);

        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra");
            return response;
        }
        return response;
    }

    @Transactional
    public BaseResponse delete(Long testId) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            Test test = testRepository.getAllWithQuestionById(testId);
            if (test == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu");
                return response;
            }
            List<Question> questions = test.getQuestions();
            if (questions != null) {
                for(Question q: questions) {
                    q.setDeleteAt(new Date());
                    questionRepository.save(q);
                }
            }
            test.setDeleteAt(new Date());
            testRepository.save(test);

        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra");
            return response;
        }
        return response;
    }

    @Transactional
    public BaseResponse deleteQuestion(Long questionId) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            Question q = questionRepository.getOneById(questionId);
            if (q == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu");
                return response;
            }
            q.setDeleteAt(new Date());
            questionRepository.save(q);

        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra");
            return response;
        }
        return response;
    }

    public TestDTO domainToDTO(Test domain) {
        TestDTO dto = new TestDTO();
        dto.setId(domain.getId());
        dto.setName(domain.getName());
        dto.setCreateAt(domain.getCreateAt());

        if (domain.getQuestions() != null) {
            List<QuestionDTO> dtoList = new ArrayList<>();
            for(Question q: domain.getQuestions()) {
                if (q.getDeleteAt() == null) {
                    dtoList.add(this.questionDomainToDTO(q));
                }
            }
            dto.setQuestions(dtoList);
        }
        dto.setStatus(domain.getStatus());
        dto.setTime(domain.getTime());
        return dto;
    }

    public QuestionDTO questionDomainToDTO(Question question) {
        QuestionDTO dto = new QuestionDTO();
        dto.setId(question.getId());
        dto.setQuestionTitle(question.getQuestionTitle());
        dto.setAnswerOne(question.getAnswerOne());
        dto.setAnswerTwo(question.getAnswerTwo());
        dto.setAnswerThree(question.getAnswerThree());
        dto.setAnswerFour(question.getAnswerFour());
        dto.setCorrectAnswer(question.getCorrectAnswer());
        return dto;
    }
}
