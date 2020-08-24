<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ year }}
          <a
            href="https://marriedgames.com.br"
            class="font-weight-bold ml-1"
            target="_blank"
          >Married Games</a>
        </div>
      </div>
      <div class="col-lg-6">
        <ul
          class="nav nav-footer justify-content-center justify-content-lg-end"
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
              href="http://blog.creative-tim.com"
              class="nav-link"
              target="_blank"
            >Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
<style></style>
