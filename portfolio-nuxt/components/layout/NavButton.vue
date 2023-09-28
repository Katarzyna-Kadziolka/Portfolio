<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps<{
  label: string,
  icon: string
}>()
</script>

<template>
  <div class="nav-button_container">
    <FontAwesomeIcon :icon=icon />
    <span>{{ label }}</span>
  </div>
</template>

<style scoped lang="scss">
.nav-button {
  &_container {
    color: white;
    display: flex;
    align-items: center;
    column-gap: 8px;
    cursor: pointer;
  }
}
</style>