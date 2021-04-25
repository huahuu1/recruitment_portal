package com.myloo.recruitment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.Question;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query("select q from Question q where q.testId = :id and q.deleteAt is null ")
    List<Question> getOneByTestId(@Param("id") Long id);

    @Query("select q from Question q where q.id = :id and q.deleteAt is null ")
    Question getOneById(@Param("id") Long id);
}
