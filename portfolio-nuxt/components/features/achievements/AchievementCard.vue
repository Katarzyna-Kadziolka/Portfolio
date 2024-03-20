<script setup lang="ts">
import {Achievement} from "~/types/achievement";
import {nextTick} from "@vue/runtime-core";

const props = defineProps<{
  achievement: Achievement
  isActive: boolean
}>()
const isOverflow = ref(false)
const check = ref(Math.ceil(Math.random() * 10))

watch(() => props.isActive, (newValue) => {
  if(!newValue) {
    isOverflow.value = false;
  }
})

const emit = defineEmits<{
  (e: 'changeActiveAchievement', achievementName: string): void
}>()

const onCardClicked = () => {
  emit("changeActiveAchievement", props.achievement.Name);
  nextTick(() => {
    isOverflow.value = document.body.scrollWidth > document.body.offsetWidth
  })
}

</script>

<template>
  <div class="achievement-card_container">
    <div class="achievement-card_wrapper">
      <div class="achievement-card_square" @click="onCardClicked"
           :class="{'achievement-card_square_active': isActive}">
        <div class="achievement-card_square-content-wrapper">
          <img :src="achievement.Image" :alt="achievement.Name">
        </div>
      </div>
      <div class="achievement-card_content-container"
           :class="{'achievement-card_content-container_active': isActive, 'achievement-card_content-container_active_overflow': isOverflow}">
        <div class="achievement-card_header">
          <span class="achievement-card_title"><b>{{ achievement.Name }}</b></span>
          <span>{{ achievement.Date }}</span>
        </div>
        <hr>
        <span class="achievement-card_description">{{ achievement.Description }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 8vw;
  height: 8vw;
}

hr {
  width: 100%;
  height: 0;
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
      flex-direction: row;
      width: 30vw;
      height: 10vw;
      background: $nav-primary;
      margin-left: -5vw;
      z-index: 3;
      padding: 16px 16px 16px 8vw;
      border-radius: 15px;
      overflow-y: auto;
      overflow-x: hidden;

      &_overflow {
        margin-left: -45vw;
        padding: 16px 8vw 16px 16px;
      }
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
    cursor: pointer;

    &_active {
      z-index: 4;
    }
  }

  &_square-content-wrapper {
    transform: rotate(-45deg);
  }

  &_title {
    font-size: 1.2rem;
  }

  &_header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  &_description {
    padding-top: 4px;
  }
}
</style>