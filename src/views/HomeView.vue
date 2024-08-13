<!--
 * @Author: Chris
 * @Date: 2024-08-13 19:53:54
 * @LastEditors: Chris
 * @LastEditTime: 2024-08-13 23:49:20
 * @Descripttion: **
-->
<script setup>
import { useCounterStore } from '@/stores'
const userStore = useCounterStore()
</script>

<template>
  <h1>这是home页面</h1>
  {{ userStore.count }}
  <button @click="userStore.increment">+</button>
</template>
