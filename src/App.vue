<!--
 * @Author: Chris
 * @Date: 2024-08-13 19:53:53
 * @LastEditors: Chris
 * @LastEditTime: 2024-08-13 23:38:50
 * @Descripttion: **
-->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
