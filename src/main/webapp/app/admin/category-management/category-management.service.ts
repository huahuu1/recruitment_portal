import axios from 'axios';
import Vue from 'vue';
import buildPaginationQueryOpts from '@/shared/sort/sorts';
import buildPaginationQueryOptsCustomize from '@/shared/sort/sorts';
import { Authority } from '@/shared/security/authority';

export default class CategoryManagementService {
  public get(categoryId: number): Promise<any> {
    return axios.get(`api/categories/${categoryId}`);
  }

  public create(category): Promise<any> {
    return axios.post('api/categories', category);
  }

  public update(category): Promise<any> {
    return axios.put('api/categories', category);
  }

  public remove(categoryId: number): Promise<any> {
    return axios.delete(`api/categories/${categoryId}`);
  }

  public retrieve(req?: any): Promise<any> {
    return axios.get(`api/categories?${buildPaginationQueryOptsCustomize(req)}`);
  }

  // public retrieveAuthorities(): Promise<any> {
  //   return axios.get('api/categories/authorities');
  // }
}
