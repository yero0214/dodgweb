import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {auth} from '@/firebase'
import store from '@/store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    auth.onAuthStateChanged(user => {
      if (user){
        this.$router.push('/')
        this.$store.state.state = true;
        console.log("login detected")
      } else{
        this.$router.push('/login')
        this.$store.state.state = false;
        console.log("sign out detected")
      }
  });
  }
}).$mount('#app')
