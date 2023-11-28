<script setup lang="ts">
import NavButton from "~/components/layout/NavButton.vue";

const route = useRoute();
const activeRoute = computed(() => {
  return route.path
})

</script>

<template>
  <div class="default_container">
    <img src="../assets/logo.png" alt="logo" class="default_logo">
    <div class="default_title">Katarzyna Kądziołka</div>
    <div class="default_buttons">
      <NavButton label="About me" icon="fa-solid fa-user" link="/" :class="[activeRoute.valueOf() === '/' ? 'default_active' : '']"/>
      <NavButton label="Experience" icon="fa-solid fa-briefcase" link="/Experience" :class="[activeRoute.valueOf() === '/Experience' ? 'default_active' : '']"/>
      <NavButton label="Projects" icon="fa-solid fa-laptop-code" link="/Projects" :class="[activeRoute.valueOf() === '/Projects' ? 'default_active' : '']"/>
      <NavButton label="Achievements" icon="fa-solid fa-star" link="/Achievements" :class="[activeRoute.valueOf() === '/Achievements' ? 'default_active' : '']"/>
      <NavButton label="Certificates" icon="fa-solid fa-book" link="/Certificates" :class="[activeRoute.valueOf() === '/Certificates' ? 'default_active' : '']"/>
      <NavButton label="Time line" icon="fa-solid fa-timeline" link="/TimeLine" :class="[activeRoute.valueOf() === '/TimeLine' ? 'default_active' : '']"/>
    </div>
  </div>
  <div class="default_slot">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.default {
  &_container {
    background: $nav-primary;
    height: 40px;
    border-bottom: $nav-secondary solid 1px;
    display: flex;
    align-items: center;
    padding: 8px;
    column-gap: 8px;
    position: fixed;
    width: 100vw;
    z-index: 2;
  }
  &_slot {
    padding-top: 56px;
    z-index: 1;
  }
  &_logo {
    width: 40px;
    height: 40px;
  }
  &_title {
    color: $primary;
    font-size: 1.5rem;
  }
  &_buttons {
    margin-left: 16px;
    display: flex;
    column-gap: 24px;
  }
  &_active {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>
