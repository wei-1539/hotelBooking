<script setup>
import {Autoplay,Pagination,Navigation} from "swiper/modules"
import { gsap } from "gsap";
onMounted(()=>{
 const breakPoint= gsap.matchMedia();
 breakPoint.add("max-width:768px",()=>{

  //  gsap.to(".titleDecoLine",{ scaleX:'.3',transformOrigin:'left',duration:2,repeat:-1,yoyo:true ,ease:'power1.inOut'});
  })
})
</script>
<template>
  <div>
    <div class="relative">
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
              srcset="@/assets/images/home-hero-sm.png"
              media="(max-width: 768px)"
            />
            <img
              src="@/assets/images/home-hero.png"
              alt=""
              class="w-full max-h-466px  md:(max-h-800px) object-cover"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>Ｆ
      <div class="flex flex-col  md:(flex-row gap-20 ) justify-center items-center absolute top-50% left-50%  -transform-translate-x-50%  -transform-translate-y-50% z-1 w-full ">
        <div class="webTitle mb-10 md:(mb-0)">
          <h2 class="text-7 leading-8 tracking-1 text-center md:(text-left text-10 leading-12) font-bold text-primary mb-2">享樂酒店</h2>
          <p class="text-4 leading-6 tracking-.25 mb-5 md:(text-6 leading-7.2 mb-10) font-bold text-primary">Enjoyment Luxury Hotel</p>
          <div class="titleDecoLine  h-85px w-2px mx-auto  md:(mx-0 h-2px w-500px)  h-2px  bg-gradient-to-r from-#be9c7c to-#fff"></div>
        </div>
        <div class="pageName text-7 text-white font-bold leading-14">客房旅宿</div>
      </div>
    </div>
    <!-- 房型挑選 -->
    <div class="bg-primary-10">
      <section class="max-w-1296px mx-auto px-3 pt-10 pb-10.5  md:(px-5 pt-30 pb-42) xl:(px-0)">
        <div class="title mb-10 md:(mb-20)">
          <p class="text-3.5 leading-5 mb-2 md:(text-5 mb-4 leading-6) text-gray-80">房型選擇</p>
          <h2 class="text-8 leading-9.6 tracking-1 font-bold text-primary">各種房型，任您挑選</h2>  
        </div>
        <ul class="flex flex-col gap-6 md:(gap-12)">
          <li v-for="n in 4" :key="n" >
            <div class="flex flex-col md:(flex-row) rounded-5 overflow-hidden">
              <div class="roomImg max-w-773px w-full md:(w-60%) xl:(w-full) relative">
                <ClientOnly>
                  <Swiper
                  :loop="true"
                  :slidesPerView="1"
                  :space-between="0"
                  use-pagination="true"
                  :pagination="{ clickable: true, el: '.swiper-pagination' }"
                  :navigation="{
                    nextEl: '.swiper-button-R',
                    prevEl: '.swiper-button-L',
                  }"
                  :modules="[Autoplay, Pagination, Navigation]"
                  >
                    <SwiperSlide v-for="n in 5" :key="n"> 
                      <picture>
                        <source srcset="@/assets/images/room-a-sm-1.png"  media="(max-width: 768px)">
                        <img class="w-full object-cover" src="@/assets/images/room-a-1.png" alt="">
                      </picture>
                    </SwiperSlide>
                  </Swiper>
                </ClientOnly>
                <div class="hidden  swiper-button-L absolute md:(flex) justify-center items-center  z-1 w-40px h-40px left-2.5% top-50% -transform-translate-y-50%  bg-white rounded-full cursor-pointer">
                  <i class="i-fluent:ios-arrow-ltr-24-filled  color-gray block text-5 transform-translate-x-8%"></i>
                </div>

                <div class="hidden  swiper-button-R absolute md:(flex) justify-center items-center z-1 w-40px h-40px right-2.5% top-50% -transform-translate-y-50% bg-white rounded-full cursor-pointer">
                  <i class="i-fluent:ios-arrow-right-24-filled color-gray block text-5 -transform-translate-x-10%"></i>
                </div>
              </div>
              <NuxtLink to="/" class="roomDetail max-w-523px w-full  p-4 md:(p-6 w-40%) xl:(p-10 w-full) bg-white block decoration-none">  
                <h2 class="text-7 leading-8.4 tracking-.5 mb-2 md(text-8.5 leading-10) xl:(text-10 leading-12) font-bold text-gray">尊爵雙人房</h2>
                <p class="text-3.5 leading-5.5 text-gray-80">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                <ul class="roomInfo flex justify-between gap-4 my-6 max-w-323px  xl:(my-10)">
                  <li class="w-97px h-97px px-4 py-5.125 border-(1px solid primary-40) rounded-2">
                    <div class="i-fluent:slide-size-24-filled w-6 h-6 text-primary mb-2"></div>
                    <p class=" leading-8 text-gray">24坪</p>
                  </li>
                  <li class="w-97px h-97px px-4 py-5.125 border-(1px solid primary-40) rounded-2">
                    <div class="i-material-symbols:bed w-6 h-6 text-primary mb-2"></div>
                    <p class=" leading-8 text-gray">1 張大床</p>
                  </li>
                  <li class="w-97px h-97px px-4 py-5.125 border-(1px solid primary-40) rounded-2">
                    <div class="i-material-symbols:person w-6 h-6 text-primary mb-2"></div>
                    <p class=" leading-8 text-gray">2-4 人</p>
                  </li>
                </ul>
                <div class="titleDecoLine  mb-6  xl:(mb-10) h-2px  bg-gradient-to-r from-#be9c7c to-#fff"></div>
                <div class="roomPrice flex justify-between items-center py-4 md:(py-2)">
                  <p class="text-4 leading-6 md:(text-5 leading-6.6) xl:(text-6 leading-7.2) text-primary" >NT$ 10,000</p>
                  <i class="i-fluent:arrow-right-24-filled w-6 h-6 text-primary"></i>
                </div>
              </NuxtLink>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<style scoped>
.titleDecoLine {
  background-size: 200% 100%;
  animation: titleDecoLine 2s linear infinite;
}
@keyframes titleDecoLine {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>  