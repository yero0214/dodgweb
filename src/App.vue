<template>
  <div id="app">
    <header>
      <nav>
        <h1>닷지.org</h1>
        <router-link to="/login" v-if="!$store.state.state">Login</router-link>
        <router-link to="/register" v-if="!$store.state.state">Register</router-link>
        <a v-if="$store.state.state" @click="signOut()">Sign out</a>
      </nav>
    </header>
    <router-view/>
       
    <!-- loh.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of
    Riot Games or anyone officially involved in producing or managing Riot Games properties.
    Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc. -->
  </div>
</template>

<script>
import {auth} from '@/firebase';

export default {
  data (){
    return{

    }
  },
    methods:{
      signOut(){
        auth.signOut()
          .then(() => console.log('signed out'))
      }
    }
}
</script>

<style>
body{
  margin: 0;
  background: #fafafa;
}
body,h1,h2,p,a,input{
  color: #555;
  font-family: Consolas, Arial;
  text-decoration: none;
}
ul{
  margin: 0;
  padding: 0;
}
header{
  width: 100%;
  padding: 20px;
  text-align: right;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
}
a{
  transition: 0.2s;
  margin-left: 10px;
  padding: 4px;
  cursor: pointer;
}
a:hover{
  background: gray;
  color: white;
}
header h1{
  margin: 0;
  position: absolute;
  left: 20px;
  top: 15px;
}
</style>
