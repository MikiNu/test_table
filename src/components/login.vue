<template>
  <div class="login">
    <div class="login__page min-vh-100 d-flex flex-column align-items-center justify-content-center text-center">
      <div class="login__wrap pt-4">
        <div class="login__panel bg-white m-2 p-5">
          <div class="login__brand">
            <img
              class="brand-img"
              src="../assets/images/logo-colored.png"
            >
            <h5 class="brand-text mt-2">
              Remark
            </h5>
          </div>
          <div
            v-if="(status === 'error') || error === 'null'"
            class="alert alert-danger mt-4"
            role="alert"
          >
            Логин и/или пароль введены неверно.
          </div>
          <div
            v-else-if="error === 'email'"
            class="alert alert-danger mt-4"
            role="alert"
          >
            Email введен неверно.
          </div>
          <div
            v-else-if="error"
            class="alert alert-danger mt-4"
            role="alert"
          >
            Пароль менее 6 символов.
          </div>
          <form
            class="form mt-5 mb-4"
            @submit.prevent="login"
          >
            <div class="form__wrap form-group position-relative">
              <input
                v-model="email"
                :class="[ email ? '' : 'empty','form-control form__input form_input_border']"
              >
              <label class="form__label form_label_indent">Email</label>
            </div>
            <div class="form form-group position-relative mt-4">
              <input
                v-model="password"
                :class="[ password ? '' : 'empty','form-control form__input form_input_border']"
              >
              <label class="form__label form_label_indent">Password</label>
            </div>
            <button
              type="submit"
              class="btn text-white btn-block btn-lg mt-5 btn_theme_primary btn_waves_effect"
            >
              Sign in
            </button>
          </form>
          <p class="pt-1 mb-0">
            Still no account? Please go to
            <a
              href="#"
              @click.prevent
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
      <footer class="page-copyright page-copyright-inverse mt-5">
        <p>WEBSITE BY Miki_Nu</p>
        <p>© 2019. All RIGHT RESERVED.</p>
        <div class="waves">
          <a
            class="btn btn-icon btn_theme_social waves__color waves_color_effect"
            href="#"
            @click.prevent
          >
            <v-icon
              name="brands/twitter"
              scale="1.2"
            />
          </a>
          <a
            class="btn btn-icon btn_theme_social waves__color waves_color_effect"
            href="#"
            @click.prevent
          >
            <v-icon
              name="brands/facebook-f"
              scale="1"
            />
          </a>
          <a
            class="btn btn-icon btn_theme_social waves__color waves_color_effect"
            href="#"
            @click.prevent
          >
            <v-icon
              name="brands/google-plus-g"
              scale="1.4"
            />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Login',
    data () {
      return {
        email: 'miki.nu8888@gmail.com',
        password: '123qwerty',
        error:''
      }
    },
    computed: {
      ...mapGetters(['status']),
    },
    methods: {
      //ф-ия авторизации
      login () {
        if (!this.email || !this.password) {
          this.error = 'null'
        }else{
          let checkEmail
          checkEmail = this.email.match(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/)
          if(!checkEmail){
            this.error = 'email'
          }else if (this.password.length < 6){
            this.error = 'password'
          }else{
            this.error = ''
          }
        }
        if (!this.error){
          //определяем данные для отправки
          const {email, password} = this
          //вызов action из хранилища на запрос авторизации
          this.$store.dispatch('AUTH_REQUEST', {email, password}).then(() => {
            //если успех - переходим на главную страницу
            this.$router.push('/tab')
          })
        }
      },
    },
  }
</script>

<style lang="scss">
  @import '../assets/scss/login-slyle.scss';
</style>