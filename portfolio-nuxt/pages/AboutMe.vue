<script setup lang="ts">
import Social from "~/components/features/aboutsMe/Social.vue";

const goTo = (url: string) => {
  window.open(url, '_blank');
}
</script>

<template>
  <div class="about-me_container">
    <div class="about-me_socials">
      <Social icon="fa-solid fa-newspaper" @click="goTo('https://chihuahuacoder.com/?source=top_nav_blog_home')"/>
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
        <span class="about-me_description">I have been programming since 2019 and working professionally since 2021 as a Fullstack Developer. My core technologies include .NET and Vue, and I currently work with .NET, Angular, and Blazor. I share my knowledge and passion for software development through my programming blog, ChihuahuaCoder, where I write about software engineering, practical solutions, and continuous learning. I have taken part in many hackathons, including being a three-time finalist in HackYeah, one of the biggest technology events in Europe. My experience includes rapid prototyping and cross-team collaboration. I am an alumna of Intel’s mentoring program “New Technologies for Girls”, which played an important role in my technical and professional growth. I’m also a co-creator of WizardWorldApi, a project that has surpassed 12 million requests. It is the most popular API returning data from the Harry Potter universe.</span>
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
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 50vw;
    }
  }
  &_bella {
    width: 15vw;
    overflow: hidden;
    position: relative;
    top: -5vw;
    left: 14vw;
    border: 3px solid $primary;
    border-radius: 50%;
    z-index: 1;
    @media (max-width: 768px) {
      width: 40vw;
      top: -10vw;
      left: 30vw;
    }
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
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding-right: 0;
    }
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
    @media (max-width: 768px) {
      padding-bottom: 2rem;
    }
  }
}
</style>