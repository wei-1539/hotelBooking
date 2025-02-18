<script setup>
const props = defineProps({
  roomInfoData: {
    type: Array,
  },
});

const iconData = [
  "i-fluent:slide-size-24-filled",
  "i-material-symbols:bed",
  "i-material-symbols:person",
];
</script>
<template>
  <ul class="roomInfo flex justify-between gap-4 max-w-323px">
    <li
      v-for="(item, ind) in roomInfoData"
      :key="ind"
      class="w-97px h-97px px-4 py-5.125 border-(1px solid primary-40) rounded-2"
    >

      <div :class="`${iconData[ind]}`" class="w-6 h-6 text-primary mb-2"></div>
      <p class="leading-8 text-gray">{{ item.content }}</p>
    </li>
  </ul>
</template>
<style scoped></style>