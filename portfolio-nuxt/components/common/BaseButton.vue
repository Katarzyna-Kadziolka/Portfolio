<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string,
  disabled: boolean
}>(), {
  disabled: false,
})
</script>

<template>
  <div class="base-button_container" :style="[disabled ? 'opacity: 25%; cursor: default' : '']">
    <span><b>{{label}}</b></span>
  </div>
</template>

<style scoped lang="scss">
.base-button {
  &_container {
    border: 2px solid $primary;
    background: $nav-primary;
    padding: 4px 8px 4px 8px;
    border-radius: 15px;
    color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 30px;
  }
}
</style>