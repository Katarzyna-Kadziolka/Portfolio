<script setup lang="ts">
import {Article} from "~/types/article";
import BaseButton from "~/components/common/BaseButton.vue";

defineProps<{
  article: Article
}>()

const goTo = (url: string) => {
  window.open(url, '_blank');
}
</script>

<template>
  <div class="article_container">
    <span>{{article.Date}}</span>
    <span class="article_title">{{article.Title}}</span>
    <div class="article_content">
      <div class="article_description">
        {{article.Description}}
      </div>
      <img :src="article.PhotoUrl" :alt="article.Title">
    </div>
    <div class="article_buttons">
      <span>Read more:</span>
      <BaseButton label="Bulldogjob" @click="goTo(article.BulldogjobUrl)" />
      <BaseButton label="Medium" @click="goTo(article.MediumUrl)"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  max-height: 4rem;
}
.article {
  &_container {
    display: flex;
    flex-direction: column;
    border: 2px solid $primary;
    border-radius: 8px;
    padding: 1rem;
    row-gap: 0.5rem;
    background: $nav-primary;
  }
  &_content {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 1rem;
    :nth-child(2) {
      justify-self: center;
      align-self: center;
    }
  }
  &_buttons {
    display: flex;
    padding-top: 0.5rem;
    justify-content: flex-end;
    column-gap: 1rem;
    align-items: center;
  }
  &_description {
    font-size: 1.2rem;
    width: 100%;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
  }
  &_title {
    font-size: 2rem;
  }
}
</style>