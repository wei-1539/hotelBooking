<script setup>
const openMenu = ref(false)
</script>

<template>
    <header class="px-3 md:px-20 py-4 md:py-6 flex items-center justify-between p-4 bg-gray text-white">
        <!-- logo -->
        <h1>
            <NuxtLink to="/" class="hover-opacity-90 duration-300 block w-27 md:w-100%">
                <img src="@/assets/images/logo-white.svg" alt="享樂酒店 Enjoyment Luxury Hotel">
            </NuxtLink>
        </h1>

        <nav class="hidden md:block ">
            <ul class="flex items-center ">
                <li class="pe-4">
                    <NuxtLink to="/rooms" class="p-4 text-white decoration-none hover-opacity-90 duration-300">客房旅宿
                    </NuxtLink>
                </li>
                <li class="pe-4">
                    <NuxtLink to="/account/login" class="p-4 flex justify-center items-center text-white decoration-none hover-opacity-90 duration-300">
                        <!-- <div class="i-mdi:person-circle-outline me-2 font-size-6"></div> -->
                        會員登入</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/rooms"
                        class="px-8 py-4 text-white decoration-none border-rd-2 bg-primary hover-bg-primary-120 duration-300 ">
                        立即訂房</NuxtLink>
                    <!-- 按鈕元件 -->
                    <!-- <DefaultBtn/>  -->
                </li>
            </ul>
        </nav>

        <!-- SP show Icon -->
        <div @click="openMenu = !openMenu"
            class="w-10 h-10 p-2 flex flex-col justify-evenly items-center md:hidden cursor-pointer z-10">
            <span :class="{ 'rotate-225 translate-y-1.5': openMenu }" class="bg-white w-100% h-2px duration-300 "></span>
            <span :class="{ 'opacity-0': openMenu }" class="bg-white w-100% h-2px duration-300"></span>
            <span :class="{ '-rotate-225 -translate-y-1.55': openMenu }" class="bg-white w-100% h-2px duration-300"></span>
        </div>

        <Transition name="fade">
            <div v-show="openMenu" class="md:hidden fixed start-0 top-0 w-100dvw h-100dvh bg-gray bg-opacity-90 z-5 flex items-center justify-center">
                <ul class="flex flex-col gap-4 items-center w-90% mx-auto">
                    <li class="w-100% text-center ">
                        <NuxtLink @click="openMenu = !openMenu" to="/rooms" class="block py-4 text-white decoration-none hover-opacity-90 duration-300">客房旅宿
                        </NuxtLink>
                    </li>
                    <li class="w-100% text-center">
                        <NuxtLink @click="openMenu = !openMenu"  to="/account/login"
                            class=" block py-4 text-white decoration-none hover-opacity-90 duration-300">會員登入</NuxtLink>
                    </li>
                    <li class="w-100% text-center">
                        <NuxtLink @click="openMenu = !openMenu"  to="/rooms"
                            class=" block px-8 py-4 text-white decoration-none border-rd-2 bg-primary hover-bg-primary-120 duration-300 ">
                            立即訂房</NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>


    </header>
</template>

<style scoped></style>
