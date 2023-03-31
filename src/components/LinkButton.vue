<script setup>
const props = defineProps({
    whatsapp: {
        type: Boolean,
        default: false
    },
    instagram: {
        type: Boolean,
        default: false
    },
    facebook: {
        type: Boolean,
        default: false
    },
    maps: {
        type: Boolean,
        default: false
    },
    outro: {
        type: Boolean,
        default: false
    },
    texto: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: 'bg-transparent'
    },
    hoverColor: {
        type: String,
        default: 'bg-gray-500'
    },
    link: {
        type: String,
        default: 'localhost:5173'
    }
})

const componentClass = `${props.color} ${props.hoverColor} p-4 block rounded-md text-white font-semibold text-lg transition ease-in-out duration-300`
</script>

<template>
    <a :class="componentClass" :href="link" target="_blank">
        {{ props.texto }}
    </a>
</template>