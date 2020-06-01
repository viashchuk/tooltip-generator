<template>
  <div class="rounded-sm h-10 w-full border border-gray-400 flex items-center relative mb-3 input--number">
    <button
      class="flex items-center justify-center text-gray-600 font-bold text-xs border-r border-gray-400 bg-gray-700o40 h-full w-6"
      :disabled="canDecrement === false"
      @click="decrement"
    >
      -
    </button>
    <input v-model="number" type="number" class="pl-2 text-xs text-gray-1000 font-medium w-full" @input="update">
    <button
      class="flex items-center justify-center text-gray-600 font-bold text-xs border-l border-gray-400 bg-gray-700o40 h-full w-6"
      @click="increment"
    >
      +
    </button>
    <span
      class="block px-1 bg-white text-xxs uppercase absolute top-0 left-0 -mt-2 ml-1 text-gray-500"
    >
      {{ title }}
    </span>
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
      number: this.$props.value
    }
  },
  computed: {
    canDecrement () {
      return this.number > 0
    }
  },
  methods: {
    increment () {
      this.number++
      this.update()
    },
    decrement () {
      this.number--
      this.update()
    },
    update () {
      this.$emit('input', this.number)
    }
  }
}
</script>
