<script setup>
import LinkButton from '../components/LinkButton.vue';
import Button from '../components/Button.vue';
import { useEmpresaStore } from "../store/empresa";
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
let store = useEmpresaStore()

onMounted(() => {
    const routeData = useRoute()
    let nomeEmpresa = routeData.params.empresa
    store.buscarDadosEmpresa(nomeEmpresa)
})
</script>

<template>
    <div class="min-h-screen w-full md:w-6/12 mx-auto">
        <div
            class="border border-2 border-green shadow-lg rounded-full w-6/12 md:w-4/12 mx-auto flex justify-center overflow-hidden">
            <img :src="store.avatar" height="200" alt="Logotipo da Empresa">
        </div>
        <h1 class="text-4xl text-center mt-4">
            {{ store.titulo }}
        </h1>
        <h2 class="text-lg mt-2 text-centrer font-light text-gray-500">
            {{ store.subtitulo }}
        </h2>
        <div class="mt-8">
            <h1 class="text-2xl">
                Conecte-se com a gente!
            </h1>
            <LinkButton v-for="link in store.links" :key="link.url" :whatsapp="link.tipo === 'whatsapp'"
                :instagram="link.tipo === 'instagram'" :google-maps="link.tipo === 'maps'" :outro="link.tipo === 'outro'"
                :facebook="link.tipo === 'facebook'" :texto="link.texto" :color="link.color" :hover-color="link.hoverColor"
                :link="link.url" class="mt-4">
            </LinkButton>
        </div>
    </div>
</template>