import axios from 'axios';
import { buildQueryURI } from '@/shared/sort/sorts';

export default class HomeService {
  public getSixJobOpportunity(): Promise<any> {
    return axios.get(`api/home/job-opportunity`);
  }

  public getHotJob(): Promise<any> {
    return axios.get(`api/home/job-hot`);
  }

  public getLastestJob(): Promise<any> {
    return axios.get(`api/home/job-lastest`);
  }
  public getLastestPost(): Promise<any> {
    return axios.get(`api/home/post-lastest`);
  }
  public getCareerWithJobCount(): Promise<any> {
    return axios.get(`api/home/count-career`);
  }
  public getCountProvince(): Promise<any> {
    return axios.get(`api/home/count-location`);
  }
}
