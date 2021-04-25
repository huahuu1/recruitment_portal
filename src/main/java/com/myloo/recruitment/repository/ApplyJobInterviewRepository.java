package com.myloo.recruitment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.ApplyJobInterview;

@Repository
public interface ApplyJobInterviewRepository  extends JpaRepository<ApplyJobInterview, Long> {

}
