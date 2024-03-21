<script setup lang="ts">
import {achievements} from "~/data/achievements";
import AchievementCard from "~/components/features/achievements/AchievementCard.vue";

const activeAchievementsName = ref("");
const onChangeActiveAchievement = (activeName: string) => {
  if(activeName === activeAchievementsName.value) {
    activeAchievementsName.value = "";
  }
  else {
    activeAchievementsName.value = activeName
  }
}

</script>

<template>
  <div class="achievements_wrapper">
    <div class="achievements_container">
      <AchievementCard v-for="achievement in achievements" :achievement="achievement" :key="achievement"
                       @changeActiveAchievement="onChangeActiveAchievement"
                       :is-active="achievement.Name === activeAchievementsName" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.achievements {
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    @media (max-width: 768px) {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 24px;
    }
  }

  &_container {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 9vw);
    grid-template-rows: repeat(3, 9vw);
    grid-gap: 10px;

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
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      row-gap: 32px;
      :nth-child(5) {
        padding-bottom: 16px;
      }
    }
  }
}
</style>