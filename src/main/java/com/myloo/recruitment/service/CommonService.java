package com.myloo.recruitment.service;

import com.myloo.recruitment.common.Constant;
import com.myloo.recruitment.service.dto.BaseResponse;
import org.springframework.stereotype.Service;

@Service
public class CommonService {

    public BaseResponse getAllJobType() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        response.setData(Constant.JOBTYPE_LST);
        return response;
    }

    public BaseResponse getAllSalary() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        response.setData(Constant.SALARY_LST);
        return response;
    }

    public BaseResponse getAllPosition() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        response.setData(Constant.POSITION_LST);
        return response;
    }

    public BaseResponse getAllQualification() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        response.setData(Constant.QUALIFICATION_LST);
        return response;
    }
    public BaseResponse getAllEnglishSkill() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        response.setData(Constant.ENGLISH_SKILL_LST);
        return response;
    }
    public BaseResponse getAllExp() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        response.setData(Constant.EXP_LST);
        return response;
    }
    public BaseResponse getAllCompanySize() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công");
        response.setData(Constant.COMPANY_SIZE_LST);
        return response;
    }
}
