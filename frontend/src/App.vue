<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const links = ref([
  { name: 'Dashboard', path: '/' },
  { name: 'Kategori', path: '/kategori' }
])

// Menggunakan ref untuk status autentikasi pengguna
const isLoggedIn = ref(false)

// Fungsi untuk menangani login (ini hanya contoh, implementasi sebenarnya tergantung pada logika autentikasi yang kamu gunakan)
const handleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value
  if (isLoggedIn.value) {
    // Menambahkan "Tambah Postingan" dan "Updates" dengan posisi yang ditukar
    links.value.push({ name: 'Tambah Postingan', path: '/tambah-postingan' })
    links.value.push({ name: 'Updates', path: '/updates' })
  } else {
    // Menghapus "Tambah Postingan" dan "Updates" saat logout
    links.value = links.value.filter(link => link.name !== 'Tambah Postingan' && link.name !== 'Updates')
  }
}
</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center">
        <v-avatar
          class="me-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          variant="text"
          tag="RouterLink"
        >
          {{ link.name }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="400" class="mx-auto">
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

        <v-spacer></v-spacer>

        <v-btn
          @click="handleLogin"
          variant="text"
        >
          {{ isLoggedIn ? 'Profile' : 'Masuk' }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
          <RouterView />
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
