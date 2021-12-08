<template>
  <div>
    <input type="checkbox" :checked="isAllChecked" />
    <input type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    isAllChecked() {
      return this.$store.state.todos.every((it) => it.done)
    },
  },
}
</script>

<style></style>
