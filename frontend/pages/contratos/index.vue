<template>
  <div>
    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8" />
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-12">
          <b-card no-body>
            <b-card-header class="border-0">
              <div class="row">
                <div class="col-8">
                  <h3 class="mb-0">
                    {{ $store.state.page.pageTitle }}
                  </h3>
                </div>
                <div class="col-4 text-right">
                  <base-button
                    type="primary"
                    size="sm"
                    @click="()=> $router.push({path: '/contratos/novo'})"
                  >
                    Novo
                  </base-button>
                </div>
              </div>
            </b-card-header>
            <div class="table-responsive">
              <b-table
                class="table align-items-center table-flush"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :busy.sync="isBusy"
                hovered
                :fields="columns"
                :items="contractList"
              >
                <template v-slot:cell(email)="data">
                  <div class="media align-items-center">
                    <div class="media-body">
                      <span class="name mb-0 text-sm">{{ data.item.email }}</span>
                    </div>
                  </div>
                </template>
                <template v-slot:cell(status)="data">
                  <badge
                    class="badge-dot mr-4"
                    type
                  >
                    <i :class="`bg-${data.item.status ? 'success': 'danger'}`" />
                    <span class="status">{{ data.item.status ? 'Sim': 'Não' }}</span>
                  </badge>
                </template>
                <template v-slot:cell(actions)="data">
                  <div class="text-right">
                    <base-button
                      title="Editar contrato"
                      outline
                      icon
                      size="sm"
                      type="primary"
                      @click="$router.push(`/contratos/${data.item.id}/editar`)"
                    >
                      <span class="btn-inner--icon">
                        <i class="ni ni-settings" />
                      </span>
                    </base-button>
                    <base-button
                      title="Excluir contrato"
                      outline
                      icon
                      size="sm"
                      type="danger"
                      @click="()=>{ destroy(data.item.id)}"
                    >
                      <span class="btn-inner--icon">
                        <i class="ni ni-fat-remove" />
                      </span>
                    </base-button>
                  </div>
                </template>
              </b-table>
            </div>

            <div class="card-footer d-flex justify-content-end">
              <base-pagination
                v-model="currentPage"
                :total="total"
                :total-rows="rows"
              />
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	import { mapActions,  mapState, mapGetters } from 'vuex'

	export default {
		name: 'ContractList',
		layout: 'DashboardLayout',

		data() {
			return {
				title: 'Contratos',
				sortBy: 'email',
        sortDesc: false,
        isBusy: false,
				columns: [
          { label: 'E-mail', key: 'email', sortable: true },
          { label: 'Nome completo', key: 'full_name', sortable: true },
					{ label: 'Documento', key: 'document', sortable: true },
					{ label: 'CPF/CNPJ', key: 'person_type' },
					{ key: 'actions', label: 'Ações', align: 'right' },
				],
			}
    },
    computed:{
      ...mapGetters({
        contractList: 'contract/list',
      }),
      ...mapState({
        currentPage: 'contract/currentPage',
        total: 'contract/total',
        rows: 'contract/rows',
      })
    },
		async mounted() {
      this.setPageTitle(this.title)
      await this.contractFetchList()
    },
		methods: {
			...mapActions({
				setPageTitle: 'page/setPageTitle',
        destroy: 'contract/destroy',
				contractFetchList: 'contract/list',
      }),
		},
		head() {
			return {
				title: this.title,
			}
		},
	}
</script>
