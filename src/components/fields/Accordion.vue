<template>
  <div class="mb-6">
    <button @click="toggle" class="settings__item" :class="{'active': show}">
      {{ title }} <img src="@/assets/icons/arrow.svg">
    </button>
    <div v-if="show">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      show: this.$props.active
    }
  },

  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>
