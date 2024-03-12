<script setup lang="ts">
import {Achievement} from "~/types/achievement";

defineProps<{
  achievement: Achievement
}>()

const achievementDetails = ref<HTMLDivElement>()
const onHover = () => {
  achievementDetails.value?.classList.add('achievement-card_content-container_active')
}
const onOut = () => {
  achievementDetails.value?.classList.remove('achievement-card_content-container_active')
}

</script>

<template>
  <div class="achievement-card_container">
    <div class="achievement-card_wrapper">
      <div class="achievement-card_square" @mouseover="onHover" @mouseout="onOut">
        <div class="achievement-card_square-content-wrapper">
          <img :src="achievement.Image" :alt="achievement.Name">
        </div>
      </div>
      <div ref="achievementDetails" class="achievement-card_content-container">
        <span>{{ achievement.Name }}</span>
        <span>{{ achievement.Date }}</span>
        <span>{{ achievement.Description }}</span>
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
  &_container {
    display: flex;
    align-items: center;
  }
  &_wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  &_content-container {
    display: none;

    &_active {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      width: 30vw;
      height: 10vw;
      background: $nav-primary;
      margin-left: -5vw;
      z-index: 1;
      padding: 16px 16px 16px 8vw;
      border-radius: 15px;
    }
  }

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
    z-index: 2;
  }

  &_square-content-wrapper {
    transform: rotate(-45deg);
  }
}
</style>