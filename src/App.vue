<template>
  <div id="app">
    <back/>
    <top v-if="0"/>
    <left/>
    <router-view v-if="1"/>
    <bottom v-if="0"/>
  </div>
</template>

<script>
import {auth} from '@/firebase';
import Top from '@/components/app/Top'
import Back from '@/components/app/Back'
import Bottom from '@/components/app/Bottom'
import Left from '@/components/app/Left'

export default {
  components: {
    'top':Top,
    'back':Back,
    'bottom':Bottom,
    'left':Left
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


</style>
