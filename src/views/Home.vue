<template>
  <div class="home">
    <title-com class="title"/>
    <search class="search"/>  
    <contents v-if="show" class="contents"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/home/Search'
import Title from '@/components/home/Title'
import Contents from '@/components/home/Contents'

export default {
  name: 'Home',
  components: {
    'title-com':Title,
    'search':Search,
    'contents':Contents,
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

</style>
