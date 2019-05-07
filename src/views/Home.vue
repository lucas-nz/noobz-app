<template>
  <div class="home">
    <base-header></base-header>
    <router-view />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";

export default {
  name: "home",
  components: {
    BaseHeader
  }
};
</script>
