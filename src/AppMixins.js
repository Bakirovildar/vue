export default {
    data() {
        return {
          name: '',
          age: 23,
          city: 'kzn',
          relocate: 'yes',
          skills: [],
          errors: {
            title: null
          }
        }
      },
     methods: { 
      formIsValid() {
          let isValid = true

          if (this.name.length === 0) {
            this.errors.title = 'Имя не может быть пустым'
            isValid = false
          } else {
            this.errors.title = null
          }
          return isValid
      },
      submitHandler() {
        if (this.formIsValid()) {
        console.log(this.name, this.age, this.city, this.relocate, this.skills)
        }
      },
    }
}