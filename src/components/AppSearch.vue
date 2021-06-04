<script>
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-search",
  emits: ["searchButtonClicked"],

  methods: {
    ...mapActions(["UPDATE_INPUT_VALUE"]),

    updateInput(e) {
      this.UPDATE_INPUT_VALUE(e.target.value);
    },
  },

  computed: {
    ...mapGetters(["INPUT_VALUE"]),
  },
});
</script>

<template>
  <form>
    <input
      placeholder="String should start with:"
      :value="INPUT_VALUE"
      @change="updateInput"
      type="text"
    />
    <button @click="$emit('searchButtonClicked')" type="button">Search</button>
  </form>
</template>

<style>
form {
  display: inline-flex;
  justify-content: center;
  border-radius: 0px 7px 7px 0px;
  box-shadow: 3px 6px 20px -3px #0000001f;
  overflow: hidden;
}

input {
  padding: 12px;
  font-size: 25px;
  border: none;
}

input:focus {
  outline: none;
}

input::placeholder {
  font-size: 20px;
  letter-spacing: 0.04em;
  color: rgba(192, 192, 192, 0.883);
}

button {
  border: none;
  padding: 0 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-size: 16px;
  font-weight: bold;
  background-color: wheat;
  cursor: pointer;
  text-shadow: -1px 1px 5px #0c0c0c7a;
  color: white;
}

button:hover {
  background-color: #ecd4a8;
}
</style>
