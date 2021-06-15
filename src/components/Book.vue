<template>
  <el-card class="box-card">
      <div class="card-header">
        <span>{{ book.title }}</span>
        <el-button class="button" type="text">操作按钮</el-button>
      </div>
      <div>
        <p>{{book.subtitle}}</p>
        <p>{{book.isbn}}</p>
      </div>
  </el-card>
</template>

<script>
export default {
  name: "book",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.box-card {
  width: 240px;
  margin: 1rem;
}
</style>