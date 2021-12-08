<template>
  <ul>
    <todo-item v-for="todo of todos" :key="todo.id" :todo="todo"></todo-item>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue"
export default {
  components: { TodoItem },
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
}
</script>

<style></style>
