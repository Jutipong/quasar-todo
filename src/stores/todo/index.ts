import { defineStore } from 'pinia';
import { TodosType, TodoType } from '../todo/types';
import { uid } from 'quasar';

export const Action = {
  New: 'New',
  Edit: 'Edit',
  Del: 'Del',
};

export const useTodoStore = defineStore({
  id: 'todoStore',
  state: (): TodosType => ({
    Todos: [
      { Id: uid(), Name: 'Todo 1', CreateDate: Date.now(), IsActive: true, action: null },
      { Id: uid(), Name: 'Todo 2', CreateDate: Date.now(), IsActive: true, action: null },
    ],
  }),
  getters: {
    todos: (state) => state.Todos,
    todosCount(state) {
      return state.Todos.length;
    },
  },
  actions: {
    newTodo(todoName: string) {
      this.Todos.unshift(<TodoType>{
        Id: uid(),
        Name: todoName,
        CreateDate: Date.now(),
        IsActive: true,
        action: null,
      });
    },
    setActionTodo(id: string, action: string) {
      const obj = this.Todos.find((r) => r.Id === id);
      obj.action = action;
    },
    updateTodo(todo: TodoType) {
      const obj = this.Todos.find((r) => r.Id === todo.Id);
      if (obj) {
        obj.Name = todo.Name;
        obj.IsActive = todo.IsActive;
        obj.UpdateDate = Date.now();
        this.setActionTodo(obj.Id, null);
      }
    },
    deleteTodo(id: string) {
      const result = this.Todos.filter((r) => r.Id !== id);
      this.Todos = result;
    },
  },
});
