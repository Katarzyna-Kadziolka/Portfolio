<script setup lang="ts">

</script>

<template>
  <div class="gallery-card_container">
    <img src="../assets/images/doscvolTools-mini.png" alt="Doscvol tools" class="gallery-card_image">
    <div class="gallery-card_content">
      <span class="gallery-card_title">Doscvol Tools</span>
      <span>Content generator for RPG game Blades In The Dark</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gallery-card {
  &_container {
    box-shadow: 8px 8px 23px 0px rgba(66, 68, 90, 1);
    border-radius: 15px;
  }
  &_image {
    width: inherit;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  &_content {
    display: flex;
    flex-direction: column;
    padding: 8px;
    row-gap: 8px;
  }
  &_title {
    font-size: 1.2rem;
  }
}
</style>