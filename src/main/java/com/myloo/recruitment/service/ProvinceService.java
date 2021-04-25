package com.myloo.recruitment.service;

import com.myloo.recruitment.domain.Career;
import com.myloo.recruitment.domain.Province;
import com.myloo.recruitment.repository.ProvinceRepository;
import com.myloo.recruitment.service.dto.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinceService {

    @Autowired
    private ProvinceRepository provinceRepository;


    public Province getOne(String id) {
        return provinceRepository.getOne(id);
    }

    public BaseResponse findAll() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        List<Province> list = provinceRepository.findAll();
        if (list == null || list.isEmpty()) {
            response.setErrorCode("EMPTY_PROVINCE");
            response.setDescription("Không có dữ liệu vị trí");
            return response;
        }
        response.setData(list);
        return response;
    }

}
