import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    editingIdx: -1,
    show: "all",
    lastId: 2,
    todos: [
      {
        text: "eat",
        done: true,
        id: 1,
      },
      {
        text: "drink",
        done: false,
        id: 2,
      },
    ],
  },
  //数据变更
  mutations: {
    //payload:额外的参数
    addTodo(state, todo) {
      todo.id = state.lastId++
      state.todos.push(todo)
    },
    deleteTodo(state, idx) {
      state.todos.splice(idx, 1)
    },
    //切换todo的状态
    toggleTodostatus(state, id) {
      var todo = state.todos.find((it) => (it.id === id))
      todo.done = !todo.done
      //state.todos[idx].done = !state.todos[idx].done
    },
    edit(state, idx) {
      state.editingIdx = idx
    },
    toggleVisible(state, category) {
      // · 'active' . / : 'all' . /: 'completed '-state.show - =category
      state.show = category
    },
  },
  actions: {},
  modules: {},
})
