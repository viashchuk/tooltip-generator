<template>
  <div class="mt-6">
    <input-switch title="Shadow" v-model="form.shadow" @input="sync"/>

    <div v-if="form.shadow">
      <color-picker v-model="form.shadow_color" title="Color" @input="sync"/>

      <range
        v-model="form.shadow_horizontal"
        title="Horizontal Length"
        classes="mb-1 mt-4"
        @input="sync"
      />
      <range
        v-model="form.shadow_vertical"
        itle="Vertical Length"
        classes="mb-1 mt-4"
        @input="sync"
      />
      <range v-model="form.shadow_blur" title="Blur Radius" classes="mb-1 mt-4" @input="sync"/>
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/fields/ColorPicker'
import Range from '@/components/fields/Range'
import InputSwitch from '@/components/fields/Switch'
import settingsFields from '@/mixins/settings-fields'

export default {
  mixins: [
    settingsFields
  ],

  components: {
    ColorPicker,
    Range,
    InputSwitch
  },

  data: () => ({
    fields: [
      'shadow',
      'shadow_color',
      'shadow_horizontal',
      'shadow_vertical',
      'shadow_blur'
    ]
  })
}
</script>
