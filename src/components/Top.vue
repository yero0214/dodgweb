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