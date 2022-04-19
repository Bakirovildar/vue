<template>
  <header class="navbar">
       <h1> {{count}} </h1>
       <button class="btn" @click="addCount({value: 5})">Добавить</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters('counter',['count'])
    },

    methods: {
      ...mapMutations('counter',['addCount'])
    }
  }
</script>
