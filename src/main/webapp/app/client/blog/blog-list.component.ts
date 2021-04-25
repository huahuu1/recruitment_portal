import Component from 'vue-class-component';
import { Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { loadImage } from '@/shared/common/util';
import BlogService from './blog.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
@Component({})
export default class BlogListComponent extends Vue {
  @Inject('blogService') private blogService: () => BlogService;
  public posts: any[] = [];
  public itemsPerPage = 5;
  public queryCount: number = null;
  public page = 1;
  public previousPage = 1;
  public propOrder = 'id';
  public reverse = false;
  public totalItems = 0;
  public totalPage = 0;
  public removeId: number = null;
  public keyword: String = '';
  created() {
    this.loadAll();
  }
  public loadAll(): void {
    this.blogService()
      .retrieve({
        page: this.page,
        size: this.itemsPerPage,
        sort: this.sort(),
        keyword: this.keyword,
      })
      .then(res => {
        this.posts = res.data;
        this.totalItems = Number(res.headers['x-total-count']);
        this.queryCount = this.totalItems;
        this.totalPage = Math.ceil(this.totalItems / this.itemsPerPage);
      });
  }
  public sort(): any {
    const result = [this.propOrder + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.propOrder !== 'id') {
      result.push('id');
    }
    return result;
  }
  public loadImage(name) {
    return loadImage(name);
  }
  public goToPage(page) {
    this.page = page;
    this.loadAll();
  }
}
