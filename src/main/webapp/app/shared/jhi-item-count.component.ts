import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';

@Component
export default class JhiItemCountComponent extends Vue {
  @Prop()
  page: number;
  @Prop()
  total: number;
  @Prop()
  itemsPerPage: number;
  i18nEnabled = true;

  get first() {
    if (this.total === 0) {
      return (this.page - 1) * this.itemsPerPage === 0 ? 0 : (this.page - 1) * this.itemsPerPage + 1;
    } else {
      return (this.page - 1) * this.itemsPerPage === 0 ? 1 : (this.page - 1) * this.itemsPerPage + 1;
    }
  }

  get second() {
    return this.page * this.itemsPerPage < this.total ? this.page * this.itemsPerPage : this.total;
  }
}
