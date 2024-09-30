<template>
  <div class="main">
    <h1 class="title-h1">Todo list</h1>
    <div class="todo-list" >
      <div class="todo-list__head">
        <input placeholder="Какая у вас задача на сегодня?" type="text" class="todo-list__head-input" v-model="todoText">
        <button class="button todo-list__head-button" @click="addTodo">Добавить</button>
      </div>
      <ul class="todo-list__ul" v-if="this.todos.length >= 1">
        <li class="todo-list__ul-li" v-for="todo in todos" :key="todo.id" :class="`isDone ${todo.done}`">
          <textarea v-model="todo.text" class="todo-list__ul-li__text"></textarea>
          <div class="buttons-todo">
            <button class="button buttons-todo__done" @click="doneTodo(todo.done = !todo.done)">{{ todo.done ? 'Задача выполнена' : 'Выполнить'}}</button>
            <button class="button buttons-todo__delete" @click="removeTods(todo.id)">Удалить</button>
          </div>
        </li>
      </ul>
      <div class="todo-null" v-else>
      Добавьте задачу!
    </div>
    </div>
    </div>
 </template>
 <script>
 import { useTodoStore } from './pinia/store';
 export default {
  name: 'App',
  data() {
    return {
      todoText: '',
    };
  },
  computed: {
    todos() {
     return useTodoStore().todos;
   },
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    addTodo() {
      if (this.todoText.trim() !== '' && this.todoText.value !== null) {

        useTodoStore().addTodo(this.todoText)
        console.log(this.todos.length)
      }
    },
    removeTods(todsId) {
     useTodoStore().removeTodo(todsId);
   },
   doneTodo(todoId) {
    useTodoStore().doneTodo(todoId);
   },
  }

 };
 </script>