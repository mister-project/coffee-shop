import Vue from "vue";
import Vuex from "vuex";
import links from "./links";
// import products from "./products";
import bestsellers from "./bestsellers";
import coffee from "./coffee";
import goods from "./goods";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    goods,
    coffee,
    bestsellers,
    // products,
  },
});

export default store;
