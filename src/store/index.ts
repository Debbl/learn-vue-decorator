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
    }
  },
  actions: {
    incrementAction(context) {
      context.commit("increment");
    }
  }
});

export default store;
