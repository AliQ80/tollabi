import { defineStore, acceptHMRUpdate } from 'pinia'

export const useProfileStore = defineStore('ProfileStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      username: '',
      firstName: '',
      lastName: '',
      description: '',
      avatarPath: '',
      currentAvatar: '',
      avatarUrl: '',
    }
  },

  getters: {
    getInitials: (state) =>
      state.firstName.charAt(0).concat(state.lastName.charAt(0)),
  },

  actions: {},

  persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot))
}
