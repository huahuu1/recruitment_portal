package com.myloo.recruitment.repository;

import com.myloo.recruitment.domain.Profile;
import com.myloo.recruitment.service.dto.JobDTO;

import java.util.List;

public interface JobRepositoryCustom {
	
    List<JobDTO> findAll(String keyword, Long locationId, List career, List jobType, List salary, Profile profile,
                         Integer pageSize, Integer page);

    Long countAll(String keyword, Long locationId, List career, List jobType, List salary, Profile profile);
}
