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
      <img :src="imageUrl" :alt="title" class="gallery-card_img">
    </div>
    <div class="gallery-card_content">
      <span class="gallery-card_title"><b>{{title}}</b></span>
      <span>{{description}}</span>
      <hr>
      <div class="gallery-card_tags">
        <BaseTag v-for="technology in technologies" :label="technology" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
hr {
  width: 100%;
  height: 1px;
  background: #FFEDE6;
}
.gallery-card {
  &_container {
    position: relative;
    cursor: pointer;
    object-fit: cover;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    border-radius: 15px;
    break-inside: avoid;
    height: 50vh;
    border: #484b54 solid 1px;
  }
  &_img {
    object-fit: cover;
  }
  &_content {
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;
    transform: translateY(0%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;
    background: linear-gradient(0deg, rgba(72, 75, 84, 1) 25%, rgba(72, 75, 84, 0));
    font-size: 1.2rem;
    &:hover {
      opacity: 1;
    }
  }
  &_img-container {
    position: absolute;
    object-fit: cover;
    width: 100% !important;
    height: 100% !important;
    left: 0 !important;
    top: 0 !important;
  }
  &_title {
    font-size: 1.5rem;
  }
  &_tags {
    display: flex;
    column-gap: 8px;
  }
}
</style>