<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="social_container">
    <FontAwesomeIcon :icon="icon"/>
  </div>
</template>

<style scoped lang="scss">
.social {
  &_container {
    color: $primary;
    cursor: pointer;
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    &:hover {
      background: $nav-secondary;
    }
  }
}
</style>