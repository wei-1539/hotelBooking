<script setup >
// 引入 gsap
import { gsap } from "gsap";
const line = ref(null);
onMounted(() => {
  // 動畫
  // gsap.to(line.value, { duration: 5,repeat: -1, yoyo:true, ease: "power2.inOut" });
});
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import HeroBtn from "~/components/HeroBtn.vue";
// 關於我們
const aboutContent = [
  {
    label:
      "享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br />我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。 ",
  },
  {
    label:
      "我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br />我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。 ",
  },
  {
    label:
      "在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。 ",
  },
  {
    label:
      "享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。",
  },
];
// 最新消息
const newsInfo = [
  {
    pcImg: "@/assets/images/home-news-1.png",
    spImg: "@/assets/images/home-news-sm-1.png",
    title: "秋季旅遊，豪華享受方案",
    content:
      "秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。",
  },

  {
    pcImg: "@/assets/images/home-news-2.png",
    spImg: "@/assets/images/home-news-sm-2.png",
    title: "輕鬆住房專案",
    content:
      "我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。",
  },

  {
    pcImg: "@/assets/images/home-news-3.png",
    spImg: "@/assets/images/home-news-sm-3.png",
    title: "耶誕快樂，住房送禮",
    content:
      "聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！",
  },
];
// 房間
const roomInfo = [
  {
    spImg: "@/assets/images/home-room-sm-1.png",
    pcImg: "@/assets/images/home-room-1.png",
  },
  {
    spImg: "@/assets/images/home-room-sm-1.png",
    pcImg: "@/assets/images/home-room-1.png",
  },
  {
    spImg: "@/assets/images/home-room-sm-1.png",
    pcImg: "@/assets/images/home-room-1.png",
  },
  {
    spImg: "@/assets/images/home-room-sm-1.png",
    pcImg: "@/assets/images/home-room-1.png",
  },
];
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
    <!-- FV -->
    <section class="w-full h-full relative">
      <Carousel />
      <div
        class="absolute w-full px-5 pt-10 top-72px left-0 md:(top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-20 pb-5  px-10)  xl:(pt-0 px-20) z-1 "
      >
        <div class="flex flex-col items-center lg:(flex-row justify-between items-center)">
          <div class=" mb-10  max-w-636px text-center md:(mb-20 ) lg:(mb-0 text-left )">
            <h1 class="text-7 leading-8.2 xl:( text-10 leading-12) text-primary font-bold mb-2 ">享樂酒店</h1>
            <h2 class="text-primary text-6 leading-7.2 font-bold mb-5 xl:(mb-10)">Enjoyment Luxury Hotel</h2>
            <div class="titleDecoLine  w-2px h-83px mx-auto lg:(rotate-0 h-2px w-[clamp(350px,27.5vw,636px)]) 3xl:(w-636px)  bg-gradient-to-r from-#be9c7c to-#fff"></div>
          </div>
          <div
            class="w-291px py-15 pr-5 ml-auto rounded-10 sm:(ml-0) md:( rounded-20 py-10 pr-40 w-500px) lg:( w-55% max-w-924px) 3xl:(py-24 pr-50  w-100%) text-white  bg-gradient-to-b from-#fff/0 to-#fff/30 border-t-(1px solid #fff) border-r-(1px solid #fff) backdrop-blur-5px  "
          >
            <div class=" -translate-x-12% w-309px md:(w-500px -translate-x-10%) lg:(w-525px -translate-x-8%)  xl:(w-772px -translate-x-12%)">
              <h2 class="text-12 leading-14 tracking-.8 lg:(text-14 leading-16) xl:(text-25  leading-30 ) mb-2 font-bold ml-auto">高雄</h2>
              <h2 class="text-12 leading-14 tracking-.8 lg:(text-14 leading-16) xl:(text-25  leading-30 ) mb-6 font-bold ">豪華住宿之選</h2>
              <p class="mb-10 text-4 leading-6 tracking-.2 md:(text-6 leading-9 )lg:(mb-8) xl:(text-8 mb-15) ">
                我們致力於為您提供無與倫比的奢華體驗與優質服務
              </p>
              <HeroBtn title="立即訂房" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 最新消息 -->
    <section class="px-3 py-20 md:(py-30 px-0)">
      <div class="max-w-1296px mx-auto flex gap-20 relative">
        <DotCube class="absolute -right-11.5% -top-2% hidden md:block" />
        <DefaultTitle title="最新消息" col-text="true" class="mb-10 md:mb-20" />
        <ul class="max-w-1076px relative z-1">
          <li
            v-for="item in newsInfo"
            :key="item.title"
            class="flex justify-between items-center gap-6 mb-10"
          >
            <picture class="rounded-2 overflow-hidden max-w-474px w-full">
              <source
                srcset="@/assets/images/home-news-sm-1.png"
                media="(max-width: 768px)"
              />
              <img
                class="w-full rounded-3"
                src="@/assets/images/home-news-1.png"
                :alt="item.title"
              />
            </picture>
            <div class="max-w-578px w-full">
              <h2 class="text-8 line-height-9 mb-8">{{ item.title }}</h2>
              <p class="text-gray-80 line-height-6">{{ item.content }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- 關於我們 -->
    <section class="bg-gray pt-20 pb-30 md:(pt-30 pb-50) relative">
      <picture
        class="absolute left-0 top-20 md:(top-30) w-full h-full max-h-672px"
      >
        <source
          srcset="@/assets/images/home-about-sm.png"
          media="(max-width: 768px)"
        />
        <img
          class="w-full h-full object-cover object-center"
          src="@/assets/images/home-about.png"
          alt="關於我們"
        />
      </picture>
      <div class="max-w-1296px mx-auto relative">
        <div
          class="ml-auto transform-translate-y-20 max-w-1044px top-10% right-0% backdrop-blur-5 bg-gradient-to-b from-gray-120/80 to-#be9c7c/80 rounded-tl-20 rounded-tr-20 rounded-bl-20 border-b-(1px solid #fff) border-l-(1px solid #fff) p-20"
        >
          <DefaultTitle
            title="關於我們"
            white-txt="true"
            class="mb-10 md:mb-20"
          />
          <div class="flex flex-col gap-10">
            <p
              v-for="(item, ind) in aboutContent"
              :key="ind"
              class="text-white leading-6"
              v-html="item.label"
            ></p>
          </div>
        </div>
      </div>
    </section>
    <!-- 房間輪播 -->
    <section class="bg-gray-120 py-30">
      <RoomCarousel :room-list="roomInfo" />
    </section>
    <!-- 佳餚 -->
    <section class="relative py-20 ps-3 md:(py-30 ps-0)">
      <DotCube class="absolute right-20 -top-10 hidden md:block" />
      <img
        class="absolute hidden md:block"
        src="@/assets/images/Line2.png"
        alt=""
      />
      <div class="max-w-1296px mx-auto left-10 top-12">
        <DefaultTitle title="佳餚美饌" class="mb-10 md:mb-20" />
        <FoodCarousel :food-list="[aaa]" />
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
