import axios from 'axios';
export default class CommonService {
  public getAllJobType(): Promise<any> {
    return axios.get(`api/common/job-type`);
  }

  public getAllSalary(): Promise<any> {
    return axios.get(`api/common/salary`);
  }

  public getAllPosition(): Promise<any> {
    return axios.get(`api/common/position`);
  }

  public getAllCareer(): Promise<any> {
    return axios.get(`api/common/careers`);
  }

  public getAllProvince(): Promise<any> {
    return axios.get(`api/common/provinces`);
  }

  public getAllQualification(): Promise<any> {
    return axios.get(`api/common/qualification`);
  }

  public getAllEnglishSkill(): Promise<any> {
    return axios.get(`api/common/english-skill`);
  }

  public getAllExp(): Promise<any> {
    return axios.get(`api/common/exp`);
  }

  public getAllCompanySize(): Promise<any> {
    return axios.get(`api/common/company-size`);
  }
}
