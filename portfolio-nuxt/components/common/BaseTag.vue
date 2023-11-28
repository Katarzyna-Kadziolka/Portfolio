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
    border: $p-secondary solid 2px;
    background: $primary;
    color: white;
    padding: 8px;
    border-radius: 15px;
  }
}
</style>