<script setup lang="ts">
import {certificates} from "~/data/certificates"
import ListItem from "~/components/features/certificates/ListItem.vue";
import SingleCertificate from "~/components/features/certificates/SingleCertificate.vue";

const activeCertificateName = ref(certificates[0].Name)
const onChangeActiveCertificate = (activeName: string) => {
  activeCertificateName.value = activeName
}
const activeCertificate = computed(() => {
  return certificates.find((certificate) => certificate.Name === activeCertificateName.value)
})

</script>

<template>
  <div class="certificates_container">
    <div>
      <ListItem v-for="certificate in certificates" :key="certificate" :name="certificate.Name"
                :organization="certificate.Organization" :active="certificate.Name === activeCertificateName"
                @changeActiveCertificate="onChangeActiveCertificate"/>
    </div>
    <SingleCertificate class="certificates_single-certificate" :certificate="activeCertificate"/>
  </div>
</template>

<style scoped lang="scss">
.certificates {
  &_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 32px 24px 24px;
    max-width: 100vw;
    column-gap: 32px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
  &_single-certificate {
    height: 80vh;
    width: 45vw;
    position: fixed;
    top: 95px;
    right: 8px;
  }
}
</style>