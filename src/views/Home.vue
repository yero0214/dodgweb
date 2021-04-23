<template>
  <div class="home">
    <title-com class="title"/>
    <search class="search"/>  
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/widget/Search'
import Title from '@/components/home/Title'

export default {
  name: 'Home',
  components: {
    'title-com':Title,
    'search':Search,
  },
  data(){
    return{
    }
  },
  methods:{

  },
  computed: {
    show(){
      return this.$store.state.searched;
    }
  }
}
</script>
<style scoped>
.title{
    position: absolute;
    left: 50%;
    top: 275px;
    transform: translate(-50%, -50%);
}
.search{
  position: absolute;
  top: 390px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
