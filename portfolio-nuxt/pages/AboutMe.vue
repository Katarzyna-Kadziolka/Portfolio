<script setup lang="ts">
import Social from "~/components/features/aboutsMe/Social.vue";

const goTo = (url: string) => {
  window.open(url, '_blank');
}
</script>

<template>
  <div class="about-me_container">
    <div class="about-me_socials">
      <Social icon="fa-brands fa-linkedin-in" @click="goTo('https://www.linkedin.com/in/katarzyna-k%C4%85dzio%C5%82ka-7610a6201/')"/>
      <Social icon="fa-brands fa-github" @click="goTo('https://github.com/Katarzyna-Kadziolka')"/>
    </div>
    <div>
      Test
    </div>
  </div>

</template>

<style scoped lang="scss">
.about-me {
  &_container {
    padding: 8px 32px;
  }
  &_socials {
    display: flex;
    column-gap: 24px;
    justify-content: flex-end;
  }
}
</style>