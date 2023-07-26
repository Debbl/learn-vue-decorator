<template>
  <div>
    <h1>Todo</h1>
    <div>
      <input type="text" v-model="currentTodoName" />
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
  currentTodoName = "";
  // todoList
  todoArr = [
    { name: "todo1", done: false },
    { name: "todo2", done: true },
    { name: "todo3", done: false },
  ];

  // add todo
  addTodo() {
    if (!this.currentTodoName) return;

    this.todoArr.push({
      name: this.currentTodoName,
      done: false,
    });

    this.currentTodoName = "";
  }
}
</script>
