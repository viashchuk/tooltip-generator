<template>
    <pre v-highlightjs="cssCode" class="overflow-y-auto h-full px-5 w-full">
          <code class="css vs -mt-6"/>
    </pre>
</template>

<script>
import { mapGetters } from 'vuex'

import generateTriangleCss from '@/utils/triangle-styles'
import generateTooltipCss from '@/utils/tooltip-styles'
import { objectToCss } from '@/utils/css-helpers'

export default {
  computed: {
    ...mapGetters([
      'getSettings'
    ]),
    cssCode () {
      const classes = {
        tooltip: {
          style: generateTooltipCss(this.getSettings)
        },
        'tooltip-box': {
          style: {
            position: 'relative'
          }
        },
        triangle: {
          style: generateTriangleCss(this.getSettings)
        }
      }

      return objectToCss(classes)
    }
  }
}
</script>
