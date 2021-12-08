<template>
  <li>
    <input type="checkbox" :value="todo.done" @change="toogleStatus" />
    <span>{{ todo.text }}</span>
    <input type="text" />
    <button>&times;</button>
  </li>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    toggleStatus() {
      this.todo.done = !this.todo.done
    },
  }, 
}
</script>

<style></style>
