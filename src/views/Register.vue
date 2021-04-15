<template>
<div>
  <div class="register" @click="goHome()"></div>
  <div class="register-content">
      <div class="title">
        <h1>Register</h1>
      </div>
      <div class="content">
        <div class="email">
          <input type="text" placeholder="Email" autocomplete="off" v-model="email" @keyup.enter="register()">
        </div>
        <div class="pwd">
          <input type="text" placeholder="Password" autocomplete="off" v-model="pwd" @keyup.enter="register()">
        </div>
        <span>{{errorMsg}}</span>
        <div class="button">
          <button @click="register()">Register</button>
        </div>
        <div class="link">
          <strong>Got an account?</strong><router-link to="/login">Login instead</router-link>
        </div>
        <div class="home">
          <router-link to="/">Go to home</router-link>
        </div>
      </div>
    </div>
</div>

</template>

<script>
// @ is an alias to /src
import {auth} from '@/firebase';
import {validation} from '@/common'

export default {
  name: 'Register',
  components: {

  },
  data(){
    return{
      email: '',
      pwd: '',
      errorMsg: '',
    }
  },
  methods:{
    register(){
      const email = this.email;
      const pwd = this.pwd;

      const val = validation(email,pwd);
      if(val != ''){
        this.errorMsg = val;
        return;
      }

      auth.createUserWithEmailAndPassword(email, pwd)
        .then(user =>{
          console.log('registered',user);
        })
        .catch(error => {
          this.errorMsg = error.message;
        })
    },
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.register {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(250, 250, 250);
}
.register-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 500px;
    height: 400px;
    border-radius: 0.5rem;
    text-align: center;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10);
}
.title{
  margin-top: 50px;
}
.title h1{
  font-size: 40px;
}
.content {
  margin-top: 35px;
}

.pwd{
  margin-top: 10px;
}
input[type=text] {
  width:330px;
  height:40px;
  border: none;
  border-bottom:3px solid #ccc;
  transition: 0.4s;
  outline: none;
  font-size:17px;
}
input[type=text]:hover{
  border-bottom:3px solid #555;
}
input[type=text]:focus{
  border-bottom:3px solid #555;
}
span{
  color:rgb(230, 59, 59);
  font-size: 16px;
}
.button{
  margin-top: 20px;
}
button{
  transition-duration: 0.1s;
  border-radius: 2px;
  font-size: 17px;
  color:#fff;
  padding: 6px 50px;
  background-color:rgb(155, 155, 155);
  border:none;
  outline:none;
}
button:hover{
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.24);
}
button:active{
  background-color:rgb(85, 85, 85);
  
}
.link{
  margin-top: 20px;
}
.home{
  margin-top: 20px;
}

</style>
