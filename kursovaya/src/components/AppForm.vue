<template>
  <form class="card card-w30" @submit.prevent="$emit('submitForm')">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select id="type" @change="changeSelect">
          <option value="title">Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>

      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value" rows="3" @change="valueText"></textarea>
      </div>

      <button class="btn primary">Добавить</button>
    </form>
</template>

<script>
export default {
    emits: ['changeSelect'],
    data() {
        return {
  
        }
    },
    methods: {
        changeSelect(event) {
            this.$emit('changeSelect', event.target.value)
        },

        valueText(event) {
          this.$emit('valueText', event.target.value)
        }
    }
}
</script>

<style>

</style>