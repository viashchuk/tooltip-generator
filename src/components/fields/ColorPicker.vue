<template>
  <div>
    <h4 class="mb-3 text-gray-1000 font-medium text-sm">{{ title }}</h4>
    <div class="rounded-sm h-10 w-full border border-gray-400 flex items-center px-2 relative">
      <input
        v-model="color"
        type="color"
        class="w-6 h-6 rounded-sm mr-3 border border-gray-400"
        @input="input"
      >
      <input v-model="color" class="text-xs text-gray-1000 font-medium" @input="input">
    </div>
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
      default: null
    }
  },

  data () {
    return {
      color: this.$props.value
    }
  },

  methods: {
    input () {
      this.$emit('input', this.color)
    }
  }
}
</script>
