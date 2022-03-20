<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { TodoType } from '../../stores/todo/types';
import { useTodoStore } from '../../stores/todo';
const prop = defineProps<{ todo: TodoType }>();
const { setActionTodo, updateTodo } = useTodoStore();
const _todo = reactive<TodoType>({ Id: '', Name: '', CreateDate: Date.now(), IsActive: true, action: null });
onMounted(() => Object.assign(_todo, prop.todo));
</script>

<template>
  <q-item-section>
    <q-input dense v-model="_todo.Name" type="text" label="Edit" />
  </q-item-section>
  <q-space />
  <q-item-section top side>
    <div class="text-grey-8 q-gutter-xs">
      <q-btn class="gt-xs" size="12px" flat dense round icon="eva-save-outline" @click="updateTodo(_todo)" />
      <q-btn
        class="gt-xs"
        size="12px"
        flat
        dense
        round
        icon="eva-close-circle-outline"
        @click="setActionTodo(_todo.Id, null)"
      />
    </div>
  </q-item-section>
</template>
