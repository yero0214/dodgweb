<template>
    <header>
      <nav>
        <h1>DODG.ORG</h1>
        <router-link to="/login" v-if="!$store.state.state">Login</router-link>
        <router-link to="/register" v-if="!$store.state.state">Register</router-link>
        <a v-if="$store.state.state" @click="signOut()">Sign out</a>
      </nav>
    </header>
</template>
<script>
export default {
}
</script>
<style scoped>
header{
  width: 100%;
  padding: 20px;
  text-align: right;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
}
header h1{
  margin: 0;
  position: absolute;
  left: 20px;
  top: 15px;
}
</style>