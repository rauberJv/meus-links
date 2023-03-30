<script setup>
import { useRoute } from 'vue-router'
import LinkButton from '../components/LinkButton.vue';
import Button from '../components/Button.vue';
const route = useRoute()
const empresa = {
    avatar: '../assets/logo-pizza-exemplo1.png',
    nome: 'Pizzaria Brasil',
    subtitulo: 'A melhor pizzaria da região oeste!',
    links: [
        {
            tipo: 'whatsapp',
            texto: 'WhatsApp',
            color: 'bg-green-500',
            hoverColor: 'hover:bg-green-600',
            url: 'https://whatsapp.com'
        },
        {
            tipo: 'instagram',
            texto: 'Instagram',
            color: 'bg-purple-500',
            hoverColor: 'hover:bg-purple-600',
            url: 'https://instagram.com'
        },
        {
            tipo: 'maps',
            texto: 'Endereço',
            color: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600',
            url: 'https://maps.google.com'
        },
        {
            tipo: 'outro',
            texto: 'Qualquer Outro',
            color: 'bg-slate-500',
            hoverColor: 'hover:bg-slate-600',
            url: 'https://google.com'
        }
    ]
}
</script>

<template>
    <div class="min-h-screen w-full md:w-6/12 mx-auto">
        <div
            class="border border-2 border-green shadow-lg rounded-full w-6/12 md:w-2/12 mx-auto flex justify-center overflow-hidden">
            <img src="../assets/logo-pizza-exemplo1.png" width="100px" height="100px">
        </div>
        <h1 class="text-4xl text-center mt-4">
            Pizzaria Brasil
        </h1>
        <h2 class="text-lg mt-2 text-centrer font-light text-gray-500">
            A melhor pizzaria da região oeste!
        </h2>
        <div class="mt-8">
            <h1 class="text-2xl">
                Conecte-se com a gente!
            </h1>
            <LinkButton v-for="link in empresa.links" :key="link.url" :whatsapp="link.tipo === 'whatsapp'"
                :instagram="link.tipo === 'instagram'" :google-maps="link.tipo === 'maps'" :outro="link.tipo === 'outro'"
                :facebook="link.tipo === 'facebook'" :texto="link.texto" :color="link.color" :hover-color="link.hoverColor"
                :link="link.url" class="mt-4">
            </LinkButton>
        </div>
        <div class="flex flex-row mt-24 justify-between">
            <router-link to="/" class="w-6/12 pr-1">
                <Button button-text="Retornar" secondary class="w-full" />
            </router-link>
            <router-link to="/exemplo/2" class="w-6/12 pl-1">
                <Button button-text="Proximo" secondary class="w-full" />
            </router-link>
        </div>
    </div>
</template>