<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between items-start bg-white p-20 pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-200">
    <div>
      <h1 class="text-8xl mb-4 text-black flex items-center">
        {{ title }}
      </h1>
      <p class="text-5xl text-gray-700 leading-tight pr-10">
        {{ description }}
      </p>
    </div>
    <div class="font-bold text-[25px]">atinotes<span class="text-gray-600">.pages.dev</span></div>
  </div>
</template>
