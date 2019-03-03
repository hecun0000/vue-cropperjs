<template>
  <div class="home">
    <upload/>
  </div>
</template>

<script>
// @ is an alias to /src
import upload from "@/components/upload.vue";

export default {
  name: "home",
  components: {
    upload
  }
};
</script>
