<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    :enter-active-class="transitionEnterActiveClass"
    :leave-active-class="transitionLeaveActiveClass"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <slot />
  </transition>
</template>

<script>
const DEFAULT_TRANSITION = null;
const DEFAULT_TRANSITION_MODE = 'in-out';

export default {
  name: 'TransitionPage',
  data() {
    return {
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: '',
      transitionLeaveActiveClass: '',
      to: null,
      from: null,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.to = to;
      this.from = from;
      let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION;

      if (to.meta.transitionName) {
        this.transitionEnterActiveClass = `${transitionName}-enter-active`;
      } else {
        this.transitionEnterActiveClass = null;
      }
      if (from.meta.transitionName) {
        this.transitionLeaveActiveClass = `${transitionName}-leave-active`;
      } else {
        this.transitionLeaveActiveClass = null;
      }

      this.transitionName = transitionName;

      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = '100%';
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.5s;
}
.slide-left-enter, .slide-left-leave {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(100%);
}
.fade-left-enter-active, .fade-left-leave-active {
  transition: transform 0.35s, opacity 0.25s;
}
.fade-left-enter, .fade-left-leave {
  transform: translateX(3%);
  opacity: 0;
}
.fade-left-leave-to {
  transform: translateX(5%);
  opacity: 0;
}


.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter {
  opacity: 0;
}
.fade-leave,
.fade-leave-to {
  transform: translateX(100%);
}
</style>
