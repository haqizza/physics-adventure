<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import page5Audio from '@/assets/audio/page-5.m4a';
import router from '@/router';
import { ref } from 'vue';
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
    state_1: input1.value,
    state_2: input2.value,
    state_3: input3.value
  })
  router.push({name: 'level-3'})
}

</script>

<template>
  <ScreenBackground sky="3" color="dark" ground="2">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="mt-4 text-center font-knewafe text-white text-2xl md:text-5xl">
        Problem Statement
      </div>
      <div class="py-4 md:py-8 md:px-16 flex flex-col md:grid md:grid-cols-4">
        <div id="problemStatementInputArea" class="md:col-span-3 flex flex-col px-2 md:px-0 items-center ">
          <BaseTextInput
            class="my-4 justify-center"
            inputClass="w-full md:w-96 text-base md:text-lg"
            v-model="input1"
            :rows="3"
            placeholder="..."
          />
          <BaseTextInput
            class="my-4 justify-center"
            inputClass="w-full md:w-96 text-base md:text-lg"
            v-model="input2"
            :rows="3"
            placeholder="..."
          />
          <BaseTextInput
            class="my-4 justify-center"
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
        <div class="flex md:flex-col">
          <AudioPlayer class="md:mt-26" :audioPath="page5Audio" />
          <img class="w-32 md:w-64" :src="Ivory" alt="Mascot named Ivory">
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
