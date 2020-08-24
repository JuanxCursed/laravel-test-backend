<template>
  <div class="main-content bg-default">
    <notifications />
    <!-- Navbar -->
    <base-nav
      class="navbar-top navbar-horizontal navbar-dark"
      container-classes="px-4 container"
      expand
    >
      <nuxt-link
        slot="brand"
        class="navbar-brand"
        to="/"
      >
        <img src="~assets/images/brand/icon-white.svg">
      </nuxt-link>

      <template v-slot="{ closeMenu }">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <nuxt-link to="/">
                <img src="~assets/images/brand/green.png">
              </nuxt-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                aria-label="Toggle sidenav"
                @click="closeMenu"
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
        <!-- Navbar items -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link
              class="nav-link nav-link-icon"
              to="/register"
            >
              <i class="ni ni-circle-08" />
              <span class="nav-link-inner--text">Cadastre-se</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link nav-link-icon"
              to="/login"
            >
              <i class="ni ni-key-25" />
              <span class="nav-link-inner--text">Acesso</span>
            </nuxt-link>
          </li>
        </ul>
      </template>
    </base-nav>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8">
      <div class="container">
        <div class="header-body text-center mb-5">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6">
              <h1 class="text-white">
                Bem vindo!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <SlideYUpTransition
        mode="out-in"
        origin="center top"
      >
        <Nuxt />
      </SlideYUpTransition>
    </div>
    <footer class="py-5">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              &copy; {{ year }}
              <a
                href="https://marriedgames.com.br"
                class="font-weight-bold ml-1"
                target="_blank"
              >Married Games</a>
            </div>
          </div>
          <div class="col-xl-6">
            <ul
              class="nav nav-footer justify-content-center justify-content-xl-end"
            >
              <li class="nav-item">
                <a
                  href="https://marriedgames.com.br"
                  class="nav-link"
                  target="_blank"
                >Married Games</a>
              </li>
              <li class="nav-item">
                <a
                  href="https://marriedgames.com.br/presentation"
                  class="nav-link"
                  target="_blank"
                >Sobre nós</a>
              </li>
              <li class="nav-item">
                <a
                  href="https://marriedgames.com.br"
                  class="nav-link"
                  target="_blank"
                >Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { SlideYUpTransition } from 'vue2-transitions'

export default {
  name: 'AuthLayout',
  components: {
    SlideYUpTransition,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,
    }
  },
}
</script>
<style></style>
