import Vue from 'vue'

import hljs from 'highlight.js'
import 'highlight.js/scss/default.scss'

const highlightBlocks = (el, binding) => {
  const targets = el.querySelectorAll('code')

  targets.forEach((target) => {
    if (binding.value) {
      target.textContent = binding.value
      hljs.highlightBlock(target)
    }
  })
}

Vue.directive('highlightjs', {
  deep: true,
  bind: highlightBlocks,
  componentUpdated: highlightBlocks
})
