import axios from 'axios';
import { buildQueryURI } from '@/shared/sort/sorts';

export default class TestService {
  public get(testId: number): Promise<any> {
    return axios.get(`api/admin/tests/${testId}`);
  }

  public create(test): Promise<any> {
    return axios.post('api/admin/tests', test);
  }

  public updateStatus(id): Promise<any> {
    return axios.post(`api/admin/tests/update-status/${id}`, null);
  }

  public remove(testId: number): Promise<any> {
    return axios.delete(`api/admin/tests/${testId}`);
  }

  public removeQuestion(qId: number): Promise<any> {
    return axios.delete(`api/admin/tests/question/${qId}`);
  }

  public getAll(req?: any): Promise<any> {
    return axios.get(`api/admin/tests?${buildQueryURI(req)}`);
  }
}
