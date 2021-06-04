export default {
  state: () => ({
    inputValue: "",
  }),

  actions: {
    UPDATE_INPUT_VALUE({ commit }, newValue) {
      commit("UPDATE_INPUT_VALUE", newValue);
    },
  },

  mutations: {
    UPDATE_INPUT_VALUE(state, newValue) {
      state.inputValue = newValue;
    },
  },

  getters: {
    INPUT_VALUE(state) {
      return state.inputValue;
    },
  },
};
