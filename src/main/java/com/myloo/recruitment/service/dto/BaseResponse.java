package com.myloo.recruitment.service.dto;

import java.io.Serializable;

public class BaseResponse implements Serializable {
    private String errorCode; //SUCCESS, ERROR, NOT_FOUND
    private String description; //Thành công, thất bại, ko tìm thấy...
    private Object data;

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
