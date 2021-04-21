<template>
  <div id="app">
    <back/>
    <left/>
    <router-view v-if="1"/>
    <bottom v-if="0"/>
    <login v-if="loginPage"/>
    <register v-if="regiPage"/>
  </div>
</template>

<script>
import Back from '@/components/app/Back'
import Bottom from '@/components/app/Bottom'
import Left from '@/components/app/Left'
import Login from '@/components/app/Login'
import Register from '@/components/app/Register'

export default {
  components: {
    'back':Back,
    'bottom':Bottom,
    'left':Left,
    'login':Login,
    'register':Register,
  },
  computed:{
    loginPage(){
      return this.$store.state.loginPage;
    },
    regiPage(){
      return this.$store.state.regiPage;
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
body,ul{
  margin: 0;
  padding: 0;
}
a{
  cursor: pointer;
}
.aMargin{
  margin-left: 20px;
}
body,h1,h2,p,a,input{
  font-family: 'Black Han Sans', Arial;
  text-decoration: none;
}
body,h1,h2,p,a{
  color: white;
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
/* Rules for sizing the icon. */
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

/* Rules for using icons as black on a light background. */
.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

/* Rules for using icons as white on a dark background. */
.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }
</style>
