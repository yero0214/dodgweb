<template>
    <div class="back">
        <div v-if="data != 'unranked'">
            
            <div class="tier">
                <img :src="require(`@/assets/tier/${data.tier}.png`)"/>
                
            </div>
            <div class="text">
                <div class="top">
                    <div v-if="this.type == 0">솔랭</div>
                    <div v-if="this.type == 1">자랭</div>
                </div>
                <div class="winlose">
                    승리:{{data.wins}}&nbsp; 패배:{{data.losses}}
                </div>
                <div>
                    {{data.tier}}&nbsp; {{data.rank}}
                </div>
                <div class="ratio">
                    승률:{{ratio.toFixed(1)}}%
                </div>
            </div>    
        </div>
        
        <div v-if="data == 'unranked'">
            <div v-if="type == 0">솔로랭크</div>
            <div v-if="type == 1">자유랭크</div>

            unranked
        </div>
        </div>
</template>

<script>
export default {
    props:['type'],
    computed:{
        data(){
            return this.$store.getters.getTier[this.type];
        },
        ratio(){
            return (this.data.wins/(this.data.wins + this.data.losses))*100;
        }
    }
}
</script>

<style scoped>
.back{
    background-color: white;
    width: 350px;
    height:150px;
    border-radius: 0.4rem;
    color: black;
    font-family: 'Gothic A1';
}
.text{
    position: absolute;
    left:150px;
    top:35px;
}
.back div{
    font-size: 15px;
}
.tier img{
    width:120px;
}
</style>