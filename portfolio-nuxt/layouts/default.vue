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
    background: linear-gradient(90deg, $primary, $gradient);
    height: 56px;
  }
}
</style>
