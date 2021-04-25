<template>
  <v-container>
    <Comic />
  </v-container>
</template>

<script>
import Comic from "./Comic";
export default {
  name: "Home",
  components: {
    Comic,
  },
  data: () => ({}),
};
</script>
