<template>
  <div class="">
    <p>counter {{ counter }}</p>
    <p>counter + 1: {{ counterPlusOne }}</p>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
    <div>
      <button @click="add(5)">+5</button>
      <button @click="add(-5)">-5</button>
    </div>
    <div>
      <p>action</p>
      <button @click="incrementAction">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component
export default class Home extends Vue {
  @State("counter")
  counter!: number;

  @Getter("counterPlusOne")
  counterPlusOne!: number;

  @Mutation
  increment!: () => void;

  @Mutation
  decrement!: () => void;

  @Mutation
  add!: (num: number) => void;

  @Action
  incrementAction!: () => void;
}
</script>
