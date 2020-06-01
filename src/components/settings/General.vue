<template>
  <div>
    <div class="mt-4">
      <h3 class="mb-3 text-gray-1000 font-medium text-sm">Width</h3>
      <input-number v-model="form.width" title="width tooltip" @input="sync"/>
    </div>
    <div class="mt-8">
      <h3 class="mb-3 text-gray-1000 font-medium text-sm">Align text</h3>
      <div class="flex justify-between">
        <label v-for="item in alignText" :key="item" class="custom-checkbox">
          <input type="radio"
                 v-model="form.align_text"
                 name="text-align"
                 :value="item"
                 @change="sync">
          <span></span>
          {{ item }}
        </label>
      </div>
    </div>
    <div class="mt-5">
      <color-picker v-model="form.bg_color" title="Background color" @input="sync"/>
    </div>
    <div class="mt-8">
      <color-picker v-model="form.text_color" title="Text color" @input="sync"/>
    </div>
  </div>
</template>

<script>
import InputNumber from '@/components/fields/InputNumber'
import ColorPicker from '@/components/fields/ColorPicker'
import settingsFields from '@/mixins/settings-fields'

export default {
  mixins: [
    settingsFields
  ],

  components: {
    InputNumber,
    ColorPicker
  },

  data: () => ({
    alignText: ['left', 'center', 'right'],
    fields: [
      'text_color',
      'bg_color',
      'align_text',
      'width'
    ]
  })
}
</script>
