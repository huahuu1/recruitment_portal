import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';
import TestService from '@/admin/test-management/test.service';

@Component
export default class TestManagementComponent extends Vue {
  @Inject('testService') private testService: () => TestService;
  public tests: any[] = [];
  public itemsPerPage = 5;
  public queryCount: number = 2;
  public page = 1;
  public totalItems = 5;
  public previousPage = 1;
  public keyword = null;
  public removeId: number = null;

  public mounted(): void {
    this.loadAll();
  }

  public loadPage(page: number): void {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadAll();
    }
  }

  public updateStatus(test, status) {
    this.testService()
      .updateStatus(test.id)
      .then(res => {
        if (res && res.data) {
          // @ts-ignore
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'bottom-right',
          });
          this.loadAll();
        }
      })
      .catch(err => alert(err));
  }

  public handleSearch() {
    this.loadAll();
  }

  public loadAll() {
    this.tests = [];
    let query = {
      page: this.page - 1,
      size: this.itemsPerPage,
    };
    if (this.keyword) {
      query['keyword'] = this.keyword;
    }
    this.testService()
      .getAll(query)
      .then(res => {
        if (res && res.data) {
          this.tests = res.data.data.content;
          this.totalItems = Number(res.data.data.totalElements);
          this.queryCount = this.totalItems;
        }
        this.tests.forEach(element => {
          if (element.questions.length === 0) {
            this.testService()
            .remove(element.id)
            .then(res => {
              if (res && res.data) {
                this.loadAll();
              }
            });
          }
        });
      });
  }

  public deleteApply(): void {
    this.testService()
      .remove(this.removeId)
      .then(res => {
        if (res && res.data) {
          // @ts-ignore
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'bottom-right',
          });
          this.loadAll();
          this.closeDialog();
        }
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
}
