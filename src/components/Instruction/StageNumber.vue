<script setup lang="ts">

interface Props {
  stageNumber: number|string,
  activeStage?: number,
  // title: string
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <div :class="{
      'flex items-center': true,
      'animate-bounce': activeStage == stageNumber
    }">
      <div class="flex items-center justify-center w-18 h-18 md:w-24 md:h-24 rounded-full bg-orange-700">
        <span class="font-knewafe text-white text-2xl md:text-4xl font-black">
          {{ props.stageNumber }}
        </span>
      </div>
    </div>
  </div>
</template>
