import axios from 'axios';
import Vue from 'vue';
import buildPaginationQueryOpts, { buildQueryURI } from '@/shared/sort/sorts';
import { Authority } from '@/shared/security/authority';

export default class JobService {
  public get(jobId: number): Promise<any> {
    return axios.get(`api/jobs/detail/${jobId}`);
  }

  public updateView(jobId: number): Promise<any> {
    return axios.get(`api/jobs/update-view/${jobId}`);
  }

  public update(job): Promise<any> {
    return axios.post('api/admin/jobs', job);
  }

  public remove(jobId: number): Promise<any> {
    return axios.delete(`api/admin/jobs/${jobId}`);
  }

  public getAll(req?: any): Promise<any> {
    return axios.get(`api/jobs?${buildQueryURI(req)}`);
  }

  public getAllForAdmin(req?: any): Promise<any> {
    return axios.get(`api/admin/jobs?${buildQueryURI(req)}`);
  }

  public changeStatusJob(jobId: any): Promise<any> {
    return axios.post(`api/admin/jobs/update-status/${jobId}`);
  }

  public getAllJobType(req?: any): Promise<any> {
    return axios.get(`api/common/job-type`);
  }

  public getAllSalary(req?: any): Promise<any> {
    return axios.get(`api/common/salary`);
  }

  public getAllPosition(req?: any): Promise<any> {
    return axios.get(`api/common/position`);
  }

  public getAllCareer(req?: any): Promise<any> {
    return axios.get(`api/common/careers`);
  }

  public getAllProvince(req?: any): Promise<any> {
    return axios.get(`api/common/provinces`);
  }
}
