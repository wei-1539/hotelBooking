<script setup>
import { gsap } from "gsap";
 const props = defineProps({
    title:{type:String},
 })
 const decoLine = ref(null)
 onMounted(()=>{
    gsap.to(decoLine.value ,{ scaleX:.3 ,opacity:.7 ,transformOrigin:"left center", duration:2,repeat: -1, yoyo:true, ease: "power2.inOut" });
 })
</script>
<template>
  <div class=" bg-white p-5 md:(p-7.5) text-#000 hover:(bg-primary text-white) duration-300 group rounded-2 cursor-pointer">
    <div class="flex items-center justify-end">
        <h2 class="text-4 leading-6 md:(text-6 leading-9) mr-4 font-700">{{ props.title }}</h2>
        <div ref="decoLine" class="w-80px  md:(w-150px)  h-1px bg-#000 group-hover:(bg-white) overflow-hidden"></div>
    </div>
  </div>
</template>
<style scoped>
</style>