<script setup>
const isChecked = ref(false);
const isValid = ref(false);
const nextForm = ref(false);
// function checkNext() {
//   nextForm.value = !nextForm.value;
// }
const cityDate = ['新北市', '台中市', '高雄市']
const districtDate = ['土城區', '大甲區', '前鎮區']


// 輸出個人資料表格
const profileForm = ref({
  name: "",
  email: "",
  password: "",
  phone: "",
  birthday: "",
  address: {
    zipcode: "",
    detail: "",
  }
})
// 確認第二次密碼
const confirmPassword = ref('')
import { required } from '@vee-validate/rules';
// const profileForm = ref({
// 引入vee-validate 語法
import { Field, Form, ErrorMessage, } from 'vee-validate'
// 確認密碼 與 確認密碼 一致才能前往下一步
watchEffect(() => {
  // 驗證 email 格式的正規表達式
  const emailCheck = /^\S+@\S+\.\S+$/

  // 驗證密碼是否一致
  const isPasswordMatch = profileForm.value.password === confirmPassword.value;
  // 驗證 email 格式 & 密碼是否一致
  isValid.value = emailCheck.test(profileForm.value.email) && isPasswordMatch

})
const checkNextForm = () => {

  if (isValid.value) {
    nextForm.value = !nextForm.value;
    console.log('下一步')
  } else {
    alert('請檢查信箱格式或密碼是否一致')
  }
}
// const { value: password, errorMessage: passwordError } = useField('password', 'required|min:6')

