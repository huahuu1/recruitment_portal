import axios from 'axios';
import buildPaginationQueryOpts, { buildQueryURI, } from '@/shared/sort/sorts';

export default class ApplyService {
  public getApplyJob(req): Promise<any> {
    return axios.get(`api/admin/apply-job?${buildQueryURI(req)}`);
  }

  public getApplyJob2(req): Promise<any> {
    return axios.get(`api/admin/apply-job-2?${buildQueryURI(req)}`);
  }

  public checkCurrentUserApplyJob(jobId) {
    return axios.get(`api/client/apply-job/check-apply/${jobId}`);
  }

  public remove(id): Promise<any> {
    return axios.delete(`api/admin/apply-job/${id}`);
  }

  public updateStatus(id, newStatus): Promise<any> {
    return axios.post(`api/admin/apply-job/update-status/${id}/${newStatus}`);
  }

  public interviewCalendar(applyJobInterview: any): Promise<any> {
    return axios.post(`api/admin/apply-job/interview-calendar/`, applyJobInterview);
  }

  public applyNow(jobId, data): Promise<any> {
    return axios.post(`api/client/apply-job/apply-now/${jobId}`, data);
  }

  public sendTest(emailInfo): Promise<any> {
    return axios.post(`api/admin/apply-job/send-test`, emailInfo);
  }
}
