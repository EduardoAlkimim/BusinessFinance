<script setup>
import index from './components/Index.vue'
import navbar from './layouts/Navbar.vue'
import SingIn from './views/SignIn.vue'
import forgot from './views/ForgotPassword.vue'
import { RouterView } from 'vue-router'
</script>

<template>

  <div v-if="!$route.meta.hideTopNav" class="top-nav">
      <a href="/Login">Login</a> | <a href="/Forgot">Esqueci minha senha</a>
    </div>

  <router-view />
</template>

