<script setup>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
// --------------------

// 接收外部資料
const props = defineProps({
    openModel: {
        type: Boolean,
        default: false,
    },
})
// 傳送內部資料
const emit = defineEmits(['update:openModel']);
// 連動狀態
const model = ref(props.openModel);
// 監聽外部資料
watch(() => props.openModel, (newVal) => {
    model.value = newVal;
})
// 關閉視窗
const closeModel = () => {
    model.value = !props.openModel;
}
// --------------------
// 訂房時間資料
const tempDate = reactive({
    date: {
        start: null,
        end: null,
    },
    minDate: new Date(),
    maxDate: new Date().setDate(new Date().getDate() + 60),
    key: 0,
});
// 訂房年月處理
const masks = {
    modelValue: 'YYYY-MM-DD'
}
// 改變日期格式
const formatDateTitle = (date) => { return date?.replaceAll('-', ' / ') }
// 計算天數
const dayCount = computed(() => {
    const startDate = tempDate.date.start;
    const endDate = tempDate.date.end;
    // 判斷是否有選擇日期 沒有的話回傳0
    if (startDate === null || endDate === null) {
        return 0;
    }
    // 計算差異時間
    const differenceTime = new Date(endDate).getTime() - new Date(startDate).getTime();
    // 計算天數
    const differenceDays = Math.round(differenceTime / (1000 * 60 * 60 * 24));
    return differenceDays;
})
// 清除日期
const clearDate = () => {
    tempDate.date.start = null;
    tempDate.date.end = null;
    tempDate.key++;
}
// 送出訂房資料
const confirmDate = () => {
   closeModel();
}
</script>
<template>
    <section :class="[model? 'op-100 visible':'op-0 invisible']" class="fixed top-0 left-0 w-100dvw h-100dvh bg-gray bg-op-50 backdrop-blur-2">
        <div
            class="absolute max-w-740px w-full top-50% left-50% -transform-translate-x-50% -transform-translate-y-50% bg-white rounded-5 p-8">
            <div class="flex mb-10 items-center">
                <div class="w-40%">
                    <h2 class="text-6 leading-7.2 tracking-.5px  font-bold mb-2">{{ dayCount }} 晚</h2>
                    <ul class="flex text-4 leading-6" :class="dayCount === 0 ? '' : 'gap-2'">
                        <li>{{ formatDateTitle(tempDate.date.start) }}</li>
                        <li :class="dayCount === 0 ? 'hidden' : 'block'">~</li>
                        <li :class="dayCount !== 0 ? 'hidden' : 'block'">請選則訂房時間</li>
                        <li>{{ formatDateTitle(tempDate.date.end) }}</li>
                    </ul>
                </div>
                <div class="w-60% flex gap-2">
                    <div class="border-(1px solid #000) p-4 rounded-2 w-full flex flex-col">
                        <!-- <p class="text-3 leading-4.5 text-gray-80 ">入住</p>
                        <p class="text-4 leading-6">2023/ 12 / 03</p> -->
                        <label for="checkInDate" class="text-3 leading-4.5 text-gray-80 ">入住</label>
                        <input type="date" id="checkInDate" readonly class="text-4 leading-6 border-none"
                            placeholder="YYYY-MM-DD" :value="tempDate.date.start">
                    </div>
                    <div class="border-(1px solid #000) p-4 rounded-2 w-full flex flex-col">
                        <!-- <p class="text-3 leading-4.5 text-gray-80 ">退房</p>
                        <p class="text-4 leading-6">2023/ 12 / 03</p> -->
                        <label for="checkOutDate" class="text-3 leading-4.5 text-gray-80 ">退房</label>
                        <input type="date" id="checkOutDate" readonly class="text-4 leading-6 border-none"
                            placeholder="YYYY-MM-DD" :value="tempDate.date.end">
                    </div>
                </div>
            </div>
            <!-- 選日期 -->

            <div class="w-full mb-10 date-picker">

                <DatePicker expanded :columns="2" color="primary" :key="tempDate.key" :masks="masks" v-model.range.string="tempDate.date"
                    :min-Date="tempDate.minDate" :max-Date="tempDate.maxDate" />
            </div>

            <!-- 確認按鈕 -->
            <div class="flex justify-end gap-4">
                <button type="button" @click="clearDate"
                    class="text-4 leading-6 font-bold text-center text-white  bg-gray-80 px-8 py-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">清除日期</button>
                <button type="button" @click="confirmDate"
                    class="text-4 leading-6 font-bold text-center text-white  bg-primary px-8 py-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">確定日期</button>
            </div>
        </div>

    </section>
</template>
<style scoped>
.date-picker :deep(.vc-primary) {
    --vc-accent-50: #f0f9ff;
    --vc-accent-100: #e0f2fe;
    --vc-accent-200: #f1f1f1;
    --vc-accent-300: #7dd3fc;
    --vc-accent-400: #38bdf8;
    --vc-accent-500: #0ea5e9;
    --vc-accent-600: #000000;
    --vc-accent-700: #FFFFFF;
    --vc-accent-800: #F9F9F9;
    --vc-accent-900: #000;
}

.date-picker :deep(.vc-container) {
    --vc-font-family: font-family: 'Noto Serif TC', sans-serif;
}

.date-picker :deep(.vc-pane-layout) {
    gap: 5%;
}

.date-picker :deep(.vc-bordered) {
    border: none;
}

.date-picker :deep(.vc-arrow) {
    width: 24px;
    height: 24px;
    background-color: transparent;
}

.date-picker :deep(.vc-title) {
    background-color: transparent;
    color: #000000;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 24px;
}


.date-picker :deep(.vc-weeks) {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.date-picker :deep(.vc-week) {
    grid-template-columns: repeat(7, 0fr);
}


.date-picker :deep(.vc-weekday) {
    --vc-weekday-color: #4B4B4B;
    font-size: var(--vc-text-base);
    line-height: 24px;
    padding: 12px 14px 8px 14px;
}

.date-picker :deep(.vc-day-content) {
    font-size: var(--vc-text-base);
    line-height: 24px;
    font-weight: 700;
    width: 44px;
    height: 44px;
}

.date-picker :deep(.vc-highlight) {
    width: 44px;
    height: 44px;
    /* background-color: var(--vc-accent-600) */
}

.date-picker :deep(.vc-attr) {
    --vc-highlight-outline-bg: #000000;
}
</style>