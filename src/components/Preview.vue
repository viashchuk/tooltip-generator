<template>
  <div class="h-screen flex flex-col">
    <section class="w-full flex items-center justify-center flex-grow">
      <div class="relative">
        <a href="#" class="tooltip-box"><span class="relative z-10">Hover</span></a>
        <div class="absolute tooltip" :style="stylesTooltip">
          <span class="triangle" :style="stylesTriangle"/>
          {{ getSettings.text }}
        </div>
      </div>
    </section>

    <div class="h-1/2 whitespace-pre mx-4 rounded-t-md overflow-hidden mt-auto bg-red-100">
      <div class="flex bg-white p-3 px-5">
        <button
          v-for="tab in ['css', 'html']"
          :key="tab"
          class="font-bold text-gray-600 w-12 mr-5 uppercase"
          :class="{'text-blue-600': activeTab === tab}"
          @click="switchTab(tab)"
        >
          {{ tab }}
        </button>
      </div>
      <css-code v-if="activeTab === 'css'"/>
      <html-code :text-tooltip="getSettings.text" v-if="activeTab === 'html'"/>
    </div>

    <p class="text-center py-3 text-sm">
      This project is open
      <a href="https://github.com/viashchuk/tooltip-generator" class="text-blue-600">source on github</a>.
      Made with ❤️ by
      <a href="https://github.com/viashchuk" class="text-blue-600">viashchuk</a>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import generateTriangleCss from '@/utils/triangle-styles'
import generateTooltipCss from '@/utils/tooltip-styles'

import CssCode from '@/components/CSSCode'
import HtmlCode from '@/components/HTMLCode'

export default {
  components: {
    CssCode,
    HtmlCode
  },

  data: () => ({
    activeTab: 'css'
  }),

  computed: {
    ...mapGetters([
      'getSettings'
    ]),
    stylesTriangle () {
      return generateTriangleCss(this.getSettings)
    },
    stylesTooltip () {
      return generateTooltipCss(this.getSettings)
    }
  },

  methods: {
    switchTab (tab) {
      this.activeTab = tab
    }
  }
}
</script>
