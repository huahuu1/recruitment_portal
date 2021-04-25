package com.myloo.recruitment.repository;

import com.myloo.recruitment.domain.JobCareer;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobCareerRepository extends JpaRepository<JobCareer, Long> {

    @Query("select jc from JobCareer jc where jc.jobId = :jobId and jc.careerId = :careerId")
    JobCareer getByJobIdAndCareerId(@Param("jobId") Long jobId, @Param("careerId") Long careerId);

    @Query("select jc from JobCareer jc where jc.jobId = :jobId")
    List<JobCareer> getByJobId(@Param("jobId") Long jobId);
    
    @Query("select jc.careerId, count(jc.jobId) from JobCareer jc GROUP BY jc.careerId")
    List<Object[]> countCareerWithJob(Pageable page);
    
    
}
