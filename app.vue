<script setup lang="ts">
  import { useAuth } from '~~/composables/useSupabase'
  useAuth()

  definePageMeta({
    colorMode: 'dark',
  })

  // type Theme = 'light' | 'dark'

  // const setColorTheme = (newTheme: Theme) => {
  //   useColorMode().preference = newTheme
  // }
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
