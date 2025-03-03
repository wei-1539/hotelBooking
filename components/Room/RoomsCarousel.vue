<script setup>
import { Autoplay, Pagination } from "swiper/modules";
</script>
<template>
  <div class="w-full h-full">
    <ClientOnly>
      <Swiper
        :loop="true"
        :autoplay="{ delay: 5000 }"
        :slidesPerView="1"
        :space-between="0"
        :use-pagination="true"
        :pagination="{ clickable: true, el: '.swiper-pagination' }"
        :modules="[Autoplay, Pagination]"
      >
        <SwiperSlide v-for="n in 5" :key="n">
            <div class="absolute w-full h-full bg-#000/60"></div>
          <picture>
            <source
              srcset="@/public/images/home-hero-sm.png"
              media="(max-width: 768px)"
            />
            <img
              src="@/public/images/home-hero.png"
              alt=""
              class="w-full max-h-466px  md:(max-h-800px) object-cover"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>
<style scoped></style>