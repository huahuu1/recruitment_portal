<template>
    <div class="core-content">
      <Header/>
        <router-view></router-view>
      <Footer/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './header/header.vue';
import Footer from './footer/footer.vue';
@Component({
  name: 'ClientLayout',
  components: {
    Header,
    Footer
  }
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
