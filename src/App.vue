<template>
  <div id="app">
    <back/>
    <top v-if="0"/>
    <router-view v-if="1"/>
    <bottom v-if="0"/>
  </div>
</template>

<script>
import {auth} from '@/firebase';
import Top from '@/components/Top'
import Back from '@/components/Back'
import Bottom from '@/components/Bottom'

export default {
  components: {
    'top':Top,
    'back':Back,
    'bottom':Bottom
  },
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
* {
  box-sizing: border-box;
}
body{
  margin: 0;
  background: #ffffff;
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
