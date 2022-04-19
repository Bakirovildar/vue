<template>
  <div class="container with-nav">
    <the-navbar></the-navbar>
    <div class="card">
      <h1>{{ titleApp }}</h1>
      <h2>Счетчик {{ count }} ({{doubleCounter}})</h2>
      <button class="btn" @click="add({value:1})">Плюс 1</button>
      <button class="btn danger" @click="incrementAsync({value:10000})">Плюс 1</button>
    </div>
  </div>
</template>

<script>
import './theme.css'
import TheNavbar from './TheNavbar.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TheNavbar
},
computed: {
  // count() {
  //   return this.$store.getters.counter
  // }
  ...mapGetters(['count', 'doubleCounter', 'titleApp'])
},
methods: {

  ...mapMutations(['add']),
  ...mapActions(['incrementAsync']),
}
}
</script>

<style>

</style>
