<template>
    <div class="book-list">
        <table  v-if="books.length">
            <book v-for="book in books" :book="book" :key="book.id"></book>
        </table>
        <h1 v-else>Sorry there are no books here, perhaps <router-link>add one</router-link>?</h1>
    </div>
</template>

<script>
import Book from '@/components/Book.vue'

let initial = 1

export default {
    name: 'books',
    components: {
        Book
    },
    data () {
        return {
            books: [
                {
                    id: initial++,
                    title: 'A Brief History of Time: from the Big Bang to Black Holes',
                    author: 'Stephen William Hawking',
                    publishDate: 1988
                }
            ]
        }
    }
}
</script>

