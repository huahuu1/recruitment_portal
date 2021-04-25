import { Component, Inject } from 'vue-property-decorator';
import Vue from 'vue';
import TestService from '@/admin/test-management/test.service';

@Component
export default class TestManagementEditComponent extends Vue {
  @Inject('testService') private testService: () => TestService;

  public questions: any[] = [];
  public qTitle: String = '';
  public isError: any = false;
  public qRemove: any;
  public isDisabled: any = false;
  public test: any = {
    name: null,
    time: null,
  };

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.testId) {
        vm.init(to.params.testId);
      }
    });
  }

  public init(testId: number): void {
    this.testService()
      .get(testId)
      .then(res => {
        if (res && res.data) {
          const testTmp = res.data.data;
          this.test['id'] = testTmp.id;
          this.test.name = testTmp.name;
          this.test.time = testTmp.time;
          this.questions = testTmp.questions;
          if (testTmp.questions.length === 0 || !testTmp.questions) {
            this.isDisabled = true;
          }
        }
      });
  }

  public addQuestion() {
    if (!this.qTitle || !this.qTitle.trim()) {
      return;
    }
    if (this.questions.length === 0) {
      this.isDisabled = true;
    }
    if (!this.questions) {
      this.questions = [];
    }
    this.questions.push({
      id: null,
      questionTitle: this.qTitle.trim(),
      answerOne: null,
      answerTwo: null,
      answerThree: null,
      answerFour: null,
      correctAnswer: 1,
    });
    this.qTitle = '';
  }

  public save() {
    this.isError = true;
    if (!this.test.name || !this.test.time || !this.test.name.trim()) {
      return;
    }
    if (!this.questions || this.questions.length === 0) {
      // @ts-ignore
      this.$toast.open({
        message: 'No more questions yet!',
        type: 'error',
        position: 'bottom-right',
      });
      return;
    }
    for (let q of this.questions) {
      let count = 0;
      if (!q.answerOne || !q.answerOne.trim()) count++;
      if (!q.answerTwo || !q.answerTwo.trim()) count++;
      if (!q.answerThree || !q.answerThree.trim()) count++;
      if (!q.answerFour || !q.answerFour.trim()) count++;

      if (count > 2) {
        // @ts-ignore
        this.$toast.open({
          message: 'Question: ' + q.questionTitle + ' need at least 2 answers!',
          type: 'error',
          position: 'bottom-right',
        });
        return;
      }
    }
    this.test['questions'] = this.questions;
    this.testService()
      .create(this.test)
      .then(res => {
        if (res && res.data) {
          if (res.data.errorCode === 'SUCCESS') {
            // @ts-ignore
            this.$toast.open({
              message: 'Success',
              type: 'success',
              position: 'bottom-right',
            });
            if (this.test.id) {
              this.init(res.data.data.id);
            } else {
              this.$router.push('/admin/quan-ly-bai-kiem-tra/' + res.data.data.id + '/cap-nhat');
            }
            this.$router.push('/admin/quan-ly-bai-kiem-tra/');
          }
        }
      });
  }

  public deleteQuestion() {
    const idx = this.questions.indexOf(this.qRemove);
    if (idx < 0) {
      return;
    }
    if (!this.questions || this.questions.length === 0) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
    this.testService()
      .removeQuestion(this.qRemove.id)
      .then(res => {
        if (res && res.data) {
          // @ts-ignore
          this.$toast.open({
            message: 'Success!',
            type: 'success',
            position: 'bottom-right',
          });
          this.questions.splice(idx, 1);
          this.closeDialog();
        }
        return;
      });
  }
  public prepareRemove(instance): void {
    if (instance.id) {
      this.qRemove = instance;
      if (<any>this.$refs.removeQuestion) {
        (<any>this.$refs.removeQuestion).show();
      }
    } else {
      const idx = this.questions.indexOf(instance);
      if (idx < 0) {
        return;
      }
      this.questions.splice(idx, 1);
    }
  }

  public closeDialog(): void {
    (<any>this.$refs.removeQuestion).hide();
  }
}
