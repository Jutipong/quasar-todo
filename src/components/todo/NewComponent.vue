<script setup lang="ts">
import { useTodoStore } from '../../stores/todo';
import { ref } from 'vue';
const todoStroe = useTodoStore();
const todoName = ref(null);
const newTod = () => {
  if (todoName.value <= 0) return false;
  todoStroe.newTodo(todoName.value);
  todoName.value = null;
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
