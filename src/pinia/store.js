import { defineStore } from "pinia";
import { ref, onMounted, watch } from "vue";
export const useTodoStore = defineStore("todo", () => {
  let todos = ref([]);
  const todosListStorage = localStorage.getItem("tods");
  if (todosListStorage) {
    todos.value = JSON.parse(todosListStorage);
  }
  const addTodo = (todoText) => {
    todos.value.push({
      id: new Date().getTime(),
      text: todoText,
      done: false,
    });
  };
  const removeTodo = (todoId) => {
    todos.value = todos.value.filter((todo) => todo.id !== todoId);
  };
  const doneTodo = (item) => {
    console.log(item);
  };
  watch(
    todos,
    (state) => {
      localStorage.setItem("tods", JSON.stringify(state));
    },
    {
      deep: true,
    }
  );
  onMounted(() => {
    todos.value = JSON.parse(todosListStorage) || [];
  });
  return {
    todos,
    addTodo,
    removeTodo,
    doneTodo,
  };
});
