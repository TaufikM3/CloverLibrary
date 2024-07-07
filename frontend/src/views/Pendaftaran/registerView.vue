<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import API from '../../API/api';

const username = ref('');
const email = ref('');
const password = ref('');

const router = useRouter();

const register = async () => {
  try {
    const user = { username: username.value, email: email.value, password: password.value };
    await API.registerUser(user);
    router.push('/login');
  } catch (error) {
    console.error(error);
  }
};
</script>
