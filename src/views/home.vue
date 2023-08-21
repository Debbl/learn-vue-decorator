<template>
  <div class="">
    <p>count {{ count }}</p>
    <p>double count {{ double }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  // count
  count = 0;

  // increment
  increment() {
    this.count++;
  }
  // decrement
  decrement() {
    this.count--;
  }
  get double() {
    return this.count * 2;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
