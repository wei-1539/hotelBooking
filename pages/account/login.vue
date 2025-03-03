<script setup>
const isChecked = ref(false);
const isLogin = ref(false);
</script>
<template>
  <section class="w-full h-full bg-gray-120">
    <div
      class="max-w-1920px mx-auto flex items-center pt-40 pb-20 md:(py-30) relative"
    >
      <picture class="absolute top-10% right-0 w-full xl:(w-1/2)">
        <source
          media="(max-width:768px)"
          srcset="@/public/images/deco/login-line.svg"
        />
        <img
          class="w-full object-cover"
          src="@/public/images/deco/login-line-web.svg"
          alt=""
        />
      </picture>
      <div class="hidden xl:(block w-50%)">
        <img src="@/public/images/login-hero.png" alt="" />
      </div>
      <div class="w-full px-5 xl:(px-0 w-50%) relative">
        <div class="max-w-416px mx-auto">
          <p
            class="text-3.5 leading-5.5 md:(text-4 leading-4) mb-2 text-primary"
          >
            享樂酒店，誠摯歡迎
          </p>
          <h2
            class="text-8 leading-9.6 tracking-.5 md:(text-12 leading-14.4) mb-10 text-white font-bold"
          >
            立即開始旅程
          </h2>
          <form class="mb-10">
            <label
              class="block text-white text-3.5 md:(text-4) tracking-.25 leading-6 font-bold mb-2"
              for="mail"
              >電子信箱</label
            >
            <input
              class="w-full bg-white rounded-2 p-4 color-gray-60 mb-4"
              type="mail"
              id="mail"
              placeholder="hello@exsample.com"
            />
            <label
              class="block text-white text-3.5 md:(text-4) tracking-.25 leading-6 font-bold mb-2"
              for="password"
              >密碼</label
            >
            <input
              class="w-full bg-white rounded-2 p-4 color-gray-60 mb-4"
              type="password"
              id="password"
              placeholder="請輸入密碼"
            />

            <div class="flex justify-between items-center mb-10">
              <div class="flex items-center">
                <input
                  class="w-6 h-6 rounded-2 mr-2"
                  v-model="isChecked"
                  type="checkbox"
                  id="remember"
                  :class="{ checking: isChecked }"
                />
                <label
                  class="text-4 leading-6 font-bold text-white"
                  for="remember"
                  >記住帳號</label
                >
              </div>
              <NuxtLink
                class="text-4 leading-6 text-primary"
                to="/account/register"
                >忘記密碼？</NuxtLink
              >
            </div>
            <button
              class="text-4 leading-6  rounded-2 py-4 block w-full text-center cursor-pointer duration-300"
              :class="{'bg-primary text-white':isLogin,'bg-white':!isLogin}"
              type="button"
            >
              會員登入
            </button>
          </form>

          <div class="flex">
            <p class="text-4 leading-6 text-white mr-2">沒有會員嗎？</p>

            <NuxtLink
              class="text-4 leading-6 text-primary"
              to="/account/register"
              >前往註冊</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
::v-deep(input[id="remember"]) {
  appearance: none;
  position: relative;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 2px;  transition: all .3s;
}
::v-deep(input[id="remember"]:checked) {
  /* 清除原生樣式 */
  border: 1px solid #bf9d7d;
  background-color: #bf9d7d;
}
/* 使用 ::before 來畫出打勾符號 */
::v-deep(input[id="remember"]::before) {
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
::v-deep(input[id="remember"]:checked:before) {
  opacity: 1;
  }
</style>