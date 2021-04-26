<template>
<div class="frame">
    <div class="summoner">
        <router-link to="/" class="sum_title">DODG.ORG</router-link>
        <search class="search"/>
        <recent class="recent" v-if="true"/>
        <tier v-bind:type="[0]" class="solo"/>
        <tier v-bind:type="[1]" class="flex"/>
        <matches class="matches"/>
        <profile class="profile"/>
    </div>
</div>

</template>
<script>
import Search from '@/components/widget/Search'
import Tier from '@/components/summoner/Tier'
import Matches from '@/components/summoner/Matches'
import Recent from '@/components/summoner/Recent'
import Profile from '@/components/summoner/Profile'

export default {
    components: {
        'search':Search,
        'tier':Tier,
        'matches':Matches,
        'recent':Recent,
        'profile':Profile,
    },
    data(){
        return{
            
        }
    },
}
</script>
<style scoped>
.frame{
    position:absolute;

    width:100%;
    min-width: 1150px;
    left: 10px;
}
.summoner{
    position:absolute;
    width: 1150px;
    left:50%;
    top:0px;
    transform: translate(-50%, 0px);
    z-index: 1;
}
.search{
    position: absolute;
    left: 285px;
    top: 10px;
}
.sum_title{
    position: absolute;
    left: 35px;
    top: 15px;
    font-size: 40px;
}
.profile{
    position: absolute;
    left: 35px;
    top: 85px;
    /* height:200px; */
    font-size: 40px;
}
.recent{
    position: absolute;
    left: 400px;
    top: 85px;
    font-size: 40px;   
}
.solo{
    position: absolute;
    left: 35px;
    top: 300px;
    /* height:150px; */
    font-size: 40px;
}
.flex{
    position: absolute;
    left: 35px;
    top: 465px;
    font-size: 40px;
}
.matches{
    position: absolute;
    left: 400px;
    top: 300px;
    font-size: 40px;
}
</style>