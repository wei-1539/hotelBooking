<script setup>
</script>
<template>
  <!-- <ul class="flex gap-2.5 flex-wrap justify-between max-w-200px max-h-200px"> -->
  <div>
    <ul class="grid grid-cols-11 gap-1.25 md:gap-2.5 rotate-360 w-full h-full ">
      <li v-for="i in 132" :key="i" class="bg-primary-60 rounded-full w-4px h-4px"></li>
    </ul>
  </div>
</template>
<style scoped>
@keyframes roteta {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.rotate-360 {
  animation: roteta 5s linear infinite;
}
</style>