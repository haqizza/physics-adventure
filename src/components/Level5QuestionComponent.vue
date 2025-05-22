<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue'
import TheButton from '@/components/TheButton.vue'
import Ivory from '@/assets/mascot/ivory.png'
import IncorrectAudio from '@/assets/audio/page-9-question-false.m4a'
import router from '@/router'
import { ref, useTemplateRef } from 'vue'
import BaseTextInput from '@/components/Form/BaseTextInput.vue'

interface Props {
  nextPage: string
  prevPage: string
  question: string
  title: string
  correctAnswer: Array<string>
  correctAudio: string
}

const props = defineProps<Props>()
const emit = defineEmits(['answer-finished'])

const correctAudioRef = useTemplateRef<HTMLAudioElement>('audioCorrect')
const incorrectAudioRef = useTemplateRef<HTMLAudioElement>('audioIncorrect')

const isNextButtonHidden = ref<boolean>(true)
const isAnswerWrong = ref<boolean>(false)

const studentInput = ref<string>('')

const checkAnswerString = (correctAnswer: Array<string>): boolean => {
  const answerLower:string = studentInput.value.toLocaleLowerCase()

  for (let i = 0; i < correctAnswer.length; i++) {
    if(answerLower.search(correctAnswer[i]) >= 0){
      return true
    }
  }
  return false
}

const checkAnswer = () => {
  correctAudioRef.value?.pause()
  incorrectAudioRef.value?.pause()

  const result: boolean = checkAnswerString(props.correctAnswer)

  if (result) {
    emit('answer-finished', studentInput.value)
    correctAudioRef.value?.play()
    setTimeout(() => {
      isNextButtonHidden.value = false
    }, 5000)
  }
  else {
    incorrectAudioRef.value?.play()
    isAnswerWrong.value = true
  }
}

const completePhase = () => {
  router.push({name: props.nextPage})
}

const backToTable = () => {
  router.push({name: props.prevPage})
}

</script>

<template>
  <ScreenBackground sky="7" color="yellow" ground="8">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="
        flex flex-col items-center w-full md:w-[60%] h-full md:h-full
        pt-20 md:mt-16 md:pt-20 mx-auto px-2 md:px-16
        bg-no-repeat bg-[url(/src/assets/decorative/kanban.png)] bg-auto bg-top md:bg-contain
      ">
        <div class="px-26 py-3 text-slate-700 text:lg md:text-xl font-neucha bg-amber-300 rounded-full">
          {{ title }}
        </div>
        <div class="mt-2 font-neucha text-slate-700 text-lg md:text-2xl">
          {{ question }}
        </div>
        <BaseTextInput
        class="my-4 justify-center"
        labelClass="!bg-transparent"
        inputClass="w-full md:w-121 text-base md:text-lg !bg-transparent border border-gray-300"
        v-model="studentInput"
        :rows="5"
        placeholder="Tulis jawabanmu"
        />
        <div class="w-full md:flex md:justify-center md:gap-4">
          <TheButton
            v-if="isAnswerWrong"
            class="left-[50%] mt-4"
            text="Go Back"
            buttonColor="dark-sky"
            @click="backToTable"
          />
          <TheButton
            class="left-[50%] mt-4"
            text="Check Answer"
            buttonColor="dark-sky"
            @click="checkAnswer"
          />
        </div>
      </div>
      <div class="fixed right-0 bottom-0 flex flex-col mt-4 md:mt-0">
        <TheButton
          :class="{'hidden': isNextButtonHidden}"
          text="NEXT"
          buttonColor="button-red"
          @click="completePhase"
        />
        <img class="w-32 md:w-64" :src="Ivory" alt="Mascot named Ivory">
      </div>
    </div>
  </ScreenBackground>
  <audio ref="audioCorrect" :src="correctAudio" controls hidden></audio>
  <audio ref="audioIncorrect" :src="IncorrectAudio" controls hidden></audio>
</template>
