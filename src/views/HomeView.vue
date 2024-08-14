<!--
 * @Author: Chris
 * @Date: 2024-08-13 19:53:54
 * @LastEditors: Chris
 * @LastEditTime: 2024-08-14 22:56:30
 * @Descripttion: **
-->
<script setup>
import { useCounterStore } from '@/stores'
const userStore = useCounterStore()
import { Edit, Plus, CirclePlus } from '@element-plus/icons-vue'

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
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-icon :size="size" :color="color">
    <Edit />
  </el-icon>
  <el-icon>
    <Plus />
  </el-icon>
  <el-icon>
    <CirclePlus />
  </el-icon>
</template>
