<script setup>
const props = defineProps({
  to: {
    type: String,
    default: '/'
  },
  text: {
    type: String,
    // 必須要有的
    request: true,
    default: 'Button'
  },
  
})
</script>
<template>
  <NuxtLink :to="to" class="px-8 py-4 text-white bg-primary border-rd-2 decoration-none hover-bg-primary-120 duration-300">
    {{ text }}
    </NuxtLink>
</template>
<style scoped></style>