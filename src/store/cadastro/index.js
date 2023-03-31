import { defineStore } from 'pinia'
import { axiosInstance } from '../../api'
export const useCadastroStore = defineStore('cadastro', {
    state: () => ({
        loading: false,
        status: 'neutro',
        empresa: {}
    }),
    getters: {

    },
    actions: {
        enviarCadastro(dadosCadastro) {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 5000)
        },
        async buscarDados(empresa) {
            let response = await axiosInstance.get(`/empresas/${empresa}`)
            console.log(response)
        }
    }
})