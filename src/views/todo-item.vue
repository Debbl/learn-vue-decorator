<template>
  <li>
    <span>{{ todo.name }}</span>
    -
    <span>{{ todo.done ? "done" : "doing" }}</span>
    <span>
      <button @click="removeTodo">remove</button>
      <button @click="switchTodo">switch</button>
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
    name: string;
    done: boolean;
  };

  // remove todo
  @Emit()
  removeTodo() {
    console.log("remove todo");
  }
  @Emit()
  switchTodo() {
    console.log("switch todo");
  }
}
</script>
