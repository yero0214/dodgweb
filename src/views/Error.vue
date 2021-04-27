<template>
<div class="frame">
    <div class="error">
        <router-link to="/" class="sum_title">DODG.ORG</router-link>
        <search class="search"/>

        <div class="msg">
            <span v-if="$store.state.items == '403'">현재 DODG.ORG 서비스를 이용하실 수 없습니다.</span> 
            <span v-if="$store.state.items == '404'">{{$store.state.searchName}} 에 대한 검색 결과가 없습니다.</span>
            <span v-if="$store.state.items == '429'">요청이 너무 많습니다.</span> 

        </div>
    </div>
</div>

</template>
<script>
import Search from '@/components/widget/Search'

export default {
    components: {
        'search':Search,

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
    left: 10px;
}
.error{
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
.msg{
    position: absolute;
    left: 350px;
    top: 400px;

    text-align: center;
    font-size: 40px;
}
</style>