<template>
  <div>
    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8" />
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-12">
          <card
            shadow
            type="secondary"
          >
            <div
              slot="header"
              class="bg-white border-0"
            >
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">
                    {{ $store.state.page.pageTitle }}
                  </h3>
                </div>
              </div>
            </div>
            <template>
              <ValidationObserver
                ref="observer"
                v-slot="{ invalid }"
              >
                <form
                  ref="form"
                  @submit.prevent="submit"
                >
                  <h6 class="heading-small text-muted mb-4">
                    Proprietário
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="e-mail"
                          rules="required|email"
                        >
                          <base-input
                            v-model="model.email"
                            alternative
                            label="E-mail"
                            placeholder="usuario@teste.com"
                            :error="errors.join(',')"
                            :required="true"
                            input-classes="form-control-alternative"
                          />
                        </ValidationProvider>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4">
                  <!-- Address -->
                  <h6 class="heading-small text-muted mb-4">
                    Endereço
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-3">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="CEP"
                          rules="required"
                        >
                          <div class="form-group">
                            <label class="form-group-label">CEP *</label>
                            <the-mask
                              v-model="model.zip_code"
                              :mask="'#####-###'"
                              :required="true"
                              placeholder="CEP"
                              class="form-control form-control-alternative"
                              @input="searchAddress"
                            />
                            <div
                              v-if="errors"
                              class="text-danger invalid-feedback d-block"
                            >
                              {{ errors.join(',') }}
                            </div>
                          </div>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Rua, Avenida, Alameda..."
                          rules="required"
                        >
                          <base-input
                            v-model="model.street"
                            alternative
                            :required="true"
                            label="Rua, Avenida, Alameda..."
                            placeholder="Rua, Avenida, Alameda..."
                            :error="errors.join(',')"
                            input-classes="form-control-alternative"
                          />
                        </ValidationProvider>
                      </div>
                      <div class="col-md-2">
                        <base-input
                          ref="number"
                          v-model="model.number"
                          alternative
                          label="Número"
                          placeholder="Número"
                          input-classes="form-control-alternative"
                        />
                      </div>
                      <div class="col-lg-4">
                        <base-input
                          v-model="model.complement"
                          alternative
                          label="Complemento"
                          placeholder="Casa 2, Bloco A..."
                          input-classes="form-control-alternative"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-3">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="bairro"
                          rules="required"
                        >
                          <base-input
                            v-model="model.district"
                            :required="true"
                            alternative
                            label="Bairro"
                            placeholder="Bairro"
                            :error="errors.join(',')"
                            input-classes="form-control-alternative"
                          />
                        </ValidationProvider>
                      </div>
                      <div class="col-lg-3">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="cidade"
                          rules="required"
                        >
                          <base-input
                            v-model="model.city"
                            :required="true"
                            alternative
                            label="Cidade"
                            placeholder="Cidade"
                            :error="errors.join(',')"
                            input-classes="form-control-alternative"
                          />
                        </ValidationProvider>
                      </div>
                      <div class="col-lg-3">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="estado"
                          rules="required"
                        >
                          <div class="form-group">
                            <label class="form-control-label">
                              Estado *
                            </label>
                            <div class="has-label">
                              <b-form-select
                                v-model="model.state"
                                :required="true"
                                :options="states"
                                :error="errors.join(',')"
                                class="form-control form-control-alternative"
                              />
                            </div>
                          </div>
                        </ValidationProvider>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4">
                  <div class="row">
                    <div class="col-12 text-right">
                      <base-button
                        :disabled="invalid"
                        type="primary"
                        size="sm"
                        @click="submit"
                      >
                        Salvar
                      </base-button>
                    </div>
                  </div>
                </form>
              </ValidationObserver>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import states from "~/constants/states";

export default {
  name: 'UserProfile',
  layout: 'DashboardLayout',
  data() {
    return {
      title: 'Novo imóvel',
      states,
      model: {
        email: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
        zip_code: '',
      },
    }
  },
  async mounted() {
    this.setPageTitle(this.title)
  },
  methods: {
    ...mapActions({
      setPageTitle: 'page/setPageTitle',
      realStateAdd: 'realState/add',
    }),
    async submit() {
      const {errors, validator} = await this.realStateAdd(this.model)

      if (errors) {
        errors.map(err=>{
          this.$notify({message:err, type:'danger'})
        })
        this.$refs.observer.setErrors(validator)
        return
      } else {
        this.$notify('Imóvel adicionado com sucesso!')
        this.$router.push('/imoveis')
      }
    },
    async searchAddress() {
      let _zip_code = this.model.zip_code,
        validatepostal_code = /^[0-9]{8}$/
      _zip_code = _zip_code.replace(/\D/g, '')

      if (
        ['', null, undefined].indexOf(_zip_code) < 0 &&
        validatepostal_code.test(_zip_code)
      ) {
        const { data } = await this.$axios.get(`//viacep.com.br/ws/${_zip_code}/json/`)
        if (['', null, undefined].indexOf(data.erro) > 0) {
          this.model.street = data.logradouro
          this.model.district = data.bairro
          this.model.city = data.localidade
          this.model.state = data.uf
          this.$refs.number.$el.children[1].focus()
        } else {
          this.$notify({ message: data.erro, type: 'danger' })
        }
      }
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
<style></style>
