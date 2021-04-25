package com.myloo.recruitment.repository;

import com.myloo.recruitment.common.Util;
import com.myloo.recruitment.domain.Job;
import com.myloo.recruitment.domain.Profile;
import com.myloo.recruitment.service.dto.CompanyDTO;
import com.myloo.recruitment.service.dto.JobDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Repository
public class JobRepositoryImpl implements JobRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public List<JobDTO> findAll(String keyword, Long locationId, List career, List jobType, List salary, Profile profile, Integer pageSize, Integer page) {
        List params = new ArrayList<>();
        List<JobDTO> list = new ArrayList<>();

        StringBuffer sql1 = new StringBuffer("select a.* from (");
        if (profile != null) {
            sql1.append("select distinct j.id, j.salary, j.recruite_number, j.experience, j.job_type, j.created_at, ");
            sql1.append(" c.name, c.address,c.logo, j.position, j.title");
            sql1.append(" from jobs j join companies c on c.id = j.company_id ");
            sql1.append(" left join job_careers jc on jc.job_id = j.id");
            sql1.append(" where 1=1");
            if (profile.getJobType() != null || profile.getExperience() != null || profile.getSalaryExpect() != null) {
                sql1.append(" and ( 1=0 ");
            }
            if (profile.getJobType() != null) {
                sql1.append(" or j.job_type = ?" + (params.size() + 1));
                params.add(profile.getJobType());
            }
            if (profile.getExperience() != null) {
                sql1.append(" or j.experience = ?" + (params.size() + 1));
                params.add(profile.getExperience());
            }
            if (profile.getSalaryExpect() != null) {
                sql1.append(" or j.salary = ?" + (params.size() + 1));
                params.add(profile.getSalaryExpect());
            }
            if (profile.getJobType() != null || profile.getExperience() != null || profile.getSalaryExpect() != null) {
                sql1.append(" ) ");
            }

            if (keyword != null) {
                sql1.append(" and c.name like ?" + (params.size() + 1)  );
                params.add("%"+keyword+"%");
            }
            if (locationId != null) {
                sql1.append(" and j.location_id = ?" + (params.size() + 1) );
                params.add(locationId);
            }
            if (career != null) {
                sql1.append(" and jc.career_id in ?" + (params.size() + 1) );
                params.add(career);
            }
            if (jobType != null) {
                sql1.append(" and j.job_type in ?" + (params.size() + 1) );
                params.add(jobType);
            }
            if (salary != null) {
                sql1.append(" and j.salary in ?"  + (params.size() + 1));
                params.add(salary);
            }
            sql1.append(" and j.deleted_at is null and j.status = 1 ");
            sql1.append(" union ");
        }

        sql1.append("select distinct j.id, j.salary, j.recruite_number, j.experience, j.job_type, j.created_at, ");
        sql1.append(" c.name, c.address,c.logo, j.position, j.title");
        sql1.append(" from jobs j join companies c on c.id = j.company_id ");
        sql1.append(" left join job_careers jc on jc.job_id = j.id");
        sql1.append(" where 1=1 ");
        if (keyword != null) {
            sql1.append(" and ( c.name like ?" + (params.size() + 1) + " or j.title like ?"+ (params.size() + 1) +" ) " );
            params.add("%"+keyword+"%");
        }
        if (locationId != null) {
            sql1.append(" and j.location_id = ?" + (params.size() + 1) );
            params.add(locationId);
        }
        if (career != null) {
            sql1.append(" and jc.career_id in ?" + (params.size() + 1) );
            params.add(career);
        }
        if (jobType != null) {
            sql1.append(" and j.job_type in ?" + (params.size() + 1) );
            params.add(jobType);
        }
        if (salary != null) {
            sql1.append(" and j.salary in ?"  + (params.size() + 1));
            params.add(salary);
        }
        sql1.append(" and j.deleted_at is null and j.status = 1 ");

