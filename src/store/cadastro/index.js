import { defineStore } from 'pinia'
import { axiosInstance } from '../../api'
export const useCadastroStore = defineStore('cadastro', {
    state: () => ({
        loading: false,
        status: 'neutro',
        empresa: {}
    }),
    actions: {
        async enviarCadastro(dadosCadastro) {
            try{
                this.loading = true
                this.status = 'neutro'
                let response = await axiosInstance.post('/cadastros', dadosCadastro)
                this.status = 'sucesso'
            }catch(error){
                this.status = 'error'
            } finally {
                this.loading = false
            }
        },
        async buscarDados(empresa) {
            let response = await axiosInstance.get(`/empresas/${empresa}`)
            console.log(response)
        }
    }
})