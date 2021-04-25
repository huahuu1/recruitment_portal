package com.myloo.recruitment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.Cv;
@Repository
public interface CvRepository extends JpaRepository<Cv, Long> {

}
