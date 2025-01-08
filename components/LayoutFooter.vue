<script setup >
const contentList = [
  {
    title: "TEL",
    txt: "+886-7-1234567",
  },
  {
    title: "MAIL",
    txt: "elh@hexschool.com",
  },
  {
    title: "FAX",
    txt: "+886-7-1234567",
  },
  {
    title: "WEB",
    txt: "www.elhhexschool.com.tw",
  },
];
</script>

<template>
  <section class="bg-gray-120 py-20 px-3 md:(px-0 p-t-20 p-b-30) text-white">
    <div class="max-w-1296px mx-auto" >
      <div class="flex flex-col md:flex-row justify-between mb-20">
        <!-- logo + icon -->
         <div class="flex flex-col mb-10 md:mb-0">
            <NuxtLink to="/" class="hover-opacity-90 duration-300 block w-100% mb-10">
              <img src="@/assets/images/logo-white.svg" alt="享樂酒店 Enjoyment Luxury Hotel">
            </NuxtLink>
            <ul class="flex gap-4">
              <li class="border-(1 solid white)  p-2 rounded-full hover-opacity-90 duration-300 cursor-pointer">
                <div class="i-bi:line text-size-6"></div>
              </li>
              <li class="border-(1 solid white) p-2 rounded-full hover-opacity-90 duration-300 cursor-pointer">
                <div class="i-bi:instagram text-size-6  "></div>
              </li>
            </ul>
          </div>
        <!-- contact -->
         <ul class="flex flex-col md:flex-row gap-row-4 md:gap-row-10 gap-col-20 max-w-424px flex-wrap">
          <li v-for="item in contentList" :key="item.title"  class="cursor-pointer hover-opacity-90 duration-300 mb-4 md:mb-0"> 
            <h2 class="mb-2">{{ item.title }}</h2>
            <p class="text-size-14px md:text-size-4 opacity-90">{{ item.txt }}</p>
          </li>
         </ul>
      </div>

      <ul class="flex flex-col md:flex-row justify-between">
        <li class="mb-4 md:mb-0">806023 台灣高雄市新興區六角路123號</li>
        <li>© 享樂酒店 2023 All Rights Reserved.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
