<template>
  <footer class="footer bg-light border-top pt-2 pb-2 pl-4 pr-4 d-flex">
    <div class="text-secondary">
      © 2019
      <a
        class="footer__link"
        href="#"
        @click.prevent
      >
        Remark
      </a>
    </div>
    <div class="ml-auto text-secondary">
      Crafted with
      <v-icon
        class="text-danger"
        name="heart"
        scale="0.7"
      />
      by
      <a
        class="footer__link"
        href="#"
        @click.prevent
      >
        Miki_Nu
      </a>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'FooterPage',
  }
</script>

<style lang="scss">
  @import '../assets/scss/components/footer.scss';
</style>