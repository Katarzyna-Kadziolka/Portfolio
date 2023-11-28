<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps<{
  label: string,
  icon: string,
  link: string
}>()
</script>

<template>
  <div class="nav-button_container">
    <NuxtLink class="nav-button_link" :to="link">
      <FontAwesomeIcon :icon=icon />
      <span>{{ label }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.nav-button {
  &_container {
    color: $primary;
    cursor: pointer;
    padding: 8px;
    border-radius: 15px;
    &:hover {
      opacity: 75%;
    }
  }
  &_link {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
}
</style>