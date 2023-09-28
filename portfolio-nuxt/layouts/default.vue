<script setup lang="ts">
import NavButton from "~/components/layout/NavButton.vue";

</script>

<template>
  <div class="default_container">
    <img src="../assets/logo.png" alt="logo" class="default_logo">
    <div class="default_title">Katarzyna Kądziołka</div>
    <div class="default_buttons">
      <NavButton label="About me" icon="fa-solid fa-user" link="/"/>
      <NavButton label="Experience" icon="fa-solid fa-briefcase" link="/Experience"/>
      <NavButton label="Projects" icon="fa-solid fa-laptop-code" link="/Projects"/>
      <NavButton label="Achievements" icon="fa-solid fa-star" link="/Achievements"/>
      <NavButton label="Certificates" icon="fa-solid fa-book" link="/Certificates"/>
      <NavButton label="Time line" icon="fa-solid fa-timeline" link="/TimeLine"/>
    </div>
  </div>
  <slot />
</template>

<style scoped lang="scss">
.default {
  &_container {
    background: linear-gradient(90deg, $primary, $p-secondary);
    height: 40px;
    border-bottom: $p-secondary solid 1px;
    display: flex;
    align-items: center;
    padding: 8px;
    column-gap: 8px;
  }
  &_logo {
    width: 40px;
    height: 40px;
  }
  &_title {
    color: white;
    font-size: 1.5rem;
  }
  &_buttons {
    margin-left: 16px;
    display: flex;
    column-gap: 24px;
  }
}
</style>
