<template>
  <div v-down-outside="close" class="app-select" :class="{ open: isOpen }">
    <div v-if="picked" class="picked item" @click.self="toggle">
      {{ picked.name }}
    </div>
    <div class="triangle" :class="storage.settings.theme.name"></div>
    <div v-if="items && picked" class="drop-down">
      <div
        v-for="item in list"
        :key="item.id"
        class="item"
        @click="select(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { downOutside } from './../../../utils/directives/down-outside';

export default {
  name: 'Select',
  components: {},
  directives: {
    downOutside,
  },
  props: {
    items: {
      type: Array,
      default: null,
    },
    selected: {
      type: Object,
      default: null,
    }
  },

  data() {
    return {
      picked: null,
      isOpen: false,
    }
  },
  computed: {
    ...mapGetters(['storage']),
    list() {
      return this.items.filter(i => i.name != this.picked.name);
    },
  },

  mounted() {
    if (this.selected) {
      this.picked = this.selected;
    } else {
      this.picked = this.items[0];
    }
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    },
    select(item) {
      this.picked = item;
      this.close();
      this.$emit('input', this.picked)
    },
  },
};
</script>

<style lang="scss" scoped>
.app-select {
  background: var(--input-bg);
  border: none;
  outline: none;
  min-width: 166px;
  color: #2b2b2b;
  font-size: 13px;
  border-radius: 6px;
  position: relative;
  border: 1px solid var(--input-border-color);
  color: var(--input-color);

  .triangle {
    position: absolute;
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 5.5px 0 5.5px;
    border-color: var(--input-border-color) transparent transparent transparent;
    cursor: pointer;

    &.light {
      border-color: #dadada transparent transparent transparent;
    }
  }

  .item {
    padding: 7px 12px;
    cursor: pointer;
  }

  .drop-down {
    position: absolute;
    top: 26px;
    left: -1px;
    width: 100%;
    display: none;
    background: var(--input-bg);
    z-index: 10;
    box-shadow: 0px 2px 4px -3px rgba(0, 0, 0, 0.55);
    border-radius: 0 0 6px 6px;
  }

  &.open {
    .triangle {
      transform: rotateX(180deg);
    }
    .drop-down {
      display: block;
      padding-bottom: 5px;
      border: 1px solid var(--input-border-color);
      border-top: 0px;
      .item {
        &:first-child {
          margin-top: 5px;
        }
        padding: 5px 12px;
      }
    }
  }
}
</style>