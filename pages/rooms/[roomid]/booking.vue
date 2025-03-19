<script setup>

const infoData = [
  {
    content: '24坪'
  },
  {
    content: '1 張大床'
  },
  {
    content: '2-4 人'
  },
]
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
  }
];
</script>
<template>
  <div class="w-full pt-28 py-35 md:py-30  bg-primary-10">
    <div class="container px-3 md:px-0 max-w-1296px mx-auto">
      <NuxtLink to="/"
        class="flex items-center gap-2 mb-10 text-dark hover:(opacity-80 -translate-x-2.5%) decoration-none duration-300 ">
        <span class="i-mdi:keyboard-arrow-left block w-6 h-6 md:(w-10 h-10)"></span>
        <p class="text-6 md:(text-8 leading-9.5 tracking-.25px) font-700 ">確認訂房資訊</p>
      </NuxtLink>

      <section class="flex flex-col gap-10 md:(flex-row gap-18) relative">
        <div class="max-w-746px w-full">
          <div class="mb-10 md:mb-12">
            <h2 class="text-5 mb-8 md:(text-7 mb-10) font-700 leading-8.5 tracking-.25px">訂房資訊</h2>
            <ul class="flex flex-col gap-6">
              <li class="flex justify-between items-center">
                <div class="flex flex-col gap-2">
                  <p class="text-4 leading-6 tracking-.25px font-700 flex items-center gap-3 before:(content-[''] block w-1 h-6 bg-primary transform-translate-y-10%)">選擇房型</p>
                  <p class="text-4 leading-6 tracking-.25px ">尊爵雙人房</p>
                </div>
                <div class="font-700 leading-6 tracking-.25px decoration-underline">編輯</div>
              </li>
              <li class="flex justify-between items-center">
                <div class="flex flex-col gap-2">
                  <p class="text-4 leading-6 tracking-.25px font-700 flex items-center gap-3 before:(content-[''] block w-1 h-6 bg-primary transform-translate-y-10%)">訂房日期</p>
                  <div>
                    <p class="text-4 leading-6 tracking-.25px ">入住：12 月 4 日星期二</p>
                    <p class="text-4 leading-6 tracking-.25px ">退房：12 月 6 日星期三</p>
                  </div>
                </div>
                <div class="font-700 leading-6 tracking-.25px decoration-underline">編輯</div>
              </li>
              <li class="flex justify-between items-center">
                <div class="flex flex-col gap-2">
                  <p class="text-4 leading-6 tracking-.25px font-700 flex items-center gap-3 before:(content-[''] block w-1 h-6 bg-primary transform-translate-y-10%)">房客人數</p>
                  <p class="text-4 leading-6 tracking-.25px ">2 人</p>
                </div>
                <div class="font-700 leading-6 tracking-.25px decoration-underline">編輯</div>
              </li>
            </ul>
          </div>
          <hr class="mb-10 md:mb-12 bg-gray-60 w-full h-1px border-none">
          <div class="mb-10  md:mb-12">
            <div class="flex justify-between items-center mb-8 md:mb-10">
              <h2 class="text-5 md:text-7 font-700 leading-8.5 tracking-.25px">訂房人資訊</h2>
              <p class="text-3 md:text-4 text-primary decoration-underline">套用會員資料</p>
            </div>
            <div class="mb-6">
              <label for="name" class="text-3.5 md:text-4 mb-2 font-700 leading-6 tracking-.25px block">姓名</label>
              <input type="text" id="name" class="text-3.5 md:text-4 w-full h-14 rounded-2 p-4  border-none text-gray-60"
                placeholder="請輸入姓名">
            </div>
            <div class="mb-6">
              <label for="tel" class="text-3.5 md:text-4 mb-2 font-700 leading-6 tracking-.25px block">手機號碼</label>
              <input type="number" id="tel" class="text-3.5 md:text-4 w-full h-14 rounded-2 p-4  border-none text-gray-60"
                placeholder="請輸入手機號碼">
            </div>
            <div class="mb-6">
              <label for="mail" class="text-3.5 md:text-4 mb-2 font-700 leading-6 tracking-.25px block">電子信箱</label>
              <input type="mail" id="mail" class="text-3.5 md:text-4 w-full h-14 rounded-2 p-4  border-none text-gray-60"
                placeholder="請輸入電子信箱">
            </div>
            <div class="">
              <label for="address" class="text-3.5 md:text-4 mb-4 font-700 leading-6 tracking-.25px block">地址</label>
              <div class="flex gap-2 mb-4">
                <select class="w-1/2 rounded-2 h-14 p-4 border-none text-gray-60 text-3.5 md:text-4">
                  <option selected disabled>請選擇縣市</option>
                  <option value="臺北市">臺北市</option>
                  <option value="臺中市">臺中市</option>
                  <option value="高雄市">高雄市</option>
                </select>
                <select class="w-1/2 rounded-2 h-14 p-4 border-none text-gray-60 text-3.5 md:text-4">
                  <option selected disabled>請選擇區域</option>
                  <option value="前金區">前金區</option>
                  <option value="鹽埕區">鹽埕區</option>
                  <option value="新興區">新興區</option>
                </select>
              </div>
              <input type="text" id="address" class="w-full h-14 rounded-2 p-4 border-none text-gray-60 text-3.5 md:text-4"
                placeholder="請輸入詳細地址">
            </div>
          </div>
          <hr class="mb-10 bg-gray-60 w-full h-1px border-none">
          <div class="roomInfo">
            <h2 class="text-5 mb-8 md:(text-7 mb-10) leading-8.5 tracking-.5px font-700">房間資訊</h2>
            <div class="mb-6">
              <h2
                class="text-4 leading-6 mb-4 md:(mb-6 text-6  leading-7.2) flex items-center gap-3 font-bold tracking-.25px before:(content-[''] block w-1 h-6 bg-primary transform-translate-y-10%)">
                房型基本資訊</h2>
              <RoomInfo :roomInfoData="infoData" :bg-white="true" />
            </div>
            <div class="flex flex-col gap-6 ">

              <RoomDetailCheck title="房間格局" :detailCheckData="roomlayoutInfo" />
              <RoomDetailCheck title="房內設備" :detailCheckData="roomlayoutInfo" />
              <RoomDetailCheck title="備品提供" :detailCheckData="roomlayoutInfo" />
            </div>
          </div>

        </div>


        <!-- 右側 -->
        <div class="sticky top-15% max-w-478px w-full max-h-678px p-6 rounded-5 md:(p-10 rounded-2) bg-white">
          <div class="rounded-2 mb-6 md:mb-10  overflow-hidden h-272px">
            <picture>
              <source media="max-width:768px" srcset="@/public/images/room-a-sm-1.png">
              <img class="object-cover w-full h-full" src="@/public/images/room-a-1.png" alt="">
            </picture>
          </div>
          <div class="mb-10">
            <h2 class="text-5 leading-6 md:(text-7 leading-8.5) font-700 tracking-.25px mb-6">價格詳情</h2>
            <div class="priceDetail mb-6">
              <ul class="flex justify-between mb-3">
                <li>NT$ 10,000 x 2 晚</li>
                <li>NT$ 20,000 </li>
              </ul>
              <ul class="flex justify-between">
                <li>住宿折扣</li>
                <li class="text-primary">-NT$ 1,000 </li>
              </ul>
            </div>
            <hr class="mb-6 bg-gray-40 w-full h-1px border-none">
            <div class="priceTotal">
              <ul class="flex justify-between mb-3 font-700 leading-6 tracking-.25px">
                <li>總價</li>
                <li>NT$ 19,000 </li>
              </ul>
            </div>
          </div>
          <button type="button"
            class="bg-primary py-4 w-full text-white rounded-2 border-none font-700 leading-6 tracking-.25px cursor-pointer hover:(translate-y-5% opacity-80) duration-300">確認訂房</button>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped></style>