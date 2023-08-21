import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import todoStore from "./todo";

Vue.use(Vuex);

const rootStore: StoreOptions<RootState> = {
  state: {
    counter: 0,
  },
  getters: {
    counterPlusOne: (state) => state.counter + 1,
  },
  mutations: {
    // increment
    increment(state) {
      state.counter++;
    },
    // decrement
    decrement(state) {
      state.counter--;
    },
    // add
    add(state, payload: number) {
      state.counter += payload;
    },
  },
  actions: {
    incrementAction(context) {
      context.commit("increment");
    },
  },
};

const store = new Vuex.Store<RootState>({
  ...rootStore,
  modules: {
    todoStore,
  },
});

export default store;
