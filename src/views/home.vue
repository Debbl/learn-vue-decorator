<template>
  <div class="">
    <p>counter {{ counter }}</p>
    <p>counter + 1: {{ counterPlusOne }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter } from "vuex-class";

@Component
export default class Home extends Vue {
  @State("counter")
  counter!: number;

  @Getter("counterPlusOne")
  counterPlusOne!: number;
}
</script>
