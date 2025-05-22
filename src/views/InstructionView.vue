<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import Page3Audio from '@/assets/audio/page-3.m4a';
import StageNumber from '@/components/Instruction/StageNumber.vue';
import IconChevronRight from '@/components/icons/IconChevronRight.vue';
import { ref } from 'vue';
import DetailModal from '@/components/Instruction/DetailModal.vue';
import TheButton from '@/components/TheButton.vue';
import router from '@/router';

const stageDetail: Array<string> = [
  'Meneropong Fenomena',
  'Merumuskan Masalah',
  'Menuliskan Hipotesis',
  'Melakukan Eksperimen',
  'Konfirmasi Data',
  'Penguatan Pemahaman',
  'Menuliskan Kesimpulan',
  'Ujian Ilmuwan Sejati',
]

const activeStage = ref(0)
const activeStageDetail = ref(stageDetail[0])
const isModalActive = ref(false)
const nextButtonHidden = ref(true)

const activateModal = (stage: number) => {
  activeStage.value = stage;
  activeStageDetail.value = stageDetail[stage - 1]
  isModalActive.value = true
}

const handleTimeUpdate = (time: number) => {
  if (time >= 79) {
    activeStage.value = 0;
    isModalActive.value = false
    nextButtonHidden.value = false
  }
  else if (time >= 70.5) {
    activateModal(8)
  }
  else if (time >= 68) {
    isModalActive.value = false
  }
  else if (time >= 61) {
    activateModal(7)
  }
  else if (time >= 58) {
    isModalActive.value = false
  }
  else if (time >= 49.5) {
    activateModal(6)
  }
  else if (time >= 47) {
    isModalActive.value = false
  }
  else if (time >= 42) {
    activateModal(5)
  }
  else if (time >= 40) {
    isModalActive.value = false
  }
  else if (time >= 32) {
    activateModal(4)
  }
  else if (time >= 30) {
    isModalActive.value = false
  }
  else if (time >= 23) {
    activateModal(3)
  }
  else if (time >= 21) {
    isModalActive.value = false
  }
  else if (time >= 14) {
    activateModal(2)
  }
  else if (time >= 12) {
    isModalActive.value = false
  }
  else if (time >= 5) {
    activateModal(1)
  }
}

const toGame = () => {
  router.push({name: 'level-1'})
}
</script>


<template>
  <DetailModal :stage="activeStage" :text="activeStageDetail" :active="isModalActive" />
  <ScreenBackground sky="2" color="light" ground="3">
    <div id="ContentWrapper" class="absolute h-screen w-full z-100 overflow-scroll md:overflow-hidden">
      <div class="py-8 px-8 md:px-16">
        <h1 class="mt-4 md:mt-auto font-knewafe font-extralight text-center italic text-orange-900 text-4xl md:text-7xl font-black">
          The Journey
        </h1>
        <div class="flex gap-8 flex-wrap items-start justify-center mt-12">
          <div
            v-for="n in 8" :key="`stage-${n}`"
            class="flex gap-4 md:gap-8"
          >
            <StageNumber :stageNumber="n" :activeStage="activeStage" />
            <IconChevronRight class="hidden md:block h-24 fill-slate-700" />
          </div>
          <StageNumber stageNumber="End" />
        </div>
        <div :class="{'flex w-full my-10': true, 'hidden': nextButtonHidden}">
          <TheButton text="Next Stage" class="mx-auto" @click="toGame"/>
        </div>
        <div class="fixed bottom-2 md:left-1 flex justify-between items-end ml-12 z-9999">
          <div>
            <img
              :class="{
                'scale-x-[-1] duration-1000 z-1200': true,
                'w-32 md:w-42': !isModalActive,
                'w-32 md:w-62 lg:translate-x-30 md:-translate-y-20': isModalActive
              }"
              :src="Ivory"
              alt="Mascot named Ivory"
            >
            <AudioPlayer :audioPath="Page3Audio" class="w-full" @updateTime="handleTimeUpdate"/>
          </div>
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
