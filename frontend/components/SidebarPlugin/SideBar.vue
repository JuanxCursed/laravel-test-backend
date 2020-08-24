<template>
  <nav
    id="sidenav-main"
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
  >
    <div class="container-fluid">
      <!--Toggler-->
      <NavbarToggleButton @click.native="toggleSidebar">
        <span class="navbar-toggler-icon" />
      </NavbarToggleButton>
      <nuxt-link
        class="navbar-brand"
        to="/"
      >
        <img
          :src="logo"
          class="navbar-brand-img"
          alt="..."
        >
      </nuxt-link>
      <slot />
      <div
        v-show="showSidebar"
        id="sidenav-collapse-main"
        class="navbar-collapse collapse show"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <nuxt-link to="/">
                <img :src="logo">
              </nuxt-link>
            </div>
            <div class="col-6 collapse-close">
              <NavbarToggleButton @click.native="toggleSidebar" />
            </div>
          </div>
        </div>
        <ul class="navbar-nav">
          <slot name="links" />
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
	import { mapMutations, mapState } from 'vuex'

	import NavbarToggleButton from '@/components/NavbarToggleButton'

	export default {
		name: 'Sidebar',
		components: {
			NavbarToggleButton,
		},
		props: {
			logo: {
				type: String,
				default: require('~/assets/images/brand/logo.svg'),
				description: 'Sidebar app logo',
			},
			autoClose: {
				type: Boolean,
				default: true,
				description:
					'Whether sidebar should autoclose on mobile when clicking an item',
			},
		},
		computed: {
			...mapState({
				showSidebar: 'sidebar/showSidebar',
			}),
		},
		provide() {
			return {
				autoClose: this.autoClose,
			}
		},
		methods: {
			...mapMutations({
				toggleSidebar: 'sidebar/toggleSidebar',
			}),
		},
	}
</script>
