<script setup>

// 房間
const roomDetailInfo = [
  {
    spImg: "/_nuxt/public/images/room-a-sm-1.png",
    pcImg: "/_nuxt/public/images/room-a-1.png",
  },
  {
    spImg: "/_nuxt/public/images/room-a-sm-2.png",
    pcImg: "/_nuxt/public/images/room-a-2.png",
  },
  {
    spImg: "/_nuxt/public/images/room-a-sm-3.png",
    pcImg: "/_nuxt/public/images/room-a-3.png",
  },
  {
    spImg: "/_nuxt/public/images/room-a-sm-4.png",
    pcImg: "/_nuxt/public/images/room-a-4.png",
  },
  {
    spImg: "/_nuxt/public/images/room-a-sm-5.png",
    pcImg: "/_nuxt/public/images/room-a-5.png",
  },

];

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

const knowList = [
  { txt: '入住時間為下午3點，退房時間為上午12點。' },
  { txt: '如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。' },
  { txt: '請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。' },
  { txt: '若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。' },
  { txt: '請愛惜我們的房間與公共空間，並保持整潔。' },
  { txt: '如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。' },
  { txt: '我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。' },
  { txt: '請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。' },
  { txt: '我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。' },
  { txt: '為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。' },
]

const isBolean = ref(false);


