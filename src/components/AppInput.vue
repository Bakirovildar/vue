<template>
  <div class="form-control" :class="{invalid: error}">
        <label for="name">{{ label }}</label>
        <input 
          type="text" 
          id="name" 
          :placeholder="placeholder"
          :value="inputValue"
          @input="change"
          >
          <small v-if="error"> {{error}} </small>
      </div>
</template>

<script>
export default {
    props: {
        error: String,
        label: String,
        placeholder: String,
        inputValue: String

    },
    methods: {
        change(event) {
            this.$emit('update:inputValue', event.target.value)
        }
    }
}
</script>

<style>

</style>