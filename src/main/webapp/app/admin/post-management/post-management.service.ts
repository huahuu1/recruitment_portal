import axios from 'axios';
import Vue from 'vue';
import buildPaginationQueryOpts from '@/shared/sort/sorts';
import { Authority } from '@/shared/security/authority';

export default class UserManagementService {
  public get(postId: number): Promise<any> {
    return axios.get(`api/posts/${postId}`);
  }

  public create(post): Promise<any> {
    return axios.post('api/posts', post);
  }

  public update(post): Promise<any> {
    return axios.post('api/posts', post);
  }

  public remove(postId: number): Promise<any> {
    return axios.delete(`api/posts/${postId}`);
  }

  public retrieve(req?: any): Promise<any> {
    return axios.get(`api/posts?${buildPaginationQueryOpts(req)}`);
  }
}
