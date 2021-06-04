import { createStore } from "vuex";

import searchInput from "./search/searchInput";
import searchableStrings from "./search/searchableStrings";

const store = createStore({
  modules: {
    searchInput,
    searchableStrings,
  },
});

export default store;
