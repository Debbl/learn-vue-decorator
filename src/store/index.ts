import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface RootState {
  counter: number;
}

const store = new Vuex.Store<RootState>({
  state: {
    counter: 0,
  },
  getters: {
    counterPlusOne: (state) => state.counter + 1,
  }
});

export default store;
