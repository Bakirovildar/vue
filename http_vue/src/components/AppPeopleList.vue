<template>
<div v-if="people.length !==0">
        <div v-for="item in people" :key="item">{{ item.firstName }}</div>   
</div>

<div v-else class="center">
    <h4>Список пуст</h4>
    <button class="btn primary" @click="$emit('action')">Загрузить список</button>
</div>
    
</template>

<script>
export default {
   props: ['people'],
   emits: ['action']
}
</script>

<style scoped>
    *{
        color: white;
        list-style: none;
    }
</style>