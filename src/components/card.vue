<template>
  <div
    class="bg-white max-w-[327px] max-h-[501px] sm:max-w-[24rem] sm:max-h-[32.625rem] rounded-[1.25rem] p-[1.5rem] shadow-[0.5rem_0.5rem_0_0_rgba(0,0,0,1)] border-[1px] border-gray-950"
  >
    <div class="mb-[1.5rem]">
      <img :src="currentImage" alt="" />
    </div>

    <div class="mb-6 flex flex-col gap-3">
      <span
        class="w-fit bg-[rgb(244,208,78)] py-[0.25rem] px-[0.75rem] text-xs sm:text-[0.875rem] leading-normal text-[rgba(17,17,17,1)] font-extrabold"
        >{{ cardInfo.cardState }}</span
      >
      <div class="text-xs sm:text-[0.875rem] font-medium">{{ publishedTime }}</div>
      <div class="text-xl sm:text-2xl leading-normal font-extrabold">{{ cardInfo.title }}</div>
      <div class="text-sm sm:text-base leading-normal text-[rgba(107,107,107,1)] line-clamp-3">
        {{ cardInfo.content }}
      </div>
    </div>

    <div class="flex flex-nowrap gap-3 items-center mb-[1.5rem]">
      <div class="rounded-full overflow-hidden">
        <img class="w-[2rem] h-[2rem]" :src="cardInfo.authorImg" alt="" />
      </div>
      <div class="text-[rgba(17,17,17,1)] text-sm leading-normal font-extrabold">
        {{ cardInfo.author }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'
const props = defineProps(['cardInfo'])
defineOptions({
  name: 'App',
})

const breakpoints = useBreakpoints({
  sm: 640,
  md: 1024,
})

const isSmallScreen = breakpoints.smaller('sm')
const currentImage = computed(() =>
  isSmallScreen.value ? props.cardInfo.imgUrlmb : props.cardInfo.imgUrl,
)

const publishedTime = computed(() => {
  const time = new Date(props.cardInfo.releaseTime)
  // 確保日期有效
  if (isNaN(time)) return 'Invalid date'
  // 獲取月份名稱
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const day = time.getDate()
  const month = monthNames[time.getMonth()]
  const year = time.getFullYear()

  // 返回格式化後的日期
  return `Published ${day} ${month} ${year}`
})
</script>
