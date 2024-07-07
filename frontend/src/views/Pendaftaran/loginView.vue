<template>
    <div>
      <h1>Login</h1>
      <!-- Form login -->
      <form @submit.prevent="handleLogin">
        <label for="username">Username:</label><br>
        <input type="text" id="username" v-model="username"><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" v-model="password"><br><br>
        <button type="submit">Login</button>
      </form>
      <p>Belum punya akun? <router-link to="/register">Daftar</router-link></p>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
  
    const username = ref('');
    const password = ref('');
  
    const router = useRouter();
  
    const handleLogin = async () => {
      // Implementasi logika login sesuai kebutuhan
      // Misalnya, panggil fungsi API untuk login
      try {
        // Contoh sederhana, di sini seharusnya menggunakan API login
        console.log('Logging in with:', username.value, password.value);
        // Redirect setelah login sukses
        router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
        // Handle error
      }
    }
  </script>
  