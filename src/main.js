import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('./pages/HomePage.vue') },
        { path: '/cadastro', component: () => import('./pages/Cadastro.vue') },
        { path: '/cadastro-enviado', component: () => import('./pages/CadastroEnviado.vue') },
        { path: '/exemplo/:index', component: () => import('./pages/Exemplo.vue') },
    ]
})

createApp(App).use(router).mount('#app')
