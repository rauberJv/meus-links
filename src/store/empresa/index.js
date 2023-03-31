import { defineStore } from 'pinia'
import { axiosInstance } from '../../api'

export const useEmpresaStore = defineStore('empresa', {
    state: () => ({
        dadosEmpresa: {},
        empresa: '',
        avatar: '',
        titulo: '',
        subtitulo: '',
        links: []
    }),
    actions: {
        async buscarDadosEmpresa(empresa) {
            let response = await axiosInstance.get(`/empresas/${empresa}`)
            this.empresa = response.data.Item.empresa
            this.avatar = response.data.Item.avatar
            this.titulo = response.data.Item.titulo
            this.subtitulo = response.data.Item.subtitulo
            this.links = response.data.Item.links
        }
    }
})