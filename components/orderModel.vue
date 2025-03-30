<script setup>
const props = defineProps({
    isOrderModel:{
        type: Boolean,
        default:false,
    }
})

const model = ref(props.isOrderModel)
watch(()=>props.isOrderModel,(newVal)=>{
model.value = newVal
})

const closeModel = ()=>{
    model.value = !props.isOrderModel
}
</script>
<template>
  <div :class="[model ? 'op-100 visible ' : 'op-0 invisible']"
  class="fixed bg-gray bg-opacity-40 w-100dvw h-100dvh top-0 z-10 backdrop-blur-2">
    <div class="absolute bottom-0 rounded-tl-2 rounded-tr-2 md:(bottom-50% left-50% -translate-x-50% translate-y-50% rounded-2) bg-white max-w-600px w-full ">
        <div class="flex justify-between items-center p-4 border-b-(1px solid gray-40)  md:(p-0 border-none)">
            <p class="text-3.5 leading-5.5 font-700 md:hidden">取消預訂</p>
            <i @click="closeModel" class="i-mdi:window-close  w-6 h-6  md:( m-2 absolute top-0 right-0)  cursor-pointer hover:(rotate-180 opacity-60) duration-300 "></i>
        </div>
        <h2 class=" py-10 text-4 md:(py-25 text-5 ) leading-6 text-center">確定要取消此房型的預訂嗎？</h2>
        <div class="flex gap-4 p-3 border-t-(1px solid gray-40)">
            <div @click="closeModel"
              class=" py-4 w-full text-center text-primary rounded-2 border-(1px solid primary) font-700 leading-6 tracking-.25px cursor-pointer hover:(translate-y-5% opacity-80 ) duration-300">
              關閉視窗</div>
            <div
              class="bg-primary py-4 w-full text-center text-white rounded-2  font-700 leading-6 tracking-.25px cursor-pointer hover:(translate-y-5% opacity-80) duration-300">
              確定取消</div>
          </div>
    </div>
  </div>
</template>
<style scoped></style>