<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="default_container">
    <img src="../assets/logo.png" alt="logo" class="default_logo">
    <div class="default_title">Katarzyna Kądziołka</div>

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
}
</style>
