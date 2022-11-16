import { useSupabaseUserStore } from '~~/stores/userStore'

export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useSupabaseUserStore()

  const supabase = useSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  nuxtApp.provide('supabase', supabase)
  useState('user', () => user)
  userStore.user = user
})
