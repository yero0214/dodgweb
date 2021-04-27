<template>
  <div class="search">
    <input type="text" placeholder="   소환사명을 입력하세요." v-model="name" @keyup.enter="search()">
    <button @mouseenter="hover=true" @mouseleave="hover=false" @click="search()">
      <span v-if="!hover" class="material-icons">search</span>
      <span v-if="hover" class="material-icons md-light">search</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data (){
    return{
        name: '',
        hover: false,
    }
  },
  methods:{
      async search(){
        if(this.name == ''){
            alert("소환사명을 입력하세요");
            return;
          }
        else {
          await this.$store.dispatch('search',this.name);
          if(this.$store.state.items == '404' || this.$store.state.items == '403'){
            this.$store.state.searchName = this.name;
            
            if(this.$router.currentRoute.path == '/error'){
              return;
           
            } else{
              this.$router.push('/error');
            }
            
          }else{
            if(this.$router.currentRoute.path == '/summoner'){
              return;
           
            } else{
              this.$router.push('/summoner');
            }
          }
        }
      }
  },
  computed:{
    error(){
      return this.$store.state.error;
    }
  }
}
</script>
<style scoped>
.search {
  background-color: white;
  width:550px;
  height: 50px;
  border-radius: 1rem;
}
.search input[type=text]{
  margin-left: 10px;
  width:480px;
  height: 40px;
  padding:0px;
  padding-top:3px;
  border-radius: 1rem 0 0 1rem;
  outline: none;
  border: none;
  font-size: 14px;
  font-family: 'Gothic A1';
}
.search button{
  background-color: rgb(255, 255, 255);
  width: 60px;
  height: 50px;
  border: none;
  outline: none;
  padding:0px;
  border-radius: 0 1rem 1rem 0;
  transition-duration: 200ms;
}
.search button:hover {
  background-color: rgb(228, 31, 31);
}
</style>