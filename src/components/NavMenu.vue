<template>
  <el-menu mode="horizontal" :default-active="$route.path" @select="handleSelect"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b">

    <el-menu-item index="/">
      Home
    </el-menu-item>
    <el-menu-item index="/market">
      Market
    </el-menu-item>
    <el-menu-item index="/login">
      Login
    </el-menu-item>
    <el-menu-item index="/about">
      About
    </el-menu-item>
  </el-menu>
</template>

<script>
  import router from "../router";

  export default {
    name: "NavMenu",
    data() {
      return {
        activeIndex: "/home"

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if (key === "/") {

          router.push(key).catch(error => {
            console.log(error)
          })
        } else if (key === "/market") {

          router.push(key).catch(error => {
            console.log(error)
          })
        } else if (key === "/login") {

          router.push(key).catch(error => {
            console.log(error)
          })
        } else if (key === "/about") {

          router.push(key).catch(error => {
            console.log(error)
          })
        }
      }

    }
  }
</script>

<style scoped>

</style>