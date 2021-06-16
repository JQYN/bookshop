<template>
  <div id="login">
    <h1>Welcome Back {{ username }}</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="Username">
        <el-input v-model="username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          type="password"
          v-model="pwd"
          placeholder="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { authGetToken } from "../api";

export default {
  name: "Login",

  data: function () {
    return {
      username: "",
      pwd: "",
    };
  },
  methods: {
    onSubmit() {
      authGetToken(this.username, this.pwd)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem("token", JSON.stringify(response.data));
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style scoped>
#login {
  width: 25vw;
  margin: auto;
}
</style>

