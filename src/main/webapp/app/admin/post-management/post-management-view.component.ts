import { PostService } from '@/admin/post-management/post-management.service';
import { loadImage } from '@/shared/common/util';
import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';

@Component
export default class PostManagementView extends Vue {
  @Inject('postService') private postManagementService: () => PostService;
  public post: any = null;
  public imageData: any = null;
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.postId) {
        vm.init(to.params.postId);
      }
    });
  }
  public init(postId: number): void {
    // const loader = this.$loading.show();
    this.postManagementService()
      .get(postId)
      .then(res => {
        this.post = res.data;
        if (this.post.thumbnail != null) {
          this.imageData = loadImage(this.post.thumbnail);
        }
        // loader.hide();
      });
  }
  public loadImage(name) {
    return loadImage(name);
  }
}
