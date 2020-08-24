export const state = () => {
  return {
    notifications: [],
    settings: {
      overlap: false,
      verticalAlign: 'top',
      horizontalAlign: 'right',
      type: 'info',
      timeout: 5000,
      closeOnClick: true,
      showClose: true,
    },
  }
}

export const mutations = {
  setOptions(state, options) {
    state.settings = Object.assign(state.settings, options)
  },
  removeNotification(state, timestamp) {
    const indexToDelete = state.notifications.findIndex(
      (n) => n.timestamp === timestamp
    )
    if (indexToDelete !== -1) {
      state.notifications.splice(indexToDelete, 1)
    }
  },
  addNotification(state, notification) {
    if (typeof notification === 'string' || notification instanceof String) {
      notification = {
        message: notification,
      }
    }
    notification.timestamp = new Date()
    notification.timestamp.setMilliseconds(
      notification.timestamp.getMilliseconds() + state.notifications.length
    )
    notification = Object.assign({}, state.settings, notification)
    state.notifications.push(notification)
  },
  notify(state, notification) {
    if (Array.isArray(notification)) {
      notification.forEach((notificationInstance) => {
        state.addNotification(notificationInstance)
      })
    } else {
      state.addNotification(notification)
    }
  },
}
export const actions = {}
export const getters = {}
