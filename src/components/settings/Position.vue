<template>
  <accordion title="Position settings">
    <template>
      <div class="mt-3">
        <h3 class="text-gray-1000 text-sm font-medium">Position vertical</h3>
        <div class="flex flex-wrap mt-2">
          <label v-for="item in positions" :key="item" class="w-1/2 custom-checkbox">
            <input type="radio" name="position" v-model="form.position" :value="item" @change="sync">
            <span/>
            {{ item }}
          </label>
        </div>
      </div>
    </template>
  </accordion>
</template>

<script>
import Accordion from '@/components/fields/Accordion'
import settingsFields from '@/mixins/settings-fields'

export default {
  mixins: [
    settingsFields
  ],

  components: {
    Accordion
  },

  data: () => ({
    positions: ['right', 'left', 'top', 'bottom'],
    fields: ['position']
  })
}
</script>
