import Vue from 'vue'
import NotificationPlugin from '@/components/NotificationPlugin/index'
import globalComponents from './globalComponents'

Vue.use(globalComponents)
Vue.use(NotificationPlugin)

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
})

export default (context, inject) => {
  const hasValue = (value) => {
    return value !== undefined && value !== null && value !== '' && value !== 0
  }

  inject('hasValue', hasValue)
}