// 外層用的資料
const bookingInfo = reactive({
  date: {
    start: new Date(),
    end: null,
  },
  dayCount: 0,
  checkPeople: 1,
});
// 最大入住人數
const MAX_BOOKING_PEOPLE = 10;
// 取出 model 訂房日期資料
const handleDateChange = (bookingDate) => {

  const { start, end } = bookingDate.date;
  bookingInfo.date.start = start;
  bookingInfo.date.end = end;
  bookingInfo.dayCount = bookingDate.dayCount;
  bookingInfo.checkPeople = bookingDate.people || 1;
};
function numberTitle(num) {
  // toLocaleString() 方法返回這個『數字』在特定語言環境下的表示字符串。
  return num.toLocaleString()
}
// 只顯示月＆日
const dateTitle =(date)=>{
  return date.split('-').slice(1).join(' - ')
}
</script>
<template>
  <main class="mt-18 md:( mt-30) bg-primary-10">

    <section class="w-full hidden md:(block p-10) lg:(p-20) ">
      <div class="flex rounded-5 gap-2 overflow-hidden">
        <picture class="max-w-978px w-full">
          <source media="max-width:768px" :srcset="`${roomDetailInfo[0].spImg}`">
          <img class="object-cover w-full h-full" :src="`${roomDetailInfo[0].pcImg}`" alt="">
        </picture>
        <ul class="flex gap-2 flex-wrap w-62%">
          <li v-for="item in 4" :key="item" class="w-49%">
            <picture>
              <source media="max-width:768px" :srcset="roomDetailInfo[item].spImg">
              <img class="object-cover w-full h-full" :src="roomDetailInfo[item].pcImg" alt="">
            </picture>
          </li>
        </ul>
      </div>
    </section>
    <RoomInfoCarousel class="md:(hidden)" :room-detail-info="roomDetailInfo" />
    <!-- 房型內容 ＆ 預定時間 -->
    <section>
      <div class="max-w-1296px mx-auto py-10 px-3 md:(px-8 py-20) lg:(py-30 px-0)">
        <div class="flex gap-18 ">
          <!-- 詳細介紹 -->
          <div class="max-w-746px">
            <div class="mb-6 md:(mb-20)">
              <h2 class="text-8 leading-9.5 md:(text-12 leading-14.5) font-bold mb-4">尊爵雙人房</h2>
              <p class="text-3.5 tracking-.5px md:(text-4) text-gray-80 leading-6">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            </div>
            <div class="flex flex-col gap-6 md:(gap-13) lg:(gap-20)">

              <RoomDetailCheck title="房間格局" :detailCheckData="roomlayoutInfo" />
              <RoomDetailCheck title="房內設備" :detailCheckData="roomlayoutInfo" />
              <RoomDetailCheck title="備品提供" :detailCheckData="roomlayoutInfo" />
              <div>

                <h2
                  class="text-6 leading-7.2 mb-6 flex items-center gap-3 font-bold tracking-.25px before:(content-[''] block w-1 h-6 bg-primary transform-translate-y-10%)">
                  訂房須知</h2>
                <ol class="list-decimal  pl-6   ">
                  <li v-for="item in knowList" :key="item" class="text-gray-80 text-4 leading-6 tracking-.25px">{{
                    item.txt }}</li>
                </ol>
              </div>
            </div>
          </div>
          <!-- 預定時間 -->
          <div class="hidden md:block">
            <div class="sticky top-15%  bg-white rounded-5 p-10 ">
              <div class="title mb-10">
                <p class="text-6 leading-7.2  tracking-.25px mb-4 font-bold">預訂房型</p>
                <hr class="bg-gray-40 mb-10">
                <h2 class="text-10 leading-12 text-gray-80 tracking-.25px font-bold mb-2">尊爵雙人房</h2>
                <p class="text-4 leading-6 tracking-.25px text-gray-80">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
              </div>

              <div class="chooseDate flex gap-2 mb-4">
                <!-- 入住 -->
                <div @click="isBolean = !isBolean"
                  class="group p-4 rounded-2 border-(1px solid #000) cursor-pointer w-full hover:(bg-dark text-white ) group-hover:( text-white) duration-300">
                  <label for="#checkIn"
                    class="pointer-events-none block text-3.5 leading-4.5 cursor-pointer ">入住</label>
                  <input id="checkIn" type="date" placeholder="yyyy/mm/dd"
                    class="pointer-events-none border-none text-4 leading-6 tracking-.25px bg-transparent cursor-pointer  group-hover:( text-white)"
                    readonly disabled :value="bookingInfo.date.start">
                </div>
                <!-- 退房 -->
                <div @click="isBolean = !isBolean"
                  class="group p-4 rounded-2 border-(1px solid #000) cursor-pointer w-full hover:(bg-dark text-white ) group-hover:( text-white) duration-300">
                  <label for="#checkOut"
                    class="pointer-events-none block text-3.5 leading-4.5 cursor-pointer ">退房</label>
                  <input id="checkOut" type="date" placeholder="yyyy/mm/dd"
                    class="pointer-events-none border-none text-4 leading-6 tracking-.25px bg-transparent cursor-pointer  group-hover:( text-white)"
                    readonly disabled :value="bookingInfo.date.end">
                </div>
              </div>
              <section class="text-4 leading-6 font-bold tracking-.25px text-gray-80 text-right mb-4">
                <span :class="bookingInfo.dayCount === 0 ? 'hidden' : 'inline-block'">共 {{ bookingInfo.dayCount }} 晚 /
                </span>
                <span> ( 1晚 NT$ 10,000 )</span>
              </section>
              <!-- 人數 -->
              <div class="choosePeople flex justify-between items-center mb-10">
                <p class="text-4 leading-6 font-bold tracking-.25px">人數</p>
                <div class="flex gap-4 items-center">
                  <button type="button" :disabled="bookingInfo.checkPeople === 1" @click="bookingInfo.checkPeople--"
                    :class="bookingInfo.checkPeople === 1 ? 'text-gray-40 hover:(bg-transparent)  ' : ' hover:(bg-dark )'"
                    class=" group w-14 h-14 border-(1px solid #ececec) rounded-full p-4 relative bg-transparent cursor-pointer group-hover:(text-gray-40 border-color-transparent)) duration-300">
                    <i :class="bookingInfo.checkPeople === 1 ? 'text-gray-40' : 'text-dark'"
                      class="i-material-symbols:check-indeterminate-small text-6 inline-block absolute top-50% left-50% -transform-translate-x-50% -transform-translate-y-50% group-hover:(text-gray-40 border-color-transparent))"></i>
                  </button>
                  <h6>{{ bookingInfo.checkPeople }}</h6>
                  <button type="button" :disabled="bookingInfo.checkPeople === MAX_BOOKING_PEOPLE"
                    @click="bookingInfo.checkPeople++"
                    :class="bookingInfo.checkPeople === MAX_BOOKING_PEOPLE ? 'text-gray-40 hover:(bg-transparent)  ' : ' hover:(bg-dark )'"
                    class=" group w-14 h-14 border-(1px solid #ececec) rounded-full p-4 relative bg-transparent cursor-pointer  group-hover:(text-gray-40 border-color-transparent)) duration-300">
                    <i :class="bookingInfo.checkPeople === MAX_BOOKING_PEOPLE ? 'text-gray-40' : 'text-dark'"
                      class="i-material-symbols:add text-6 inline-block absolute top-50% left-50% -transform-translate-x-50% -transform-translate-y-50% group-hover:(text-gray-40 border-color-transparent))"></i>
                  </button>
                </div>
              </div>

              <!-- 總價錢 -->
              <h2 class="text-6 leading-7.2 tracking-.25px text-primary font-bold mb-10 ">NT$
                <span :class="bookingInfo.dayCount !== 0 ? 'hidden' : 'inline'"> {{ numberTitle(10000 *
                  bookingInfo.checkPeople) }}</span>
                <span :class="bookingInfo.dayCount === 0 ? 'hidden' : 'inline'">{{ numberTitle(10000 *
                  bookingInfo.dayCount
                  * bookingInfo.checkPeople) }}</span>
              </h2>

              <button type="button"
                class="text-4 leading-6 font-bold text-center text-white w-full bg-primary p-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">立即預訂</button>

            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="md:hidden fixed bottom-0 left-0 w-full z-5  bg-white border-t-(1px solid #ececec) p-3">
      <div v-if="bookingInfo.dayCount === 0">
        <div class="flex items-center justify-between ">

          <p class="w-1/2 text-3.5 leading-5.5 tracking-.25px">
            ＮＴ$ 10,000 / 晚
          </p>
          <button type="button" @click="isBolean = !isBolean"
            class="text-4 leading-6 font-bold text-center text-white w-1/2 bg-primary p-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">
            查看可訂日期
          </button>
        </div>
      </div>

      <div v-else>
        <div class="flex items-center justify-between">
          <div class="w-1/2 text-3.5 leading-5.5 tracking-.25px">
            <p class="mb-2"> ＮＴ$ 10,000 / {{ bookingInfo.dayCount }}晚 / {{ bookingInfo.checkPeople }}人</p>
            <p>{{ dateTitle(bookingInfo.date.start) }} ~ {{ dateTitle(bookingInfo.date.end) }}</p>
          </div>
          <button type="button"
            class="text-4 leading-6 font-bold text-center text-white w-1/2 bg-primary p-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">
            立即預訂
          </button>
        </div>
      </div>

    </section>
    <!-- checkDate Model -->
    <RoomDateModel :openModel="isBolean" @update:open-model="handleDateChange" />
  </main>
</template>
<style scoped></style>