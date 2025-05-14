<script setup lang="ts">
import StageNumber from './StageNumber.vue';


interface Props {
  stage: number
  text: string,
  active: boolean
}

const props = defineProps<Props>()


</script>

<template>
  <div :class="`fixed top-0 w-full z-1000`">
    <div class="flex justify-center">
      <div class="flex flex-col">
        <div
        :class="{
          'bg-white mx-auto flex flex-col items-center justify-center border-x-7 border-green-900 rounded-b-4xl': true,
          'w-[90%] md:w-100 h-120 shadow-black/70 shadow-2xl duration-1000': props.active,
          'h-0 w-[90%] md:w-100 overflow-hidden duration-1000': !props.active
        }"
        >
          <StageNumber :stageNumber="stage"/>
          <span class="mt-4 text-center font-knewafe text-gray-800/75 text-4xl">
            {{ props.text }}
          </span>
        </div>
        <div id="scrollHandle" class="flex items-center ">
          <div class="w-1/10 md:w-10 h-8 bg-orange-900 shadow-lg shadow-black/70 rounded-lg"></div>
          <div class="w-1 h-4 bg-orange-900 shadow-lg shadow-black/70 "></div>
          <div class="w-4/5 md:w-100 h-8 bg-orange-900 shadow-lg shadow-black/70 rounded-lg"></div>
          <div class="w-1 h-4 bg-orange-900 shadow-lg shadow-black/70 "></div>
          <div class="w-1/10 md:w-10 h-8 bg-orange-900 shadow-lg shadow-black/70 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
</template>
