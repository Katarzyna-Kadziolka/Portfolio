<script setup lang="ts">
import {Achievement} from "~/types/achievement";
import {nextTick} from "@vue/runtime-core";

const props = defineProps<{
  achievement: Achievement
  isActive: boolean
}>()
const isOverflow = ref(false)

watch(() => props.isActive, (newValue) => {
  if (!newValue) {
    isOverflow.value = false;
  }
})

const emit = defineEmits<{
  (e: 'changeActiveAchievement', achievementName: string): void
}>()

const onCardClicked = () => {
  emit("changeActiveAchievement", props.achievement.Name);
  document.body.style.overflowX = "hidden";
  nextTick(() => {
    isOverflow.value = document.body.scrollWidth > document.body.offsetWidth
  })
  setTimeout(() => {
    document.body.style.overflowX = "auto";
  }, 500)
}

const isMobile = ref(false);
let mql:  MediaQueryList
const handleMqlChange = (e:  MediaQueryListEvent) => {
  isMobile.value = e.matches
}
onMounted(() => {
  mql = window.matchMedia('(max-width: 768px)')
  isMobile.value = mql.matches
  mql.addEventListener('change', handleMqlChange)
})

onUnmounted(() => {
  mql.removeEventListener('change', handleMqlChange)
})

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
      <Transition appear>
        <div v-if="isActive || isMobile" class="achievement-card_content-container"
             :class="{'achievement-card_content-container_overflow': isOverflow}">
          <div class="achievement-card_header">
            <span class="achievement-card_title"><b>{{ achievement.Name }}</b></span>
            <span>{{ achievement.Date }}</span>
          </div>
          <hr>
          <span class="achievement-card_description">{{ achievement.Description }}</span>
        </div>
      </Transition>
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

.v-enter-active {
  transition: all .3s ease;
}

.v-leave-active {
  opacity: 100;
}

.v-enter-from {
  transform: translateX(-25%);
  opacity: 0;
}

.achievement-card {
  &_container {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      margin-top: 5vw;
    }
  }

  &_wrapper {
    display: flex;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
      align-items: flex-start;
    }
  }

  &_content-container {
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
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px #1d1d27;
      background: $nav-primary;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $nav-secondary;
      border-radius: 8px;
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
    @media (max-width: 768px) {
      z-index: 4;
      justify-content: flex-start;
      height: auto;
      margin-top: -7vw;
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
    @media (max-width: 768px) {
      padding-left: 8px;
    }
  }

  &_description {
    padding-top: 4px;
  }
}
</style>