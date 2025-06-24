<script setup lang="ts"></script>

<template>
  <nav>
    <h1>VaultLink</h1>
    <div class="actions">
      <input
        type="search"
        name="search"
        class="search"
        id="search"
        placeholder="Search passwords..."
      />

      <button class="add-new-password">+ Add New</button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  padding: 1rem;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
}

.actions {
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.search {
  padding: 8px 12px 8px 36px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  width: 220px;
  background: url('data:image/svg+xml;utf8,<svg fill="%23999" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/></svg>')
    no-repeat 10px center;
  background-color: #fff;
  background-size: 16px 16px;
  color: #333;
}

.add-new-password {
  border: none;
  background-color: rgb(37, 99, 235);
  color: white;
  border-radius: 15px;

  padding: 0.5rem 1rem;
}
</style>
