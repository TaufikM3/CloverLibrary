<template>
  <v-container>
    <div class="outer-box">
      <h2>Update Book</h2>
      <v-form @submit.prevent="updateBook">
        <v-row>
          <v-col cols="12">
            <v-text-field label="Title" v-model="bookData.title" outlined required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Author" v-model="bookData.author" outlined required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Publisher" v-model="bookData.publisher" outlined required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Publication Year" v-model="bookData.publicationYear" type="number" outlined required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Category" v-model="bookData.category" outlined required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea label="Synopsis" v-model="bookData.synopsis" outlined required></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-file-input label="Image" @change="handleFileUpload" outlined></v-file-input>
          </v-col>
          <v-col cols="12">
            <v-btn color="blue" type="submit">Update Book</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>

    <v-data-table :headers="tableHeaders" :items="books" item-key="_id">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Books</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="mdi-alert">
          Tidak ada data buku yang tersedia.
        </v-alert>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const bookId = 'your_book_id'; // Ganti dengan ID buku yang ingin diupdate
const bookData = ref({
  title: '',
  author: '',
  publisher: '',
  publicationYear: 0,
  category: '',
  synopsis: '',
  image: null, // untuk menangani upload file
});

const books = ref([]); // Menyimpan data buku untuk tabel

const tableHeaders = [
  { text: 'Title', value: 'title' },
  { text: 'Author', value: 'author' },
  { text: 'Publisher', value: 'publisher' },
  { text: 'Publication Year', value: 'publicationYear' },
  { text: 'Category', value: 'category' },
];

// Fungsi untuk mengambil data buku dari backend
async function fetchBookDetails() {
  try {
    const response = await axios.get(`/api/books/${bookId}`);
    bookData.value = response.data;
  } catch (error) {
    console.error('Failed to fetch book details:', error);
  }
}

// Fungsi untuk mengambil semua buku dari backend
async function fetchAllBooks() {
  try {
    const response = await axios.get('/api/books');
    books.value = response.data;
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }
}

// Fungsi untuk mengupdate buku
async function updateBook() {
  try {
    const formData = new FormData();
    formData.append('title', bookData.value.title);
    formData.append('author', bookData.value.author);
    formData.append('publisher', bookData.value.publisher);
    formData.append('publicationYear', String(bookData.value.publicationYear));
    formData.append('category', bookData.value.category);
    formData.append('synopsis', bookData.value.synopsis);
    if (bookData.value.image) {
      formData.append('image', bookData.value.image);
    }

    const response = await axios.put(`/api/books/${bookId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    alert('Book updated successfully!');
    fetchAllBooks(); // Refresh the book list after updating
  } catch (error) {
    console.error('Failed to update book:', error);
    alert('Failed to update book');
  }
}

// Fungsi untuk menangani upload file gambar
function handleFileUpload(event) {
  const file = event.target.files[0];
  bookData.value.image = file;
}

onMounted(() => {
  fetchBookDetails();
  fetchAllBooks();
});
</script>

<style scoped>
.outer-box {
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
</style>
