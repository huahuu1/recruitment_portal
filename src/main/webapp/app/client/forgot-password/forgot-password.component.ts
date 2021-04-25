import { email, maxLength, minLength, required } from 'vuelidate/lib/validators';
import axios from 'axios';
import { Vue, Component } from 'vue-property-decorator';

const validations = {
  resetAccount: {
    email: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(254),
      email,
    },
  },
};

interface ResetAccount {
  email: string;
}

@Component({
  validations,
})
export default class ForgotPasswordClient extends Vue {
  public success: boolean = null;
  public error: string = null;
  public resetAccount: ResetAccount = {
    email: null,
  };

  public requestReset(): void {
    this.error = null;
    axios
      .post('api/account/reset-password/init', this.resetAccount.email, {
        headers: {
          'content-type': 'text/plain',
        },
      })
      .then(() => {
        this.success = true;
        // @ts-ignore
        this.$toast.open({
          message: 'Please check your email registration to restore your account!',
          type: 'success',
          position: 'bottom-right',
        });
        this.$router.push('/');
      })
      .catch(error => {
        this.success = null;
        this.error = 'ERROR';
        // @ts-ignore
        this.$toast.open({
          message: 'Email does not exist in the system',
          type: 'error',
          position: 'bottom-right',
        });
      });
  }
}
