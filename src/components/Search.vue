<template>
  <div class="search">
    <input type="text" v-model="name" @keyup.enter="search()">


    <div>
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  data (){
    return{
        name: '',
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
  },
  methods:{
      search(){
          axios.get('https://datggserver-dxjx2xunna-du.a.run.app/eid?name='+ this.name)
          .then((response) => {
            this.items = response.data;
          })
          .catch((error) => {
            console.log(error.message);
          })
      }
  }
}
</script>
