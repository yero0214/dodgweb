import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginPage:false,
        regiPage:false,
        state: false,
        searched: false,
        error: false,
        name: '',
        items: [],
    },
    getters: {
        searchResult: state =>{
            const searchResult = [];
            if(state.items[0].queueType == 'RANKED_SOLO_5x5'){
                searchResult.push(state.items[0]);
                searchResult.push(state.items[1]);
            } else{
                searchResult.push(state.items[1]);
                searchResult.push(state.items[0]);
            }
            return searchResult;
        }
    },
    mutations: {
        setInfo(state,data){
            if(data == 'Request failed with status code 404'){
                state.error = true;
            }else{       
                state.items = data;
                state.error = false;
                state.searched = true;
            }
            console.log(state.items);
        }
    },
    actions: {
        async search(state,name){
            await axios.get('https://dodgserver-dxjx2xunna-du.a.run.app/eid?name='+ name)
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