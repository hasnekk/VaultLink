<script setup lang="ts">
// compoennts
import Categories from "@/components/Categories.vue";
import NavBar from "../components/NavBar.vue";
import Passwords from "@/components/Passwords.vue";
</script>

<template>
  <div class="wrapper">
    <NavBar />
    <div class="content">
      <Categories />
      <Passwords />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #e5e7eb;
}

.content {
  flex: 1;
  width: 100%;

  padding: 0 1rem;
  box-sizing: border-box;
}
</style>
