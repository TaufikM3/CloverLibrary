<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import API from '../../API/api';

const email = ref('');
const password = ref('');

const router = useRouter();

const login = async () => {
  try {
    const credentials = { email: email.value, password: password.value };
    const response = await API.loginUser(credentials);

    // Assuming API.loginUser returns a user object or token upon successful login
    if (response.success) {
      // Handle successful login (e.g., store token in localStorage)
      localStorage.setItem('token', response.token);
      router.push('/dashboard'); // Redirect to dashboard or another route
    } else {
      // Handle unsuccessful login (show error message)
      console.error('Login failed:', response.message);
      // Optionally, display error message to user
    }
  } catch (error) {
    console.error('Error during login:', error);
    // Handle other errors (e.g., network issues)
  }
};
</script>
