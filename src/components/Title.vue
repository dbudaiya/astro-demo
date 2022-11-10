<script setup lang="ts" >
import { withDefaults } from "vue";
interface Props {
  title: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "继承Vue3",
});
</script>

<template>
  <div>
    <h2>{{ props.title }}</h2>
    <slot></slot>
  </div>
</template>
