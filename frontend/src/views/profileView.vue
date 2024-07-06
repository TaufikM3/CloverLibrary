<template>
    <div>
      <h1>Profile Pengguna</h1>
      <p>Nama: {{ userData.name }}</p>
      <p>Email: {{ userData.email }}</p>
      <!-- Tambahkan data lainnya sesuai kebutuhan -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Misalnya data pengguna disimpan di localStorage atau Vuex store, Anda bisa memuatnya dari sana
  const userData = ref({
    name: localStorage.getItem('userName') || 'Nama Pengguna',
    email: localStorage.getItem('userEmail') || 'Email Pengguna'
  })
  </script>
  