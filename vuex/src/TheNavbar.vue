<template>
  <header class="navbar">
       <h1> {{ counter }} </h1>
       <button class="btn" @click="add({value: 10})">Добавить</button>
  </header>
</template>

<script>
import { mapGetters ,mapMutations } from 'vuex'
  export default {
    methods: {
      ...mapMutations('counterModuls',[ 'add']),
    },
    computed: {
      ...mapGetters('counterModuls',['counter'])
    }
  }
</script>
