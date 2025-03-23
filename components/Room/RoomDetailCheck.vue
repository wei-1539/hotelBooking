<script setup>
const props = defineProps({
    detailCheckData: {
        type: Array,
    },
    title: {
        type: String,
    },
    boookingConfirmation: {
        type: Boolean,
        default: false,
    }
})
</script>
<template>
    <main>
        <div v-if="!props.boookingConfirmation">
            <h2
                class="text-4 leading-6  mb-4 md:(mb-6 text-6 leading-7.2) flex items-center gap-3 font-bold tracking-.25px before:(content-[''] block w-1 h-6 bg-primary transform-translate-y-10%)">
                {{ title }}
            </h2>
            <section class="w-full rounded-2 p-6 bg-white">
                <ul class="flex gap-6  md:(gap-x-10 gap-y-2) flex-wrap ">
                    <li v-for="item in detailCheckData" :key="item" class="w-30% md:(w-15%)  flex items-center gap-2">
                        <i class="i-material-symbols:check w-6 h-6 text-primary"></i>
                        <p class="text-4 leading-6 tracking-.25px whitespace-nowrap">
                            {{ item.title }}
                        </p>
                    </li>
                </ul>
            </section>
        </div>
        <div v-else>
            <h2
                class="text-4 leading-6  mb-6  flex items-center gap-3 font-700 tracking-.25px before:(content-[''] block w-1 h-6 bg-primary transform-translate-y-10% rounded-2.5)">
                {{ title }}
            </h2>
            <section class="w-full rounded-2 p-6 bg-white border-(1px solid gray-40)">
                <ul class="flex gap-6  flex-wrap ">
                    <li v-for="item in detailCheckData" :key="item" class="w-40% md:w-28%  flex items-center gap-2">
                        <i class="i-material-symbols:check w-6 h-6 text-primary"></i>
                        <p class="text-4 leading-6 tracking-.25px whitespace-nowrap fw-bold">
                            {{ item.title }}
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    </main>
</template>
<style scoped></style>