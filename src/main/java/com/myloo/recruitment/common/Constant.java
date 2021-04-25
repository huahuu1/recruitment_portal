package com.myloo.recruitment.common;

import com.myloo.recruitment.service.dto.JobTypeDTO;
import com.myloo.recruitment.service.dto.PositionDTO;
import com.myloo.recruitment.service.dto.SalaryDTO;

import java.util.Arrays;
import java.util.List;

public class Constant {
    public static String FILE_FOLDER = System.getProperty("user.dir");
    public static String CV_FOLDER = "cv";
    public static String IMAGE_FOLDER = "image";
    public static Integer CV_CHINH = 1;
    public static Integer CV_PHU = 0;
    public static List<PositionDTO> POSITION_LST = Arrays.asList(
        new PositionDTO(0L, "Development"),
        new PositionDTO(1L, "Management"),
        new PositionDTO(2L, "Finance"),
        new PositionDTO(3L, "Retail"),
        new PositionDTO(4L, "Charity")
    );
    public static List<SalaryDTO> SALARY_LST = Arrays.asList(
        new SalaryDTO(0L, "Under 3 million"),
        new SalaryDTO(1L, "From 3 - 5 million"),
        new SalaryDTO(2L, "From 5 - 7 million"),
        new SalaryDTO(3L, "From 7 - 15 million"),
        new SalaryDTO(4L, "From 15 - 20 million"),
        new SalaryDTO(5L, "From 20-25 million"),
        new SalaryDTO(6L, "Over 25 million"),
        new SalaryDTO(7L, "Wage agreement")
    );
    public static List<JobTypeDTO> JOBTYPE_LST = Arrays.asList(
        new JobTypeDTO(1L, "Full-time"),
        new JobTypeDTO(2L, "Part-time"),
        new JobTypeDTO(3L, "Intership"),
        new JobTypeDTO(4L, "Remote work")
    );
    public static List<JobTypeDTO> QUALIFICATION_LST = Arrays.asList(
        new JobTypeDTO(1L, "Student"),
        new JobTypeDTO(2L, "Newly graduated"),
        new JobTypeDTO(3L, "Experienced"),
        new JobTypeDTO(4L, "Leader"),
        new JobTypeDTO(5L, "Management/Supervision"),
        new JobTypeDTO(6L, "Expert"),
        new JobTypeDTO(7L, "Manager")
    );
    public static List<JobTypeDTO> ENGLISH_SKILL_LST = Arrays.asList(
        new JobTypeDTO(1L, "Unfamiliar"),
        new JobTypeDTO(2L, "Basic reading comprehension"),
        new JobTypeDTO(3L, "Document reading comprehension"),
        new JobTypeDTO(4L, "Good communication"),
        new JobTypeDTO(5L, "Proficient in all skills")
    );
    public static List<JobTypeDTO> EXP_LST = Arrays.asList(
        new JobTypeDTO(1L, "No experience"),
        new JobTypeDTO(2L, "Less than 1 year"),
        new JobTypeDTO(3L, "1 year"),
        new JobTypeDTO(4L, "2 year"),
        new JobTypeDTO(5L, "3 year"),
        new JobTypeDTO(6L, "4 year"),
        new JobTypeDTO(7L, "5 year"),
        new JobTypeDTO(8L, "Over 5 year")
    );
    public static List<JobTypeDTO> COMPANY_SIZE_LST = Arrays.asList(
        new JobTypeDTO(1L, "Less than 10 employees"),
        new JobTypeDTO(2L, "From 10-24 employees"),
        new JobTypeDTO(3L, "From 25-99 employees"),
        new JobTypeDTO(4L, "From 100-499 employees"),
        new JobTypeDTO(5L, "From 500-1000 employees"),
        new JobTypeDTO(6L, "Over 1000"),
        new JobTypeDTO(7L, "Over 5000"),
        new JobTypeDTO(8L, "Over 10000")
    );
}
