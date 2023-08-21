import { Module } from "vuex";
import { RootState } from "../types";
import { TodoStore } from "./types";

const todoStore: Module<TodoStore, RootState> = {
  namespaced: true,
  state: {
    todoList: [
      { title: "01", done: false },
      { title: "02", done: true },
      { title: "03", done: false },
    ],
  },
  getters: {
    firstTodo: (state, getters, rooState) => {
      return state.todoList[0];
    },
  },
  mutations: {
    addTodo: (state, payload: string) => {
      state.todoList.push({ title: payload, done: false });
    },
    removeTodo: (state, payload: number) => {
      state.todoList.splice(payload, 1);
    },
    toggleTodo: (state, payload: number) => {
      state.todoList[payload].done = !state.todoList[payload].done;
    },
  },
};

export default todoStore;
