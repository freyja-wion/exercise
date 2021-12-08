<template>
  <div id="app">
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-status></todo-status>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from "./components/TodoList.vue"
import TodoStatus from "./components/TodoStatus.vue"
export default {
  name: "App",
  components: {  TodoList, TodoStatus, TodoInput },
}
</script>

<style></style>
