export default {
  /**
   * 获取所有todo
   * @param state
   * @param commit
   */
  getTodos ({ state, commit }) {
    window.restApi.get('/todos', res => {
      commit('GET_TODOS', res)
    }, err => {
      console.error('getTodos error: %o', err)
    })
  },
  /**
   * 新增todo
   * @param state
   * @param commit
   * @param title
   */
  addTodo ({ state, commit }, title) {
    const obj = {
      title: title,
      completed: false
    }
    window.restApi.post('/todo', obj, res => {
      commit('ADD_TODO', res)
    }, err => {
      console.error('addTodo error: %o', err)
    })
  },
  /**
   * 切换所有的todo的completed字段
   * @param state
   * @param commit
   * @param status
   */
  toggleAll ({ state, commit }, status) {
    const obj = {
      completed: status
    }
    window.restApi.put('/todos', obj, res => {
      commit('TOGGLE_ALL_TODOS', status)
    }, err => {
      console.error('checkAll error: %o', err)
    })
  },
  /**
   * 删除completed字段为true的todo
   * @param state
   * @param commit
   */
  removeCompletedTodos ({ state, commit }) {
    window.restApi.delete('/todo/completed', res => {
      commit('REMOVE_COMPLETED_TODOS')
    }, err => {
      console.error('toggleTodo error: %o', err)
    })
  },
  /**
   * 过滤todo
   * @param state
   * @param commit
   * @param type
   */
  filterTodos ({ state, commit }, type) {
    commit('SET_VISIBILITY', type)
  },
  /*
  * 删除单个todo API
  * */
  removeTodo ({ state, commit }, id) {
    window.restApi.delete(`/todo/${id}`, res => {
      commit('DELETE_TODO', id)
    }, err => {
      console.error('removeTodo error: %o', err)
    })
  },
  /*
  * 选中单个数据
  * */
  toggleOne ({ state, commit }, todo) {
    window.restApi.put(`/todo/${todo.id}`, {
      completed: todo.completed
    }, res => {
      // 切换成功！
    }, err => {
      console.error('toggleOne error: %o', err)
    })
  },
  /*
  * 更新数据
  * */
  updateTodo ({ state, commit }, data) {
    window.restApi.put(`/todo/${data.todo.id}`, {
      title: data.title
    }, res => {
      commit('UPDATE_TODO', data)
    }, err => {
      console.error('updateTodo error: %o', err)
    })
  }
}
