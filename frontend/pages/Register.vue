<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Cadastre-se com</small>
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
            <small>Ou cadastre-se com credenciais</small>
          </div>
          <form role="form">
            <base-input
              v-model="model.name"
              class="input-group-alternative mb-3"
              placeholder="Nome"
              addon-left-icon="ni ni-hat-3"
            />

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

            <div class="text-muted font-italic">
              <small>Força da senha:
                <span class="text-success font-weight-700">forte</span></small>
            </div>

            <div class="row my-4">
              <div class="col-12">
                <base-checkbox class="custom-control-alternative">
                  <span
                    class="text-muted"
                  >Eu concordo com as
                    <a href="#!">Políticas de Privacidade</a></span>
                </base-checkbox>
              </div>
            </div>
            <div class="text-center">
              <base-button
                type="primary"
                class="my-4"
                @click="()=> $notify('Oops, isso não foi implementado, é apenas um teste.')"
              >
                Criar conta
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
          >
            <small>Esqueci minha senha</small>
          </a>
        </div>
        <div class="col-6 text-right">
          <nuxt-link
            to="/login"
            class="text-light"
          >
            <small>Acessar minha conta</small>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  layout: 'AuthLayout',
  data() {
    return {
      model: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
}
</script>
<style></style>
