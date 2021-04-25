package com.myloo.recruitment.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	
	@Query("SELECT c FROM Category c WHERE c.deletedAt is null "
			+ "AND (c.title LIKE CONCAT('%',:keyword,'%') OR :keyword is null) ")
	Page<Category> findAll(Pageable pageable, @Param("keyword") String keyword);
}
