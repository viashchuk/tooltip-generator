<template>
  <div>
    <h3 class="text-gray-1000 font-medium text-sm" :class="classes">{{ title }}</h3>
    <div class="flex items-center">
      <div class="relative flex-grow bg-blue-500o25 h-2 rounded-md">
        <input type="range" v-model="range" min="0" max="50" class="range" @input="update">
        <div class="relative" :style="{'width': progressPercent + '%'}">
          <span class="block border-sm bg-blue-500 h-2 rounded-md w-full"></span>
          <span class="block rounded-full bg-white shadow-sm border border-gray-100 absolute w-5 h-5 right-0 -mr-2 thumb"/>
        </div>
      </div>
      <div class="rounded-sm h-8 border border-gray-400 relative ml-2 pl-2 w-12">
        <input v-model="range" type="number" @input="update"
               class="text-xs text-gray-1000 font-medium w-full h-full">
      </div>
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
    },
    classes: {
      type: String,
      default: 'mb-0'
    }
  },

  data () {
    return {
      range: this.$props.value
    }
  },

  computed: {
    progressPercent () {
      return this.range * 100 / 50
    }
  },

  methods: {
    update () {
      this.$emit('input', this.range)
    }
  }
}
</script>
