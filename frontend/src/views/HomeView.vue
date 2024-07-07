<template>
  <div>
    <h1>Home</h1>
    <div v-if="posts.length === 0">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="post in posts" :key="post._id">{{ post.title }}</li>
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
