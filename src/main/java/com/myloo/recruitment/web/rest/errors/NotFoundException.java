package com.myloo.recruitment.web.rest.errors;

public class NotFoundException extends BadRequestAlertException{
    private static final long serialVersionUID = 1L;

    public NotFoundException() {
        super(ErrorConstants.NOT_FOUND, "Not found!", "userManagement", "notFound");
    }
}
