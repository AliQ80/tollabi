export default defineNuxtPlugin(async (nuxtApp) => {
  const supabase = useSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  nuxtApp.provide('supabase', supabase)
  useState('user', () => user)
})
