<script setup>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const props = defineProps({
  roomList: { type: Array },
});
</script>
<template>
  <div class="w-full px-3.5 md:px-0">
    <ClientOnly>
      <div class="flex flex-col  md:(flex-row) items-end text-white">
        <Swiper
          class="rounded-2 w-full  mx-auto md:(max-w-900px ml-0! mr-0!)"
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
                srcset="@/public/images/home-room-sm-1.png"
                media="(max-width: 768px)"
              />
              <img src="@/public/images/home-room-1.png" alt="" />
            </picture>
          </SwiperSlide>

          
        </Swiper>
        <div class="mt-6 md:(mt-0) ml-10 max-w-628px w-full">
          <h2 class="text-7 leading-8.5 mb-2 md:(text-10 line-height-12 mb-4)">尊爵雙人房</h2>
          <p class="text-3.5 leading-5 mb-6 md:(text-4 mb-10)">
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </p>
          <h2 class=" text-6 leading-7 mb-6 md:(text-8 line-height-9.5 mb-10)">NT$ 10,000</h2>
         
          <HeroBtn title="查看更多"  class="mb-6 md:(mb-0)"/>
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