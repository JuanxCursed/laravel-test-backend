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
                    Contratante
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
                      <div class="col-lg-6">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="nome"
                          :rules="{
                            regex: /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
                            required: true,
                          }"
                        >
                          <base-input
                            v-model="model.full_name"
                            alternative
                            label="Nome"
                            placeholder="Nome completo"
                            :error="errors.join(',')"
                            :required="true"
                            input-classes="form-control-alternative"
                          />
                        </ValidationProvider>
                      </div>
                      <div class="col-4">
                        <ValidationProvider
                          v-slot="{ errors }"
                          :name="model.document.length > 11 ? 'CNPJ' : 'CPF'"
                          rules="required|cpfCnpj"
                        >
                          <div class="form-group">
                            <label
                              class="form-group-label"
                            >Documento (CPF/CNPJ) *</label>
                            <the-mask
                              v-model="model.document"
                              :mask="['###.###.###-##', '##.###.###/####-##']"
                              :required="true"
                              placeholder="CPF/CNPJ"
                              class="form-control form-control-alternative"
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
                      <div class="col-4">
                        <h3 class="mt-4">
                          {{ formatPersonType(model.person_type) }}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4">
                  <h6 class="heading-small text-muted mb-4">
                    Imóvel
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-3">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="imóvel"
                          rules="required"
                        >
                          <div class="form-group">
                            <label class="form-control-label">Imóvel</label>
                            <vue-bootstrap-typeahead
                              v-model="query"
                              :required="true"
                              placeholder="Imóvel"
                              :serializer="(s) => s.address"
                              :error="errors.join(',')"
                              input-class="form-control form-control-alternative"
                              list="real-state-list"
                              :data="realStateList"
                              @hit="model.realState = $event"
                            />
                          </div>
                        </ValidationProvider>
                      </div>

                      <div
                        v-if="model.realState"
                        class="col-3"
                      >
                        <strong>E-mail: </strong> {{ model.realState.email }}
                      </div>
                      <div
                        v-if="model.realState"
                        class="col-3"
                      >
                        <strong>Endereço: </strong>{{ model.realState.address }}
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
import { mapActions, mapGetters } from 'vuex'
import personType from '~/constants/personType'

export default {
  name: 'UserProfile',
  layout: 'DashboardLayout',
  data() {
    return {
      title: 'Novo contrato',
      query:'',
      model: {
        email: '',
        full_name: '',
        type: '',
        document: '',
        real_state_id: undefined,
        realState: undefined,
      },
    }
  },
  computed: {
    ...mapGetters({
      realStateList: 'realState/list',
    }),
  },
  watch: {
    'model.document'(value) {
      if (['', null, undefined].indexOf(value) > -1) return null
      this.model.person_type = value.length > 11 ? personType.PJ : personType.PF
    },
    'model.realState'(value) {
      this.model.real_state_id = value.id
    },
  },
  async mounted() {
    this.setPageTitle(this.title)
    await this.realStateFetchList()
    const selectedRealState = this.$router.currentRoute.query['real_state_id']
    if (['', null, undefined].indexOf(selectedRealState) < 0){
      this.realStateList.map(el => {
        if (el.id === parseInt(selectedRealState)){
          this.query = el.address
          this.model.realState = el
        }
      })
    }
  },
  methods: {
    ...mapActions({
      setPageTitle: 'page/setPageTitle',
      realStateFetchList: 'realState/list',
      contractAdd: 'contract/add',
    }),
    formatPersonType(value) {
      if (value === null) return ''
      return value === personType.PJ ? 'Pessoa Jurídica' : 'Pessoa Física'
    },
    async submit() {
      const {errors, validator} = await this.contractAdd(this.model)

      if (errors) {
        errors.map(err=>{
          this.$notify({message:err, type:'danger'})
        })
        this.$refs.observer.setErrors(validator)
        return
      } else {
        this.$notify('Contrato adicionado com sucesso!')
        this.$router.push('/contratos')
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
