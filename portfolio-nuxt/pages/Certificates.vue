<script setup lang="ts">

</script>

<template>
  <div class="certificates_container">
    <div>
      Certificates
    </div>
    <div>
      Single certificate
    </div>
  </div>
</template>

<style scoped lang="scss">
.certificates {
  &_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 64px 24px 24px;
    max-width: 100vw;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
}
</style>