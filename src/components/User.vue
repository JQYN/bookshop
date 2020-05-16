<template>
  <el-form>
    <el-form-item label="email"></el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Update</el-button>

    </el-form-item>
  </el-form>
</template>

<script>
  import {accountUpdate} from "../api/api";

  export default {
    name: "User",
    data: function () {
      return {
        user: this.$store.user
      }

    },
    methods: {
      onSubmit() {
        accountUpdate(this.user.id(), this.user).then(response => {
          if (response.status === 200) {
            this.$store.commit({
              type: "setUser",
              user: response.data
            })
          }

        }).catch(error => {
          console.log(error)
        })
      },

    },
    mounted() {


    }
  }
</script>

<style scoped>

</style>