<template>
  <pre v-highlightjs="htmlCode" class="overflow-y-auto h-full px-5 w-full">
        <code class="html darcula -mt-6"/>
  </pre>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    fields: ['text']
  }),

  computed: {
    ...mapGetters([
      'getFields'
    ]),
    settings () {
      return this.getFields(this.fields)
    },
    htmlCode () {
      return `
<div class="tooltip-box">
  <a href="#">Hover</a>
  <div class="tooltip">
    <span class="triangle"></span>
    ${this.settings.text}
  </div>
</div>`
    }
  }
}
</script>
