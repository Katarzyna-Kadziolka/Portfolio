<script setup lang="ts">
import {Achievement} from "~/types/achievement";

defineProps<{
  achievement: Achievement
}>()
</script>

<template>
  <div>
    <div class="achievement-card_square">
      <div class="achievement-card_square-content-wrapper">
        <img :src="achievement.Image" :alt="achievement.Name">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 8vw;
  height: 8vw;
}
.achievement-card {
  &_square {
    background: $nav-secondary;
    width: 10vw;
    height: 10vw;
    transform: rotate(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid $primary;
    border-radius: 5px;
    padding: 8px;
  }
  &_square-content-wrapper {
    transform: rotate(-45deg);
  }
}
</style>