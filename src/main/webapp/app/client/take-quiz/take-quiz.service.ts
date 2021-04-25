import axios from 'axios';
import { buildQueryURI } from '@/shared/sort/sorts';

export default class TakeQuizService {
  public getQuiz(tokenId): Promise<any> {
    return axios.get(`api/quiz/${tokenId}`);
  }

  public submit(data, tokenId): Promise<any> {
    return axios.post(`api/quiz/submit/${tokenId}`, data);
  }
}
