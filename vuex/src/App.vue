<template>
  <div class="container with-nav">
    <the-navbar></the-navbar>
    <div class="card">
      <h1>Vue js</h1>
      <h2>Счетчик {{count }}</h2>
      <button class="btn" @click="addCount({value:1})">Плюс 1</button>
      <button class="btn danger" @click="incrementAsync({value: 12})">Плюс 1</button>
    </div>
  </div>
</template>

<script>
import './theme.css'
import TheNavbar from './TheNavbar.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    TheNavbar
  },

  computed: {
    ...mapGetters('counter',['count'])
  },

  methods: {
    ...mapMutations('counter',['addCount']),
    ...mapActions('counter',['incrementAsync'])
  }
}
</script>

<style>

</style>
