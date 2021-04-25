import Vue from 'vue';
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators';
import { Component, Inject } from 'vue-property-decorator';
import CommonService from '@/shared/common/common.service';
import CompanyService from '@/admin/company/company.service';
import { loadImage } from '@/shared/common/util';
import AlertService from '@/shared/alert/alert.service';
const validations: any = {
  company: {
    name: {
      required,
      maxLength: maxLength(254),
    },
    code: {},
    description: {},
    website: {},
    scopeWork: {
      required,
    },
    address: {
      required,
    },
    phone: {
      required,
    },
    companySize: {
      required,
    },
    email: {
      required,
      email,
      minLength: minLength(5),
      maxLength: maxLength(50),
    },
  },
};

@Component({
  validations,
})
export default class CompanyEditComponent extends Vue {
  @Inject('commonService') private commonService: () => CommonService;
  @Inject('companyService') private companyService: () => CompanyService;
  public content: any = '<h1>Html For Editor</h1>';
  public customToolbar: any[] = [
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
  ];
  public companySizes: any[] = [];
  public careers: any[] = [];
  public selected: [];
  public selectedImage: any;
  public company: any = {
    id: null,
    code: '',
    name: '',
    scopeWork: [],
    address: null,
    phone: null,
    email: null,
    logo: null,
    website: null,
    description: null,
    companySize: 1,
  };

  public mounted(): void {
    this.loadCurrentCompany();
    this.loadCompanySize();
    this.loadCareer();
  }

  public loadCurrentCompany() {
    this.companyService()
      .getDetail()
      .then(res => {
        if (res && res.data && res.data.errorCode === 'SUCCESS') {
          this.company = res.data.data;
          this.company.logo = this.loadImage(this.company.logo);
        }
      });
  }

  save() {
    const formdata: FormData = new FormData();
    formdata.append('logoFile', this.selectedImage ? this.selectedImage : null);

    formdata.append(
      'company',
      new Blob([JSON.stringify(this.company)], {
        type: 'application/json',
      })
    );
    this.companyService()
      .update(formdata)
      .then(res => {
        if (res && res.data && res.data.errorCode === 'SUCCESS') {
          // @ts-ignore
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'bottom-right',
          });
          this.loadCurrentCompany();
        }
      });
  }

  loadCompanySize() {
    this.companySizes = [];
    this.commonService()
      .getAllCompanySize()
      .then(res => {
        if (res && res.data) {
          this.companySizes = res.data.data;
        }
      });
  }

  loadCareer() {
    this.careers = [];
    this.commonService()
      .getAllCareer()
      .then(res => {
        if (res && res.data) {
          this.careers = res.data.data;
        }
      });
  }

  public handleFilesUpload(e) {
    this.selectedImage = (this.$refs['files'] as any).files[0];
    const file = e.target.files[0];
    this.company.logo = URL.createObjectURL(file);
  }

  public loadImage(name) {
    return loadImage(name);
  }
}
