<template>
  <div class="card">
    <h1>Данные</h1>
    <p>{{ framework.name }}</p>
    <p> версия {{ framework.version }} | {{ doubleNum }} </p>
    <button class="btn" @click="changeName">Изменить</button>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import './theme.css'

export default {
  setup() {
    const framework = ref({
      name: 'VueJs',
      version: 3
    })

    const changeName = () => {
      framework.value.name = 'Vue JS'
      framework.value.version = 44
    }

    const doubleNum = computed(() => {
      return framework.value.version * 2
    })

    watch(doubleNum,(newValue, oldValue)=>{
        if(newValue === 88) {
          framework.value.name = 'Hi, how are you?'
        }
        console.log(oldValue)
    })

    return {
      framework,
      changeName,
      doubleNum
    }
  },
  components: {

  }
}
</script>

<style>

</style>
