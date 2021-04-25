package com.myloo.recruitment.repository;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.Job;
@Repository
public interface JobRepository extends JpaRepository<Job, Long>, JobRepositoryCustom {

    @Query("select job from Job job left join fetch job.test t where job.id = :id")
    Job getOneWithTest(Long id);

    @Query(value = "select distinct t from Job t where t.company.user.id = :userId " +
        " and ( t.company.name LIKE CONCAT('%',:keyword,'%') OR  t.position LIKE CONCAT('%',:keyword,'%') OR t.title LIKE CONCAT('%',:keyword,'%') OR :keyword is null) and t.deleteAt is null",
        countQuery = "select count( distinct t) from Job t where t.company.user.id = :userId " +
            " and (t.company.name LIKE CONCAT('%',:keyword,'%') OR  t.position LIKE CONCAT('%',:keyword,'%') OR t.title LIKE CONCAT('%',:keyword,'%') OR :keyword is null) and t.deleteAt is null")
    Page<Job> getAllByUser(@Param("keyword") String keyword,
                                        @Param("userId") Long userId,
                                        Pageable pageable);

    @Query(value = "select distinct t from Job t where" +
            " (t.company.name LIKE CONCAT('%',:keyword,'%') OR  t.position LIKE CONCAT('%',:keyword,'%') OR t.title LIKE CONCAT('%',:keyword,'%') OR :keyword is null) and t.deleteAt is null",
            countQuery = "select count( distinct t) from Job t where " +
                "(t.company.name LIKE CONCAT('%',:keyword,'%') OR  t.position LIKE CONCAT('%',:keyword,'%') OR t.title LIKE CONCAT('%',:keyword,'%') OR :keyword is null) and t.deleteAt is null")
        Page<Job> getAll(@Param("keyword") String keyword,
                                            Pageable pageable);

    @Query("select job from Job job left join fetch job.company jc WHERE job.deleteAt is null and job.status = 1 ORDER BY RAND()")
    List<Job> getSixJobOpportunity(Pageable pageable);

    @Query("select job from Job job left join fetch job.company jc WHERE job.deleteAt is null and job.status = 1")
    List<Job> getHotJob(Pageable pageable);

    @Query("select job from Job job left join fetch job.company jc WHERE job.deleteAt is null and job.status = 1")
    List<Job> getLastestJob(Pageable pageable);

    @Query("select job.province,count(job) from Job job WHERE job.deleteAt is null and job.status = 1 GROUP BY job.locationId")
    List<Object[]> getCountLocation(Pageable pageable);
}
