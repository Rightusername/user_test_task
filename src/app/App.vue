<template>
  <div class="app-root dark">
    <transition-page>
      <router-view />
    </transition-page>
    <modals-container />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

import TransitionPage from './components/TransitionPage.vue';

export default {
  name: 'App',
  components: {
    TransitionPage,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  computed: {
    styleProp() {
      return {};
    },
  },
  updated() {},
  created() {
    this.$store.dispatch('LOAD_STATE');
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
@import '~styles/style.scss';
@import '~styles/libs/vmodal.scss';
</style>

<style lang="scss" scoped>
@import '~styles/fonts/didactgothic.scss';

.app-root {
  height: 100%;
  padding: 0 40px; 
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  font-family: 'Didact Gothic';
  background: var(--background-darken-color);
}
</style>
