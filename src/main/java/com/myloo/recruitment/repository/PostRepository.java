package com.myloo.recruitment.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myloo.recruitment.domain.Job;
import com.myloo.recruitment.domain.Post;
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	@Query("SELECT p FROM Post p WHERE p.deletedAt is null "
			+ "AND (p.title LIKE CONCAT('%',:keyword,'%') OR :keyword is null) AND (p.description LIKE CONCAT('%',:keyword,'%') OR :keyword is null) ")
	Page<Post> findAll(Pageable pageable, @Param("keyword") String keyword);
	
	@Query("select p from Post p left join fetch p.category pc WHERE p.deletedAt is null and p.status = 1")
    List<Post> getLastestPost(Pageable pageable);
	
	@Query("select p from Post p left join fetch p.category pc WHERE p.deletedAt is null AND p.slug = :slug")
	Post getPostBySlug(@Param("slug") String slug);
}
