<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-between">
        <v-avatar
          class="me-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link.name"
          :text="link.name"
          :to="link.path"
          variant="text"
          tag="router-link"
        ></v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-responsive>

        <v-btn
          v-if="isLoggedIn"
          @click="handleLogout"
          variant="text"
        >
          Logout
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!-- Konten utama aplikasi Vue.js -->
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const links = ref([
    { name: 'Home', path: '/' },
    { name: 'Kategori', path: '/kategori' },
    { name: 'Updates', path: '/updates' }, // Menukar posisi dengan 'Login'
    { name: 'Ulasan', path: '/ulasan' }, 
    { name: 'Login', path: '/login' }, // Menambahkan tombol Login
  ]);

  const isLoggedIn = ref(false);

  const handleLogout = () => {
    isLoggedIn.value = false;
    localStorage.removeItem('token'); // Menghapus token dari localStorage atau sesuai kebutuhan
    router.push('/login'); // Redirect ke halaman login setelah logout
  };

  const router = useRouter();
</script>
