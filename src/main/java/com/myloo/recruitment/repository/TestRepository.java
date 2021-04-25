package com.myloo.recruitment.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.Test;

import java.util.List;

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {

    @Query(value = "select distinct t from Test t left join t.questions q where t.user.id = :userId " +
        " and (t.name LIKE CONCAT('%',:keyword,'%') OR :keyword is null) and t.deleteAt is null",
        countQuery = "select count( distinct t) from Test t left join t.questions q where t.user.id = :userId " +
            " and (t.name LIKE CONCAT('%',:keyword,'%') OR :keyword is null) and t.deleteAt is null")
    Page<Test> getAllWithQuestionByUser(@Param("keyword") String keyword,
                                        @Param("userId") Long userId,
                                        Pageable pageable);

    @Query(value = "select distinct t from Test t left join t.questions q where 1 = 1 " +
        " and (t.name LIKE CONCAT('%',:keyword,'%') OR :keyword is null) and t.deleteAt is null",
        countQuery = "select count( distinct t) from Test t left join t.questions q where 1 = 1 " +
            " and (t.name LIKE CONCAT('%',:keyword,'%') OR :keyword is null) and t.deleteAt is null")
    Page<Test> getAll(@Param("keyword") String keyword,
                                        Pageable pageable);


    @Query("select t from Test t left join fetch t.questions q where t.id = :id and t.deleteAt is null")
    Test getAllWithQuestionById(@Param("id") Long testId);
}
