package com.myloo.recruitment.repository;

import com.myloo.recruitment.domain.Test;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.ApplyJob;

import java.util.List;
import java.util.Map;


@Repository
public interface ApplyJobRepository extends JpaRepository<ApplyJob, Long> {

    @Query(value = "select distinct aj from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where j.company.user.id = :userId " +
        " and (p.user.email LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%') OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
        " and aj.deleteAt is null order by aj.applyDate desc",
        countQuery = "select count (distinct aj) from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where j.company.user.id = :userId " +
            "         and (p.user.email LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%') OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
            " and aj.deleteAt is null")
    Page<ApplyJob> findAllByUserId(@Param("keyword") String keyword,
                                        @Param("userId") Long userId,
                                        Pageable pageable);

    @Query(value = "select distinct aj from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where 1 = 1 " +
        " and (p.user.email LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%') OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
        " and aj.deleteAt is null order by aj.applyDate desc ",
        countQuery = "select count (distinct aj) from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where 1 = 1 " +
            "         and (p.user.email LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%') OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
            " and aj.deleteAt is null")
    Page<ApplyJob> getAll(@Param("keyword") String keyword,
                                   Pageable pageable);

    @Query(value = "select distinct aj from ApplyJob aj left join aj.profile p join aj.job j where p.user.id = :userId " +
        " and (p.user.email LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%') OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
        " and aj.deleteAt is null",
        countQuery = "select count (distinct aj) from ApplyJob aj left join aj.profile p join aj.job j where p.user.id = :userId " +
            "         and (p.user.email LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%') OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
            " and aj.deleteAt is null")
    Page<ApplyJob> findAllByUserApplyId(@Param("keyword") String keyword,
                                   @Param("userId") Long userId,
                                   Pageable pageable);


    @Query("select aj from ApplyJob aj join fetch aj.job j where aj.tokenId = :tokenId")
    ApplyJob getByTokenId(@Param("tokenId") String tokenId);

    @Query("select aj from ApplyJob aj join fetch aj.job j where aj.jobId = :jobId and aj.profile.user.id = :userId")
    ApplyJob getByJobIdAndUserId(@Param("jobId") Long jobId, @Param("userId") Long userId);
    
    @Query("select count(aj) from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where j.company.user.id = :userId "
    		+ "and aj.deleteAt is null and aj.status = 5")
    Integer countApplyJobPassByUserId(@Param("userId") Long userId);
    
    @Query("select count(aj) from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where j.company.user.id = :userId "
    		+ "and aj.deleteAt is null and aj.status = 6")
    Integer countApplyJobFailByUserId(@Param("userId") Long userId);
    
    @Query("select count(aj) from ApplyJob aj where aj.deleteAt is null and aj.status = 5")
    Integer countApplyJobPass();
    
    @Query("select count(aj) from ApplyJob aj where aj.deleteAt is null and aj.status = 6")
    Integer countApplyJobFail();
    
    @Query("select count(aj) from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where j.company.user.id = :userId and aj.deleteAt is null and MONTH(aj.applyDate) = :month and YEAR(aj.applyDate) = :year ")
    Integer countApplyJobByMonthInYearByUserId(@Param("userId") Long userId,@Param("month") Integer month,@Param("year") Integer year);
    
    @Query("select count(aj) from ApplyJob aj where aj.deleteAt is null and MONTH(aj.applyDate) = :month and YEAR(aj.applyDate) = :year ")
    Integer countApplyJobByMonthInYear(@Param("month") Integer month,@Param("year") Integer year);
    
    @Query(value = "select CAST(c.title as CHAR) as title , count(jc.career_id) as number from apply_jobs aj join jobs j on j.id = aj.job_id join job_careers jc on jc.job_id = j.id join careers c on c.id = jc.career_id  where aj.deleted_at is null and j.deleted_at is null\n"
    		+ "GROUP BY jc.career_id", nativeQuery = true)
    List<Map<String, Integer>> countApplyJobByCareer();
    
