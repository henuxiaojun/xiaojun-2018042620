/**
 * mutations，统一使用大写字母，以下划线分割
 */
export default {
  /**
   * 保存TODO信息
   * @param state
   * @param todos
   * @constructor
   */
  GET_TODOS (state, todos) {
    state.todos = todos
  },
  /**
   * 新增TODO
   * @param state
   * @param todo
   * @constructor
   */
  ADD_TODO (state, todo) {
    state.todos.push(todo)
  },
  /**
   * 切换所有todo的complete值
   * @param state
   * @param status
   * @constructor
   */
  TOGGLE_ALL_TODOS (state, status) {
    state.todos.forEach(function (todo) {
      todo.completed = status
    })
  },
  /**
   * 设置visibility
   * @param state
   * @param type
   * @constructor
   */
  SET_VISIBILITY (state, type) {
    state.visibility = type
  },
  /*
  * 删除单个todo
  *
  **/
  DELETE_TODO (state, id) {
    for (let i = 0; i < state.todos.length; i++) {
      if (state.todos[i].id === id) {
        state.todos.splice(i, 1)
        return
      }
    }
  },
  /*
  * 更新todo的title
  * */
  UPDATE_TODO (state, data) {
    for (let i = 0; i < state.todos.length; i++) {
      if (state.todos[i].id === data.todo.id) {
        state.todos[i].title = data.title
      }
    }
  }
}
