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
  usePaginatin: {
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
    <div v-if="usePaginatin" class="swiper-pagination"></div>

    <div v-if="useNavigation" class="swiper-button-next"></div>
    <div v-if="useNavigation" class="swiper-button-prev"></div>
  </div>
</template>
<style scoped></style>