<script setup>
const props = defineProps({
    buttonText: String,
    type: {
        type: String,
        default: 'priamry'
    },
    loading: {
        type: Boolean,
        default: false
    }
})
const colorClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-green-500 hover:bg-green-600'
}
console.log(props.type)
const componentClass = `${colorClasses[props.type]} p-4 rounded-md text-xl font-semibold transition ease-in-out duration-150`
</script>
<template>
    <button :class="componentClass" :disabled="loading">
        <span v-show="!loading"> {{ props.buttonText }} </span>
        <div v-show="loading" class="w-[28px] h-[28px] mx-auto rounded-full border-b-2 border-white animate-spin"></div>
    </button>
</template>