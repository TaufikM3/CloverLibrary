<template>
  <div class="container">
    <div class="banner">
      <h1>Halo Selamat Datang Di Clover Library</h1>
    </div>

    <div v-if="posts.length === 0" class="loading">Loading...</div>
    <div v-else class="post-list">
      <ul>
        <li v-for="post in posts" :key="post._id" class="post-item">{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import API from '../API/api';
import type { Post } from '../API/api'; // Sesuaikan path sesuai dengan lokasi API.ts

const posts = ref<Post[]>([]);

const fetchPosts = async () => {
  posts.value = await API.getAllPost();
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.banner {
  background-color: #3227ce;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #666;
}

.post-list {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.post-list ul {
  list-style-type: none;
  padding: 0;
}

.post-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  color: #333;
}

.post-item:last-child {
  border-bottom: none;
}

.post-item:hover {
  background-color: #f9f9f9;
  cursor: pointer;
}
</style>
