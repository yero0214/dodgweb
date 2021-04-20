<template>
<div>
  <div class="login" @click="goHome()">
  </div>
  <div class="login-content">
      <div class="title">
        <h1>로그인</h1>
      </div>
      <div class="content">
        <div class="email">
          <input type="text" placeholder="Email" autocomplete="off" v-model="email" @keyup.enter="login()">
        </div>
        <div class="pwd">
          <input type="password" placeholder="Password" autocomplete="off" v-model="pwd" @keyup.enter="login()">
        </div>
        <span class="errMsg">{{errorMsg}}</span>
        <div class="button">
          <button v-if="!active" class="inactive"><span class="material-icons md-dark md-inactive md-36">arrow_forward</span></button>
          <button v-if="active" class="active" @click="login()"><span class="material-icons md-light md-36">arrow_forward</span></button>
        </div>
        <div class="link">
          <router-link to="/register">계정 생성하기</router-link>
          <router-link class="aMargin" to="/">홈으로 가기</router-link>
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
  name: 'Login',
  components: {

  },
  data(){
    return{
      email: '',
      pwd: '',
      errorMsg: '',
      active: false,
      state:{
        email:false,
        pwd:false,
      },
    }
  },
  watch: {
    email(){
      if(this.email != ''){
        this.state.email = true;
      } else{
        this.state.email = false;
      }
      this.activeState();
    },
    pwd(){
      if(this.pwd != ''){
        this.state.pwd = true;
      } else{
        this.state.pwd = false;
      }
      this.activeState();
    }
  },
  methods:{
    activeState(){
      if(this.state.email == true && this.state.pwd == true){
        this.active = true;
      } else{
        this.active = false;
      }
    },
    login(){
      const email = this.email;
      const pwd = this.pwd;

      const val = validation(email,pwd);
      if(val != ''){
        this.errorMsg = val;
        return;
      }

      auth.signInWithEmailAndPassword(email, pwd)
        .then(user => {
          console.log('logged in', user);
        })
        .catch(error => {
          this.errorMsg = error.message;
        })
    },
    goHome(){
      this.$router.push('/')
    },
  }
}
</script>
<style scoped>
.login {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.486);
    z-index: 10px;
}
.login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 500px;
    height: 400px;
    border-radius: 0.5rem;
    text-align: center;
    z-index: 11px;
}
.title{
  margin-top: 50px;
}
.title h1{
  color: rgb(49, 49, 49);
  font-size: 45px;
}
.content {
  margin-top: 30px;
}
.pwd{
  margin-top: 10px;
}
input[type=text], input[type=password] {
  width:330px;
  height:40px;
  border: none;
  border-bottom:3px solid #ccc;
  transition: 0.4s;
  outline: none;
  font-size:17px;
}
input[type=text]:hover,input[type=password]:hover{
  border-bottom:3px solid #555;
}
input[type=text]:focus,input[type=password]:focus{
  border-bottom:3px solid #555;
}
.errMsg{
  color:rgb(230, 59, 59);
  font-size: 16px;
}
.button{
  margin-top: 20px;
}
.inactive{
  border-radius: 20px;
  padding: 10px 14px;
  background-color:rgb(255, 255, 255);
  border:2px solid rgb(196, 196, 196);
  outline:none;
}
.active{
  border-radius: 20px;
  padding: 12px 16px;
  background-color:rgb(204, 58, 58);
  border:none;
  outline:none;
  transition-duration: 500ms;
}
.active:hover{
  background-color:rgb(182, 49, 49);
}
.link{
  margin-top: 25px;
}
.link a{
  font-family: 'Gothic A1';
  color: rgb(49, 49, 49);
}
.link a:hover{
  border-bottom: 2px solid black;
}
</style>
