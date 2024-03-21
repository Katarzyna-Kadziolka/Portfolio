<script setup lang="ts">
</script>

<template>
  <div class="base-tag_container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.base-tag {
  &_container {
    background: $nav-secondary ;
    color: $primary;
    padding: 8px;
    border-radius: 15px;
    border: 2px solid $primary;
  }
}
</style>