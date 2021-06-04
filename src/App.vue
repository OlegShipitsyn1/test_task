<script>
import AppSearch from "./components/AppSearch.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { AppSearch },

  data: () => ({
    matchingStrings: [],
  }),

  computed: {
    ...mapGetters(["INPUT_VALUE"]),
    ...mapGetters(["GET_MATCHING_STRINGS"]),
  },

  methods: {
    getMatchingStrings() {
      this.matchingStrings = this.GET_MATCHING_STRINGS(this.INPUT_VALUE);
    },
  },
};
</script>

<template>
  <div id="app">
    <app-search @searchButtonClicked="getMatchingStrings" />
    <article>
      <h2>Strings matching pattern:</h2>
      <h3 v-text="matchingStrings.length" />
    </article>
  </div>
</template>

<style>
body {
  background-color: rgb(249, 249, 249);
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
}
</style>
