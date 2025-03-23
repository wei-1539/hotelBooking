<script setup>
const loadingTitle = ref('正在處理你的預訂中')

const roomlayoutInfo = [
  {
    "title": "市景",
    "isProvide": true
  },
  {
    "title": "市景",
    "isProvide": true
  },
  {
    "title": "市景",
    "isProvide": true
  },
  {
    "title": "市景",
    "isProvide": true
  },
  {
    "title": "市景",
    "isProvide": true
  },
  {
    "title": "市景",
    "isProvide": true
  },
  {
    "title": "市景",
    "isProvide": true
  },
  {
    "title": "獨立衛浴",
    "isProvide": true
  },
  {
    "title": "樓層電梯",
    "isProvide": true
  },
  {
    "title": "樓層電梯",
    "isProvide": true
  }
];
</script>
<template>

  <main class="mt-18 py-10 px-3 md:(px-0 py-30 mt-30) bg-gray-120">
    <div class=" max-w-1296px mx-auto ">
      <div class="flex flex-col gap-15 md:(flex-row) gap-18">
        <!--  -->
        <section class="max-w-746px w-full">
          <div class="mb-10 md:mb-20">
            <div class="flex flex-col md:(flex-row items-center mb-10 gap-10) gap-4 mb-8 ">
              <div class="w-10 h-10 md:(w-14 h-14) relative  rounded-full bg-#52dd7e p-2 ">
                <i class="text-6 md:text-10 i-material-symbols:check color-white block "></i>
              </div>
              <h2 class="text-8 leading-9.5 md:(text-12 leading-14.5) tracking-.5px font-700 color-white">
                恭喜，Jessica！<br>您已預訂成功</h2>
            </div>
            <p class="text-4 leading-6 tracking-.25px color-gray-40 ">我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
          </div>
          <hr class=" mb-10 md:(mb-20)  bg-white w-full h-1px border-none">
          <div class="mb-10 md:(mb-20)">
            <h2 class="text-4 leading-6 mb-6 md:(text-6 leading-7 mb-10)  tracking-.25px  font-700 color-white">
              立即查看您的訂單紀錄</h2>
            <div
              class="text-4 leading-6 tracking-.25px py-4 text-center   md:(max-w-218px px-15) w-full bg-primary rounded-2 color-white hover:(opacity-80 translate-y-5%) duration-300 ">
              前往我的訂單</div>
          </div>
          <hr class="mb-10 md:(mb-20)  bg-white w-full h-1px border-none">
          <div class="">
            <h2 class="text-6  mb-8 md:(text-6  mb-10) leading-7.5 tracking-.25px  font-700 color-white">訂房人資訊</h2>
            <ul class="flex flex-col gap-6">
              <li class="text-4 leading-6 tracking-.25px color-white">
                <p class="mb-2">姓名</p>
                <p class="font-700">Jessica Ｗang</p>
              </li>
              <li class="text-4 leading-6 tracking-.25px color-white">
                <p class="mb-2">手機號碼</p>
                <p class="font-700">+886 912 345 678</p>
              </li>
              <li class="text-4 leading-6 tracking-.25px color-white">
                <p class="mb-2">電子信箱</p>
                <p class="font-700">jessica@sample.com</p>
              </li>
            </ul>
          </div>
        </section>
        <!--  -->
        <section class="bg-white rounded-5 p-4 md:(p-10) max-w-478px w-full">
          <div class="mb-6 md:mb-10">
            <p class="text-3.5 md:(text-4) leading-6 tracking-.25px mb-2">預訂參考編號： HH2302183151222</p>
            <h2 class="text-4 leading-6 md:(text-6 leading-7.5) tracking-.25px font-700">即將來的行程</h2>
          </div>
          <div class="w-full max-h-150px mb-6 md:(max-h-240px mb-10) rounded-2 overflow-hidden ">
            <picture>
              <source media="(max-width:768px)" srcset="@/public/images/room-a-sm-1.png">
              <img class="object-cover w-full h-full" src="@/public/images/room-a-1.png" alt="">
            </picture>
          </div>
          <div class="flex flex-col gap-6 mb-6 md:mb-10">
            <ul class="flex gap-4 items-center ">
              <li class="text-3.5 leading-5 md:(text-5 leading-6) font-700 color-gray-80 tracking-.5px">尊爵雙人房，1 晚</li>
              <li class="color-gray-60">|</li>
              <li class="text-3.5 leading-5 md:(text-5 leading-6) font-700 color-gray-80 tracking-.5px">住宿人數：2 位</li>
            </ul>
            <ul class="flex flex-col gap-2 ">
              <li
                class="text-3.5 leading-5 md:(text-4 leading-6) tracking-.25px font-700 color-gray-80 flex gap-3 items-center before:(content-[''] block w-1 h-6 bg-primary transform-translate-y-10% rounded-2.5)">
                入住：6 月 10 日星期二，15:00 可入住</li>
              <li
                class="text-3.5 leading-5 md:(text-4 leading-6) tracking-.25px font-700 color-gray-80 flex gap-3 items-center before:(content-[''] block w-1 h-6 bg-gray-60 transform-translate-y-10% rounded-2.5)">
                退房：6 月 11 日星期三，12:00 前退房</li>
            </ul>
            <p class="text-4 md:text-5 leading-6 tracking-.25px color-gray-80 font-700">NT$ 10,000</p>
          </div>
          <hr class="mb-6 md:mb-10  bg-gray-40 w-full h-1px border-none">
          <div class="flex flex-col gap-6 md:gap-10">
            <RoomDetailCheck title="房內設備" :detailCheckData="roomlayoutInfo" :boooking-confirmation="true" />
            <RoomDetailCheck title="備品提供" :detailCheckData="roomlayoutInfo" :boooking-confirmation="true" />
          </div>
        </section>
      </div>
    </div>

  </main>
  <div class="bg-gray-120">

    <picture >
      <source media="(max-width:768px)" srcset="@/public/images/deco-line-group-horizontal-sm.svg">
      <img class="w-full h-full object-cover" src="@/public/images/deco-line-group-horizontal-full.svg" alt="">
    </picture>
  </div>

  <ClientOnly>
    <Loading :show="false" :loading-title="loadingTitle" />
  </ClientOnly>
</template>
<style scoped></style>