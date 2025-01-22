<template>
  <div class="h-screen flex justify-center items-center">
    <card v-for="cardInfo in cardsInfo" :card-info="cardInfo" :key="cardInfo.id"></card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/card.vue'
defineOptions({
  name: 'App',
})
const cardsInfo = ref([
  {
    id: 1,
    imgUrl: 'img/card/cardImg01.png',
    imgUrlmb: 'img/card/cardImg01-mb.png',
    cardState: 'Learning',
    releaseTime: '2023-12-21T00:00:00Z',
    title: 'TML & CSS foundations',
    content:
      'These languages are the backbone of every website, defining structure, content, and presentation.',
    author: 'Greg Hooper',
    authorImg: 'img/user/userpic01.png',
  },
])
</script>

<style scoped></style>
