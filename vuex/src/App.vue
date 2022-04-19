<template>
  <div class="container with-nav">
    <the-navbar></the-navbar>
    <div class="card">
      <h1>{{ titleApp }}</h1>
      <h2>Счетчик {{ counter }} ({{doubleCounter}})</h2>
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
  ...mapGetters('counterModuls', ['counter', 'doubleCounter']),
  ...mapGetters(['titleApp'])
},
methods: {
  ...mapMutations('counterModuls',['add']),
  ...mapActions('counterModuls',['incrementAsync']),
}
}
</script>

<style>

</style>
