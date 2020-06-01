<template>
  <div class="mt-8">
    <h3 class="mb-3 text-gray-1000 font-medium text-sm">Padding</h3>
    <div class="flex justify-between">
      <div class="w-50w12">
        <input-number v-model="form.padding_top" title="top" @input="sync"/>
        <input-number v-model="form.padding_bottom" title="bottom" @input="sync"/>
      </div>
      <div class="w-50w12">
        <input-number v-model="form.padding_left" title="left" @input="sync"/>
        <input-number v-model="form.padding_right" title="right" @input="sync"/>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from '@/components/fields/InputNumber'

import settingsFields from '@/mixins/settings-fields'

export default {
  mixins: [
    settingsFields
  ],

  components: {
    InputNumber
  },

  data: () => ({
    fields: [
      'padding_top',
      'padding_bottom',
      'padding_left',
      'padding_right'
    ]
  })
}
</script>
