<script setup>
</script>

<template>
  <router-view v-slot="{ Component }" class="relative overflow-hidden">
    <transition name="route" mode="out-in">
      <component :is="Component" class="px-4 py-4 z-10"></component>
    </transition>
    <div
      class="absolute w-full h-full bottom-0 left-0 blur-sm md:blur-none bg-no-repeat bg-cover md:bg-contain bg-bottom bg-[url('./assets/wave.svg')]" />
  </router-view>
</template>

<style scoped>
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
