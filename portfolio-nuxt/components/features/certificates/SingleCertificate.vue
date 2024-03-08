<script setup lang="ts">
import {Certificate} from "~/types/certificate";
import BaseButton from "~/components/common/BaseButton.vue";

const props = defineProps<{
  certificate: Certificate
}>()

const goTo = () => {
  window.open(props.certificate.Certificate, '_blank');
}
</script>

<template>
  <div class="single-certificate_container">
    <img :src="certificate.ImagePath" :alt="certificate.Name">
    <hr>
    <span class="single-certificate_name">{{certificate.Name}}</span>
    <span>{{certificate.Date}}</span>
    <span>{{certificate.Description}}</span>
    <BaseButton class="single-certificate_button" label="Show certificate" :disabled="false" @click="goTo" />
  </div>
</template>

<style scoped lang="scss">
img {
  height: 20vh;
  max-width: 30vw;
  object-fit: contain;
  padding-bottom: 16px;
  align-self: start;
}
hr {
  width: 100%;

}
.single-certificate {
  &_container {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  &_name {
    font-size: 2rem;
  }
  &_button {
    width: 50%;
    margin-top: auto;
    align-self: flex-end;
  }
}
</style>