import { loadImage } from '@/shared/common/util';
import { PostService } from '@/admin/post-management/post-management.service';
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators';
import { Component, Inject, Vue } from 'vue-property-decorator';
import { IUser, User } from '@/shared/model/user.model';
import AlertService from '@/shared/alert/alert.service';
import CategoryManagementService from '../category-management/category-management.service';

const loginValidator = (value: string) => {
  if (!value) {
    return true;
  }
  return /^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$/.test(value);
};

const validations: any = {
  post: {
    title: {
      required,
      maxLength: maxLength(254),
    },
    description: {
      required,
    },
    content: {
      required,
    },
    category: {
      required,
    },
  },
};

@Component({
  validations,
})
export default class PostManagementEdit extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('categoryService') private categoryManagementService: () => CategoryManagementService;
  @Inject('postService') private postManagementService: () => PostService;
  public post: any = {
    id: null,
    title: null,
    content: null,
    description: null,
    status: 0,
    thumbnail: null,
    category: null,
    slug: null,
  };
  public propOrder = 'id';
  public reverse = false;
  public categories: any[] = [];
  public isSaving = false;
  public authorities: any[] = [];
  public languages: any = this.$store.getters.languages;
  public imageData: any = {};
  public selectedImage: any;
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.postId) {
        vm.init(to.params.postId);
      }
    });
  }
  created() {
    this.categoryManagementService()
      .retrieve({
        page: 0,
        size: 100000,
        sort: this.sort(),
        keyword: '',
      })
      .then(res => {
        this.categories = res.data;
      });
  }
  public sort(): any {
    const result = [this.propOrder + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.propOrder !== 'id') {
      result.push('id');
    }
    return result;
  }
  mounted() {
    this.imageData = 'https://www.lifewire.com/thmb/GpLiv-iX9KITFd3AI2HS4zZeXsw=/1920x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cloud-upload-a30f385a928e44e199a62210d578375a.jpg';
  }

  public init(postId: number): void {
    this.postManagementService()
      .get(postId)
      .then(res => {
        this.post = res.data;
        if (this.post.thumbnail != null) {
          this.imageData = loadImage(this.post.thumbnail);
        }
      });
  }
  // public previousState(): void {
  //   (<any>this).$router.go(-1);
  // }

  public save(): void {
    this.isSaving = true;
    if (this.post.id) {
      const formdata: FormData = new FormData();
      formdata.append('thumbnail', this.selectedImage ? this.selectedImage : null);
      formdata.append(
        'post',
        new Blob([JSON.stringify(this.post)], {
          type: 'application/json',
        })
      );
      this.postManagementService()
        .update(formdata)
        .then(res => {
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'bottom-right',
          });
          setTimeout(this.returnToList, 4000);
        });
    } else {
      const formdata: FormData = new FormData();
      const time = new Date().getTime();
      this.post.slug = this.convertTitleToSlug(this.post.title) + '-' + time.toString();
      formdata.append('thumbnail', this.selectedImage ? this.selectedImage : null);
      formdata.append(
        'post',
        new Blob([JSON.stringify(this.post)], {
          type: 'application/json',
        })
      );
      this.postManagementService()
        .create(formdata)
        .then(res => {
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'bottom-right',
          });
          setTimeout(this.returnToList, 4000);
        });
    }
  }

  private returnToList(): void {
    this.isSaving = false;
    (<any>this).$router.go(-1);
  }

  // private getMessageFromHeader(res: any): any {
  //   return this.$t(res.headers['x-recruitmentportalapp-alert'], {
  //     param: decodeURIComponent(res.headers['x-recruitmentportalapp-params'].replace(/\+/g, ' ')),
  //   });
  // }
  public previewImage(event): void {
    this.selectedImage = (this.$refs['files'] as any).files[0];
    // Reference to the DOM input element
    const input = event.target;
    // Ensure that you have a file before attempting to read it
    if (input.files && input.files[0]) {
      // create a new FileReader to read this image and convert to base64 format
      const reader = new FileReader();
      // Define a callback function to run, when FileReader finishes its job
      reader.onload = e => {
        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
        // Read image as base64 and set to imageData
        this.imageData = e.target.result;
      };
      // Start the reader job - read file as a data url (base64 format)
      reader.readAsDataURL(input.files[0]);
    }
  }
  handleChooseFile() {
    document.getElementById('file-input').click();
  }
  convertTitleToSlug(title) {
    let slug = '';
    // Change to lower case
    const titleLower = title.toLowerCase();
    // Letter "e"
    slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
    // Letter "a"
    slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
    // Letter "o"
    slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
    // Letter "u"
    slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
    // Letter "d"
    slug = slug.replace(/đ/gi, 'd');
    // Trim the last whitespace
    slug = slug.replace(/\s*$/g, '');
    // Change whitespace to "-"
    slug = slug.replace(/\s+/g, '-');
    return slug;
  }
}
