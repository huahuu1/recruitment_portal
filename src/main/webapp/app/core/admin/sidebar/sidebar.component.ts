import { loadImage } from '@/shared/common/util';
import { Component, Inject, Vue } from 'vue-property-decorator';
import AccountService from '@/account/account.service';
import { Authority } from '@/shared/security/authority';

@Component
export default class SideBarAdmin extends Vue {
  @Inject('accountService') private accountService: () => AccountService;
  public ADMIN = Authority.ADMIN;
  public EMPLOYER = Authority.EMPLOYER;
  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
  public get imageUrl(): string {
    return this.$store.getters.account ? this.$store.getters.account.imageUrl : '';
  }
  loadImage() {
    return loadImage(this.$store.getters.account ? this.$store.getters.account.imageUrl : '');
  }
  public mounted() {}
  public hasRole(role) {
    if (typeof role === 'string') {
      role = [role];
    }
    const authorities = this.accountService().userAuthorities;
    if (!authorities) {
      return false;
    }
    for (let i = 0; i < role.length; i++) {
      if (authorities.includes(role[i])) {
        return true;
      }
    }
    return false;
  }
  public logout() {
    this.accountService().logoutAdmin();
  }
}
