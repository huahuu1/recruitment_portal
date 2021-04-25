import axios from 'axios';
import Component from 'vue-class-component';
import { Vue, Inject } from 'vue-property-decorator';
import AccountService from '@/account/account.service';
import { email, helpers, maxLength, minLength, required, sameAs } from 'vuelidate/lib/validators';
const validations: any = {
  login: {
    required,
    minLength: minLength(1),
    maxLength: maxLength(50),
  },
  password: {
    required,
    minLength: minLength(4),
    maxLength: maxLength(254),
  },
};
@Component({
  validations,
})
export default class AdminLogin extends Vue {
  @Inject('accountService')
  private accountService: () => AccountService;
  public authenticationError = null;
  public login = null;
  public password = null;
  public rememberMe: boolean = null;

  public doLogin(): void {
    this.$v.$touch();
    if (this.$v.login.$invalid || this.$v.password.$invalid) {
      return;
    }
    const data = { username: this.login, password: this.password, rememberMe: this.rememberMe };
    axios
      .post('api/authenticate', data)
      .then(async result => {
        const bearerToken = result.headers.authorization;
        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
          const jwt = bearerToken.slice(7, bearerToken.length);
          if (this.rememberMe) {
            localStorage.setItem('jhi-authenticationToken', jwt);
          } else {
            sessionStorage.setItem('jhi-authenticationToken', jwt);
          }
        }
        this.authenticationError = false;
        await this.accountService().retrieveAccount();
        window.location.href = '/admin';
      })
      .catch(() => {
        this.authenticationError = true;
      });
  }
}
