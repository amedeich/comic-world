<template>
  <div>
    <div v-if="!isLoaded">
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-row>
    </div>
    <div v-else>
      <div class="title-container">
        <span>{{ comicData.title }}</span>
      </div>
      <div class="rating-container">
        <div class="rating">
          <star-rating
            read-only
            :show-rating="false"
            :star-size="15"
            :rating="randomNum(5)"
            style="margin-left: 5px"
          ></star-rating>
          <small class="rating-review">({{ randomNum(200) }}k reviews)</small>
        </div>
        <small class="comic-date">
          ({{ comicData.day }}/{{ comicData.month }}/{{ comicData.year }})
        </small>
      </div>
      <v-row
        v-if="!imageReady"
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-row>
      <div>
        <transition name="fade">
          <img
            class="comic-img"
            :src="comicData.img"
            v-on:load="onImageReady"
            v-show="imageReady"
          />
        </transition>
        <div
          v-if="imageReady"
          style="display: flex; justify-content: center; margin-right: 12px"
        >
          <v-btn @click="nextComic" text color="primary">
            Ver otro Comic
          </v-btn>
        </div>
      </div>
      <div v-if="imageReady" class="feedback-container">
        <div class="feedback-title-container text-center">
          <h3>¿Qué te parecio {{ comicData.title }}?</h3>
          <small> ¡Queremos conocer tu opinión! </small>
        </div>
        <div class="star-rating-contianer">
          <star-rating
            v-model="rating"
            :show-rating="false"
            :star-size="35"
            style="margin-left: 5px"
          ></star-rating>
          <small v-if="rating"><b>¡Gracias por tu calificación!</b></small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import StarRating from "vue-star-rating";
export default {
  name: "Comic",
  components: {
    StarRating,
  },
  data: () => ({
    isLoaded: false,
    imageReady: false,
    rating: null,
  }),
  computed: {
    ...mapGetters({ comicData: "comic/comicData" }),
  },
  async created() {
    this.fetchComic();
  },
  methods: {
    ...mapActions({ getComic: "comic/getComic" }),
    onImageReady() {
      this.imageReady = true;
    },
    async fetchComic() {
      await this.getComic();
      this.isLoaded = !this.isLoaded;
    },
    randomNum(until) {
      return Math.floor(Math.random() * until) + 1;
    },
    nextComic() {
      this.randomRating = this.randomNum(5);
      this.imageReady = !this.imageReady;
      this.rating = null;
      this.isLoaded = !this.isLoaded;
      this.fetchComic();
    },
  },
};
</script>
<style lang="scss" scoped>
.title-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  & span {
    font-size: 26px;
    display: inline-flex;
    border-bottom: 2px solid #fdd402;
    border-bottom-width: medium;
    font-weight: 700;
  }
}

.comic-img {
  display: block;
  margin: 0 auto;
  object-fit: cover;
  width: 100%;
  max-width: 400px;
  height: auto;
}

.comic-img:hover {
  cursor: pointer;
}

.comic-img:active {
  opacity: 0.5;
}

.rating-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}
.rating {
  display: flex;
  align-items: center;
}
.rating-review {
  font-weight: bold;
  font-style: italic;
  font-size: 10px;
}
.comic-date {
  font-weight: bold;
  color: #bbb;
}
.fade-enter-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
.feedback-container {
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-direction: column;
}
.feedback-title-container,
.star-rating-contianer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
