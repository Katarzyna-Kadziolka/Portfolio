<script setup lang="ts">
import {achievements} from "~/data/achievements";
import AchievementCard from "~/components/features/achievements/AchievementCard.vue";

</script>

<template>
  <div class="achievements_wrapper">
    <div class="achievements_container">
      <AchievementCard v-for="achievement in achievements" :achievement="achievement" :key="achievement"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.achievements {
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    height: 85vh;
  }
  &_container {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 9vw);
    grid-template-rows: repeat(3, 9vw);
    :nth-child(1) {
      grid-row: 1;
      grid-column: 1;
    }

    :nth-child(2) {
      grid-row: 2;
      grid-column: 2;
    }

    :nth-child(3) {
      grid-row: 2;
      grid-column: 4;
    }

    :nth-child(4) {
      grid-row: 3;
      grid-column: 1;
    }

    :nth-child(5) {
      grid-row: 3;
      grid-column: 3;
    }
  }
}
</style>