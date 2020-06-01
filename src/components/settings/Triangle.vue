<template>
  <div class="mt-6">
    <h3 class="mb-3 text-gray-1000 font-medium text-sm">Size triangle</h3>
    <div class="flex justify-between">
      <div class="w-50w12">
        <input-number v-model="form.triangle_width" title="width" @input="sync"/>
      </div>
      <div class="w-50w12">
        <input-number v-model="form.triangle_height" title="height" @input="sync"/>
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
      'triangle_width',
      'triangle_height'
    ]
  })
}
</script>
