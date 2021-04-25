import { Component, Inject, Vue } from 'vue-property-decorator';
import UserManagementService from '@/admin/user-management/user-management.service';
import { IUser, User } from '@/shared/model/user.model';
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators';
import { loadImage } from '@/shared/common/util';
import { format, parseISO } from 'date-fns';
import { DATE_FORMAT } from '@/shared/date/filters';

const validations: any = {
  userAccount: {
    login: {
      required,
      maxLength: maxLength(254),
    },
    firstName: {
      maxLength: maxLength(50),
    },
    lastName: {
      maxLength: maxLength(50),
    },
    email: {
      required,
      email,
      minLength: minLength(5),
      maxLength: maxLength(50),
    },
    phone: {
      required,
    },
  },
};

@Component({
  validations,
})
export default class AdminProfileComponent extends Vue {
  @Inject('userService') private userService: () => UserManagementService;
  public userAccount: any = {};
  public isSaving = false;
  public selectedImage: any;
  public mounted() {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    this.userService()
      .getCurrentUser()
      .then(res => {
        this.userAccount = res.data;
        if (this.userAccount.imageUrl) {
          this.userAccount.imageUrl = this.loadImage(this.userAccount.imageUrl);
        }
        if (this.userAccount.birthday) {
          this.userAccount.birthday = format(parseISO(this.userAccount.birthday), 'yyyy-MM-dd');
        }
      });
  }

  public previousState(): void {
    (<any>this).$router.go(-1);
  }

  public save(): void {
    this.isSaving = true;
    if (this.userAccount.id) {
      const formdata: FormData = new FormData();
      formdata.append('imageFile', this.selectedImage ? this.selectedImage : null);

      formdata.append(
        'user',
        new Blob([JSON.stringify(this.userAccount)], {
          type: 'application/json',
        })
      );
      this.userService()
        .updateCurrentUser(formdata)
        .then(res => {
          // @ts-ignore
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'top-right',
          });
          this.loadCurrentUser();
          this.isSaving = false;
        });
    }
  }

  public loadImage(name) {
    return loadImage(name);
  }

  public handleFilesUpload(e) {
    this.selectedImage = (this.$refs['files'] as any).files[0];
    const file = e.target.files[0];
    this.userAccount.imageUrl = URL.createObjectURL(file);
  }
}
