package com.myloo.recruitment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.Province;
@Repository
public interface ProvinceRepository extends JpaRepository<Province, String> {

}
