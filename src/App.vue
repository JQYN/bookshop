<template>
  <el-container id="app">
    <el-header class="el-header">
      <nav-menu></nav-menu>
      <!--      <div id="nav">-->
      <!--        <router-link to="/">Home</router-link>-->
      <!--        |-->
      <!--        <router-link to="/about">About</router-link>-->
      <!--        |-->
      <!--        <keep-alive><router-link to="/market">Market</router-link></keep-alive>-->
      <!--        |-->

      <!--        <router-link to="/login">Login</router-link>-->

      <!--      </div>-->
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px ;*/
  }

  #nav {
    /*text-align: center;*/
  }

  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 3.75 rem;*/
    margin: 0;
    padding: 0;
  }
</style>
<script>

  import NavMenu from "@/components/NavMenu";

  export default {
    components: {NavMenu}
  }
</script>