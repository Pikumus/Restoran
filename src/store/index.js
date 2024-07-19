import { createStore } from "vuex";
import Products from "./modules/Products";
import basketProducts from "./modules/basketProducts";

export default createStore({
  state: {
    count: 3,
  },
  getters: {
    getCount: (state) => state.count,
  },
  mutations: {
    SetCountPlus(state) {
      state.count += 1;
    },
  },
  actions: {},
  modules: {
    Products,
    basketProducts,
  },
});
