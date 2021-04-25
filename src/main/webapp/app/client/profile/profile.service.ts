import axios from 'axios';
import { buildQueryURI } from '@/shared/sort/sorts';

export default class ProfileService {
  public getCurrentProfile(): Promise<any> {
    return axios.get(`api/profile/current`);
  }

  public update(data): Promise<any> {
    return axios.post('api/profile', data);
  }

  public getApplyJob(): Promise<any> {
    return axios.get(`api/client/apply-job`);
  }
}
