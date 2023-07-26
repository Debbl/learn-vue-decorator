<template>
  <div>
    <home></home>
    <br />
    <todo></todo>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Home from "./views/home.vue";
import Todo from "./views/todo.vue";

@Component({
  components: { Home, Todo },
})
export default class App extends Vue {}
</script>
