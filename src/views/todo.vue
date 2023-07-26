<template>
  <div>
    <h1>Todo</h1>
    <div>
      <input type="text" v-model="currentTodo" />
      <button @click="addTodo">add</button>
    </div>
    <todo-list v-model:todo-list="todoArr"></todo-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model } from "vue-property-decorator";
import TodoList from "./todo-list.vue";

@Component({
  components: { TodoList },
})
export default class Todo extends Vue {
  // todoList
  todoArr = [
    { name: "todo1", done: false },
    { name: "todo2", done: true },
    { name: "todo3", done: false },
  ];

  @Model()
  currentTodo = "";

  // add todo
  addTodo() {
    if (!this.currentTodo) return;

    this.todoArr.push({
      name: this.currentTodo,
      done: false,
    });
    this.currentTodo = "";
  }
}
</script>
