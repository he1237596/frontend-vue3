<!--
 * @Author: Chris
 * @Date: 2024-08-13 19:53:54
 * @LastEditors: Chris
 * @LastEditTime: 2024-08-14 00:08:45
 * @Descripttion: **
-->
<script setup>
import { useCounterStore } from '@/stores'
const userStore = useCounterStore()

import { storeToRefs } from 'pinia'
const { count, doubleCount } = storeToRefs(userStore) // 使用较多属性，考虑使用storeToRefs解构
</script>

<template>
  <h1>这是home页面</h1>
  {{ userStore.count }}
  {{ userStore.doubleCount }}
  <button @click="userStore.increment">increment +</button>
  <button @click="userStore.asyncIncrement">asyncIncrement +</button>
  {{ count }}
  {{ doubleCount }}
</template>
