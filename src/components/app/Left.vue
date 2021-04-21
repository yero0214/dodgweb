<template>
    <div class="nav" @mouseenter="show=true" @mouseleave="show=false">
        <div v-if="!searched">
            <div v-show="!show" class="navbar"></div>
            <div v-show="show" class="navlist">
                <ul>
                    <li><a v-if="!$store.state.state" @click="login()">로그인</a></li>
                    <li><a v-if="!$store.state.state" @click="register()">회원가입</a></li>
                    <li><a v-if="$store.state.state" @click="signOut()">로그아웃</a></li>
                </ul>
            </div>
            <img v-if="!show" class="arrow" src="@/assets/menu.png">
            <img v-if="show" class="arrowhover" src="@/assets/menu.png">    
        </div>

        <div v-if="searched" class="searched">
            <div v-show="!show" class="navbar"></div>
            <div v-show="show" class="navlist">
                <ul>
                    <li><a v-if="!$store.state.state" @click="login()">로그인</a></li>
                    <li><a v-if="!$store.state.state" @click="register()">회원가입</a></li>
                    <li><a v-if="$store.state.state" @click="signOut()">로그아웃</a></li>
                </ul>
            </div>
            <img v-if="!show" class="arrow" src="@/assets/menu black.png">
            <img v-if="show" class="arrowhover" src="@/assets/menu black.png">    
        </div>

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
        login(){
            this.$store.state.loginPage = true;
        },
        register(){
            this.$store.state.regiPage = true;
        },
        signOut(){
            auth.signOut()
            .then(() => console.log('signed out'))
        },
    },
    computed: {
        searched(){
            return this.$store.state.searched;
        }
    }
}
</script>
<style scoped>
.nav{
    position: fixed;
    height:100%;
    width:45px;
    z-index: 100;
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
    z-index: 101;
}
.arrowhover{
    animation-duration: 200ms;
    animation-name: slide;
    position: fixed;
    top: 50%;
    left:155px;
    z-index: 101;
}
@keyframes slide{
    from {
        margin-left: -155px;
    }
    to{
        margin-left:0;
    }
}
.searched a{
    color: black;
}
.searched .navbar{
    border-right: solid rgba(0, 0, 0, 0.26) thin;
}
.searched .navlist{
    border-right: solid rgba(0, 0, 0, 0.26) thin;
}
</style>