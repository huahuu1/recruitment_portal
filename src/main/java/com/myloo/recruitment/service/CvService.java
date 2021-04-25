package com.myloo.recruitment.service;

import com.myloo.recruitment.domain.Cv;
import com.myloo.recruitment.repository.CvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CvService {

    @Autowired
    private CvRepository cvRepository;

    public void delete(Cv cv) {
        cvRepository.delete(cv);
    }

    public Cv save(Cv cv) {
        return cvRepository.save(cv);
    }

    public Cv getOne(Long id) {
        return cvRepository.getOne(id);
    }

}
