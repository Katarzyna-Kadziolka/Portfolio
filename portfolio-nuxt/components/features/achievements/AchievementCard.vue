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
  width: 50px;
  height: 50px;
}
.achievement-card {
  &_square {
    background: $nav-secondary;
    width: 90px;
    height: 90px;
    transform: rotate(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &_square-content-wrapper {
    transform: rotate(-45deg);
  }
}
</style>