import type { User } from '@supabase/gotrue-js'

export const useAuth = () => {
  const { $supabase } = useNuxtApp()
  const user = useState<User | null>('user')

  $supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN') {
      user.value = await $supabase.auth.getUser()
      console.log('user.value: ', user.value)
      console.log('event: ', event)
      console.log('session: ', session)
      console.log('session.user: ', session.user)
      console.log('auth: ', $supabase)
    }

    if (event === 'SIGNED_OUT') {
      user.value = null
      console.log('user.value: ', user.value)
      console.log('event: ', event)
      console.log('session: ', session)
      console.log('session.user: ', session.user)
      console.log('auth: ', $supabase)
    }
  })
}
