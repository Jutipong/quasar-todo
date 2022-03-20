<script setup lang="ts">
import { useTodoStore, Action } from '../../stores/todo';
import ItemComponent from './ItemComponent.vue';
import EditComponent from './EditComponent.vue';
const todoStroe = useTodoStore();
</script>

<template>
  <div class="q-page">
    <div class="fit row justify-center items-start content-start">
      <div v-if="todoStroe.todosCount > 0">
        <q-list dense bordered padding class="rounded-borders">
          <q-item-label header>Total: {{ todoStroe.todosCount }}</q-item-label>
          <q-separator />
          <q-item clickable v-ripple v-for="todo in todoStroe.Todos" :key="todo.Id" style="width: 350px">
            <ItemComponent :todo="{ ...todo }" v-if="todo.action === null" :key="todo.Id + 'A'" />
            <EditComponent v-if="todo.action === Action.Edit" :todo="{ ...todo }" :key="todo.Id + 'B'" />
          </q-item>
        </q-list>
      </div>
      <div v-else>
        <h4>Data not found.</h4>
      </div>
    </div>
  </div>
</template>
