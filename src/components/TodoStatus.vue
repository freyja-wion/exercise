<template>
  <div>
    <todo-left-count></todo-left-count>
    <div>
      <label for=""><input type="radio" name="" id="" />ALL</label>
      <label for=""><input type="radio" name="" id="" />Active</label>
      <label for=""><input type="radio" name="" id="" />completed</label>
    </div>
    <clear-todo></clear-todo>
  </div>
</template>

<script>
import ClearTodo from "./ClearTodo.vue"
import TodoLeftCount from "./TodoLeftCount.vue"
export default {
  components: { TodoLeftCount, ClearTodo },
}
</script>

<style></style>
