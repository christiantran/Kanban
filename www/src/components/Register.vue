<template>
        <div class="register-page">
          <form @submit.prevent="userRegister">
            <input type="text" name="name" id="name" v-model="register.name">
            <input type="text" name="email" id="email" v-model="register.email">
            <input type="password" name="password" id="password" v-model="register.password">
            <button type="submit">Register</button>
          </form>
        </div>
      </template>
      
      <script>
        export default {
          name: '',
          data() {
            return {
              register: {
                name:'',
                email: '',
                password: ''
              }
            }
          },
          computed: {},
          methods: {
            userRegister() {
              this.$store.dispatch('register', this.register)
            }
        }
              }
      </script>
      
      <style>
      </style>