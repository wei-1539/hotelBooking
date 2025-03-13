<script setup>
import { Autoplay, Pagination } from "swiper/modules";
const props = defineProps({
  roomDetailInfo: { type: Array },
});
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
        <SwiperSlide v-for="(item,ind) in props.roomDetailInfo" :key="ind">
          <picture>
            <source
              :srcset="item.spImg"
              media="(max-width: 768px)"
            />
            <img
              :src="item.pcImg"
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