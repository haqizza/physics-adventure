<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import page10Audio from '@/assets/audio/page-10.m4a';
import router from '@/router';
import { ref } from 'vue';
import BaseTextInput from '@/components/Form/BaseTextInput.vue';
import GreatImage from '@/assets/decorative/great.png'
import { useStudentAnswerStore } from '@/stores/studentAnswer';

const studentAnswer = useStudentAnswerStore()

const isNextButtonHidden = ref(true)
const inputText = ref('')

const handleUpdateText = () => {
  if(inputText.value != ''){

    isNextButtonHidden.value = false
  }
}

const completeLevel = () => {
  studentAnswer.conslusion = inputText.value
  router.push({name: 'level-8'})
}
</script>

<template>
  <ScreenBackground sky="5" color="cream" ground="5">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="py-12 md:py-20 md:px-26 md:grid md:grid-cols-4">
        <div id="title" class="md:col-span-3 flex flex-col items-center gap-8">
          <div class="mt-2 font-neucha text-center font-black text-orange-900 text-lg md:text-4xl">
            Kita sudah sampai di penghujung penjelajahan. Ayo Tuliskan kesimpulanmu untuk menyempurnakan penjelajahan ini!
          </div>
          <div class="w-full md:w-[80%] max-w-200 h-full px-2 py-4 md:px-8 bg-yellow-900/95 text-center text-yellow-100 rounded-t-4xl">
            <h1 class="mb-6 font-knewafe text-2xl md:text-5xl">Box of Conclusion</h1>
            <BaseTextInput
              v-model="inputText"
              labelClass="!bg-transparent border border-white"
              inputClass="w-full text-base !bg-transparent border border-white"
              :rows="12"
              placeholder="..."
              @updateText="handleUpdateText"
            />
          </div>

        </div>
        <div class="flex flex-col">
          <AudioPlayer :audioPath="page10Audio" />
          <img class="w-32 md:w-64" :src="Ivory" alt="Mascot named Ivory">

          <TheButton
            :class="{'hidden': isNextButtonHidden}"
            class="order-first md:order-none mt-6"
            text="NEXT LEVEL"
            buttonColor="button-red"
            @click="completeLevel"
          />
        </div>
      </div>
    </div>
    <img
      class="mx-2 w-24 md:w-40 z-2"
      :src="GreatImage"
      alt="you are the great"
    >
  </ScreenBackground>
</template>
