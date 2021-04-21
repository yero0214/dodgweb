<template>
<div class="contents_back">
    <div class="home_contents">home_contents</div>
        <!-- <div>
      <span @click="page = 'RANKED_SOLO_5x5'">solo</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span @click="page = 'RANKED_FLEX_SR'">flex</span>
    </div>

    <div v-for="item in items" :key="item.id">
      <div v-if="item.queueType == page">
        {{item.tier}}
        {{item.rank}}
        {{item.leaguePoints}}<br/>
        {{item.wins}}<br/>
        {{item.losses}}
      </div>
    </div> -->
</div>
</template>
<script>
export default {
    data(){
        return{
            page: 'RANKED_SOLO_5x5',
            items: [
                {
                "leagueId": null,
                "queueType": null,
                "tier": null,
                "rank": null,
                "summonerId": null,
                "summonerName": null,
                "leaguePoints": null,
                "wins": null,
                "losses": null,
                "veteran": null,
                "inactive": null,
                "freshBlood": null,
                "hotStreak": null
                },
                {
                "leagueId": null,
                "queueType": null,
                "tier": null,
                "rank": null,
                "summonerId": null,
                "summonerName": null,
                "leaguePoints": null,
                "wins": null,
                "losses": null,
                }
            ],
        }
    }
}
</script>
<style scoped>
.contents_back{
    background-color:white;
    position:absolute;
    width: 100%;
    height: 1000px;
    z-index: 1;
    animation-name:showUp;
    animation-duration:500ms;
}
@keyframes showUp{
    from {
        margin-top:-1000px;
    }
    to{
        margin-top:0px;
    }
}
</style>