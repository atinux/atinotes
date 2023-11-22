<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="_og-image w-full h-full flex flex-col justify-between items-start bg-white p-20 pt-24 pb-16">
    <div>
      <h1 class="text-8xl mb-4 text-black flex items-center">
        {{ title }}
      </h1>
      <p class="text-5xl text-gray-700 leading-tight pr-10">
        {{ description }}
      </p>
    </div>
    <div class="font-bold text-4xl flex flex-row">
      notes<span class="text-gray-600">.atinux.com</span>
    </div>
  </div>
</template>

<style scoped>
._og-image {
  background-image: linear-gradient(135deg, #fff 0%, #eee 100%);
}
</style>