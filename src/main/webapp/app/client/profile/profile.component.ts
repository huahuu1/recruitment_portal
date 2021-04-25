import Component from 'vue-class-component';
import { Vue, Inject } from 'vue-property-decorator';
import ProfileService from '@/client/profile/profile.service';
import { loadImage } from '@/shared/common/util';
import AccountService from '@/account/account.service';
import commonService from '@/client/job-list/job.service';
import CommonService from '@/shared/common/common.service';
import { format, parseISO } from 'date-fns';

@Component({})
export default class ProfileClient extends Vue {
  @Inject('profileService') private profileService: () => ProfileService;
  @Inject('accountService') private accountService: () => AccountService;
  @Inject('commonService') private commonService: () => CommonService;

  public profile: any = null;
  public fullName: String;
  public jobType: any[] = [];
  public salaryExpect: any[] = [];
  public qualification: any[] = [];
  public englishSkill: any[] = [];
  public experience: any[] = [];
  public applyJob: any[] = [];
  public selectedImage: any = null;
  public selectedAvatar: any = null;
  public uploadError = '';
  public uploadAvatarError = '';

  public mounted(): void {
    this.loadProfile();
    this.loadAllEnglishSkill();
    this.loadAllJobType();
    this.loadAllQualification();
    this.loadAllSalary();
    this.loadAllExp();
  }

  public save() {
    if (!this.profile.user.firstName || !this.profile.user.lastName || !this.profile.user.email) {
      // @ts-ignore
      this.$toast.open({
        message: 'Please fill in all information including full name, email',
        type: 'error',
        position: 'bottom-right',
      });
      return;
    }
    const formdata: FormData = new FormData();
    if (this.selectedImage != null) {
      if (this.selectedImage.type !== 'application/pdf') {
        this.$toast.open({
          message: 'Use only pdf files',
          type: 'error',
          position: 'bottom-right',
        });
        this.uploadError = 'FAIL';
      } else {
        this.uploadError = 'SUCCESS';
        formdata.append('cvFile', this.selectedImage ? this.selectedImage : null);
      }
    } else {
      this.uploadError = 'SUCCESS';
      formdata.append('cvFile', this.selectedImage);
    }

    if (this.selectedAvatar != null) {
      if (this.selectedAvatar.type !== 'image/jpeg' && this.selectedAvatar.type !== 'image/png') {
        this.$toast.open({
          message: 'Use only jpg or png files',
          type: 'error',
          position: 'bottom-right',
        });
        this.uploadAvatarError = 'FAIL';
      } else {
        this.uploadAvatarError = 'SUCCESS';
        formdata.append('avatar', this.selectedAvatar ? this.selectedAvatar : null);
      }
    } else {
      this.uploadAvatarError = 'SUCCESS';
      formdata.append('avatar', this.selectedAvatar);
    }


    // formdata.append('avatar', this.selectedAvatar ? this.selectedAvatar : null);

    formdata.append(
      'profile',
      new Blob([JSON.stringify(this.profile)], {
        type: 'application/json',
      })
    );
    this.profileService()
      .update(formdata)
      .then(res => {
        if (res.data.errorCode === 'SUCCESS' && this.uploadError === 'SUCCESS' && this.uploadAvatarError === 'SUCCESS') {
          // @ts-ignore
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'bottom-right',
          });
          this.loadProfile();
        }
      })
      .catch(err => {
        this.$toast.open({
          message: 'An error has occurred!',
          type: 'error',
          position: 'bottom-right',
        });
      });
  }

  public handleFilesUpload(e) {
    this.selectedImage = (this.$refs['files'] as any).files[0];
  }

  public handleAvatarUpload(e) {
    this.selectedAvatar = (this.$refs['files1'] as any).files[0];
    const file = e.target.files[0];
    this.profile.user.imageUrl = URL.createObjectURL(file);
  }

  public loadApplyJob() {
    this.applyJob = [];
    this.profileService()
      .getApplyJob()
      .then(res => {
        if (res.data.errorCode === 'SUCCESS') {
          this.applyJob = res.data.data.content;
        }
      })
      .catch(err => {
        this.$toast.open({
          message: 'An error has occurred!',
          type: 'error',
          position: 'bottom-right',
        });
      });
  }

  public loadProfile(): void {
    this.profile = null;
    this.profileService()
      .getCurrentProfile()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.profile = res.data.data;
            if (this.profile.user.birthday) {
              this.profile.user.birthday = format(parseISO(this.profile.user.birthday), 'yyyy-MM-dd');
            }
            if (this.profile.user.imageUrl) {
              this.profile.user.imageUrl = this.loadImage(this.profile.user.imageUrl);
            }
            this.fullName = '';
            if (this.profile.user.firstName) {
              this.fullName += this.profile.user.firstName;
            }
            if (this.profile.user.lastName) {
              this.fullName += ' ' + this.profile.user.lastName;
            }
          }
        }
      });
  }

  public loadAllExp(): void {
    this.experience = [];
    this.commonService()
      .getAllExp()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.experience = res.data.data;
          }
        }
      });
  }

  public loadAllSalary(): void {
    this.salaryExpect = [];
    this.commonService()
      .getAllSalary()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.salaryExpect = res.data.data;
          }
        }
      });
  }

  public loadAllQualification(): void {
    this.qualification = [];
    this.commonService()
      .getAllQualification()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.qualification = res.data.data;
          }
        }
      });
  }

  public loadAllJobType(): void {
    this.jobType = [];
    this.commonService()
      .getAllJobType()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.jobType = res.data.data;
          }
        }
      });
  }

  public loadAllEnglishSkill(): void {
    this.englishSkill = [];
    this.commonService()
      .getAllEnglishSkill()
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            this.englishSkill = res.data.data;
          }
        }
      });
  }

  public loadImage(name) {
    return loadImage(name);
  }

  public logout() {
    this.accountService().logout();
  }

  public viewCV(id) {
    window.open('http://localhost:8080/api/common/viewPdf/' + id, '_blank');
  }
  convertTime(dateTime) {
    const d = new Date(dateTime);
    return d.getUTCHours() + 'h:' + d.getUTCMinutes() + 'p ';
  }
  formatDateInterview(date) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }
}
