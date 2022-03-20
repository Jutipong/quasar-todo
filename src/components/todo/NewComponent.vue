<script setup lang="ts">
import { useTodoStore } from '../../stores/todo';
const todoStroe = useTodoStore();
let todoName = $ref('');
const newTod = () => {
  if (todoName.length <= 0) return false;
  todoStroe.newTodo(todoName);
  todoName = '';
};
</script>

<template>
  <div class="q-page q-pa-md item">
    <div class="fit row wrap justify-center items-start content-start">
      <q-input
        @keyup.enter="newTod"
        dense
        clearable
        outlined
        v-model="todoName"
        label="New Todo"
        style="width: 350px"
      />
    </div>
  </div>
</template>
