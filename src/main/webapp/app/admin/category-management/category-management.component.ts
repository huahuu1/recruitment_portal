import AlertService from '../../shared/alert/alert.service';
import { Component, Inject } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import Vue2Filters from 'vue2-filters';
import CategoryManagementService from './category-management.service';
import AlertMixin from '../../shared/alert/alert.mixin';
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators';
import { isThisSecond } from 'date-fns';
const validations: any = {
  category: {
    title: {
      required,
    },
  },
};
@Component({
  mixins: [Vue2Filters.mixin],
  validations,
})
export default class CategoryManagementComponent extends mixins(AlertMixin) {
  @Inject('categoryService') private categoryManagementService: () => CategoryManagementService;
  @Inject('alertService') private alertService: () => AlertService;
  public error = '';
  public success = '';
  public categories: any[] = [];
  public itemsPerPage = 10;
  public queryCount: number = null;
  public page = 0;
  public previousPage = 1;
  public propOrder = 'id';
  public reverse = false;
  public totalItems = 0;
  public removeId: number = null;
  public keyword: String = '';
  public category: any = {
    id: null,
    title: undefined,
    description: undefined,
  };

  public mounted(): void {
    this.loadAll();
  }
  // public setActive(user, isActivated): void {
  //   user.activated = isActivated;
  //   this.userManagementService()
  //     .update(user)
  //     .then(() => {
  //       this.error = null;
  //       this.success = 'OK';
  //       this.loadAll();
  //     })
  //     .catch(() => {
  //       this.success = null;
  //       this.error = 'ERROR';
  //       user.activated = false;
  //     });
  // }

  public loadAll(): void {
    this.categoryManagementService()
      .retrieve({
        page: this.page,
        size: this.itemsPerPage,
        sort: this.sort(),
        keyword: this.keyword,
      })
      .then(res => {
        this.categories = res.data;
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

  public handleSearch(): void {
    this.loadAll();
  }

  public changeOrder(propOrder: string): void {
    this.propOrder = propOrder;
    this.reverse = !this.reverse;
    this.transition();
  }
  public createCategory(): void {
    if (this.category.id) {
      this.categoryManagementService()
        .update(this.category)
        .then(res => {
          this.closeDialogCreate();
          this.loadAll();
        });
    } else {
      this.categoryManagementService()
        .create(this.category)
        .then(res => {
          this.closeDialogCreate();
          this.loadAll();
          this.$notify({
            position: 'top right',
            type: 'success',
            title: 'Thành công',
            text: 'Thêm mới danh mục thành công !',
          });
        });
    }
  }
  public updateCategory(): void {
    if (this.category.id) {
      this.categoryManagementService()
        .update(this.category)
        .then(res => {
          this.closeDialogUpdate();
          this.loadAll();
          this.$notify({
            position: 'top right',
            type: 'success',
            title: 'Thành công',
            text: 'Successful category update!',
          });
        });
    }
  }
  public handleCreate(): void {
    this.category = {};
    if (<any>this.$refs.createCate) {
      (<any>this.$refs.createCate).show();
    }
  }
  public handleUpdate(cate): void {
    if (<any>this.$refs.updateCate) {
      (<any>this.$refs.updateCate).show();
    }
    this.category = cate;
  }
  public deleteCate(): void {
    this.categoryManagementService()
      .remove(this.removeId)
      .then(res => {
        this.removeId = null;
        this.loadAll();
        this.closeDialog();
        this.$notify({
          position: 'top right',
          type: 'success',
          title: 'Thành công',
          text: 'Delete category successfully !',
        });
      });
  }

  public prepareRemove(instance): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeCate) {
      (<any>this.$refs.removeCate).show();
    }
  }
  public closeDialogCreate(): void {
    (<any>this.$refs.createCate).hide();
    this.category = {};
  }
  public closeDialogUpdate(): void {
    (<any>this.$refs.updateCate).hide();
  }
  public closeDialog(): void {
    (<any>this.$refs.removeCate).hide();
    this.category.id = null;
    this.category.title = null;
    this.category.description = null;
  }
  // public get username(): string {
  //   return this.$store.getters.account ? this.$store.getters.account.login : '';
  // }
}
