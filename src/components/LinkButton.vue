<script setup>
const props = defineProps({
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
const colors = {
    green: 'bg-green-600 hover:bg-green-700',
    blue: 'bg-blue-600 hover:bg-blue-700',
    red: 'bg-red-600 hover:bg-red-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    cyan: 'bg-cyan-600 hover:bg-cyan-700',
    purple: 'bg-purple-600 hover:bg-purple-700'
}

const componentClass = `${colors[props.color.split('-')[1]]} p-4 block rounded-md text-white font-semibold text-lg transition ease-in-out duration-300`
</script>

<template>
    <a :class="componentClass" :href="link" target="_blank">
        {{ props.texto }}
    </a>
</template>