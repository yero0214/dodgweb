<template>
  <div class="home">
    <title-com/>
    <search v-if="1"/>
    <contents/>
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
  }
}
</script>
