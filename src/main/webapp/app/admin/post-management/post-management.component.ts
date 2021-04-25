import { Component, Inject } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import Vue2Filters from 'vue2-filters';
import AlertMixin from '@/shared/alert/alert.mixin';
import PostManagementService from './post-management.service';
import { loadImage } from '@/shared/common/util';
@Component({
  mixins: [Vue2Filters.mixin],
})
export default class PostManagementComponent extends mixins(AlertMixin) {
  @Inject('postService') private postManagementService: () => PostManagementService;
  public error = '';
  public success = '';
  public posts: any[] = [];
  public itemsPerPage = 20;
  public queryCount: number = null;
  public page = 1;
  public previousPage = 1;
  public propOrder = 'id';
  public reverse = false;
  public totalItems = 0;
  public removeId: number = null;
  public keyword: String = '';
  public mounted(): void {
    this.loadAll();
  }

  public setActive(post, status): void {
    post.status = status;
    if (post.id) {
      const formdata: FormData = new FormData();
      formdata.append(
        'post',
        new Blob([JSON.stringify(post)], {
          type: 'application/json',
        })
      );
      this.postManagementService()
        .update(formdata)
        .then(res => {
          this.$toast.open({
            message: 'Update status successfully!',
            type: 'success',
            position: 'top-right',
          });
          this.loadAll();
        });
    }
  }

  public loadAll(): void {
    this.postManagementService()
      .retrieve({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
        keyword: this.keyword,
      })
      .then(res => {
        this.posts = res.data;
        this.totalItems = Number(res.headers['x-total-count']);
        this.queryCount = this.totalItems;
      });
  }

  public sort(): any {
    const result = [this.propOrder + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.propOrder !== 'id') {
      result.push('id');
    }
    return result;
  }

  public loadPage(page: number): void {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.transition();
    }
  }

  public transition(): void {
    this.loadAll();
  }

  public changeOrder(propOrder: string): void {
    this.propOrder = propOrder;
    this.reverse = !this.reverse;
    this.transition();
  }
  public handleSearch(): void {
    this.loadAll();
  }
  public deletePost(): void {
    this.postManagementService()
      .remove(this.removeId)
      .then(res => {
        this.$toast.open({
          message: 'Delete post successfully!',
          type: 'success',
          position: 'top-right',
        });
        this.removeId = null;
        this.loadAll();
        this.closeDialog();
      });
  }

  public prepareRemove(instance): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeUser) {
      (<any>this.$refs.removeUser).show();
    }
  }

  public closeDialog(): void {
    (<any>this.$refs.removeUser).hide();
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
  public loadImage(name) {
    return loadImage(name);
  }
}
