import Vue from "vue";
import Vuex from "vuex";
import comic from "./comic";

Vue.use(Vuex);

const initialModules = {
  comic,
};

const getDefaultState = (initialState) => {
  return {
    ...initialState,
  };
};

export default new Vuex.Store({
  modules: initialModules,
  mutations: {
    RESET: (state) => {
      Object.keys(state).forEach((key) => {
        Object.assign(
          state[key],
          getDefaultState(initialModules[key].initialState)
        );
      });
    },
  },
});
