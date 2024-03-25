<script setup lang="ts">
import {Article} from "~/types/article";
import BaseButton from "~/components/common/BaseButton.vue";

defineProps<{
  article: Article
}>()

const goTo = (url: string) => {
  window.open(url, '_blank');
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
  <div class="article_container">
    <span>{{article.Date}}</span>
    <div class="article_mobile-content">
      <span class="article_title">{{article.Title}}</span>
      <div class="article_content">
        <div class="article_description" v-if="!isMobile">
          {{article.Description}}
        </div>
        <img :src="article.PhotoUrl" :alt="article.Title">
      </div>
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
  @media (max-width: 768px) {
    max-width: 3rem;
  }
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
    @media (max-width: 768px) {
      align-items: center;
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
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  &_mobile-content {
    @media (max-width: 768px) {
      display: flex;
    }
  }
}
</style>