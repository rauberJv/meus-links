<script setup>
defineProps({
    buttonText: String,
    primary: {
        type: Boolean,
        default: false
    },
    secondary: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <button class="p-4 rounded-md text-xl font-semibold transition ease-in-out duration-150"
        :class="{ 'bg-blue-500 hover:bg-blue-600': primary, 'bg-green-500 hover:bg-green-600': secondary }">
        <span v-show="!loading"> {{ buttonText }} </span>
        <div v-show="loading" class="w-[28px] h-[28px] mx-auto rounded-full border-b-2 border-white animate-spin"></div>
    </button>
</template>