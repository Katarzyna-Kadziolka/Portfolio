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
    <div class="about-me_content-container">
      <div class="about-me_photo-container">
        <div class="about-me_my-photo">
          <img src="~/assets/images/me.png" alt="my photo">
        </div>
        <div class="about-me_bella">
          <img src="~/assets/images/Bella.png" alt="Bella">
        </div>
      </div>
      <div>
        Test
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">
img {
  width: inherit;
  object-fit: cover;
  z-index: 1;
}
.about-me {
  &_container {
    padding: 8px 32px;
  }
  &_socials {
    display: flex;
    column-gap: 24px;
    justify-content: flex-end;
  }
  &_my-photo {
    width: 20vw;
    border: 5px solid $primary;
    border-radius: 50%;
    background: $nav-primary;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2;
  }
  &_bella {
    width: 15vw;
    overflow: hidden;
    position: absolute;
    top: 15vw;
    left: 15vw;
    border: 3px solid $primary;
    border-radius: 50%;
    z-index: 1;
  }
  &_photo-container {
    position: relative;
    display: flex;
    align-items: stretch;
  }
  &_content-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
</style>