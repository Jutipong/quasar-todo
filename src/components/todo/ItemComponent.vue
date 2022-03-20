<script setup lang="ts">
import { TodoType } from '../../stores/todo/types';
import { Action, useTodoStore } from '../../stores/todo';
const prop = defineProps<{ todo: TodoType }>();
const { deleteTodo, setActionTodo } = useTodoStore();
</script>

<template>
  <q-item-section>
    <q-item-label class="q-mt-sm">{{ prop.todo.Name }}</q-item-label>
  </q-item-section>
  <q-space />
  <q-item-section top side>
    <div class="text-grey-8 q-gutter-xs">
      <q-btn class="gt-xs" size="12px" flat dense round icon="eva-trash-2-outline" @click="deleteTodo(prop.todo.Id)" />
      <q-btn
        class="gt-xs"
        size="12px"
        flat
        dense
        round
        icon="eva-edit-2-outline"
        @click="setActionTodo(prop.todo.Id, Action.Edit)"
      />
    </div>
  </q-item-section>
</template>
