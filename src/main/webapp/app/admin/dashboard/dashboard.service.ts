import axios from 'axios';
import Vue from 'vue';

export default class DashboardService {
  public countJobPassFail(): Promise<any> {
    return axios.get(`api/dashboard/count-pass-fail`);
  }

  public countJobPassFailByUserId(): Promise<any> {
    return axios.get(`api/dashboard/count-pass-fail-by-user`);
  }

  public countApplyJobMonthOfYear(): Promise<any> {
    return axios.get(`api/dashboard/count-applyjob-monthofyear`);
  }

  public countApplyJobMonthOfYearByUserId(): Promise<any> {
    return axios.get(`api/dashboard/count-applyjob-monthofyear-by-user`);
  }

  public countApplyJobCareer(): Promise<any> {
    return axios.get(`api/dashboard/count-applyjob-career`);
  }

  public countApplyJobCareerByUserId(): Promise<any> {
    return axios.get(`api/dashboard/count-applyjob-career-user`);
  }

  public countTop7ApplyJobCareer(): Promise<any> {
    return axios.get(`api/dashboard/count-applyjob-top7-career`);
  }

  public countTop7ApplyJobCareerByUserId(): Promise<any> {
    return axios.get(`api/dashboard/count-applyjob-top7-career-user`);
  }

  public countTop7ApplyJobByJob(): Promise<any> {
    return axios.get(`api/dashboard/count-applyjob-top7-job`);
  }

  public countTop7ApplyJobByJobByUserId(): Promise<any> {
    return axios.get(`api/dashboard/count-applyjob-top7-job-user`);
  }
}
