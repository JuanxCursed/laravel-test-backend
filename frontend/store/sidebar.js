export const state = () => {
  return {
    showSidebar: false,
    sidebarLinks: [],
    isMinimized: false,
  }
}

export const mutations = {
  toggleSidebar(state) {
    state.showSidebar = !state.showSidebar
  },
  toggleMinimize(state) {
    document.body.classList.toggle('sidebar-mini')
    state.isMinimized = !state.isMinimized
  },
}
export const actions = {}
export const getters = {}
