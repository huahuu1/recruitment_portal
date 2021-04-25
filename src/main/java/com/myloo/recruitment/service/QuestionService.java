package com.myloo.recruitment.service;

import com.myloo.recruitment.domain.Question;
import com.myloo.recruitment.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getOneByTestId(Long id) {
        return questionRepository.getOneByTestId(id);
    }



}
