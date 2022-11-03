<script setup lang="ts">
  definePageMeta({
    title: 'Nuxt-starter | Reset Password',
    alias: ['/resetpassword'],
    middleware: ['auth'],
    // or middleware: 'auth'
  })
</script>

<template>
  <div>
    <div class="flex justify-center">
      <FormResetPass />
    </div>
  </div>
</template>

<style scoped></style>
