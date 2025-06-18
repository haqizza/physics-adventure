<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import page6Audio from '@/assets/audio/page-6.m4a';
import router from '@/router';
import { onMounted, ref } from 'vue';
import { useStudentAnswerStore } from '@/stores/studentAnswer';
import BaseTextInput from '@/components/Form/BaseTextInput.vue';

const isNextButtonHidden = ref(true)

const studentAnswer = useStudentAnswerStore()

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')

const checkInputFilled = () => {
  if( input1.value != '' && input2.value != '' && input3.value != '') {
    isNextButtonHidden.value = false
  }
  console.log(input1.value )
}

const completeLevel = () => {
  studentAnswer.$patch({
    hypothesis_1: input1.value,
    hypothesis_2: input2.value,
    hypothesis_3: input3.value
  })
  router.push({name: 'level-4'})
}

</script>

<template>
  <ScreenBackground sky="2" color="light" ground="4">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="mt-4 text-center font-knewafe text-red-800 text-3xl md:text-5xl">
        Hypothesis
      </div>
      <div class="py-4 md:py-12 md:px-16 flex flex-col md:grid md:grid-cols-3">
        <div class="order-last md:order-none flex flex-col items-end">
          <AudioPlayer class="" :audioPath="page6Audio" />
          <img class="w-32 md:w-84 scale-x-[-1]" :src="Ivory" alt="Mascot named Ivory">
        </div>
        <div
          id="hypothesisInputArea"
          class="
            col-span-2 flex flex-col mt-2 px-3 md:px-6 py-3 items-center justify-self-center
            w-full md:w-fit bg-orange-300 border-4 md:border-10 border-blue-300 rounded-4xl
          "
        >
          <span class="font-cookie text-xl md:text-2xl text-green-800">
            Write your hypothesis!
          </span>
          <BaseTextInput
            class="my-3"
            inputClass="w-full md:w-96 text-base md:text-lg"
            v-model="input1"
            :rows="3"
            placeholder="..."
          />
          <BaseTextInput
            class="my-3"
            inputClass="w-full md:w-96 text-base md:text-lg"
            v-model="input2"
            :rows="3"
            placeholder="..."
          />
          <BaseTextInput
            class="my-3"
            inputClass="w-full md:w-96 text-base md:text-lg"
            v-model="input3"
            :rows="3"
            placeholder="..."
            @updateText="checkInputFilled"
          />
          <div class="self-center">
            <TheButton
              :class="{'hidden': isNextButtonHidden}"
              text="NEXT LEVEL"
              buttonColor="button-red"
              @click="completeLevel"
             />
           </div>
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
