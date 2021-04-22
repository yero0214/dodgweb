<template>
<div class="frame">
    <div class="summoner">
        <router-link to="/" class="sum_title">DODG.ORG</router-link>
        <search class="search"/>
        <recent class="recent"/>
        <tier v-bind:type="[0]" class="solo"/>
        <tier v-bind:type="[1]" class="flex"/>
        <matches class="matches"/>
    </div>
</div>

</template>
<script>
import Search from '@/components/widget/Search'
import Tier from '@/components/summoner/Tier'
import Matches from '@/components/summoner/Matches'
import Recent from '@/components/summoner/Recent'

export default {
    components: {
        'search':Search,
        'tier':Tier,
        'matches':Matches,
        'recent':Recent,
    },
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
.frame{
    position:fixed;

    width:100%;
    height:790px;
    min-width: 1500px;
    left: 0px;
}
.summoner{
    position:absolute;
    width: 1500px;
    height: 790px;
    left:50%;
    top:0px;
    transform: translate(-50%, 0px);
    z-index: 1;
}
.search{
    position: fixed;
    left: 285px;
    top: 10px;
}
.sum_title{
    position: fixed;
    left: 35px;
    top: 15px;
    font-size: 40px;
}
.recent{
    position: fixed;
    left: 35px;
    top: 85px;
    font-size: 40px;   
}
.solo{
    position: fixed;
    left: 35px;
    top: 440px;
    font-size: 40px;
}
.flex{
    position: fixed;
    left: 420px;
    top: 440px;
    font-size: 40px;
}
.matches{
    position: fixed;
    left: 800px;
    top: 85px;
    font-size: 40px;
}
</style>