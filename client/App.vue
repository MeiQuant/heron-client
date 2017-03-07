<template>
  <div id="app">

  {{ message }}
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <img src="http://bulma.io/images/bulma-logo.png">
        </a>
      </div>

      <div class="nav-center">
        here is center
      </div>

      <div class="nav-right">
        here is right
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  data: {
    message: 'Hello, Heron'
  }
}
</script>

<style lang="scss">

  @import '~bulma';
  @import '~font-awesome/scss/font-awesome';

</style>
