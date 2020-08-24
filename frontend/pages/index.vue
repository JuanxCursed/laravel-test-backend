<template>
  <div class="row justify-content-center">
    <div class="col-lg-12 col-md-12">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Laravel Frontend - Teste de desenvolvimento</small>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            Que tal começarmos pela <nuxt-link to="/dashboard">
              Dashboard
            </nuxt-link>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	export default {
		layout: 'AuthLayout',
	}
</script>
