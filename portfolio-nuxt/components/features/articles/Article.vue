<script setup lang="ts">
import {Article} from "~/types/article";
import BaseButton from "~/components/common/BaseButton.vue";

defineProps<{
  article: Article
}>()
</script>

<template>
  <div class="article_container">
    <span>{{article.Date}}</span>
    <span>{{article.Title}}</span>
    <div class="article_content">
      <div class="article_description">
        {{article.Description}}
      </div>
      <img :src="article.PhotoUrl" :alt="article.Title">
    </div>
    <div class="article_buttons">
      <span>Read more:</span>
      <BaseButton label="Bulldogjob" />
      <BaseButton label="Medium" />
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  height: 10vh
}
.article {
  &_container {
    display: flex;
    flex-direction: column;
    border: 2px solid $primary;
  }
  &_content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 60vw;
  }
  &_buttons {
    display: flex;
  }
  &_description {
    width: 100%;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
  }
}
</style>