package com.myloo.recruitment.service;

import com.myloo.recruitment.domain.Career;
import com.myloo.recruitment.repository.CareerRepository;
import com.myloo.recruitment.service.dto.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CareerService {

    @Autowired
    private CareerRepository careerRepository;

    public BaseResponse findAll() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        List<Career> list = careerRepository.findAll();
        if (list == null || list.isEmpty()) {
            response.setErrorCode("EMPTY_CAREER");
            response.setDescription("Không có dữ liệu ngành nghề");
            return response;
        }
        response.setData(list);
        return response;
    }
}
