<template>
  <div class="book-list">
    <table v-if="books.length">
      <book
        v-for="book in books"
        :book="book"
        :key="book.id"
        :title="book.title"
        :subtitle="book.subtitle"
        :abstract="book.abstract"
        :isbn="book.isbn"
      ></book>
    </table>
    <h1 v-else>
      Sorry there are no books here, perhaps
      <router-link to="/">add one</router-link>
      ?
    </h1>
    <el-table :data="books">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="title" label="title"></el-table-column>
      <el-table-column prop="subtitle" label="subtitle"></el-table-column>
      <el-table-column prop="isbn" label="isbn"></el-table-column>
    </el-table>
  </div>
</template>


<script>
import Book from "@/components/Book.vue";
import { bookGet } from "../api";

export default {
  name: "books",
  components: {
    Book,
  },
  data() {
    return {
      books: [],
      // [
      //   {
      //     id: initial++,
      //     title: 'A Brief History of Time: from the Big Bang to Black Holes',
      //     author: 'Stephen William Hawking',
      //     publishDate: 1988
      //   }
      // ]
    };
  },
  created: function () {
    bookGet()
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          // this.$set('books', response.data)
          this.books = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.book-list {
  margin: 0 auto;
}
</style>
