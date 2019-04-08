<template>
  <header
    class="header position-sticky"
  >
    <nav class="navbar navbar-expand-md navbar_theme pt-0 pb-0">
      <div class="navbar_header_size d-flex justify-content-between">
        <button
          type="button"
          class="navbar-toggler text-white order-1 order-md-1 rounded-0 btn_outline_none waves_theme_nav"
          data-toggle="collapse"
          data-target="#menubar"
          aria-controls="menubar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <v-icon
            name="bars"
            scale="1.2"
          />
        </button>
        <button
          type="button"
          class="navbar-toggler text-white order-3 order-md-2 rounded-0 btn_outline_none waves_theme_nav"
          data-toggle="collapse"
          data-target="#site-navbar-collapse"
          aria-controls="site-navbar-collapse"
        >
          <v-icon
            name="ellipsis-v"
            scale="1.2"
          />
        </button>
        <div
          class="navbar-brand d-flex align-items-center pl-2 order-2 order-md-3"
          data-toggle="gridmenu"
          aria-expanded="true"
        >
          <img
            src="../assets/images/logo-colored.png"
            title="Remark"
          >
          <span class="d-none d-sm-block ml-2"> Remark</span>
        </div>
      </div>
      <div class="container-fluid">
        <div
          class="collapse navbar-collapse navbar-collapse-toolbar d-none d-md-flex justify-content-end"
        >
          <div class="waves nav-item dropdown d-flex align-items-stretch">
            <a
              class="nav-link navbar-avatar waves_theme_nav text-white pt-4 pb-4"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
              data-animation="scale-up"
              role="button"
              @click.prevent="updateLogoutMenu()"
            >
                <span class="avatar">
                  <img
                    src="../assets/images/1.jpeg"
                    class="avatar_img_size_s rounded-circle"
                  >
                  <i />
                </span>
            </a>
            <div
              :class="[showLogoutMenu ? 'show' : '', 'tab-menu dropdown-menu']"
              aria-labelledby="menu"
            >
              <a
                class="dropdown-item menu__item border-0 m-1 w-auto"
                href="#"
                role="button"
                @click.prevent="logout()"
              >
                Выйти
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'HeaderBody',
    data() {
      return {
        showLogoutMenu: false
      }
    },
    computed: {
      ...mapGetters(['user']),
    },
    methods: {
      updateLogoutMenu() {
        this.showLogoutMenu = !this.showLogoutMenu
      },
      logout() {
        this.$store.dispatch('AUTH_LOGOUT')
        this.$router.push('/login')
        this.showLogoutMenu = false
      },
    }
  }
</script>
