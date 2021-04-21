<template>
  <div class="search">
    <input type="text" placeholder="   소환사명을 입력하세요." v-model="name" @keyup.enter="search()">
    <button @mouseenter="hover=true" @mouseleave="hover=false" @click="search()">
      <span v-if="!hover" class="material-icons">search</span>
      <span v-if="hover" class="material-icons md-light">search</span>
    </button>
    <div v-if="error" class="msg">소환사를 찾을 수 없습니다.</div>
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
      search(){
        if(this.name == '')return;
        else this.$store.dispatch('search',this.name)
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
  position: absolute;
  top: 390px;
  left: 50%;
  transform: translate(-50%, -50%);
  width:570px;
  border-radius: 1rem;
}
.search input[type=text]{
  margin-left: 10px;
  width:500px;
  height: 45px;
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
  height: 55px;
  border: none;
  outline: none;
  padding:0px;
  border-radius: 0 1rem 1rem 0;
  transition-duration: 200ms;
}
.search button:hover {
  background-color: rgb(228, 31, 31);
}
.msg{
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(224, 24, 24);
  font-family: 'Gothic A1';
}
</style>