<script setup>
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

</script>
<template>
    <section class="fixed top-0 left-0 w-100dvw h-100dvh bg-gray bg-op-50 backdrop-blur-2">
        <div
            class="absolute max-w-740px w-full top-50% left-50% -transform-translate-x-50% -transform-translate-y-50% bg-white rounded-5 p-8">
            <div class="flex mb-10">
                <div class="w-40%">
                    <h2 class="text-6 leading-7.2 tracking-5px  font-bold mb-2">1晚</h2>
                    <ul class="flex gap-2 text-4 leading-6">
                        <li>2023/ 12 / 03</li>
                        <li>~</li>
                        <li>2023/ 12 / 04</li>
                    </ul>
                </div>
                <div class="w-60% flex gap-2">
                    <div class="border-(1px solid #000) p-4 rounded-2 w-full">
                        <p class="text-3 leading-4.5 text-gray-80 ">入住</p>
                        <p class="text-4 leading-6">2023/ 12 / 03</p>
                    </div>
                    <div class="border-(1px solid #000) p-4 rounded-2 w-full">
                        <p class="text-3 leading-4.5 text-gray-80 ">退房</p>
                        <p class="text-4 leading-6">2023/ 12 / 03</p>
                    </div>
                </div>
            </div>
            <!-- 選日期 -->
            <div class="w-full mb-10">

                <DatePicker expanded :columns="2"  class="border-none" />
            </div>

            <!-- 確認按鈕 -->
           <div class="flex justify-end gap-4">
               <button type="button" class="text-4 leading-6 font-bold text-center text-white  bg-gray-80 px-8 py-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">清除日期</button>
                <button type="button" class="text-4 leading-6 font-bold text-center text-white  bg-primary px-8 py-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">確定日期</button>
           </div>
        </div>

    </section>
</template>
<style scoped></style>