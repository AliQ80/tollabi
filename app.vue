<script setup lang="ts">
  import { useAuth } from '~~/composables/useSupabase'
  useAuth()

  definePageMeta({
    colorMode: 'dark',
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
