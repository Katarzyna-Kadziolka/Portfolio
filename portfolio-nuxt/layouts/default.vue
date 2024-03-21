<script setup lang="ts">
import NavButton from "~/components/layout/NavButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const route = useRoute();

watch(() => route.path, () => {
  showMobileMenu.value = false;
})

const isMobile = ref(false);
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

onMounted(() => {
  isMobile.value = window.innerWidth < 768;

  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});

</script>

<template>
  <div class="default_container">
    <div class="default_full-logo">
      <img src="../assets/logo.png" alt="logo" class="default_logo">
      <div class="default_title">Katarzyna Kądziołka</div>
    </div>
    <div class="default_buttons" v-if="!isMobile" >
      <NavButton label="About me" icon="fa-solid fa-user" link="/" :class="[route.path === '/' ? 'default_active' : '']"/>
      <NavButton label="Experience" icon="fa-solid fa-briefcase" link="/Experience" :class="[route.path === '/Experience' ? 'default_active' : '']"/>
      <NavButton label="Projects" icon="fa-solid fa-laptop-code" link="/Projects" :class="[route.path === '/Projects' ? 'default_active' : '']"/>
      <NavButton label="Achievements" icon="fa-solid fa-star" link="/Achievements" :class="[route.path === '/Achievements' ? 'default_active' : '']"/>
      <NavButton label="Certificates" icon="fa-solid fa-book" link="/Certificates" :class="[route.path === '/Certificates' ? 'default_active' : '']"/>
      <NavButton label="Timeline" icon="fa-solid fa-timeline" link="/TimeLine" :class="[route.path === '/TimeLine' ? 'default_active' : '']"/>
    </div>

    <div class="default_buttons" v-else>
      <div class="default_toggle show" @click="toggleMobileMenu">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div>
    </div>
  </div>
  <div v-if="showMobileMenu && isMobile" class="default_mobile-menu">
    <NavButton label="About me" icon="fa-solid fa-user" link="/" :class="[route.path === '/' ? 'default_active' : '']"/>
    <NavButton label="Experience" icon="fa-solid fa-briefcase" link="/Experience" :class="[route.path === '/Experience' ? 'default_active' : '']"/>
    <NavButton label="Projects" icon="fa-solid fa-laptop-code" link="/Projects" :class="[route.path === '/Projects' ? 'default_active' : '']"/>
    <NavButton label="Achievements" icon="fa-solid fa-star" link="/Achievements" :class="[route.path === '/Achievements' ? 'default_active' : '']"/>
    <NavButton label="Certificates" icon="fa-solid fa-book" link="/Certificates" :class="[route.path === '/Certificates' ? 'default_active' : '']"/>
    <NavButton label="Timeline" icon="fa-solid fa-timeline" link="/TimeLine" :class="[route.path === '/TimeLine' ? 'default_active' : '']"/>
  </div>
  <div v-show="!showMobileMenu" class="default_slot">
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
    z-index: 100;
    color: $primary;
    flex-direction: row;
    @media(max-width: 768px) {
      justify-content: space-between;
    }
  }
  &_slot {
    padding-top: 56px;
    z-index: 1;
  }
  &_logo {
    width: 40px;
    height: 40px;
  }
  &_full-logo {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  &_title {
    font-size: 1.5rem;
  }
  &_buttons {
    padding-left: 16px;
    display: flex;
    column-gap: 24px;
    align-items: center;
    justify-self: flex-end;
    div.show {
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
  }
  &_active {
    background: rgba(255, 255, 255, 0.2);
  }
  &_toggle {
    display: none;
    padding-right: 32px;
  }
  &_mobile-menu {
    padding-top: 64px;
    z-index: 100;
    background: #1d1d27;
    width: 100%;
    height: 100%;
  }
}
</style>
