<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const props = defineProps({
  roomList: { type: Array },
});
</script>
<template>
  <div class="w-full">
    <ClientOnly>
      <div class="flex items-end text-white">
        <Swiper
          class="rounded-2 max-w-900px ml-0! mr-0!"
          :autoplay="{ delay: 5000 }"
          :loop="true"
          :slidesPerView="1"
          :space-between="20"
          use-pagination="true"
          :pagination="{ clickable: true, el: '.swiper-pagination' }"

          :navigation="{
            nextEl: '.swiper-button-R',
            prevEl: '.swiper-button-L',
          }"
          :modules="[Autoplay, Navigation, Pagination]"
        >
          <SwiperSlide v-for="(item, ind) in props.roomList" :key="ind">
            <picture>
              <source
                srcset="@/assets/images/home-room-sm-1.png"
                media="(max-width: 768px)"
              />
              <img src="@/assets/images/home-room-1.png" alt="" />
            </picture>
          </SwiperSlide>

          
        </Swiper>
        <div class="ml-10 max-w-628px">
          <h2 class="text-10 line-height-12 mb-4">尊爵雙人房</h2>
          <p class="mb-10">
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </p>
          <h2 class="text-8 line-height-9.5 mb-10">NT$ 10,000</h2>
          <div class="w-full bg-white text-#000 p-10 rounded-2 text-6 mb-10">
            我是按鈕
          </div>
          <div class="flex justify-end items-center p-4 gap-8">
            <div class="i-mdi:arrow-left swiper-button-L w-6 h-6 cursor-pointer"></div>
            <div class="i-mdi:arrow-right swiper-button-R w-6 h-6 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
<style scoped>

</style>