</script>
<template>
  <section class="w-full h-full bg-gray-120">
    <div class="max-w-1920px mx-auto flex items-center py-20 md:(py-30) relative">
      <picture class="absolute top-10% right-0 w-full xl:(w-1/2)">
        <source media="(max-width:768px)" srcset="@/public/images/deco/login-line.svg" />
        <img class="w-full object-cover" src="@/public/images/deco/login-line-web.svg" alt="" />
      </picture>
      <div class="hidden xl:(block w-50%)">
        <img src="@/public/images/login-hero.png" alt="" />
      </div>
      <div class="w-full px-5 xl:(px-0 w-50%) relative z-2">
        <div class="max-w-416px mx-auto">
          <p class="text-3.5 leading-5.5 md:(text-4 leading-4) mb-2 text-primary">
            享樂酒店，誠摯歡迎
          </p>
          <h2 class="text-8 leading-9.6 tracking-.5 md:(text-12 leading-14.4) mb-10 text-white font-bold">
            立即註冊
          </h2>

          <div class="mb-10 flex gap-2 items-center justify-between">
            <div class="flex gap-1 flex-col items-center">
              <p class="bg-primary rounded-full w-32px h-32px leading-8 text-white text-center relative">
                <span v-if="!nextForm">1</span>
                <i v-else
                  class="i-mdi:check text-white w-24px h-24px block absolute top-50% left-50% -transform-translate-x-50% -transform-translate-y-50%"></i>
              </p>
              <p class="text-white leading-6 font-bold text-3.5 md:text-4">輸入信箱及密碼</p>
            </div>
            <div class="h-2px max-w-133px md:(max-w-188px) w-full rounded-2.5 bg-gray-60"></div>
            <div class="flex gap-1 flex-col items-center">
              <p class="rounded-full w-32px h-32px leading-8 text-gray-60 text-center" :class="{
                'text-white bg-primary border-none': nextForm,
                'border-(1px solid #909090)': !nextForm,
              }">
                2
              </p>
              <p class="text-gray-60 leading-6 font-bold text-3.5 md:text-4" :class="{ 'text-white': nextForm }">
                填寫基本資料
              </p>
            </div>
          </div>

          <!-- 表單 -->
          <Form v-if="!nextForm" class="mb-4">
            <label class="block text-white text-3.5 md:(text-4) tracking-.25 leading-6 font-bold mb-2"
              for="email">電子信箱</label>
            <div class="relative mb-4">
              <Field name="信箱" :rules="'required|email'" v-model="profileForm.email"
                class="w-full bg-white rounded-2 p-4 color-gray-60 " type="email" id="email"
                placeholder="hello@exsample.com" />
              <ErrorMessage name="信箱"
                class="text-red-500 font-700 text-3.5 absolute top-50% right-2.5% -translate-y-50%" />
            </div>

            <label class="block text-white text-3.5 md:(text-4) tracking-.25 leading-6 font-bold mb-2"
              for="password">密碼</label>
            <div class="relative mb-4">
              <Field name="密碼" v-slot="{ field, errorMessage }" :rules="'required|min:6'">
                <input v-bind="field" @input="profileForm.password = field.value"
                  class="w-full bg-white rounded-2 p-4 color-gray-60" type="password" id="password"
                  placeholder="請輸入密碼" />
                <span v-if="errorMessage"
                  class="text-red-500 font-700 text-3.5 absolute top-50% right-2.5% -translate-y-50%">
                  {{ errorMessage }}
                </span>
              </Field>
            </div>

            <label class="block text-white text-3.5 md:(text-4) tracking-.25 leading-6 font-bold mb-2"
              for="checkPassword">確認密碼</label>
            <div class="relative mb-10">
              <Field name="確認密碼" :rules="'required|min:6|max:10'" v-slot="{ field, errorMessage }">
                <input v-bind="field" @input="confirmPassword = field.value"
                  class="w-full bg-white rounded-2 p-4 color-gray-60" type="password" id="checkPassword"
                  placeholder="請再輸入一次密碼" />
                <span v-if="errorMessage"
                  class="text-red-500 font-700 text-3.5 absolute top-50% right-2.5% -translate-y-50%">
                  {{ errorMessage }}
                </span>
              </Field>

            </div>

            <button class="text-4 leading-6 rounded-2 py-4 block w-full text-center cursor-pointer duration-300"
              @click="checkNextForm" type="button">
              下一步
            </button>
          </Form>

          <!-- 第二階段 -->
          <div v-else>
            <Form>
              <label class="block text-white text-3.5 md:(text-4) tracking-.25 leading-6 font-bold mb-2"
                for="name">姓名</label>
              <div class="relative mb-4">

                <Field name="姓名" :rules="'required'" class="w-full bg-white rounded-2 p-4 color-gray-60" type="text"
                  id="name" placeholder="請輸入姓名" />
                <ErrorMessage name="姓名"
                  class="text-red-500 font-700 text-3.5 absolute top-50% right-2.5% -translate-y-50%" />
              </div>

              <label class="block text-white text-3.5 md:(text-4) tracking-.25 leading-6 font-bold mb-2"
                for="phone">號碼</label>
              <div class="relative mb-4">
                <Field name="號碼" :rules="'required|phone'" class="w-full bg-white rounded-2 p-4 color-gray-60" type="tel" id="phone"
                  placeholder="請輸入手機號碼" />
                <ErrorMessage name="號碼"
                  class="text-red-500 font-700 text-3.5 absolute top-50% right-2.5% -translate-y-50%" />

              </div>

              <label class="block text-white text-3.5 md:(text-4) tracking-.25 leading-6 font-bold mb-2"
                for="birthday">生日</label>
              <div class="flex gap-2 mb-4">
                <!-- 西元年份  -->
                <select name="birthYear" id="birthday" class="w-full bg-white rounded-2 p-4 color-gray-60">
                  <option v-for="year in 130" :key="year" :value="`${year + 1911}年`">
                    {{ year + 1911 }}年
                  </option>
                </select>
                <!-- 月份 -->
                <select class="w-full bg-white rounded-2 p-4 color-gray-60">
                  <option v-for="month in 12" :key="month" :value="`${month}月`">
                    {{ month }}月
                  </option>
                </select>
                <!-- 日期 -->
                <select class="w-full bg-white rounded-2 p-4 color-gray-60">
                  <option v-for="day in 31" :key="day" :value="`${day}日`">
                    {{ day }}日
                  </option>
                </select>
              </div>

              <label class="block text-white text-3.5 md:(text-4) tracking-.25 leading-6 font-bold mb-2"
                for="address">地址</label>
              <div class="flex gap-2 mb-4">
                <!-- 縣市 -->
                <select name="city" id="address" class="w-full bg-white rounded-2 p-4 color-gray-60">
                  <option v-for="city in cityDate" :key="city" :value="city">{{ city }}</option>
                </select>
                <!-- 區域 -->
                <select name="district" class="w-full bg-white rounded-2 p-4 color-gray-60">
                  <option v-for="district in districtDate" :key="district" :value="district">{{ district }}</option>
                </select>
              </div>
              <input type="text" class="mb-4 w-full bg-white rounded-2 p-4 color-gray-60" placeholder="請輸入詳細地址">
            </form>
            <div class="flex items-center mb-10">
              <input class="w-6 h-6 rounded-2 mr-2 cursor-pointer" v-model="isChecked" type="checkbox" id="agree"
                :class="{ checking: isChecked }" />
              <label class="text-4 leading-6 font-bold text-white cursor-pointer" for="agree">我已閱讀並同意本網站個資使用規範</label>
            </div>

            <button
              class=" bg-primary text-white text-4 leading-6  rounded-2 py-4 block w-full text-center cursor-pointer duration-300 mb-4"
              type="button">
              完成註冊
            </button>
          </div>

          <div class="flex">
            <p class="text-4 leading-6 text-white mr-2">已經有會員了嗎？</p>

            <NuxtLink class="text-4 leading-6 text-primary" to="/account/login">立即登入</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
::v-deep(input[id="agree"]) {
  appearance: none;
  position: relative;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 2px;
  transition: all .3s;
}

::v-deep(input[id="agree"]:checked) {
  /* 清除原生樣式 */
  border: 1px solid #bf9d7d;
  background-color: #bf9d7d;
}

/* 使用 ::before 來畫出打勾符號 */
::v-deep(input[id="agree"]::before) {
  content: "\2714";
  color: #fff;
  position: absolute;
  font-size: 1rem;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0;
}

/* 當 checkbox 被選中時，顯示打勾 */
::v-deep(input[id="agree"]:checked:before) {
  opacity: 1;
}
</style>
