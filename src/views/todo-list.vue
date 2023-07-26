<template>
  <ul>
    <template v-for="(t, i) in todoArr">
      <todo-item
        :key="t.name"
        :todo="t"
        @remove-todo="() => removeTodo(i)"
        @switch-todo="() => switchTodo(i)"
      ></todo-item>
    </template>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Model } from "vue-property-decorator";
import TodoItem from "./todo-item.vue";

@Component({
  components: { TodoItem },
})
export default class TodoList extends Vue {
  @Model()
  todoArr!: Array<{
    name: string;
    done: boolean;
  }>;

  // remove todo
  removeTodo(i: number) {
    this.todoArr.splice(i, 1);
  }
  // switch todo
  switchTodo(i: number) {
    this.todoArr[i].done = !this.todoArr[i].done;
  }
}
</script>
