<script setup lang="ts">
  import { useSupabaseUserStore } from '~~/stores/userStore'

  definePageMeta({
    title: 'Nuxt-starter | Settings',
    alias: ['/settings'],
    middleware: ['auth'],
    // or middleware: 'auth'
  })

  const userStore = useSupabaseUserStore()
  const isSent = ref(false)
  const resetPassword = () => {
    userStore.resetPassword()
    isSent.value = true
  }
</script>

<template>
  <div>
    <div class="m-10 flex flex-col items-center">
      <div>
        <button class="btn btn-warning mb-5" @click="resetPassword">
          requst password change
        </button>
      </div>

      <div v-if="isSent" class="m-10 flex flex-col items-center">
        <!-- <progress class="progress progress-warning mt-3 w-56" /> -->
        <h3 class="text-2xl font-bold">
          Check your email for password reset link
        </h3>
        <h3 class="text-2xl font-thin">
          Don't forget to check the spam folder
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
