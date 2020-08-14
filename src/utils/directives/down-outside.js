import Vue from 'vue';

let downOutside = Vue.directive('downOutside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('mousedown', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('mousedown', el.clickOutsideEvent)
  },
})

module.exports = { downOutside };
