package com.myloo.recruitment.repository;

import com.myloo.recruitment.common.Util;
import com.myloo.recruitment.service.dto.CompanyCareerDTO;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CompanyRepositoryImpl implements CompanyRepositoryCustom{

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public CompanyCareerDTO getByCompanyIdAndCareerId(Long companyId, Long careerId) {
        CompanyCareerDTO dto = new CompanyCareerDTO();
        String sql = "select company_id, career_id from company_career  where company_id = ?1 and career_id = ?2";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter(1, companyId);
        query.setParameter(2, careerId);
        List lst = query.getResultList();
        if (lst == null) {
            return null;
        }
        for (Object[] obj: (List<Object[]>)lst) {
            dto.setCompanyId(Util.objectToLong(obj[0]));
            dto.setCareerId(Util.objectToLong(obj[1]));
            return dto;
        }
        return null;
    }

    @Override
    public List<CompanyCareerDTO> getByCompanyId(Long companyId) {
        String sql = "select company_id, career_id from company_career where company_id = ?1";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter(1, companyId);
        List lst = query.getResultList();
        if (lst == null) {
            return null;
        }
        List<CompanyCareerDTO> list = new ArrayList<>();
        for (Object[] obj: (List<Object[]>)lst) {
            CompanyCareerDTO dto = new CompanyCareerDTO();
            dto.setCompanyId(Util.objectToLong(obj[0]));
            dto.setCareerId(Util.objectToLong(obj[1]));
            list.add(dto);
        }
        return list;
    }

    @Override
    public void delete(CompanyCareerDTO dto) {
        String sql = "delete from company_career where company_id = ?1 and career_id = ?2";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter(1, dto.getCompanyId());
        query.setParameter(2, dto.getCareerId());
        query.executeUpdate();
    }

    @Override
    public void insert(CompanyCareerDTO dto) {
        String sql = "insert into company_career(company_id, career_id) VALUES(?1, ?2)";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter(1, dto.getCompanyId());
        query.setParameter(2, dto.getCareerId());
        query.executeUpdate();
    }
}
