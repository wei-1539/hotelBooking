<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const props = defineProps({
  foodList: { type: Array },
});
</script>
<template>
  <ClientOnly>
    <Swiper
      :autoplay="{ delay: 5000 }"
      :loop="true"
      :slidesPerView="1.25"
      :space-between="20"
      :breakpoints="{ 768: { slidesPerView: 3 } }"
      :modules="[Autoplay]"
    >
      <SwiperSlide v-for="(item, ind) in 10" :key="ind">
        <div class="relative rounded-3 overflow-hidden">
          <picture >
            <source
              srcset="@/public/images/home-food-2.png"
              media="(min-width: 576px)"
            />
            <img
              class="w-full rounded-3"
              src="@/public/images/home-food-sm-2.png"
              alt="日食"
            />
          </picture>
          <div
            class="absolute w-full bottom-0 left-0 backdrop-blur-5px bg-gradient-to-t from-gray-120 to-white/0 text-white p-6"
          >
            <div class="flex justify-between items-center mb-6">
              <h3 class="font-bold-700 text-6">日食</h3>
              <ul class="flex">
                <li class="me-4">SUN-MON</li>
                <li>17:00 - 22:00</li>
              </ul>
            </div>
            <p class="line-height-6">
              為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>
<style scoped></style>