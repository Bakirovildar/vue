<template>
  <div class="container column">
    <app-form 
      @submitForm="submitForm"
      @changeSelect='changeSelect'
      @valueText='changeText'
      />
    <main-info />
  </div>
  <app-comments/>
</template>

<script>
import AppComments from './components/AppComments.vue'
import AppForm from './components/AppForm.vue'
import MainInfo from './components/MainInfo.vue'
export default {
  data() {
    return {
      selectValue: '',
      valueText: ''
    }
  },
  components: {
    AppForm,
    MainInfo,
    AppComments
  },
  methods: {
    submitForm() {
      console.log(this.valueText)
    },
    changeSelect(value) {
      this.selectValue = value
      // console.log(value)
    },
    changeText(value) {
      this.valueText = value
      // console.log(this.valueText)
    }
  }
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
