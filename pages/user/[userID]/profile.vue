<script setup>
definePageMeta({
  layout: 'user-layout'
})

const isEditPassword = ref(false);
const isEditProfile = ref(false);
const cityDate = ['新北市', '台中市', '高雄市']
const districtDate = ['土城區', '大甲區', '前鎮區']
</script>
<template>
  <main class="bg-gray-120 px-3 py-10 md:(pt-20 pb-30)">
    <div class=" max-w-1297px mx-auto">
      <div class="flex flex-col gap-6 md:(flex-row gap-10)">
        <!-- 密碼 -->
        <div class=" bg-white p-6 md:( p-10) rounded-5 max-w-527px w-full h-full">
          <h2 class="text-5 leading-6 mb-6 md:(text-6 leading-7.5 mb-10)  font-700">修改密碼</h2>
          <div class="flex flex-col gap-2 mb-4 md:mb-6">
            <label for="mail" class="text-3.5 leading-5.5 md:(text-4 leading-6)">電子信箱</label>
            <input type="email" id="mail" value="Jessica@exsample.com" readonly disabled
              class="border-none color-dark font-700 text-3.5 md:text-4 leading-6 bg-transparent" />
          </div>
          <div v-if="!isEditPassword" class="flex items-center justify-between ">
            <div class="flex flex-col gap-2 w-2/3">
              <label for="password" class="text-3.5 leading-5.5 md:(text-4 leading-6)">密碼</label>
              <input type="password" id="password" value="12345689" readonly disabled
                class=" border-none color-dark tracking-1.5 bg-transparent" />
            </div>
            <div @click="isEditPassword = !isEditPassword"
              class="text-4 leading-6 w-1/3 text-right text-primary decoration-underline cursor-pointer hover:(opacity-70 translate-y-5%) duration-300">
              重設</div>
          </div>
          <div v-else>
            <div class="flex flex-col gap-2 mb-6">
              <label for="oldPassword" class=" text-3.5 leading-5.5 md:(text-4 leading-6)">舊密碼</label>
              <input type="password" id="oldPassword" placeholder="請輸入舊密碼"
                class="p-4 rounded-2 text-3.5 md:text-4 border-(1px solid gray-40) color-dark " />
            </div>
            <div class="flex flex-col gap-2 mb-6">
              <label for="newPassword" class=" text-3.5 leading-5.5 md:(text-4 leading-6)">新密碼</label>
              <input type="password" id="newPassword" placeholder="請輸入新密碼"
                class="p-4 rounded-2 text-3.5 md:text-4 border-(1px solid gray-40) color-dark " />
            </div>
            <div class="flex flex-col gap-2 mb-6">
              <label for="checkPassword" class=" text-3.5 leading-5.5 md:(text-4 leading-6)">確認新密碼</label>
              <input type="password" id="checkPassword" placeholder="請再輸入一次新密碼"
                class="p-4 rounded-2 text-3.5 md:text-4 border-(1px solid gray-40) color-dark " />
            </div>
            <div @click="isEditPassword = !isEditPassword"
              class="text-4 leading-6 py-4 px-8 w-full text-center md:(w-auto) rounded-2  bg-gray-40 text-gray-60 cursor-pointer inline-block duration-300">
              儲存設定
            </div>
          </div>
        </div>
        <!-- 基本資料 -->
        <div class="bg-white rounded-5  p-6 md:( p-10) w-full h-full">
          <h2 class="text-5.leading-6 text-5 leading-6 mb-6 md:(text-6 leading-7.5 mb-10)  font-700">基本資料</h2>
          <ul class="flex flex-col gap-4 mb-6 md:(gap-6 mb-10)">
            <li class="flex flex-col gap-2">
              <label for="name" class=" text-3.5 leading-5.5 md:(text-4 leading-6)">姓名</label>

              <input type="text" id="name" value="Jessica Wang" readonly disabled v-if="!isEditProfile"
                class="border-none color-dark font-700 text-3.5 md:(text-4 ) leading-6 bg-transparent" />
              <input type="text" id="name" placeholder="請輸入姓名" v-else
                class=" p-4 rounded-2 border-(1px solid gray-40) color-dark " />

            </li>
            <li class="flex flex-col gap-2">
              <label for="phone" class=" text-3.5 leading-5.5 md:(text-4 leading-6)">手機號碼</label>
              <input type="tel" id="phone" value="+886 912 345 678" readonly disabled v-if="!isEditProfile"
                class="border-none color-dark font-700 text-3.5 md:(text-4 )  leading-6 bg-transparent" />
              <input type="text" id="phone" placeholder="請輸入手機號碼" v-else
                class=" p-4 rounded-2 border-(1px solid gray-40) color-dark " />
            </li>
            <li class="flex flex-col gap-2">
              <label for="birthday" class=" text-3.5 leading-5.5 md:(text-4 leading-6)">生日</label>
              <p v-if="!isEditProfile" class="font-700 text-3.5 md:(text-4 ) leading-6">1990 年 6 月 15 日</p>
              <div v-else class="flex gap-2">
                <!-- 西元年份  -->
                <select name="birthYear" id="birthday"
                  class="w-full bg-white rounded-2 border-(1px solid gray-40) p-4 color-gray-60">
                  <option v-for="year in 130" :key="year" :value="`${year + 1911}年`">
                    {{ year + 1911 }}年
                  </option>
                </select>
                <!-- 月份 -->
                <select class="w-full bg-white rounded-2 border-(1px solid gray-40) p-4 color-gray-60">
                  <option v-for="month in 12" :key="month" :value="`${month}月`">
                    {{ month }}月
                  </option>
                </select>
                <!-- 日期 -->
                <select class="w-full bg-white rounded-2 border-(1px solid gray-40) p-4 color-gray-60">
                  <option v-for="day in 31" :key="day" :value="`${day}日`">
                    {{ day }}日
                  </option>
                </select>
              </div>
            </li>
            <li class="flex flex-col gap-2">
              <label for="address" class=" text-3.5 leading-5.5 md:(text-4 leading-6)">地址</label>

              <p v-if="!isEditProfile" class="font-700 text-3.5 md:(text-4 ) leading-6">
                台北市大安區復興南路一段 390 號
              </p>
              <div v-else>

                <div class="flex gap-2 mb-4">
                  <!-- 縣市 -->
                  <select name="city" id="address"
                    class="w-full bg-white rounded-2 border-(1px solid gray-40) p-4 color-gray-60">
                    <option v-for="city in cityDate" :key="city" :value="city">{{ city }}</option>
                  </select>
                  <!-- 區域 -->
                  <select name="district"
                    class="w-full bg-white rounded-2 border-(1px solid gray-40) p-4 color-gray-60">
                    <option v-for="district in districtDate" :key="district" :value="district">{{ district }}</option>
                  </select>
                </div>
                <input type="text" class=" w-full bg-white rounded-2 border-(1px solid gray-40) p-4 color-gray-60"
                  placeholder="請輸入詳細地址">
              </div>
            </li>
          </ul>
          <button type="button" @click="isEditProfile = !isEditProfile" v-if="!isEditProfile"
            class="text-4 leading-6 text-primary cursor-pointer px-8 py-4 rounded-2 border-(1px solid primary) bg-transparent hover:(opacity-70 translate-y-5% bg-primary text-white) duration-300">
            編輯
          </button>
          <div @click="isEditProfile = !isEditProfile" v-else
            class="text-4 leading-6 py-4 px-8 w-full text-center md:(w-auto) rounded-2 bg-gray-40 text-gray-60 cursor-pointer inline-block duration-300">
            儲存設定
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
#password {
  font: small-caption;
  font-size: 2rem;
  line-height: 1.5rem;
}

@media (max-width: 768px) {
  #password {
    font-size: 1.5rem;

  }

}
</style>