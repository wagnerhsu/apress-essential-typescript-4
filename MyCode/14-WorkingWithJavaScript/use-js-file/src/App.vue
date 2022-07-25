<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { writeMessage, sizeFormatter, costFormatter } from "./js/formatters";
import { Employee, getEmployee } from "./js/employee";

/// <reference path="./js/employee.d.ts" />

const emp = getEmployee(1, "James", 100) as Employee;

console.log(emp.id); // 👉️ 1
console.log(emp.name); // 👉️ "James"
console.log(emp.salary); // 👉️ 100

writeMessage("test");
sizeFormatter("test", 2);
costFormatter("test", "hi");
sizeFormatter(2, 2);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
