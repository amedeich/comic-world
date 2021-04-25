<template>
  <v-card class="overflow-hidden">
    <v-app-bar app color="primary">
      <v-toolbar-title class="header subheading font-weight-regular"
        >ComicWorld!!</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <div>
        <span class="subheader">
          Un espacio divertido para conocer Comics
        </span>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="white">mdi-face</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="white">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<style lang="scss">
.header {
  color: white;
  border-bottom: 2px solid #fdd402;
  border-bottom-width: medium;
  padding-left: 0 !important;
  font-family: comic-header;
  transform: rotate(-5deg);
}
.subheader {
  font-size: 18px;
  color: #ccc;
  font-style: italic;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .subheader {
    display: none;
  }
}
</style>
