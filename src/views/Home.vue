<template>
  <div class="home">
    <search></search>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search'

export default {
  name: 'Home',
  components: {
    'search':Search,
  }
}
</script>
