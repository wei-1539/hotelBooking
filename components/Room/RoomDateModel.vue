<script setup>
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
// 匯入  useScreens  方法
import { useScreens } from 'vue-screen-utils'
// 設定切換斷點 是使用min-width
const { mapCurrent } = useScreens({
    md: '768px',
});
const rows = mapCurrent({ md: 1 }, 1);
const columns = mapCurrent({ md: 2 }, 1);
const expanded = mapCurrent({ md: true }, false);
const titlePosition = mapCurrent({ md: "center" }, "left");
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
    const isMobile = mapCurrent({ md: true }, false);
    if (isMobile) {
        emit('update:openModel', {
            date: tempDate.date,
            dayCount: dayCount.value,
            people: bookingPeopleMobile.value,
        });
    } else {

        emit('update:openModel', {
            date: tempDate.date,
            dayCount: dayCount.value,
        });
    }
    closeModel();
}
// 手機模式
const isConfirmDateMobile = ref(false);
// 『手機模式』 切換內容
const confirmDateMobile = () => {
    isConfirmDateMobile.value = true;
}
const MAX_BOOKING_PEOPLE = 10;
const bookingPeopleMobile = ref(1);


</script>
<template>
    <section :class="[model ? 'op-100 visible ' : 'op-0 invisible']"
        class="z-10 bottom-0  w-full h-98dvh md:( top-0 left-0 w-100dvw h-100dvh) fixed  bg-gray bg-op-50 backdrop-blur-2">
        <!-- card -->
        <div
            class="absolute max-w-740px w-full bottom-0  pb-4 px-6 rounded-t-5 md:(relative overflow-hidden max-w-740px h-auto top-50% left-50% -transform-translate-x-50% -transform-translate-y-50%  p-8 rounded-5) bg-white ">
            <!-- card-header -->
            <div class="card-header">
                <!-- PC -->
                <div class="hidden  md:flex mb-10 items-center">
                    <div class="w-40%">
                        <h2 class="text-6 leading-7.2 tracking-.5px  font-bold mb-2">{{ dayCount }} 晚</h2>
                        <ul class="flex text-4 leading-6" :class="dayCount === 0 ? '' : 'gap-2'">
                            <li>{{ formatDateTitle(tempDate.date.start) }}</li>
                            <li :class="dayCount === 0 ? 'hidden' : 'block'">~</li>
                            <li :class="dayCount !== 0 ? 'hidden' : 'block'">請選則訂房時間</li>
                            <li>{{ formatDateTitle(tempDate.date.end) }}</li>
                        </ul>
                    </div>
                    <div class="flex w-60%  gap-2">
                        <div class="border-(1px solid #000) p-4 rounded-2 w-full flex flex-col">

                            <label for="checkInDate" class="text-3 leading-4.5 text-gray-80 ">入住</label>
                            <input type="date" id="checkInDate" readonly class="text-4 leading-6 border-none"
                                placeholder="YYYY-MM-DD" :value="tempDate.date.start">
                        </div>
                        <div class="border-(1px solid #000) p-4 rounded-2 w-full flex flex-col">

                            <label for="checkOutDate" class="text-3 leading-4.5 text-gray-80 ">退房</label>
                            <input type="date" id="checkOutDate" readonly class="text-4 leading-6 border-none"
                                placeholder="YYYY-MM-DD" :value="tempDate.date.end">
                        </div>
                    </div>
                </div>

                <!-- SP -->
                <div class="md:hidden sticky top-0 left-0 z-2 bg-white w-full mb-4 py-4 border-b-(1px solid #ececec)">
                    <i class="i-mdi:close  block w-6 h-6 mb-4 " @click="closeModel"></i>
                    <div v-if="dayCount === 0">
                        <p class="text-5 font-700 leading-6 ">選擇入住日期</p>
                    </div>
                    <div v-else>
                        <ul class="flex text-4 leading-6 items-center" :class="dayCount === 0 ? '' : 'gap-2'">
                            <li>
                                <h2 class=" text-6 leading-7.2 tracking-.5px  font-bold">{{ dayCount }} 晚</h2>
                            </li>
                            <li>{{ formatDateTitle(tempDate.date.start) }}</li>
                            <li> ~ </li>
                            <li>{{ formatDateTitle(tempDate.date.end) }}</li>
                        </ul>
                    </div>
                </div>

            </div>
            <!-- card-body -->
            <!-- 選日期 -->
            <div class="card-body  md:overflow-visible">
                <div v-if="!isConfirmDateMobile" class="  w-full   date-picker ">

                    <DatePicker :expanded="expanded" :columns="columns" :rows="rows" color="primary"
                        :title-position="titlePosition" :key="tempDate.key" :masks="masks"
                        v-model.range.string="tempDate.date" :min-Date="tempDate.minDate"
                        :max-Date="tempDate.maxDate" />
                </div>

                <!-- 手機確認人數 -->
                <div v-if="isConfirmDateMobile" class=" my-6 md:hidden">
                    <div class="mb-4">
                        <p class="text-4 leading-6 font-bold tracking-.25px mb-1">選擇人數</p>
                        <p class="text-3.5 leading-5 tracking-.25px">此房型最多供 4 人居住，不接受寵物入住。</p>
                    </div>
                    <div class="flex gap-4 items-center">
                        <button type="button" :disabled="bookingPeopleMobile === 1" @click="bookingPeopleMobile--"
                            :class="bookingPeopleMobile === 1 ? 'text-gray-40 hover:(bg-transparent)  ' : ' hover:(bg-dark )'"
                            class=" group w-14 h-14 border-(1px solid #ececec) rounded-full p-4 relative bg-transparent cursor-pointer group-hover:(text-gray-40 border-color-transparent)) duration-300">
                            <i :class="bookingPeopleMobile === 1 ? 'text-gray-40' : 'text-dark'"
                                class="i-material-symbols:check-indeterminate-small text-6 inline-block absolute top-50% left-50% -transform-translate-x-50% -transform-translate-y-50% group-hover:(text-gray-40 border-color-transparent))"></i>
                        </button>
                        <h6>{{ bookingPeopleMobile }}</h6>
                        <button type="button" :disabled="bookingPeopleMobile === MAX_BOOKING_PEOPLE"
                            @click="bookingPeopleMobile++"
                            :class="bookingPeopleMobile === MAX_BOOKING_PEOPLE ? 'text-gray-40 hover:(bg-transparent)  ' : ' hover:(bg-dark )'"
                            class=" group w-14 h-14 border-(1px solid #ececec) rounded-full p-4 relative bg-transparent cursor-pointer  group-hover:(text-gray-40 border-color-transparent)) duration-300">
                            <i :class="bookingPeopleMobile === MAX_BOOKING_PEOPLE ? 'text-gray-40' : 'text-dark'"
                                class="i-material-symbols:add text-6 inline-block absolute top-50% left-50% -transform-translate-x-50% -transform-translate-y-50% group-hover:(text-gray-40 border-color-transparent))"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- card-footer -->
            <div class="card-footer">
                <!-- pc -->
                <div class="hidden md:flex justify-end gap-4">
                    <button type="button" @click="clearDate"
                        class="w-1/2 md:(w-auto) text-4 leading-6 font-bold text-center text-white  bg-gray-80 px-8 py-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">清除日期</button>
                    <button type="button" @click="confirmDate"
                        class="w-1/2 md:(w-auto) text-4 leading-6 font-bold text-center text-white  bg-primary px-8 py-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">確定日期</button>
                </div>
                <!-- sp -->
                <div class="md:hidden  left-0 w-full bg-white ">
                    <div v-if="!isConfirmDateMobile">
                        <div class="flex gap-4 p-4">
                            <button type="button" @click="clearDate"
                                class="w-1/2 md:(w-auto) text-4 leading-6 font-bold text-center text-white  bg-gray-80 px-8 py-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">清除日期</button>
                            <button type="button" @click="confirmDateMobile"
                                :class="dayCount === 0 ? 'text-gray-60 bg-gray-40' : 'text-white  bg-primary hover:(opacity-80 transform-translate-y-5%) duration-300'"
                                :disabled="dayCount === 0 ? true : false"
                                class="w-1/2 md:(w-auto) text-4 leading-6 font-bold text-center px-8 py-4 rounded-2 cursor-pointer border-none ">確定日期</button>
                        </div>
                    </div>
                    <div v-else>
                        <div class="flex gap-4">
                            <button type="button" @click="isConfirmDateMobile = false"
                                class="w-1/2 md:(w-auto) text-4 leading-6 font-bold text-center text-white  bg-gray-80   py-4 rounded-2 cursor-pointer border-none hover:(opacity-80 transform-translate-y-5%) duration-300">重新選擇日期</button>
                            <button type="button" @click="confirmDate"
                                class="w-1/2 md:(w-auto) text-4 leading-6 font-bold text-center px-8 py-4 rounded-2 cursor-pointer border-none text-white  bg-primary hover:(opacity-80 transform-translate-y-5%) duration-300">儲存</button>
                        </div>

                    </div>
                </div>
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