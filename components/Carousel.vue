<script setup>
import { Autoplay, Pagination } from "swiper/modules";
const props = defineProps({
  bannerList: { type: Array },
});
</script>
<template>
  <div class="w-full h-full">
    <ClientOnly>
      <Swiper class="h-full"
        :autoplay="{ delay: 5000 }"
        :loop="true"
        :slidesPerView="1"
        :space-between="0"
        :use-pagination="true"
        :pagination="{ clickable: true, el: '.swiper-pagination' }"
        :modules="[Autoplay, Pagination]"
      >
        <SwiperSlide v-for="i in 5" :key="i" >
            <div class="absolute w-full h-full bg-#000/60"></div>
          <picture>
            <source
              srcset="@/assets/images/home-hero-sm.png"
              media="(max-width: 768px)"
            />
            <img
              src="@/assets/images/home-hero.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>
<style scoped></style>