<script setup lang="ts">
import BaseTag from "~/components/common/BaseTag.vue";
import {Technology} from "~/types/technology";
import BaseButton from "~/components/common/BaseButton.vue";

const props = defineProps<{
  title: string,
  description: string,
  technologies: Technology[],
  imagePath: string,
}>()

const imageUrl = new URL(props.imagePath, import.meta.url)


</script>

<template>
  <div class="gallery-card_container">
    <div class="gallery-card_img-container">
      <img :src="imageUrl" :alt="title" class="gallery-card_image">
    </div>
    <div class="gallery-card_content">
      <span class="gallery-card_title"><b>{{title}}</b></span>
      <span>{{description}}</span>
      <div class="gallery-card_button-container">
        <BaseButton class="gallery-card_button" label="Show more" />
      </div>
      <hr>
      <div class="gallery-card_tags">
        <BaseTag v-for="technology in technologies" :key="technology" :label="technology" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
hr {
  background: $primary;
  height: 1px;
  width: 100%;
}
@keyframes scale {
  to {
    transform: scale(1.2);
  }
}
.gallery-card {
  &_container {
    box-shadow: 8px 8px 23px 0px rgba(66, 68, 90, 1);
    border-radius: 15px;
    &:hover img {
      transform-origin: center center;
      animation: scale 500ms ease-in-out forwards;
    }
  }
  &_image {
    object-fit: cover;
    width: 40vw;
  }
  &_content {
    display: flex;
    flex-direction: column;
    padding: 16px;
    row-gap: 8px;
  }
  &_title {
    font-size: 1.2rem;
  }
  &_tags {
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    row-gap: 8px;
    flex-wrap: wrap;
  }
  &_img-container {
    overflow: hidden;
    height: 40vh;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    object-fit: cover;
  }
  &_button-container {
    display: flex;
    justify-content: flex-end;
  }
  &_button {
    width: 100px;
  }
}
</style>