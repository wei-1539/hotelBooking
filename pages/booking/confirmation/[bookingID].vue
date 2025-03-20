<script setup>
const loadingTitle = ref('正在處理你的預訂中')
</script>
<template>
  <ClientOnly>
    <Loading :show="true" :loading-title="loadingTitle" />
  </ClientOnly>
  <div>
    預約成功頁面
  </div>
</template>
<style scoped></style>