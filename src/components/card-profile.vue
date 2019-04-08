<template>
  <div class="card card_theme_shadow text-center border-0 rounded-0 mb-4">
    <div class="pt-5 pl-3 pr-3 pb-5">
      <div class="avatar">
        <img
          src="../assets/images/1.jpeg"
          class="rounded-circle"
        >
      </div>
      <h5 class="text text_shadow mt-2 mb-2">
        {{ user.name }}
      </h5>
      <p class="card_theme_color_grey">
        Art director
      </p>
      <p>
        Hi! I'm Adrian the Senior UI Designer at AmazingSurge. We hope you
        enjoy the design and quality of Social.
      </p>
      <div class="mt-4 mb-4">
        <a
          class="icon text-secondary"
          href="#"
          @click.prevent
        >
          <v-icon
            name="brands/twitter"
            scale="1"
            class="ml-2 mr-2"
          />
        </a>
        <a
          class="icon text-secondary"
          href="#"
          @click.prevent
        >
          <v-icon
            name="brands/facebook-f"
            scale="1"
            class="ml-2 mr-2"
          />
        </a>
        <a
          class="icon text-secondary"
          href="#"
          @click.prevent
        >
          <v-icon
            name="brands/dribbble"
            scale="1"
            class="ml-2 mr-2"
          />
        </a>
        <a
          class="icon text-secondary"
          href="#"
          @click.prevent
        >
          <v-icon
            name="brands/github"
            scale="1"
            class="ml-2 mr-2"
          />
        </a>
      </div>
      <button
        type="button"
        class="btn btn_theme_primary text-white btn_waves_effect border-0"
      >
        Follow
      </button>
    </div>
    <div class="card-footer card__social border-0">
      <div class="row no-space">
        <div class="col-4 text-secondary d-flex flex-column">
          <strong class="card__count">260</strong>
          <span class="light-grey">Follower</span>
        </div>
        <div class="col-4 text-secondary d-flex flex-column">
          <strong class="card__count">180</strong>
          <span class="light-grey">Following</span>
        </div>
        <div class="col-4 text-secondary d-flex flex-column">
          <strong class="card__count">2000</strong>
          <span class="light-grey">Tweets</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CardProfile',
    computed: {
      ...mapGetters(['user']),
    },
  }
</script>

<style lang="scss">
  @import '../assets/scss/components/card.scss';
</style>