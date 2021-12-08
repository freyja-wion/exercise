<template>
  <span>{{ count }} items left</span>
</template>

<script>
export default {
  computed: {
    //未完成事件个数
    count() {
      return this.$store.state.todos.filter((it) => !it.done).length
    },
  },
}
</script>

<style></style>
