<template>
  <v-app>
    <Header></Header>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Home,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
