<template>
  <div>
    <h1>Todo</h1>
    <div>
      <input type="text" v-model="currentTodoName" />
      <button @click="addTodo(currentTodoName)">add</button>
    </div>
    <todo-container />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { TodoStore } from "../../store/todo/types";
import TodoContainer from "./todo-container.vue";

const TodoStoreNamespace = namespace("todoStore");

@Component({
  components: { TodoContainer },
})
export default class Todo extends Vue {
  currentTodoName = "";

  @TodoStoreNamespace.State
  todoList!: TodoStore;

  @TodoStoreNamespace.Mutation
  addTodo!: (title: string) => void;
}
</script>
