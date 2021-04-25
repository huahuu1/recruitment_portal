import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeaderAdmin extends Vue {
  public toggleClass(): void {
    const el = document.body;
    if (el.classList.contains('sidebar-collapse')) {
      el.classList.remove('sidebar-collapse');
    } else {
      el.classList.add('sidebar-collapse');
    }
  }
}
