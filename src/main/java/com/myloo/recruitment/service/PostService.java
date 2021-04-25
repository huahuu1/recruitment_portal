package com.myloo.recruitment.service;

import com.myloo.recruitment.common.Constant;
import com.myloo.recruitment.common.Util;
import com.myloo.recruitment.domain.Job;
import com.myloo.recruitment.domain.Post;
import com.myloo.recruitment.domain.User;
import com.myloo.recruitment.repository.PostRepository;
import com.myloo.recruitment.repository.UserRepository;
import com.myloo.recruitment.security.SecurityUtils;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.JobDTO;
import com.myloo.recruitment.service.dto.PostDTO;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
public class PostService {

	@Autowired
	private PostRepository postRepository;

	@Autowired
	private FileService fileService;

	@Autowired
	private UserRepository userRepository;

	// Lấy ra danh sách các bài viết
	public Page<PostDTO> getAll(Pageable pageable, String keyword) {
		return postRepository.findAll(pageable, keyword).map(PostDTO::new);
	}

	@Transactional
	public BaseResponse createandupdate(PostDTO postDTO, MultipartFile thumbnail) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công!");
		try {
			Post post = null;
			if (postDTO.getId() != null) {
				post = postRepository.getOne(postDTO.getId());
				if (post == null) {
					response.setErrorCode("NOT_FOUND");
					response.setDescription("Không tìm thấy thông tin!");
					return response;
				}
				post.setUpdatedAt(new Date());
			}
			post = this.dtoToDomain(postDTO);
			if (thumbnail != null) {
				String thumbnaill = fileService.uploadFile(Constant.IMAGE_FOLDER, thumbnail);
				post.setThumbnail(thumbnaill);
			}
			if (postDTO.getId() == null) {
				post.setCreatedAt(new Date());
				User userPost = userRepository.findOneByLogin(SecurityUtils.getCurrentUserLogin().get()).get();
				if (userPost != null) {
					post.setUser(userPost);
				}
			} else {
				User userPost = userRepository.findOneByLogin(post.getUser().getLogin()).get();
				if (userPost != null) {
					post.setUser(userPost);
				}
			}
			
			post = postRepository.save(post);
			response.setData(post);
			return response;
		} catch (Exception e) {
			e.printStackTrace();
			response.setErrorCode("SERVER_ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
	}

	@Transactional
	public void deletePost(Long postId) {
		postRepository.findById(postId).ifPresent(post -> {
			post.setDeletedAt(new Date());
			postRepository.save(post);
		});
	}

	@Transactional
	public BaseResponse delete(Long id) {
		BaseResponse response = new BaseResponse();
		response.setErrorCode("SUCCESS");
		response.setDescription("Thành công");
		try {
			Post post = postRepository.getOne(id);
			if (post == null) {
				response.setErrorCode("NOT_FOUND");
				response.setDescription("Không có dữ liệu");
				return response;
			}
			postRepository.delete(post);
		} catch (Exception e) {
			response.setErrorCode("SERVER_ERROR");
			response.setDescription("Có lỗi xảy ra");
			return response;
		}
		return response;
	}

	public BaseResponse getPostLastest(Pageable pageable) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            List<Post> post = postRepository.getLastestPost(pageable);
            if (post==null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu!");
                return response;
            }
            response.setData(post);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
	}

	public Post dtoToDomain(PostDTO dto) {
		Post p = new Post();
		p.setId(dto.getId());
		p.setTitle(dto.getTitle());
		p.setDescription(dto.getDescription());
		p.setContent(dto.getContent());
		p.setCategory(dto.getCategory());
		p.setSlug(dto.getSlug());
		p.setStatus(dto.getStatus());
		p.setTag(dto.getTag());
		p.setCreatedAt(dto.getCreatedAt());
		p.setUpdatedAt(dto.getUpdatedAt());
		p.setDeletedAt(dto.getDeletedAt());
		p.setUser(dto.getUser());
		p.setThumbnail(dto.getThumbnail());
		return p;
	}
	
	public BaseResponse getPostDetail(String slug) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            Post post = postRepository.getPostBySlug(slug);
            if (post == null) {
                response.setErrorCode("NOT_FOUND");
                response.setDescription("Không có dữ liệu!");
                return response;
            }
            response.setData(post);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra!");
            return response;
        }
    }

}
