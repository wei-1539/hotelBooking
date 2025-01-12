<script setup >
// 引入 gsap
import { gsap } from "gsap";
const line = ref(null);
onMounted(() => {
  // 動畫
  // gsap.to(line.value, { duration: 5,repeat: -1, yoyo:true, ease: "power2.inOut" });
});
import { Autoplay,Navigation,Pagination} from 'swiper/modules'


// 房間
const roomInfo=[
  {
    spImg:"@/assets/images/home-room-sm-1.png",
    pcImg:"@/assets/images/home-room-1.png",
  },
  {
    spImg:"@/assets/images/home-room-sm-1.png",
    pcImg:"@/assets/images/home-room-1.png",
  },
  {
    spImg:"@/assets/images/home-room-sm-1.png",
    pcImg:"@/assets/images/home-room-1.png",
  },
  {
    spImg:"@/assets/images/home-room-sm-1.png",
    pcImg:"@/assets/images/home-room-1.png",
  },
]
// 交通資訊
const trafficInfo = [
  {
    icons: "i-mdi:car",
    title: "自行開車",
    content:
      "如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。",
  },
  {
    icons: "i-material-symbols:train",
    title: "高鐵/火車",
    content:
      "如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。",
  },
  {
    icons: "i-mdi:car-hatchback",
    title: "禮賓車服務",
    content:
      "承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567",
  },
];
</script>

<template>
  <div>
    Page: index

    <!-- FV -->
    <!-- 最新消息 -->
    <section class="px-3 py-20 md:(py-30 px-0)">
      <div class="max-w-1296px mx-auto">

      </div>
    </section>
    <!-- 關於我們 -->
    <!-- 房間輪播 -->
     <section class="bg-gray-120 py-30">

        <RoomCarousel :room-list="roomInfo"/>

     </section>
    <!-- 佳餚 -->
    <section class="relative py-20 ps-3 md:(py-30 ps-0) ">
      <DotCube class="absolute right-20 -top-10  hidden md:block"/>
      <img class="absolute hidden md:block" src="@/assets/images/Line2.png" alt="">
      <div class="max-w-1296px mx-auto left-10 top-12">
        <DefaultTitle title="佳餚美饌" class="mb-10 md:mb-20" />
          <FoodCarousel :food-list="[aaa]"/>
      </div>
    </section>
    <!-- 交通 -->
    <section class="bg-gray-120 pt-20 md:pt-30">
      <div class="max-w-1296px mx-auto m-b-10 md:m-b-20 px-3">
        <DefaultTitle title="交通資訊" class="mb-10 md:mb-20" />
        <div class="mb-10">
          <p class="text-white mb-4 font-700">台灣高雄市新興區六角路123號</p>
          <picture>
            <source
              srcset="@/assets/images/home-map-sm.png"
              media="(max-width: 768px)"
            />
            <img src="@/assets/images/home-map.png" alt="享樂酒店 Map" />
          </picture>
        </div>

        <ul class="flex flex-col md:flex-row justify-between gap-6">
          <li
            v-for="item in trafficInfo"
            :key="item.title"
            class="w-100% md:w-33.3333% text-white"
          >
            <div
              class="w-12 h-12 md:(w-20 h-20) mb-4 color-primary"
              :class="item.icons"
            ></div>
            <p class="font-700 md:text-2xl line-height- mb-2">
              {{ item.title }}
            </p>
            <p class="line-height-6">{{ item.content }}</p>
          </li>
        </ul>
      </div>

      <picture>
        <source
          srcset="@/assets/images/deco-line-group-horizontal-sm.svg"
          media="(max-width:768px)"
        />
        <img
          class="w-full"
          src="@/assets/images/deco-line-group-horizontal-full.svg"
          alt="deco-line-group"
        />
      </picture>
    </section>
  </div>
</template>

<style scoped></style>
