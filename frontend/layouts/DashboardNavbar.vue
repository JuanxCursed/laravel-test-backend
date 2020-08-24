<template>
  <base-nav
    id="navbar-main"
    class="navbar-top navbar-dark"
    :show-toggle-button="false"
    expand
  >
    <form
      class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
    >
      <div class="form-group mb-0">
        <base-input
          placeholder="Pesquisar..."
          class="input-group-alternative"
          alternative=""
          addon-right-icon="fas fa-search"
        />
      </div>
    </form>
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown">
        <base-dropdown class="nav-link pr-0">
          <div
            slot="title"
            class="media align-items-center"
          >
            <span class="avatar avatar-sm rounded-circle">
              <img
                alt="Image placeholder"
                src="~assets/images/theme/team-1-800x800.jpg"
              >
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm font-weight-bold">Juan Felipe</span>
            </div>
          </div>

          <template>
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">
                Bem-vindo!
              </h6>
            </div>
            <nuxt-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-single-02" />
              <span>My profile</span>
            </nuxt-link>
            <nuxt-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-settings-gear-65" />
              <span>Settings</span>
            </nuxt-link>
            <nuxt-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-calendar-grid-58" />
              <span>Activity</span>
            </nuxt-link>
            <nuxt-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-support-16" />
              <span>Support</span>
            </nuxt-link>
            <div class="dropdown-divider" />
            <nuxt-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-user-run" />
              <span>Logout</span>
            </nuxt-link>
          </template>
        </base-dropdown>
      </li>
    </ul>
    <notifications />
  </base-nav>
</template>
<script>
export default {
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchQuery: '',
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