        sql1.append(") a order by a.created_at desc");
        sql1.append(" limit " + (page * pageSize) + ", " + pageSize);
        Query query = entityManager.createNativeQuery(sql1.toString());
        if (params.size() > 0) {
            for (int i = 0; i < params.size(); i++) {
                query.setParameter(i+1, params.get(i));
            }
        }
        List lst = query.getResultList();
        if (lst == null) {
            return null;
        }
        for (Object[] obj: (List<Object[]>)lst) {
            JobDTO dto = new JobDTO();
            CompanyDTO companyDTO = new CompanyDTO();
            dto.setId(Util.objectToLong(obj[0]));
            dto.setSalary(Util.objectToLong(obj[1]));
            dto.setSalaryName(Util.getSalaryName(dto.getSalary()));
            dto.setRecruiteNumber(Util.objectToInteger(obj[2]));
            dto.setExperience(Util.objectToInteger(obj[3]));
            dto.setJobType(Util.objectToLong(obj[4]));
            dto.setJobTypeName(Util.getJobTypeName(dto.getJobType()));
            dto.setCreateAt(Util.objectToDate(obj[5]));
            dto.setPosition(Util.objectToString(obj[9]));
            dto.setTitle(Util.objectToString(obj[10]));
            companyDTO.setName(Util.objectToString(obj[6]));
            companyDTO.setAddress(Util.objectToString(obj[7]));
            companyDTO.setLogo(Util.objectToString(obj[8]));
            dto.setCompany(companyDTO);
            list.add(dto);
        }
        return list;
    }

    @Override
    public Long countAll(String keyword, Long locationId, List career, List jobType, List salary, Profile profile) {
        List params = new ArrayList<>();

        StringBuffer sql1 = new StringBuffer("select count(*) from (");
        if (profile != null) {
            sql1.append("select distinct j.id, j.salary, j.recruite_number, j.experience, j.job_type, j.created_at, ");
            sql1.append(" c.name, c.address");
            sql1.append(" from jobs j join companies c on c.id = j.company_id ");
            sql1.append(" left join job_careers jc on jc.job_id = j.id");
            sql1.append(" where 1=1 and j.status = 1 ");
            if (profile.getJobType() != null || profile.getExperience() != null || profile.getSalaryExpect() != null) {
                sql1.append(" and ( 1=0 ");
            }
            if (profile.getJobType() != null) {
                sql1.append(" or j.job_type = ?" + (params.size() + 1));
                params.add(profile.getJobType());
            }
            if (profile.getExperience() != null) {
                sql1.append(" or j.experience = ?" + (params.size() + 1));
                params.add(profile.getExperience());
            }
            if (profile.getSalaryExpect() != null) {
                sql1.append(" or j.salary = ?" + (params.size() + 1));
                params.add(profile.getSalaryExpect());
            }
            if (profile.getJobType() != null || profile.getExperience() != null || profile.getSalaryExpect() != null) {
                sql1.append(" ) ");
            }

            if (keyword != null) {
                sql1.append(" and c.name like ?" + (params.size() + 1)  );
                params.add("%"+keyword+"%");
            }
            if (locationId != null) {
                sql1.append(" and j.location_id = ?" + (params.size() + 1) );
                params.add(locationId);
            }
            if (career != null) {
                sql1.append(" and jc.career_id in ?" + (params.size() + 1) );
                params.add(career);
            }
            if (jobType != null) {
                sql1.append(" and j.job_type in ?" + (params.size() + 1) );
                params.add(jobType);
            }
            if (salary != null) {
                sql1.append(" and j.salary in ?"  + (params.size() + 1));
                params.add(salary);
            }
            sql1.append(" union ");
        }

        sql1.append("select distinct j.id, j.salary, j.recruite_number, j.experience, j.job_type, j.created_at, ");
        sql1.append(" c.name, c.address");
        sql1.append(" from jobs j join companies c on c.id = j.company_id ");
        sql1.append(" left join job_careers jc on jc.job_id = j.id");
        sql1.append(" where 1=1 and j.deleted_at is null and j.status = 1 ");
        if (keyword != null) {
            sql1.append(" and c.name like ?" + (params.size() + 1)  );
            params.add("%"+keyword+"%");
        }
        if (locationId != null) {
            sql1.append(" and j.location_id = ?" + (params.size() + 1) );
            params.add(locationId);
        }
        if (career != null) {
            sql1.append(" and jc.career_id in ?" + (params.size() + 1) );
            params.add(career);
        }
        if (jobType != null) {
            sql1.append(" and j.job_type in ?" + (params.size() + 1) );
            params.add(jobType);
        }
        if (salary != null) {
            sql1.append(" and j.salary in ?"  + (params.size() + 1));
            params.add(salary);
        }

        sql1.append(") a order by a.created_at desc");
        System.out.println(sql1.toString());
        Query query = entityManager.createNativeQuery(sql1.toString());
        if (params.size() > 0) {
            for (int i = 0; i < params.size(); i++) {
                query.setParameter(i+1, params.get(i));
            }
        }

        return Util.objectToLong(query.getSingleResult());
    }

}
