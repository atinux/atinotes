<template>
  <div class="alert">
    <ContentSlot unwrap="p" :use="$slots.default" />
  </div>
</template>

<style>
.alert {
  padding: 10px 5px;
  border: 1px #eee solid;
  border-radius: 5px;
}
</style>