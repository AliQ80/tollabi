import { defineStore, acceptHMRUpdate } from 'pinia'

export const useModalStore = defineStore('ModalStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      authModalOpen: false,
    }
  },

  getters: {
    getAuthModal: (state) => state.authModalOpen,
  },

  actions: {
    authModalOff() {
      this.authModalOpen = false
    },
    authModalOn() {
      this.authModalOpen = true
    },
  },

  persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot))
}
