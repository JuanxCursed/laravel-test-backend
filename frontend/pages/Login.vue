<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Acesse com</small>
          </div>
          <div class="btn-wrapper text-center">
            <a
              href="#"
              class="btn btn-neutral btn-icon"
            >
              <span
                class="btn-inner--icon"
              ><img
                src="~assets/images/icons/common/github.svg"
              ></span>
              <span class="btn-inner--text">Facebook</span>
            </a>
            <a
              href="#"
              class="btn btn-neutral btn-icon"
            >
              <span
                class="btn-inner--icon"
              ><img
                src="~assets/images/icons/common/google.svg"
              ></span>
              <span class="btn-inner--text">Google</span>
            </a>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Ou acesse com suas credenciais</small>
          </div>
          <form
            role="form"
          >
            <base-input
              v-model="model.email"
              class="input-group-alternative mb-3"
              placeholder="E-mail"
              addon-left-icon="ni ni-email-83"
            />

            <base-input
              v-model="model.password"
              class="input-group-alternative"
              placeholder="Senha"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
            />

            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Lembrar meus dados</span>
            </base-checkbox>
            <div class="text-center">
              <base-button
                type="primary"
                class="my-4"
                @click="()=> $notify('Oops, isso não foi implementado, é apenas um teste.')"
              >
                Acessar
              </base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a
            href="#"
            class="text-light"
          ><small>Esqueci minha senha</small></a>
        </div>
        <div class="col-6 text-right">
          <nuxt-link
            to="/register"
            class="text-light"
          >
            <small>Cadastre-se</small>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  layout: 'AuthLayout',
  data() {
    return {
      model: {
        email: '',
        password: '',
      },
    }
  },
}
</script>
<style></style>
