<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>Code licensed under <a href="https://github.com/fundon/vue-admin/blob/master/LICENSE">{{ license }}</a>.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

  data () {
    return this.$store.state.pkg
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/mixins';

.footer {
  margin-left: 180px;

  @include mobile() {
    margin-left: 0;
  }

  .social a {
    border-bottom: none !important;
  }

  .fa.fa-heart {
    color: red;
  }
}
</style>
