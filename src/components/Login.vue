<template>
  <div class="email-psd-box">
    <h1>Wellcome Back {{ user }}</h1>
    <form>
      <p>Email</p>
      <input type="email" id="login-email" v-model="email">
      <p>Password</p>
      <input type="password" id="login-password" v-model="psd">
    </form>
  </div>
</template>

<script>
export default {
  name: "email-psd-box",
  data: function() {
    return {
      email: '',
      psd: '',
      user: 'guest'
    };
  }
};
</script>

<style scoped>
.email-psd-box {
  /* width: 20vw;
    margin: 0 auto; */
}
input {
    width: 50px；
}
</style>

