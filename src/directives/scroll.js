import {EVENTS, on, off} from '@src/utils/domUtils'

const HANDLER = '_uiv_scroll_handler'
const events = [EVENTS.RESIZE, EVENTS.SCROLL]

const bind = (el, binding) => {
  let callback = binding.value
  if (typeof callback !== 'function') {
    return
  }
  unbind(el)
  el[HANDLER] = callback
  events.forEach(event => {
    on(window, event, el[HANDLER])
  })
}

const unbind = (el) => {
  events.forEach(event => {
    off(window, event, el[HANDLER])
  })
  delete el[HANDLER]
}

const update = (el, binding) => {
  if (binding.value !== binding.oldValue) {
    bind(el, binding)
  }
}

export default {bind, unbind, update}
