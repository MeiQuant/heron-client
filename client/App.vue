<template>
  <div id="app">
    <div class="heron-main">
      <navbar></navbar>
      <section class="heron-body">
        <sidebar v-bind:class="{ hidden: sidebar.hidden }"></sidebar>
        <panel></panel>
      </section>

    </div>

  </div>
</template>

<script>
import { navbar, sidebar, panel } from 'components/layout/'
import { mapGetters } from 'vuex'

export default {
  components: {
    navbar,
    sidebar,
    panel
  },

  computed: mapGetters({
    sidebar: 'sidebar'
  })
}
</script>

<style lang="scss">

  @import '~bulma';

  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome';

  body {
    margin:0;
    padding:0;
    border: 0;
    height: 100%;
    letter-spacing: 1px;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .hidden {
    display: none;
  }

  .is-full-height {
    height: 100%;
  }

  .heron-main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-flow: column;
  }

  .heron-style-black {
    color: #bbb;
    background-color: #000;
  }

  .heron-body {
    position: relative;
    flex:1;
    overflow: hidden;
  }

</style>
