import Vue from 'vue'
import Vuex from 'vuex'

import _pick from 'lodash.pick'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    settings: {
      position: 'bottom',
      bg_color: '#59c7f9',
      width: 200,
      align_text: 'center',
      text_color: '#ffffff',
      padding_top: 10,
      padding_bottom: 10,
      padding_left: 20,
      padding_right: 20,
      border_radius: 10,
      border: false,
      border_color: '#59c7f9',
      border_width_top: 0,
      border_width_bottom: 0,
      border_width_left: 0,
      border_width_right: 0,
      border_type: 'solid',
      shadow: false,
      shadow_color: '#000000',
      shadow_horizontal: 0,
      shadow_vertical: 0,
      shadow_blur: 0,
      triangle_width: 10,
      triangle_height: 5,
      text: 'Tooltip'
    }
  },

  getters: {
    getSettings: state => state.settings,
    getFields: state => keys => _pick(state.settings, keys)
  },

  mutations: {
    updateSettings (state, payload) {
      state.settings = Object.assign({}, state.settings, payload)
    }
  }
})

export default store
