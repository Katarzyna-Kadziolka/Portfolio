<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="base-button_container">
    <span><b>{{label}}</b></span>
  </div>
</template>

<style scoped lang="scss">
.base-button {
  &_container {
    border: $p-secondary solid 2px;
    background: $primary;
    padding: 4px 8px 4px 8px;
    border-radius: 15px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>