<template>
  <ul>
    <template v-for="(t, i) in todoList">
      <todo-item
        :key="t.title"
        :todo="t"
        @remove-todo="() => removeTodo(i)"
        @toggle-todo="() => toggleTodo(i)"
      ></todo-item>
    </template>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TodoItem from "./todo-item.vue";
import { namespace } from "vuex-class";
import { TodoStore } from "../../store/todo/types";

const TodoStoreNamespace = namespace("todoStore");

@Component({
  components: { TodoItem },
})
export default class TodoContainer extends Vue {
  @TodoStoreNamespace.State
  todoList!: TodoStore["todoList"];

  @TodoStoreNamespace.Mutation
  removeTodo!: (i: number) => void;

  @TodoStoreNamespace.Mutation
  toggleTodo!: (i: number) => void;
}
</script>
