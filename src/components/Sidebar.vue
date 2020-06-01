<template>
  <aside class="w-1/3 bg-white shadow-xs border-l border-gray-100 overflow-hidden h-screen">
    <h1 class="h-20 text-2xl flex items-center text-green-900 font-medium h-90 px-5">Settings</h1>
    <div class="overflow-y-auto mt-4 h-100vh90 px-5 pb-12">
      <position/>

      <accordion title="Styles" :active="true">
        <div>
          <general/>
          <padding/>
          <border/>
          <shadow-box/>
          <triangle/>

          <div class="mt-5">
            <h3 class="mb-3 text-gray-1000 font-medium text-sm">Text Tooltip</h3>
            <div
              class="rounded-sm h-10 w-full border border-gray-400 flex items-center px-2 relative mb-3 input--number">
              <input v-model="form.text" class="text-xs text-gray-1000 font-medium w-full" @input="sync">
            </div>
          </div>
        </div>
      </accordion>
    </div>
  </aside>
</template>

<script>
import Accordion from './fields/Accordion.vue'
import Border from './settings/Border.vue'
import ShadowBox from './settings/Shadow.vue'
import Padding from './settings/Padding.vue'
import General from './settings/General.vue'
import Position from './settings/Position.vue'
import Triangle from './settings/Triangle.vue'
import settingsFields from '@/mixins/settings-fields'

export default {
  mixins: [
    settingsFields
  ],

  components: {
    Accordion,
    Border,
    ShadowBox,
    Padding,
    General,
    Position,
    Triangle
  },

  data: () => ({
    fields: ['text']
  })
}
</script>
