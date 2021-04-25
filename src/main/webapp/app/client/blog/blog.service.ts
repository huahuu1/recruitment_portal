import axios from 'axios';
import Vue from 'vue';
import buildPaginationQueryOpts, { buildQueryURI } from '@/shared/sort/sorts';

export default class BlogService {
  public retrieve(req?: any): Promise<any> {
    return axios.get(`api/posts/public?${buildPaginationQueryOpts(req)}`);
  }
  public getPost(slug: string): Promise<any> {
    return axios.get(`api/posts/public/${slug}`);
  }
}
