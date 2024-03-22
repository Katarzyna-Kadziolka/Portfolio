<script setup lang="ts">

import Article from "~/components/features/articles/Article.vue";
import {articles} from "~/data/articles";
</script>

<template>
  <div class="articles_container">
    <Article v-for="article in articles" :article="article" :key="article" />
  </div>
</template>

<style scoped lang="scss">
.articles {
  &_container {
    padding: 3rem;
    display: flex;
    flex-direction: column;
  }
}
</style>