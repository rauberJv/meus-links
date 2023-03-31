import { defineStore } from 'pinia'

export const useCadastroStore = defineStore('cadastro', {
    state: () => ({
        loading: false,
        status: 'neutro'
    }),
    getters: {
        
    },
    actions: {
        enviarCadastro(dadosCadastro) {
            this.loading = true
            setTimeout(() => {
                this.loading = false   
            }, 5000)
        }
    }
})