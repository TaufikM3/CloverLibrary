<template>
    <div>
      <h1>Book Reviews</h1>
      <form @submit.prevent="addReview">
        <div>
          <label for="title">Book Title:</label>
          <input v-model="newReview.title" id="title" required />
        </div>
        <div>
          <label for="review">Review:</label>
          <textarea v-model="newReview.review" id="review" required></textarea>
        </div>
        <button type="submit" class="add-review-button">Add Review</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Review</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(review, index) in reviews" :key="index">
            <td>{{ review.title }}</td>
            <td>{{ review.review }}</td>
            <td>
              <button @click="editReview(index)" class="edit-review-button">Edit</button>
              <button @click="deleteReview(index)" class="delete-review-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="editingIndex !== null">
        <h2>Edit Review</h2>
        <form @submit.prevent="updateReview">
          <div>
            <label for="editTitle">Book Title:</label>
            <input v-model="editingReview.title" id="editTitle" required />
          </div>
          <div>
            <label for="editReview">Review:</label>
            <textarea v-model="editingReview.review" id="editReview" required></textarea>
          </div>
          <button type="submit" class="update-review-button">Update Review</button>
          <button @click="cancelEdit">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newReview: {
          title: '',
          review: ''
        },
        reviews: [],
        editingIndex: null,
        editingReview: {
          title: '',
          review: ''
        }
      }
    },
    methods: {
      addReview() {
        this.reviews.push({ ...this.newReview });
        this.newReview.title = '';
        this.newReview.review = '';
      },
      deleteReview(index) {
        this.reviews.splice(index, 1);
      },
      editReview(index) {
        this.editingIndex = index;
        this.editingReview = { ...this.reviews[index] };
      },
      updateReview() {
        // Update the review in the reviews array
        this.$set(this.reviews, this.editingIndex, this.editingReview);
        // Reset editing state
        this.cancelEdit();
      },
      cancelEdit() {
        this.editingIndex = null;
        this.editingReview = {
          title: '',
          review: ''
        };
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    margin-bottom: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
  }
  td {
    border: 1px solid #ddd;
  }
  .add-review-button {
    background-color: blue;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  .add-review-button:hover {
    background-color: darkblue;
  }
  .update-review-button {
    background-color: green;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  .update-review-button:hover {
    background-color: darkgreen;
  }
  .delete-review-button {
    background-color: red;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  .delete-review-button:hover {
    background-color: darkred;
  }
  .edit-review-button {
    background-color: yellow;
    color: black;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  .edit-review-button:hover {
    background-color: goldenrod;
  }
  button {
    margin-right: 10px;
  }
  </style>
  