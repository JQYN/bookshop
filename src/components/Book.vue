<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="clearfix">
      <span>{{ book.title }}</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >Buy</el-button
      >
    </div>
    <div>{{ book.authors }}</div>
    <div>{{ book.isbn }}</div>
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
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: 2rem;
}
</style>