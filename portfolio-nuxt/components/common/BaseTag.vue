<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="base-tag_container">
    <span>{{label}}</span>
  </div>
</template>

<style scoped lang="scss">
.base-tag {
  &_container {
    background: $p-secondary ;
    color: white;
    padding: 8px;
    border-radius: 15px;
  }
}
</style>