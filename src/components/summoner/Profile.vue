<template>
    <div class="back">
        <div class="icon">
            <img :src="icon"/>
        </div>
        <div class="text">
            <div>{{name}}</div>
            <div>레벨: {{level}}</div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        name(){
            return this.$store.getters.getProfile[0];
        },
        icon(){
            return 'http://ddragon.leagueoflegends.com/cdn/11.8.1/img/profileicon/' + this.$store.getters.getProfile[1] + '.png';
        },
        level(){
            return this.$store.getters.getProfile[2];
        },
    }
}
</script>

<style scoped>
.back{
    background-color: white;
    width: 350px;
    height:200px;
    border-radius: 0.4rem;
    color: black;
    font-family: 'Gothic A1';
}
.back div{
    font-size: 20px;
}
.icon img{
    margin:10px;
    width:180px;
}
.text{
    position: absolute;
    left:200px;
    top:50px;
}
</style>