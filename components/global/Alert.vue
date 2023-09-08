<script setup>
defineProps({
  type: {
    type: String,
    default: 'info'
  }
})
</script>

<template>
  <div class="alert" :class="type">
    <slot/>
  </div>
</template>

<style lang="postcss">
.alert {
  padding: 10px;
  border-radius: 5px;
  p {
    margin: 0;
  }
  &.info {
    color: rgba(60, 60, 67, .7);
    border: 1px rgba(60, 60, 67, .29) solid;
    background-color: #f6f6f7;
  }
  &.success {
    color: #10b981;
    border: 1px rgba(16, 185, 129, .5) solid;
    background-color: rgba(16, 185, 129, .05);
  }
  &.warning {
    color: rgb(234, 179, 8);
    border: 1px rgba(234, 179, 8, .5) solid;
    background-color: rgb(234, 179, 8, 0.05);
  }
  &.danger {
    color: #f43f5e;
    border: 1px rgba(244, 63, 94, .5) solid;
    background-color: rgba(244, 63, 94, .05);
  }
}
</style>