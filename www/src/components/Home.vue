<template>
  <div class="hello">
    Main
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Home',
  mounted(){
      if(!this.$store.state.user._id){
        router.push({name: 'login'})
      }
    },
  data () {
    return {
      
    }
  },
  computed: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
