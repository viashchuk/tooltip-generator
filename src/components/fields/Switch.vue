<template>
  <div class="flex justify-between items-center mb-3">
    <h3 class="leading-none text-gray-1000 font-medium text-sm">{{ title }}</h3>
    <label class="switch">
      <input v-model="switchValue" type="checkbox" @change="input">
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      switchValue: this.$props.value
    }
  },

  methods: {
    input () {
      this.$emit('input', this.switchValue)
    }
  }
}
</script>
