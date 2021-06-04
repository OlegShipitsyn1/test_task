import RandomStringStorage from "../../classes/RandomStringStorage";

export default {
  state: () => ({
    searchableStrings: new RandomStringStorage({}).generate(),
  }),

  getters: {
    GET_SEARCHABLE_STRINGS: (state) => state.searchableStrings,

    GET_MATCHING_STRINGS: (state) => (query) => {
      const firstLetter = query[0];
      const stringsStatedFromFirstLetter =
        state.searchableStrings[firstLetter] || [];

      const pattern = new RegExp("^" + query);

      return stringsStatedFromFirstLetter.filter((string) =>
        pattern.test(string)
      );
    },
  },
};
