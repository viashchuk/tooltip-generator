<template>
  <div class="mt-5">
    <range v-model="form.border_radius" title="Border radius" @input="sync"/>

    <div class="mt-6">
      <input-switch v-model="form.border" title="Border" @input="sync"/>

      <div v-if="form.border">
        <color-picker v-model="form.border_color" title="Color" @input="sync"/>

        <h4 class="mb-3 text-gray-1000 font-medium text-xs mt-4">Width</h4>
        <div class="flex justify-between">
          <div class="w-50w12">
            <input-number v-model="form.border_width_top" title="top" @input="sync"/>
            <input-number v-model="form.border_width_bottom" title="bottom" @input="sync"/>
          </div>
          <div class="w-50w12">
            <input-number v-model="form.border_width_left" title="left" @input="sync"/>
            <input-number v-model="form.border_width_right" title="right" @input="sync"/>
          </div>
        </div>
        <h4 class="mb-3 text-gray-1000 font-medium text-xs mt-4">Type</h4>
        <custom-select v-model="form.border_type" :options="borderTypes" @input="sync"/>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from '@/components/fields/InputNumber'
import ColorPicker from '@/components/fields/ColorPicker'
import Range from '@/components/fields/Range'
import InputSwitch from '@/components/fields/Switch'
import CustomSelect from '@/components/fields/CustomSelect'
import settingsFields from '@/mixins/settings-fields'

export default {
  mixins: [
    settingsFields
  ],

  components: {
    InputNumber,
    ColorPicker,
    Range,
    InputSwitch,
    CustomSelect
  },

  data: () => ({
    fields: [
      'border_radius',
      'border',
      'border_color',
      'border_width_top',
      'border_width_bottom',
      'border_width_left',
      'border_width_right',
      'border_type'
    ],
    borderTypes: ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset']
  })
}
</script>
