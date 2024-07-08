<template>
  <div>
    <h1>KATEGORI</h1>
    <div class="categories">
      <div v-for="category in categories" :key="category.name" class="category">
        <span>{{ category.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
  { name: 'Self Improvement' },
  { name: 'Manga' },
  { name: 'Fiksi' },
  { name: 'Non Fiksi' },
  { name: 'Pendidikan' },
]);
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

h1 {
  text-align: center;
  margin-top: 20px;
  color: #333;
}

.categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto;
  max-width: 1200px;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
  margin: 10px;
}

.category:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

.category span {
  font-size: 16px;
  font-weight: bold;
}
</style>
