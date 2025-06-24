<script setup lang="ts">
import { ref, type Ref } from "vue";
import { IconName } from "@/assets/icons";
import { useAppStore } from "@/stores/appStore";

// Emits
const emit = defineEmits(["close"]);

// stores
const appStore = useAppStore();

const title = ref("");
const showIconPicker = ref(false);
const choosenIcon: Ref<IconName> = ref(IconName.BORDER_ALL);

function closeIconPicker() {
  showIconPicker.value = false;
}

function handleClose() {
  showIconPicker.value = false;
  emit("close");
}

function chooseIcon(name: IconName) {
  choosenIcon.value = name;
  showIconPicker.value = false;
}

function addCategory() {
  if (!choosenIcon.value || !title.value) {
    return;
  }

  appStore.addCategory(title.value, choosenIcon.value);
  handleClose();
}
</script>

<template>
  <teleport to="body">
    <div class="modal-overlay">
      <div class="modal-content">
        <h2>Enter a label or category</h2>
        <input
          type="text"
          v-model="title"
          class="text-input"
          placeholder="Enter text..."
        />

        <br />

        <font-awesome-icon :icon="String(choosenIcon)" />

        <br />

        <button @click="showIconPicker = true" class="btn">Pick Icon</button>
        <button @click="addCategory" class="btn save">Save</button>
        <button @click="handleClose" class="btn close">Close</button>

        <!-- Nested Icon Picker Modal -->
        <div v-if="showIconPicker" class="icon-modal">
          <div class="icon-modal-content">
            <h3>Choose an Icon</h3>
            <div class="icons-grid">
              <div
                @click="chooseIcon(icon)"
                class="icon-item"
                v-for="icon of IconName"
                :key="icon"
              >
                <font-awesome-icon :icon="String(icon)" />
              </div>
            </div>
            <button class="btn" @click="closeIconPicker">Close</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  overflow: auto;

  box-sizing: border-box;
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text-input {
  padding: 0.5rem;
  font-size: 1.1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}

.btn.close {
  background-color: red;
}

.btn.save {
  background-color: rgb(0, 255, 0);
}

.icon-modal {
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80vw;
  height: 70vh;
  background-color: #f9f9f9;
  z-index: 1100;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.icon-modal-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
}

.icon-item {
  background: #eee;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
}
</style>
