<script setup>
definePageMeta({
  layout: 'user-layout'
})

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

const isModelState = ref(false)
</script>
<template>
  <main class="bg-gray-120 px-3 py-10 md:(pt-20 pb-30)">
    <div class="max-w-1297px mx-auto">
      <div class="flex flex-col gap-6 md:(flex-row gap-10)">
        <!-- 最新訂單 -->
        <div class="p-4 rounded-5 md:(p-10 rounded-2) max-w-730px w-full bg-white  ">
          <div class=" mb-6 md:mb-10 flex flex-col gap-2">
            <p class="text-3.5  md:(text-4 ) leading-6 ">預訂參考編號： HH2302183151222</p>
            <h2 class="text-4 leading-6 md:(text-6 leading-7.5) font-700">即將來的行程</h2>
          </div>
          <div class="w-full rounded-2 overflow-hidden mb-6 md:mb-10">
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
          <div class="flex flex-col gap-6 mb-6 md:(gap-10 mb-10)">
            <RoomDetailCheck title="房內設備" :detailCheckData="roomlayoutInfo" :boooking-confirmation="true" />
            <RoomDetailCheck title="備品提供" :detailCheckData="roomlayoutInfo" :boooking-confirmation="true" />
          </div>
          <div class="flex gap-4">
            <div @click="isModelState = !isModelState"
              class=" py-4 w-full text-center text-primary rounded-2 border-(1px solid primary) font-700 leading-6 tracking-.25px cursor-pointer hover:(translate-y-5% opacity-80 ) duration-300">
              取消預訂</div>
            <div
              class="bg-primary py-4 w-full text-center text-white rounded-2  font-700 leading-6 tracking-.25px cursor-pointer hover:(translate-y-5% opacity-80) duration-300">
              查看詳情</div>
          </div>
        </div>
        <!-- 歷史訂單 -->
        <div class="p-4 rounded-5 md:(p-10 rounded-2)  w-full max-w-527px h-full bg-white ">
          <h2 class="mb-6 text-4 leading-6 md:(mb-10 text-6 leading-7.5) font-700">歷史訂單</h2>
          <!-- <h2 class="text-4 leading-6 md:(mb-10 text-6 leading-7.5) font-700 text-gray-60">目前沒有歷史訂單</h2> -->
          <ul class=" flex flex-col mb-10">
            <li class=" historyOrderItem  " v-for="a in 3" :key="a">
              <div class="flex flex-col after:(content-['']  w-full h-1px bg-gray-40  rounded-2.5 my-6 md:my-10)">
                <div class="flex flex-col md:flex-row gap-6">
                  <picture class="rounded-2 overflow-hidden w-1/2 md:(w-120px h-80px)">
                    <source media="(max-width:768px)" srcset="@/public/images/room-a-sm-1.png">
                    <img class="object-cover w-full h-full" src="@/public/images/room-a-1.png" alt="">
                  </picture>
  
                  <div class="flex flex-col gap-4 ">
                    <p class="text-4 leading-6 ">預訂參考編號： HH2302183151222</p>
                    <h2 class="text-5 leading-6 font-700">尊爵雙人房</h2>
                    <ul class="flex flex-col gap-2 ">
                      <li class="text-3.5 leading-5 md:(text-4 leading-6)  color-gray-80 tracking-.5px">住宿天數：1 晚
                      </li>
  
                      <li class="text-3.5 leading-5 md:(text-4 leading-6)  color-gray-80 tracking-.5px">住宿人數：2 位
                      </li>
                    </ul>
                    <ul class="flex flex-col gap-2 ">
                      <li
                        class="text-3.5 leading-5 md:(text-4 leading-6) tracking-.25px font-700 color-gray-80 flex gap-3 items-center before:(content-[''] block w-1 h-6 bg-primary transform-translate-y-10% rounded-2.5)">
                        入住：6 月 10 日星期二</li>
                      <li
                        class="text-3.5 leading-5 md:(text-4 leading-6) tracking-.25px font-700 color-gray-80 flex gap-3 items-center before:(content-[''] block w-1 h-6 bg-gray-60 transform-translate-y-10% rounded-2.5)">
                        退房：6 月 11 日星期三</li>
                    </ul>
                    <p class="text-4 leading-6 tracking-.25px color-gray-80 font-700">NT$ 10,000</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div
              class=" py-4 w-full text-center flex items-center justify-center text-primary rounded-2 border-(1px solid primary) font-700 leading-6 tracking-.25px cursor-pointer hover:(translate-y-5% opacity-80 ) duration-300">
              查看更多
              <i class="i-fluent:chevron-down-16-filled text-6  text-primary inline-block"></i>
            </div>
        </div>
      </div>
    </div>
  </main>

  <OrderModel :isOrderModel="isModelState" />
</template>
<style scoped>
.historyOrderItem:last-child> div::after{
  display: none;
}
</style>