<template>
<div v-if="people.length !==0">
    <div class="card center person" v-for="item in people" :key="item">
        <h2>{{ item.firstName }}</h2>   
        <button class="btn danger" @click="$emit('removePeople', item.id)">Удалить</button>
    </div>
</div>

<div v-else class="card center">
    <h4>Список пуст</h4>
    <button class="btn primary" @click="$emit('action')">Загрузить список</button>
</div>
    
</template>

<script>
export default {
   props: ['people'],
   emits: ['action', 'removePeople']
}
</script>

<style scoped>

</style>