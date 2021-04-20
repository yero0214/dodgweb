<template>
    <div class="nav" @mouseenter="show=true" @mouseleave="show=false">
        <div v-show="!show" class="navbar"></div>
        <div v-show="show" class="navlist">
            <ul>
                <li><router-link to="/login" v-if="!$store.state.state">로그인</router-link></li>
                <li><router-link to="/register" v-if="!$store.state.state">회원가입</router-link></li>
                <li><a v-if="$store.state.state" @click="signOut()">로그아웃</a></li>
            </ul>
        </div>
        <img v-show="!show" class="arrow" src="@/assets/menu.png">
        <img v-show="show" class="arrowhover" src="@/assets/menu.png">

    </div>
</template>
<script>
import {auth} from '@/firebase';

export default {
    data(){
        return{
            show:false,
        }        
    },
    methods:{
        signOut(){
            auth.signOut()
            .then(() => console.log('signed out'))
        },
    }
}
</script>
<style scoped>
.nav{
    position: fixed;
    height:100%;
    width:45px;
}
.navbar{
    position: fixed;
    height:100%;
    width:45px;
    backdrop-filter: blur(5px);
    border-right: solid rgba(255, 255, 255, 0.116) thin;
}
.navlist{
    animation-duration: 200ms;
    animation-name: slide;
    position: fixed;
    height:100%;
    width:200px;
    backdrop-filter: blur(5px);
    border-right: solid rgba(255, 255, 255, 0.116) thin;
    text-align: center;


}
.navlist ul{
    position: absolute;
    width: 200px;
    top:40px;
}
.navlist li{
    text-align: center;
    height:40px;
}
.navlist a{
    font-size: 25px;
}
.navlist a:hover{
  border-bottom: 3px solid rgb(255, 255, 255);
}
.arrow{
    position: fixed;
    top: 50%;
    left:2px;
    z-index: 2;
}
.arrowhover{
    animation-duration: 200ms;
    animation-name: slide;
    position: fixed;
    top: 50%;
    left:155px;
    z-index: 2;
}
@keyframes slide{
    from {
        margin-left: -155px;
    }
    to{
        margin-left:0;
    }
}
</style>