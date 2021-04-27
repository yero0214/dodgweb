import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
        createPersistedState({
          getState: (key) => Cookies.getJSON(key),
          setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
        })
    ],
    state: {
        loginPage:false,
        regiPage:false,
        state: false,
        name: '',
        items: [],
        searchName:'',
    },
    getters: {
        getProfile(state){
            const profileResult = [];
            const profile = state.items[0];
            
            profileResult[0] = profile.name;
            profileResult[1] = profile.profileIconId;
            profileResult[2] = profile.summonerLevel;

            return profileResult;
        },
        getTier(state){
            const tierResult = [];
            const tier = state.items[1];

            if(tier == 'unranked'){
                tierResult[0] = 'unranked';
                tierResult[1] = 'unranked';
            } else{
                if(tier.length == 1){
                    if(tier[0].queueType == 'RANKED_SOLO_5x5'){
                        tierResult[0] = tier[0];
                        tierResult[1] = 'unranked';
                    } else{
                        tierResult[0] = 'unranked';
                        tierResult[1] = tier[0];
                    }

                } else{
                    if(tier[0].queueType == 'RANKED_SOLO_5x5'){
                        tierResult[0] = tier[0];
                        tierResult[1] = tier[1];
                    } else{
                        tierResult[0] = tier[1];
                        tierResult[1] = tier[0];
                    }
                }
            }
            return tierResult;
        },
        // getMatches(state){
        //     const matches = state.items[2];
        // },
        getRecent(state){
            const matches = state.items[2];
            let win = 0;
            let lose = 0;

            for(var i1 = 0; i1 < matches.length; i1++){
                for(var i2 = 0; i2 < matches[i1].info.participants.length; i2++){
                    if(matches[i1].info.participants[i2].summonerName == state.searchName){
                        if(matches[i1].info.participants[i2].win == true)win++;
                        else lose = lose + 1;
                        break;
                    }
                }
            }


            return win/(matches.length)*100;
        }
    },
    mutations: {
        setInfo(state,data){
            if(data == 'Request failed with status code 404'){
                state.items = '404';

            }else if(data == 'Request failed with status code 403'){
                state.items = '403';
                
            }else if(data == 'Request failed with status code 429'){
                state.items = '429';
                
            }else{       
                state.items = data;
                state.error = false;
            }
            console.log(state.items);
        }
    },
    actions: {
        async search(state,name){
            await axios.get('https://dodgserver-dxjx2xunna-du.a.run.app/?name='+ name)
            .then(response =>{
                console.log(response.data);
                state.commit('setInfo',response.data);
            })
            .catch(error =>{
                console.log(error.message);
            })
        }
    },
})