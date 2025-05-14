<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import page11Audio from '@/assets/audio/page-11.m4a';
import router from '@/router';
import MapImage  from '@/assets/decorative/map.png';
import QuizImage from '@/assets/decorative/quiz.png'
import { ref } from 'vue';
import { useStudentAnswerStore } from '@/stores/studentAnswer';

const isEndButtonHidden = ref(true)
const studentAnswer = useStudentAnswerStore()

const quizClicked = (event) => {
  isEndButtonHidden.value = false
}

const endAdventure = () => {
  studentAnswer.storeStudentAnswer()
  router.push({name: 'closing'})
}

</script>

<template>
  <ScreenBackground sky="5" color="cream" ground="6">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="py-8 md:py-8 md:px-12 md:pr-42 flex flex-col md:grid md:grid-cols-2 gap-1 md:gap-6">
        <div class="order-last md:order-none flex flex-col">
          <div class="md:mt-14 flex flex-col items-center">
            <img
              class="w-32 md:w-122 ml-5 text-shadow-lg duration-500"
              :src="MapImage"
              alt="experiment tools image"
            >
          </div>
        </div>
        <div class="relative flex flex-col items-center gap-6">
          <div class="mt-4 md:mt-8 text-center font-knewafe text-gray-900 text-3xl md:text-5xl">
            Ayo Uji<br class="mb-2">Pemahamanmu
          </div>
          <p class="font-kalam text-base md:text-2xl text-center">
            Klik icon Quiz dibawah ini untuk mengisi soal mengenai konsep Difraksi Cahaya
          </p>
          <a
            href="https://quizizz.com/join?gc=42042964"
            target="_blank"
            @click="quizClicked"
          >
            <img
              :src="QuizImage"
              alt="it is quiz time image"
              class="w-46 hover:translate-x-2 hover:-translate-y-2 hover:drop-shadow-lg hover:drop-shadow-black/75 duration-500"
            >
          </a>
          <TheButton
            :class="{'hidden': isEndButtonHidden}"
            class="self-start"
            text="Finish Adventure"
            buttonColor="button-red"
            @click="endAdventure"
          />
          <div class="absolute -bottom-15 right-0 flex flex-col items-end">
            <img class="w-24 md:w-46" :src="Ivory" alt="Mascot named Ivory">
            <AudioPlayer class="" :audioPath="page11Audio" />
          </div>
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
