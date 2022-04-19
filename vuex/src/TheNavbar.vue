<template>
  <header class="navbar">
       <h1> {{ $store.state.counter }} </h1>
       <button class="btn" @click="add">Добавить</button>
  </header>
</template>

<script>
  export default {
    methods: {
      add() {
        this.$store.commit('add',{
          value: 10,
        })
      }
    }
  }
</script>
