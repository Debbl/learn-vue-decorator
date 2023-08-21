<template>
  <li>
    <span>{{ todo.title }}</span>
    -
    <span>{{ todo.done ? "done" : "doing" }}</span>
    <span>
      <button @click="removeTodo">remove</button>
      <button @click="toggleTodo">switch</button>
    </span>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class TodoItem extends Vue {
  // todo
  @Prop({ type: Object, default: () => ({}) })
  todo!: {
    title: string;
    done: boolean;
  };

  @Emit()
  removeTodo() {
    console.log("remove todo");
  }
  @Emit()
  toggleTodo() {
    console.log("switch todo");
  }
}
</script>
