import axios from 'axios';

export default class CompanyService {
  public update(data): Promise<any> {
    return axios.post('api/company', data);
  }
  public getDetail(): Promise<any> {
    return axios.get('api/company/detail');
  }
}
