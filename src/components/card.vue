<template>
  <div class="bg-white w-[24rem] h-[32.625rem] rounded-[1.25rem] p-[1.5rem]">
    <div class="mb-[1.5rem]">
      <img src="../assets/img/card/cardImg01.png" alt="" />
    </div>

    <div class="mb-6">
      <span
        class="inline-block bg-[rgb(244,208,78)] py-[0.25rem] px-[0.75rem] text-[0.875rem] leading-normal text-[rgba(17,17,17,1)] mb-4"
        >Learning</span
      >
      <div class="text-[0.875rem] mb-3">Published 21 Dec 2023</div>
      <div class="text-[1.5rem] leading-normal font-extrabold">HTML & CSS foundations</div>
      <div class="text-base leading-normal text-[rgba(107,107,107,1)]">
        These languages are the backbone of every website, defining structure, content, and
        presentation.
      </div>
    </div>

    <div class="flex flex-nowrap gap-3 items-center">
      <div class="rounded-full overflow-hidden">
        <img class="w-[2rem] h-[2rem]" src="../assets/img/user/userpic01.png" alt="" />
      </div>
      <div class="text-[rgba(17,17,17,1)] text-sm leading-normal font-extrabold">Greg Hooper</div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'App',
})
</script>
