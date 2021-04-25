<template>
    <div class="wrapper" style="height: -webkit-fill-available;">
        <HeaderAdmin/>
        <SideBarAdmin/>
        <router-view></router-view>
        <FooterAdmin/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderAdmin from './header/header.vue';
import FooterAdmin from './footer/footer.vue';
import SideBarAdmin from './sidebar/sidebar.vue';
@Component({
  name: 'ClientAdmin',
  components: {
    HeaderAdmin,
    FooterAdmin,
    SideBarAdmin
  }
})
export default class extends Vue {

}
</script>

<style lang="css">
@import '../../../content/admin/css/vendors_css.css';
@import '../../../content/admin/css/style.css';
@import '../../../content/admin/css/skin_color.css';
</style>
