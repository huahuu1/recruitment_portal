package com.myloo.recruitment.service.dto;

import java.util.List;

public class PaginationResponse {
    private List list;
    private Integer page;
    private Integer pageSize;
    private Long total;

    public PaginationResponse(List list, Integer page, Integer pageSize, Long total) {
        this.list = list;
        this.page = page;
        this.pageSize = pageSize;
        this.total = total;
    }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
