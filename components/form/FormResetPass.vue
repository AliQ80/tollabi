<script setup lang="ts">
  import autoAnimate from '@formkit/auto-animate'
  import { useSupabaseUserStore } from '~~/stores/userStore'

  const userStore = useSupabaseUserStore()
  const isLoading = ref(false)

  // --- auto animate form ---
  const aaform = ref()

  onMounted(() => {
    aaform.value.querySelectorAll('.formkit-outer').forEach(autoAnimate)
  })
  // --- FormKit styles ---
  const formStyles = ref({
    // outer: 'mb-5',
    // label: 'block mb-1 font-bold text-xl text-gray-500',
    // inner: 'w-full border-b border-gray-900 mb-1 overflow-hidden focus-within:border-ct-blue-500',
    input:
      '$reset block border border-grey-light w-full p-3 rounded text-gray-500',
    // message: 'text-xs text-red-500 font-light'
  })

  const handlePasswordReset = async (value: { password: string }) => {
    isLoading.value = true
    await userStore.updatePassword(value.password)
    isLoading.value = false
  }
</script>

<template>
  <div>
    <div ref="aaform" class="my-8 flex justify-center">
      <FormKit
        id="updatePassword"
        type="form"
        form-class="lg:w-96"
        submit-label="Update"
        :actions="false"
        @submit="handlePasswordReset">
        <h1 class="my-8 text-center text-xl font-semibold dark:text-gray-300">
          Enter New Password
        </h1>
        <div class="double">
          <FormKit
            type="password"
            prefix-icon="hidden"
            name="password"
            label="New Password"
            validation="required|length:6|matches:/[^a-zA-Z]/"
            :validation-messages="{
              matches: 'Please include at least one symbol',
            }"
            :classes="formStyles" />
          <FormKit
            type="password"
            prefix-icon="hidden"
            name="password_confirm"
            label="Confirm password"
            validation="required|confirm"
            :classes="formStyles" />
        </div>

        <!-- submit button -->
        <div class="mt-5">
          <FormKit
            type="submit"
            label="Update Password"
            input-class="$reset btn btn-info btn-block mt-4"
            @submit.prevent="handlePasswordReset" />
        </div>
      </FormKit>
    </div>
    <!-- Message for success or error -->
    <div class="mb-5 h-5">
      <div
        v-show="isLoading"
        class="mx-auto grid w-96 grid-cols-1 justify-items-center">
        <progress class="progress progress-info mt-3 w-56" />
        // TODO: reset password sent success message
      </div>
    </div>
  </div>
</template>

<style scoped></style>
