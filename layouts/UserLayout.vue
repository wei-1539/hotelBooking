<script setup>
const route = useRoute();
const pageStatus = computed(() => {
    return route.fullPath.includes("profile")
})

</script>

<template>
    <main class="w-full">
        <LayoutHead />
        <section class="mt-18 md:mt-30 bg-gray-120">
            <div class="relative mb-10 md:mb-20 ">
                <picture>
                    <source media="(max-width:768px)" srcset="@/public/images/profile-hero-sm.png">
                    <img class="w-full h-full object-cover" src="@/public/images/profile-hero.png" alt="會員資料背景">
                </picture>
                <div
                    class="absolute top-50% left-50% -translate-x-50% -translate-y-50% max-w-1297px w-full flex p-5 flex-col gap-4 md:(p-0 flex-row gap-6 items-center)">
                    <img class="w-18 h-18 md:(w-38 h-38)" src="@/public/images/avatar-6.png" alt="會員個人">
                    <h2 class="text-8 leading-9.5 md:(text-12 leading-14.5) tracking-.25px font-700  color-white">
                        Hello，Jessica</h2>
                </div>
            </div>
            <div class="max-w-1297px w-full mx-auto px-3 md:px-0">

                <ul class="flex ">
                    <li class=" py-4 px-6 flex flex-col gap-2 items-center">
                        <p :class="pageStatus ? 'color-primary' : 'color-white'"
                            class="text-4 leading-6 tracking-.25px font-700 ">個人資料</p>
                        <div :class="pageStatus ? 'block' : 'hidden'" class=" w-8 h-1 bg-primary rounded-2.5"></div>
                    </li>
                    <li class=" py-4 px-6 flex flex-col gap-2 items-center">
                        <p :class="!pageStatus ? 'color-primary' : 'color-white'"
                            class="text-4 leading-6 tracking-.25px font-700">我的訂單</p>
                        <div :class="!pageStatus ? 'block' : 'hidden'" class=" w-8 h-1 bg-primary rounded-2.5"></div>
                    </li>
                </ul>
            </div>
        </section>

        <NuxtPage />
        <section class="bg-gray-120">
            <picture >
                <source media="(max-width:768px)" srcset="@/public/images/deco-line-group-horizontal-sm.svg">
                <img class="w-full h-full object-cover" src="@/public/images/deco-line-group-horizontal-full.svg" alt="">
            </picture>
            <LayoutFooter />
        </section>
    </main>
</template>

<style scoped></style>
