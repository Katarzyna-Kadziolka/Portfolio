<script setup lang="ts">
import BaseTag from "~/components/common/BaseTag.vue";
import BaseButton from "~/components/common/BaseButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {Project} from "~/types/project";

const props = defineProps<{
  project : Project,
  canGoNext: boolean,
  canGoBack: boolean
}>()

const goTo = (link: string) => {
  window.open(link, '_blank');
}
const emit = defineEmits(['back', 'next', 'close'])
const onBackClick = () => {
  if(props.canGoBack) emit('back')
}
const onNextClick = () => {
  if(props.canGoNext) emit('next')
}
</script>

<template>
  <div class="carrousel_container">
    <div class="carrousel_exit-button" @click="$emit('close')">
      <FontAwesomeIcon icon="fa solid fa-xmark" />
    </div>
    <div class="carrousel_img-container">
      <img class="carrousel_img" :src="project.ImagePath" :alt="project.Name">
    </div>
    <div class="carrousel_navigations">
      <BaseButton class="carrousel_nav-button" label="<" @click="onBackClick" :disabled="!canGoBack" />
      <BaseButton class="carrousel_nav-button" label=">" @click="onNextClick" :disabled="!canGoNext" />
    </div>
    <div class="carrousel_content">
      <span class="carrousel_title">{{ project.Name }}</span>
      <span>{{ project.Dates }}</span>
      <span class="carrousel_description">{{ project.Description }}</span>
    </div>
    <div class="carrousel_tags">
      <BaseTag v-for="technology in project.Technologies" :label="technology" />
    </div>
    <div class="carrousel_buttons">
      <BaseButton label="Github" class="carrousel_button" @click="goTo(project.Github)" :disabled="false" />
      <BaseButton v-if="project.Website !== undefined" label="Website" class="carrousel_button" @click="goTo(project.Website)" :disabled="false" />
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
}
.carrousel {
  &_container {
    background: rgba(57, 57, 67, 0.95);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  &_img-container {
    height: 50vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 8px;
  }
  &_img {
    height: 100%;
    width: auto;
  }
  &_title {
    font-size: 2rem;
  }
  &_content {
    display: flex;
    flex-direction: column;
    padding: 16px 64px 16px 64px;
  }
  &_description {
    font-size: 1.5rem;
  }
  &_tags {
    display: flex;
    column-gap: 16px;
    padding: 16px 64px 16px 64px;
  }
  &_buttons {
    display: flex;
    justify-content: center;
    padding: 16px 64px 16px 64px;
    column-gap: 16px;
  }
  &_button {
    width: 150px;
  }
  &_navigations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    font-size: 2rem;
  }
  &_nav-button {
    padding: 16px;
    width: 25px;
  }
  &_exit-button {
    position: absolute;
    top: 16px;
    right: 16px;
    background: $nav-primary;
    border: 2px solid $primary;
    cursor: pointer;
    font-size: 1.5rem;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $primary;
  }
}
</style>