    @Query(value = "select CAST(c.title as CHAR) as title , count(jc.career_id) as number from (select distinct a from ApplyJob a left join a.profile p join a.job j left join a.applyJobInterview aja where j.company.user.id = :userId) as aj join jobs j on j.id = aj.job_id join job_careers jc on jc.job_id = j.id join careers c on c.id = jc.career_id  where aj.deleted_at is null and j.deleted_at is null\n"
    		+ "GROUP BY jc.career_id", nativeQuery = true)
    List<Map<String, Integer>> countApplyJobByCareerByUserId(@Param("userId") Long userId);
    
    @Query(value = "select CAST(c.title as CHAR) as title , count(jc.career_id) as number from apply_jobs aj join jobs j on j.id = aj.job_id join job_careers jc on jc.job_id = j.id join careers c on c.id = jc.career_id  where aj.deleted_at is null and j.deleted_at is null\n"
    		+ "GROUP BY jc.career_id ORDER BY number desc\n"
    		+ "limit 7", nativeQuery = true)
    List<Map<String, Integer>> countTop7ApplyJobByCareer();
    
    @Query(value = "select CAST(c.title as CHAR) as title , count(jc.career_id) as number from apply_jobs aj join jobs j on j.id = aj.job_id join job_careers jc on jc.job_id = j.id join careers c on c.id = jc.career_id  where j.company.user.id = :userId and aj.deleted_at is null and j.deleted_at is null\n"
    		+ "GROUP BY jc.career_id ORDER BY number desc\n"
    		+ "limit 7", nativeQuery = true)
    List<Map<String, Integer>> countTop7ApplyJobByCareerByUserId(@Param("userId") Long userId);
    
    @Query(value = "select CAST(j.title as CHAR) as title , count(jc.job_id) as number from apply_jobs aj join jobs j on j.id = aj.job_id join job_careers jc on jc.job_id = j.id join careers c on c.id = jc.career_id  where aj.deleted_at is null and j.deleted_at is null\n"
    		+ "GROUP BY jc.job_id ORDER BY number desc\n"
    		+ "limit 7", nativeQuery = true)
    List<Map<String, Integer>> countTop7ApplyJobByJob();
    
    @Query(value = "select CAST(j.title as CHAR) as title , count(jc.job_id) as number from apply_jobs aj join jobs j on j.id = aj.job_id join job_careers jc on jc.job_id = j.id join careers c on c.id = jc.career_id  where j.company.user.id = :userId and aj.deleted_at is null and j.deleted_at is null\n"
    		+ "GROUP BY jc.job_id ORDER BY number desc\n"
    		+ "limit 7", nativeQuery = true)
    List<Map<String, Integer>> countTop7ApplyJobByJobByUserId(@Param("userId") Long userId);
    
    @Query(value = "select distinct aj from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where j.company.user.id = :userId " +
            " and (p.user.email LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%') OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
            " and aj.deleteAt is null and aj.status = 3 order by aj.applyDate desc",
            countQuery = "select count (distinct aj) from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where j.company.user.id = :userId " +
                "         and (p.user.email LIKE CONCAT('%',:keyword,'%') OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
                " and aj.deleteAt is null and aj.status = 3")
        Page<ApplyJob> findAllByUserId2(@Param("keyword") String keyword,
                                            @Param("userId") Long userId,
                                            Pageable pageable);

        @Query(value = "select distinct aj from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where 1 = 1 " +
            " and (p.user.email LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%')OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
            " and aj.deleteAt is null and aj.status = 3 order by aj.applyDate desc ",
            countQuery = "select count (distinct aj) from ApplyJob aj left join aj.profile p join aj.job j left join aj.applyJobInterview aja where 1 = 1 " +
                "         and (p.user.email LIKE CONCAT('%',:keyword,'%') OR p.user.lastName LIKE CONCAT('%',:keyword,'%') OR p.user.firstName LIKE CONCAT('%',:keyword,'%') OR CONCAT(p.user.firstName,' ',p.user.lastName) LIKE CONCAT('%',:keyword,'%') OR :keyword is null) " +
                " and aj.deleteAt is null and aj.status = 3")
        Page<ApplyJob> getAll2(@Param("keyword") String keyword,
                                       Pageable pageable);
    
    
    
    
    
}
