<script setup>
import {gsap} from "gsap";
const decoLine =ref(null)
const props = defineProps({
  title: {
    type: String,
    request: true,
  },
  colText: {
    type: Boolean,
  },
  whiteTxt: {
    type: Boolean,
    default: false,
  },

});
const titleArr = computed(() => {
  return [props.title.slice(0, 2), props.title.slice(2)];
});

onMounted(() => {
    gsap.fromTo(decoLine.value,{ backgroundPosition:"0% 50%"} ,{ backgroundPosition:"100% 0%", duration:2,repeat: -1, yoyo:true, ease: "power2.inOut" });
  
    for (let i = 0; i < props.title.length; i += 2) {
        titleArr.value.push(props.title.slice(i, i + 2));
    }
    return titleArr;

});


</script>
<template>
  <div :class="[colText ? 'flex-col item-start ' : '']" class="flex items-center">
    <h2  :class="[colText? 'mb-10':'' ,whiteTxt?'text-white':'']" class="font-700 text-primary text-size-8 line-height-9.5 md:(text-size-12 line-height-14.5) me-10">
      {{ titleArr[0] }}<br />{{ titleArr[1] }}
    </h2>
 

    <div ref="decoLine" :class="[colText? 'w-140px': '']"  class=" h-2px w-194px md:w-165px decoLine rounded-full bg-gradient-to-r from-primary to-white"></div>
  </div>
</template>
<style scoped>
.decoLine {
  background-size: 200% 100%;
}
</style>