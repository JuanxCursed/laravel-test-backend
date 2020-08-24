<template>
  <div
    class="wrapper"
    :class="{ 'nav-open': showSidebar }"
  >
    <side-bar
      :background-color="sidebarBackground"
      short-title="Laravel Frontend"
      title="Laravel Frontend"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Imóveis',
            icon: 'ni ni-building text-blue',
            path: '/imoveis',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Contratos',
            icon: 'ni ni-single-copy-04 text-blue',
            path: '/contratos',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Login',
            icon: 'ni ni-key-25 text-info',
            path: '/login',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Cadastro',
            icon: 'ni ni-circle-08 text-pink',
            path: '/register',
          }"
        />
      </template>
    </side-bar>
    <div
      class="main-content"
      :data="sidebarBackground"
    >
      <DashboardNavbar />
      <div @click="toggleSidebar">
        <transition
          :duration="200"
          name="fade"
          origin="center top"
          mode="out-in"
        >
          <Nuxt />
        </transition>
        <ContentFooter v-if="!$route.meta.hideFooter" />
      </div>
    </div>
  </div>
</template>
<script>
	import { mapState, mapMutations } from 'vuex'

	import DashboardNavbar from './DashboardNavbar.vue'
	import ContentFooter from './ContentFooter.vue'

	export default {
		name: 'DashboardLayout',
		components: {
			DashboardNavbar,
			ContentFooter,
		},
		data() {
			return {
				sidebarBackground: 'blue', // vue|blue|orange|green|red|primary
			}
		},
		computed: {
			...mapState({
				showSidebar: 'sidebar/showSidebar',
			}),
		},
		methods: {
			...mapMutations({
				toggleSidebar: 'sidebar/toggleSidebar',
			}),
		},
	}
</script>
<style lang="scss"></style>
