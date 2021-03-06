import * as components from './components'
import * as directives from './directives'
import locale from './locale'

const install = (Vue, options = {}) => {
  // Setup language, en-US for default
  locale.use(options.locale)
  locale.i18n(options.i18n)
  // Register components
  for (let key in components) {
    let _key = options.prefix ? options.prefix + key : key
    Vue.component(_key, components[key])
  }
  // Register directives
  for (let key in directives) {
    let _key = options.prefix ? options.prefix + '-' + key : key
    Vue.directive(_key, directives[key])
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {install}
