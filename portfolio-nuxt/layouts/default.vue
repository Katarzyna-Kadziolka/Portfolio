<script setup lang="ts">
</script>

<template>
  <div class="default_container">
    Some default layout shared across all pages

  </div>
  <slot />
</template>

<style scoped lang="scss">
.default {
  &_container {
    color:red;
  }
}
</style>
