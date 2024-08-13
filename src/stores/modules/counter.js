import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  const asyncIncrement = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(count.value)
        count.value++
        resolve()
      }, 1000)
    })
    console.log(count.value)
  }

  return { count, doubleCount, increment, asyncIncrement }
})
