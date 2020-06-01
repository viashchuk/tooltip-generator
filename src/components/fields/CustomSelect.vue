<template>
  <div class="relative mb-3">
    <div @click="isShow = !isShow"
         class="rounded-sm h-10 text-xs text-gray-1000 font-medium border border-gray-400 pl-2 relative flex items-center capitalize cursor-pointer">
      {{ field }}
      <div
        class="bg-gray-700o40 flex items-center justify-center w-12 h-full border-l border-gray-400 ml-auto">
        <img src="@/assets/icons/arrow.svg">
      </div>
    </div>
    <transition name="fade">
      <div v-if="isShow"
           class="absolute bg-white w-full z-10 border-l border-t border-r border-gray-400 rounded-sm shadow-xs h-200 overflow-y-auto">
        <div v-for="item in options"
             :key="item"
             :value="item"
             class="capitalize text-xs text-gray-1000 font-medium border-b border-gray-400 p-3 hover:bg-blue-500 hover:text-white cursor-pointer"
             @click="update(item)"
        >
          {{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      field: this.$props.value,
      isShow: false
    }
  },

  methods: {
    update (val) {
      this.$emit('input', val)
      this.isShow = false
    }
  }
}
</script>
