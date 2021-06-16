<template>
  <div v-if="books.length" class="flex">
    <book v-for="book of books" :key="book.id" :book="book"></book>
  </div>

  <h1 v-else>
    Sorry there are no books here, perhaps
    <router-link to="/">add one</router-link>
    ?
  </h1>
</template>


<script>
import Book from "@/components/Book.vue";
import { booksGet } from "../api";

export default {
  name: "books",
  components: {
    Book,
  },
  data() {
    return {
      books: [],
    };
  },
  created: function () {
    booksGet()
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
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
.flex {
  display: flex;
  flex-flow: wrap;
}
</style>
