package com.myloo.recruitment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.UserTestQuestion;
@Repository
public interface UserTestQuestionRepository extends JpaRepository<UserTestQuestion, Long> {

}
