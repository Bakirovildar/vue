<template>
  <div class="card">
    <h1>Привет на главной</h1>

    <p>Тут ты можешь перейти на любую страницу и почитать заранее заготовленные письма :)</p>

    <router-link to="mail">To Mail</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    const answer = confirm('Точно перейти ?')
    if(answer) {
      next()
    } else {
      next(false)
    }
  } 
}
</script>

<style scoped>

</style>