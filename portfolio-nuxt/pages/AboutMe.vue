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
      <div class="about-me_text-container">
        <span class="about-me_title">Hello world!</span>
        <span class="about-me_description">I started programming in 2019 and since then it has become my passion. My strongest point is programming in .Net. I do well in Vue. I know the basics of Flutter, Angular and Python. I can develop web, desktop and mobile applications, as well as database design. I am happy to share my code on GitHub. I like to learn in my free time and develop projects that help me in everyday life. I care about details and I can independently plan the implementation of tasks entrusted to me.</span>
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">
img {
  width: inherit;
  scale: 1.1;
  z-index: 1;
}
.about-me {
  &_container {
    padding: 8px 32px;
    height: 80vh;
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
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2;
    object-fit: cover;
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
  }
  &_content-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 2rem;
    padding-right: 2rem;
    height: 100%;
  }
  &_title {
    font-size: 3rem;
  }
  &_description {
    font-size: 1.5rem;
  }
  &_text-container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    text-align: justify;
    height: 100%;
    justify-content: center;
  }
}
</style>