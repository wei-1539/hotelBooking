<script setup>
// 引入 Swiper核心功能
import { Swiper } from "swiper";
// 引入 Swiper樣式
import "swiper/swiper-bundle.css";
// 用於抓取外層參數
const props = defineProps({
  // 自動播放
  autoplay: {
    type: Object,
  },
  // 循環播放
  loop: {
    type: Boolean,
    default: false,
  },
  usePagination: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: Object,
  },
  useNavigation: {
    type: Boolean,
    default: false,
  },
  navigation: {
    type: Object,
  },
  slidesPerView: {
    type: Number,
  },
  spaceBetween: {
    type: Number,
  },
  breakpoints: {
    type: Object,
  },
  // 因為不一定每個 Swiper 使用的模組都一樣，所以改成用 props 傳入特定的模組進來
  modules: {
    type: Array,
  },
});

const swiperRef = ref(null);
onMounted(() => {
  new Swiper(swiperRef.value, props);
});
</script>
<template>
  <div class="swiper" ref="swiperRef">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div v-if="usePagination" class="swiper-pagination"></div>

    <div v-if="useNavigation" class="swiper-button-next"></div>
    <div v-if="useNavigation" class="swiper-button-prev"></div>
  </div>
</template>
<style scoped>
/* 使用深度选择器（scoped 情况下）:
必须将样式放在组件内部的 <style scoped> 中，需要使用 Vue 的深度选择器 >>> 或 /deep/，以便作用域样式能影响子组件 */
::v-deep( .swiper-pagination) {
    bottom: 24px;
}
::v-deep(.swiper-pagination-bullet) {
    width: 32px ;
    height: 4px ;
    background-color: #f1eae4 ;
    border-radius: 2px ;
    transition:all .3s;
    opacity: 1;
}
::v-deep(.swiper-pagination-bullet-active){
    background-color: #bf9d7d ;
    width: 60px ;
    opacity: 1;
}
</style>