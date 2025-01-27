import Vue from "vue";
Vue.filter("addCurrensy", (value) => {
  return value + "$";
});
