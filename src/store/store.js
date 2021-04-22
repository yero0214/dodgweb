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
    },
    getters: {
        searchResult(state){
            const searchResult = [];
            if(state.items[0].queueType == 'RANKED_SOLO_5x5'){
                searchResult.push(state.items[0]);
                searchResult.push(state.items[1]);
            } else{
                searchResult.push(state.items[1]);
                searchResult.push(state.items[0]);
            }
            return searchResult;
        },
    },
    mutations: {
        setInfo(state,data){
            if(data == 'Request failed with status code 404'){
                state.error = true;
            }else{       
                state.items = data;
                state.error = false;
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