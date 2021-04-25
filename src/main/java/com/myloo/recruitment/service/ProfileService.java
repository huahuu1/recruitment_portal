package com.myloo.recruitment.service;

import com.myloo.recruitment.common.Constant;
import com.myloo.recruitment.common.Util;
import com.myloo.recruitment.domain.Cv;
import com.myloo.recruitment.domain.Profile;
import com.myloo.recruitment.domain.User;
import com.myloo.recruitment.repository.ProfileRepository;
import com.myloo.recruitment.service.dto.BaseResponse;
import com.myloo.recruitment.service.dto.ProfileDTO;
import com.myloo.recruitment.service.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Service
public class ProfileService {

    @Autowired
    private UserService userService;

    @Autowired
    private FileService fileService;

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private CvService cvService;

    public Profile getCurrentProfileDomain() {
        User currentUser = userService.getCurrentUser();
        if (currentUser == null) {
            return null;
        }
        Profile profile = profileRepository.getOneByUserId(currentUser.getId());
        return profile;
    }

    public BaseResponse getCurrentProfile() {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        try {
            User currentUser = userService.getCurrentUser();
            if (currentUser == null) {
                response.setErrorCode("NOT_LOGIN");
                response.setDescription("Chưa đăng nhập");
                return response;
            }
            UserDTO userDTO = new UserDTO();
            ProfileDTO profileDTO = new ProfileDTO();
            userDTO.setId(currentUser.getId());
            userDTO.setFirstName(currentUser.getFirstName());
            userDTO.setLastName(currentUser.getLastName());
            userDTO.setImageUrl(currentUser.getImageUrl());
            userDTO.setActivated(currentUser.getActivated());
            userDTO.setEmail(currentUser.getEmail());
            userDTO.setLogin(currentUser.getLogin());
            userDTO.setGender(currentUser.getGender());
            userDTO.setBirthday(currentUser.getBirthday());
            Profile profile = profileRepository.getOneByUserId(currentUser.getId());
            if (profile != null) {
                profileDTO = this.domainToDTO(profile);
            }
            profileDTO.setUser(userDTO);
            response.setData(profileDTO);

        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription(e.getMessage());
            return response;
        }
        return response;
    }

    @Transactional
    public BaseResponse update(ProfileDTO profileDTO, MultipartFile cvFile, MultipartFile avatar) {
        BaseResponse response = new BaseResponse();
        response.setErrorCode("SUCCESS");
        response.setDescription("Thành công!");
        UserDTO userDTO = profileDTO.getUser();
        if (Util.isNullOrEmpty(userDTO.getFirstName())) {
            response.setErrorCode("FIRST_NAME_NULL");
            response.setDescription("Chưa nhập first name!");
            return response;
        }
        if (Util.isNullOrEmpty(userDTO.getLastName())) {
            response.setErrorCode("LAST_NAME_NULL");
            response.setDescription("Chưa nhập last name!");
            return response;
        }
        if (Util.isNullOrEmpty(userDTO.getEmail())) {
            response.setErrorCode("EMAIL_NULL");
            response.setDescription("Chưa nhập Email!");
            return response;
        }
        try {
            User currentUser = userService.getCurrentUser();
            if (currentUser == null) {
                response.setErrorCode("NOT_LOGIN");
                response.setDescription("Chưa đăng nhập!");
                return response;
            }

            currentUser = userService.getUserByLogin(currentUser.getLogin()).get();
            if (userDTO != null) {
                currentUser.setFirstName(userDTO.getFirstName());
                currentUser.setLastName(userDTO.getLastName());
                currentUser.setEmail(userDTO.getEmail());
                currentUser.setGender(userDTO.getGender());
                currentUser.setBirthday(userDTO.getBirthday());
                if (avatar != null) {
                    currentUser.setImageUrl(fileService.uploadFile(Constant.IMAGE_FOLDER, avatar));
                }
                userService.save(currentUser);
            }
            Profile profile = profileRepository.getOneByUserId(currentUser.getId());
            if (profile == null) {
                profile = new Profile();
                profile.setCreatedAt(new Date());
                profile.setUser(currentUser);
            }
            profile.setUpdatedAt(new Date());
            this.updateProfile(profile, profileDTO);
            if (cvFile != null) {
                if (profile.getCv() != null) {
//                    cvService.delete(profile.getCv());
                	profile.getCv().setType(0);
                    cvService.save(profile.getCv());
                }
                Cv cv = new Cv();
                cv.setCreateAt(new Date());
                cv.setType(Constant.CV_CHINH);
                cv.setTitle(cvFile.getOriginalFilename());
                cv.setUrl(fileService.uploadFile(Constant.CV_FOLDER, cvFile));
                profile.setCv(cv);
            }
            profileRepository.save(profile);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            response.setErrorCode("SERVER_ERROR");
            response.setDescription("Có lỗi xảy ra");
            return response;
        }
    }

    private void updateProfile(Profile profile, ProfileDTO dto) {
        profile.setSkill(dto.getSkill());
        profile.setExperience(dto.getExperience());
        profile.setInterests(dto.getInterests());
        profile.setJobExpect(dto.getJobExpect());
        profile.setDescription(dto.getDescription());
        profile.setEnglishSkill(dto.getEnglishSkill());
        profile.setQualification(dto.getQualification());
        profile.setSalaryExpect(dto.getSalaryExpect());
        profile.setJobType(dto.getJobType());
    }

    public ProfileDTO domainToDTO(Profile domain) {
        ProfileDTO dto = new ProfileDTO();
        dto.setSkill(domain.getSkill());
        dto.setExperience(domain.getExperience());
        dto.setInterests(domain.getInterests());
        dto.setJobExpect(domain.getJobExpect());
        dto.setDescription(domain.getDescription());
        dto.setEnglishSkill(domain.getEnglishSkill());
        dto.setQualification(domain.getQualification());
        dto.setSalaryExpect(domain.getSalaryExpect());
        dto.setJobType(domain.getJobType());
        dto.setCv(domain.getCv());
        return dto;
    }
}
