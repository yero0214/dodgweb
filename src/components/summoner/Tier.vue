<template>
    <div class="back">
        <div class="top">
            <div v-if="this.type == 0">솔랭</div>
            <div v-if="this.type == 1">자랭</div>
        </div>
        <div class="tier">
            <div v-if="data.tier == 'IRON'">
                <img src="@/assets/tier/Iron.png">
            </div>
            <div v-if="data.tier == 'BRONZE'">
                <img src="@/assets/tier/Bronze.png">
            </div>
            <div v-if="data.tier == 'SILVER'">
                <img src="@/assets/tier/Silver.png">
            </div>
            <div v-if="data.tier == 'GOLD'">
                <img src="@/assets/tier/Gold.png">
            </div>
            <div v-if="data.tier == 'PLATINUM'">
                <img src="@/assets/tier/Platinum.png">
            </div>
            <div v-if="data.tier == 'DIAMOND'">
                <img src="@/assets/tier/Diamond.png">
            </div>
            <div v-if="data.tier == 'MASTER'">
                <img src="@/assets/tier/Master.png">
            </div>
            <div v-if="data.tier == 'GRANDMASTER'">
                <img src="@/assets/tier/Grandmaster.png">
            </div>
            <div v-if="data.tier == 'CHALLENGER'">
                <img src="@/assets/tier/Challenger.png">
            </div>

            {{data.tier}}&nbsp; {{data.rank}}
        </div>
        <div class="winlose">
            승리:{{data.wins}}&nbsp; 패배:{{data.losses}}
        </div>
        <div class="ratio">
            승률:{{ratio.toFixed(1)}}%
        </div>
    </div>
</template>

<script>
export default {
    props:['type'],
    computed:{
        data(){
            return this.$store.getters.searchResult[this.type];
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
    height:335px;
    border-radius: 0.4rem;
    color: black;
    font-family: 'Gothic A1';
}
.back div{
    font-size: 20px;
}
.tier img{
    width:200px;
}
</style>