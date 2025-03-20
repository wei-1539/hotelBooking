<script setup>
import { gsap } from 'gsap'
onMounted(() => {
    const tl = gsap.timeline({ defaults: { duration: .75, ease: 'power1.inOut', }, yoyo: true, repeat: -1, repeatDelay: 0.25 });

    tl.to('.loadingLight', { backgroundColor: '#909090', stagger: .2, yPercent: -50 })
})

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    loadingTitle: {
        type: String,
        default: '正在加載中...',
    },
})

</script>
<template>


    <div :class="props.show? 'block':'hidden'" class="fixed top-0 left-0 w-100dvw h-100dvh bg-black bg-op-50 z-10  backdrop-blur-2">
        <div
            class="absolute top-50% left-50% -translate-x-50% -translate-y-50% w-90% h-65% md:(w-full h-full) max-w-1020px  max-h-800px  mx-auto bg-white rounded-5">
            <div class="flex flex-col justify-center items-center h-full">
                <ul class="flex gap-4 mb-10">
                    <li class="loadingLight w-3 h-3 bg-gray rounded-full"></li>
                    <li class="loadingLight w-3 h-3 bg-gray rounded-full"></li>
                    <li class="loadingLight w-3 h-3 bg-gray rounded-full"></li>
                </ul>
                <img class="mb-4 w-50% md:w-15%" src="@/public/images/logo-primary.svg"
                    alt="享樂酒店 Enjoyment Luxury Hotel">
                <p class=" text-6 leading-7 tracking-.5px font-700"> {{ props.loadingTitle }}</p>
               
            </div>
        </div>
    </div>

</template>
<style scoped></style>