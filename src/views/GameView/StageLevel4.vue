<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import page7Audio from '@/assets/audio/page-7.m4a';
import router from '@/router';
import ExperimentImage from '@/assets/decorative/experiment.png';
import EnvelopeImage  from '@/assets/decorative/envelope.png';
import BoardImage from '@/assets/decorative/board.png'
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const completeLevel = () => {
  const next = route.query.next || 'level-5a'
  router.push({name: `${next}`})
}

const isExperimentClicked = ref(false)
const isLkpdClicked = ref(false)
const isNextButtonHidden = ref(true)


const clickUrl = (item: string) => {
  if(item == 'experiment'){
    isExperimentClicked.value = true
  }
  else if(item == 'lkpd'){
    isLkpdClicked.value = true
  }

  if (isLkpdClicked.value && isExperimentClicked.value) {
    isNextButtonHidden.value = false
  }
}
</script>

<template>
  <ScreenBackground sky="1" color="red" ground="4">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
    <div class="mt-8 text-center font-knewafe text-white text-3xl md:text-5xl">
      Ayo Cari Tahu!
    </div>
    <div class="py-8 md:py-4 md:px-16 flex flex-col md:grid md:grid-cols-5">
        <div class="order-last md:order-none flex md:flex-col md:items-end">
          <AudioPlayer class="" :audioPath="page7Audio" />
          <img class="w-46 scale-x-[-1]" :src="Ivory" alt="Mascot named Ivory">
        </div>
        <div id="title" class="col-span-2 flex flex-col">
          <div class="flex flex-col items-center">
            <img class="w-62 md:ml-4" :src="ExperimentImage" alt="experiment tools image">
            <a
              class=""
              href="https://ophysics.com/l5b.html "
              target="_blank"
              @click="() => clickUrl('experiment')"
            >
              <TheButton
              text="Eksperimen"
              buttonColor="dark-sky"
              bothClass="text-3xl px-16"
            />
            </a>
          </div>
          <div class="mt-4 md:mt-16 flex flex-col items-center">
            <a
              href="https://docs.google.com/document/d/1kkQurzAirjcTDyk6HFs4R-9T1DnukkYO/edit?usp=sharing&ouid=107120534094743359068&rtpof=true&sd=true"
              target="_blank"
              @click="() => clickUrl('lkpd')"
            >
              <img class="w-32 ml-5 hover:translate-x-2 hover:-translate-y-2 hover:drop-shadow-lg hover:drop-shadow-black/75 duration-500" :src="BoardImage" alt="experiment tools image">
            </a>
            <span class="font-knewafe text-white text-2xl ">LKPD</span>
          </div>
        </div>
        <div class="mt-6">
          <TheButton
              :class="{'hidden': isNextButtonHidden}"
              text="NEXT LEVEL"
              buttonColor="dark-sky"
              bothClass="text-3xl"
              @click="completeLevel"
          />
        </div>
        <img
          :src="EnvelopeImage"
          alt="image of people handling envelope and RGB palette image"
          class="hidden md:block md:fixed w-121 bottom-0 right-0"
        >
      </div>
    </div>
  </ScreenBackground>
</template>
