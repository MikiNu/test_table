<template>
  <div
    v-if="(statusLists === 'success')"
  >
    <header-body />
    <div class="page">
      <div class="container-fluid p-4">
        <div class="row">
          <div class="col-lg-3">
            <card-profile />
          </div>
          <div class="col-lg-9">
            <tab-panel :name="name"/>
          </div>
        </div>
      </div>
    </div>
    <footer-page />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HeaderBody from './header-body.vue'
  import CardProfile from './card-profile.vue'
  import TabPanel from './tab-panel.vue'
  import FooterPage from "./footer-page.vue"

  export default {
    name: 'Home',
    //хэш компонентов, доступных в данном экземпляре
    components: {
      HeaderBody,
      CardProfile,
      TabPanel,
      FooterPage
    },
    props: {
      //входной параметр
      name: {
        type: String,
        default: '',
      },
    },
    computed: {
      ...mapGetters(['lists', 'statusLists']),
    },
  }
</script>

<style lang="scss">
  @import '../assets/scss/homepage-style.scss';
</style>