<script setup lang="ts">
// vue
import { storeToRefs } from "pinia";
import { ref } from "vue";
// stores
import { useAppStore } from "@/stores/appStore";
import AddCategoryModal from "./AddCategoryModal.vue";
import AddPasswordModal from "./AddPasswordModal.vue";

// stores
const appStore = useAppStore();

// data form stores
const { categories, activeCategory } = storeToRefs(appStore);

// data
const showAddCategoryModal = ref(false);
const showAddPasswordModal = ref(false);

// function
function onCategoryModalClose() {
  showAddCategoryModal.value = false;
}
</script>

<template>
  <AddCategoryModal v-if="showAddCategoryModal" @close="onCategoryModalClose" />
  <AddPasswordModal v-if="showAddPasswordModal" />

  <div class="category-wrapper">
    <div class="options">
      <h2>Categories</h2>
      <span @click="() => (showAddCategoryModal = true)">+</span>
    </div>
    <div class="categories">
      <button
        v-for="category of categories"
        @click="appStore.setActiveCategory(String(category.title))"
        class="category"
        :class="{ active: activeCategory.title === category.title }"
      >
        <font-awesome-icon :icon="String(category.iconName)" />
        {{ String(category.title) }}
        <span @click.stop="appStore.removeCategory(String(category.title))"
          >-</span
        >
      </button>
    </div>
  </div>
</template>

<style scoped>
.category-wrapper {
  background-color: rgb(255, 255, 255);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  border-radius: 15px;
}

.options {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.options > span {
  padding: 0.5rem 2rem;
  background-color: rgb(0, 255, 0);
  color: black;
  border-radius: 15px;
}

.categories {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.category {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 0;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5rem;

  font-size: 1.1rem;

  border: none;
  background-color: transparent;
}

.category > :nth-child(1) {
  margin-left: 0.5rem;
}

.category.active {
  color: rgb(29, 78, 216);
  background-color: rgb(219, 234, 254);
  border-radius: 15px;
}

.category > span {
  background-color: red;
  padding: 0.5rem 1rem;
  border-radius: 15px;

  position: absolute;
  right: 1rem;

  color: white;
}
</style>
