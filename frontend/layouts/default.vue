<template>
  <div class="content">
    <transition
      name="fade"
      :duration="200"
      mode="out-in"
    >
      <Nuxt />
    </transition>
  </div>
</template>
