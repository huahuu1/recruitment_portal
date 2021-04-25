package com.myloo.recruitment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.Career;
@Repository
public interface CareerRepository extends JpaRepository<Career, Long> {

}
