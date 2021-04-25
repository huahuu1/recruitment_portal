import { Component, Inject } from 'vue-property-decorator';
import Vue from 'vue';
import TakeQuizService from '@/client/take-quiz/take-quiz.service';
import ProfileService from '@/client/profile/profile.service';
import moment from 'moment'
import VueCountdown from '@chenfengyuan/vue-countdown';

@Component
export default class TakeQuizComponent extends Vue {
  @Inject('takeQuizService') private takeQuizService: () => TakeQuizService;
  @Inject('profileService') private profileService: () => ProfileService;

  public test: any = {};
  public tokenId = null;
  public applyJob: any[] = [];
  public moment = moment;
  public timeRemain: any;
  public timer: ''
  public totalQuestion:any;
  public questionPass:any;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.tokenId) {
        vm.init(to.params.tokenId);
      }
    });
  }

  public mounted(): void {

    this.loadApplyJob();
    Vue.component(VueCountdown.name, VueCountdown);
  }

  public init(tokenId) {
    this.takeQuizService()
      .getQuiz(tokenId)
      .then(res => {
        if (res && res.data && res.data.errorCode === 'SUCCESS') {
          this.tokenId = tokenId;
          this.test = res.data.data;
          this.totalQuestion = res.data.data.questions.length;
          this.questionPass = Math.ceil((res.data.data.questions.length) * 0.5)
        } else {
          this.$router.push('/not-found');
        }
      })
      .catch(err => alert(err));
  }

  public submit() {
    if (!confirm('Do you want to submit?')) {
      return;
    }
    this.takeQuizService()
      .submit(this.test, this.tokenId)
      .then(res => {
        if (res && res.data && res.data.errorCode === 'SUCCESS') {
          // @ts-ignore
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'bottom-right',
          });
          this.$router.push('/');
        }
      })
      .catch(err => alert(err));
  }

  public reset() {
    this.init(this.tokenId);
  }

  public loadApplyJob() {
    this.applyJob = [];
    this.profileService()
      .getApplyJob()
      .then(res => {
        if (res.data.errorCode === 'SUCCESS') {

          this.applyJob = res.data.data.content;
          this.applyJob.forEach(e => {
            if (e.jobDTO.testId == this.test.id) {
              this.timeRemain = (this.test.time * 60) - (moment(new Date()).diff(moment.utc(e.sendAt).format('YYYY-MM-DD HH:mm:ss'), 'seconds'));
              // var timesRun = 0;
              // var idVar = setInterval(() => {
              //   if ((this.test.time * 60 / this.timeRemain * 100) >= 50) {
              //     timesRun += 1;
              //     this.loadApplyJob();
              //     clearInterval(idVar);
              //   } else if ((this.test.time * 60 / this.timeRemain * 100) < 50 && (this.test.time * 60 / this.timeRemain * 100) >= 30) {
              //     timesRun += 1;
              //     this.loadApplyJob();
              //     clearInterval(idVar);
              //   } else if ((this.test.time * 60 / this.timeRemain * 100) < 30) {
              //     timesRun += 1;
              //     this.loadApplyJob();
              //     clearInterval(idVar);
              //   }
              // },100)
              // console.log(timesRun)
              // clearInterval(idVar);
              // var idVal = setInterval(() => {
              //   this.loadApplyJob();
              // },Math.ceil((this.timeRemain * 0.5)) * 1000)

              setInterval(() => {
                this.loadApplyJob();
              },this.timeRemain * 1000)
            }
          });
          if (this.timeRemain <= 0) {
            this.$router.push('/not-found');
          }
        }
      })
  }
}
