<template>

    <tr>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.publishDate }}</td>
        <td>Book</td>
    </tr>
</template>

<script>
export default {
    name: 'book',
    props: {
        book: {
            type: Object,
            required: true
        }
    }
    
}
</script>

