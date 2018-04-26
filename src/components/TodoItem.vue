<template>
  <li class="todo"  :class="{'editing': editShow}">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed" @click="checkClick">
      <!--TODO  双击此元素，该todo进入编辑状态，显示下方的input.edit元素-->
      <label @dblclick="dbClick">{{todo.title}}</label>
      <!--TODO  点击此元素，删除该todo-->
      <button class="destroy" @click="deleteTodo"></button>
    </div>
    <input ref="inputEdit" class="edit" type="text" v-model="todoTitle" @keyup.enter="updateTodo" v-focus="isFocus">
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  data () {
    return {
      todoTitle: '',
      editShow: false,
      isFocus: false
    }
  },
  props: {
    todo: Object
  },
  directives: {
    focus (el, {value}) {
      if (value) {
        el.focus()
      }
    }
  },
  methods: {
    deleteTodo () {
      this.$store.dispatch('removeTodo', this.todo.id)
    },
    checkClick () {
      this.$nextTick(() => {
        this.$store.dispatch('toggleOne', this.todo)
      })
    },
    dbClick () {
      this.editShow = true
      this.isFocus = true
    },
    updateTodo () {
      this.$store.dispatch('updateTodo', {
        todo: this.todo,
        title: this.todoTitle
      })
      this.editShow = false
      this.isFocus = false
    }
  }
}
</script>

<style scoped>

</style>
