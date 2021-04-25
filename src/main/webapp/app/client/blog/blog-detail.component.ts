import { router } from '@/router';
import Component from 'vue-class-component';
import { Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { loadImage } from '@/shared/common/util';
import BlogService from './blog.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
@Component({})
export default class BlogDetailComponent extends Vue {
  @Inject('blogService') private blogService: () => BlogService;
  public post: any = null;
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.slug) {
        vm.init(to.params.slug);
      }
    });
  }
  public init(slug: string): void {
    this.blogService()
      .getPost(slug)
      .then(res => {
        if (res && res.data && res.data.errorCode === 'SUCCESS') {
          this.post = res.data.data;
        } else {
          window.location.href = '/not-found';
        }
      });
  }
  public loadImage(name) {
    return loadImage(name);
  }
}
