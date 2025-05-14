<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import page8Audio from '@/assets/audio/page-8-naration.m4a';
import IncorrectAudio from '@/assets/audio/page-9-before false-answer.m4a';
import CorrectAudio from '@/assets/audio/page-9-before right-answer.m4a';
import router from '@/router';
import { reactive, ref, useTemplateRef } from 'vue';
import { useStudentAnswerStore } from '@/stores/studentAnswer';
import BaseInput from '@/components/Form/BaseInput.vue';

interface TableInputValues {
  p11: string
  p12: string
  p13: string
  p21: string
  p22: string
  p23: string
}

interface TableAnswerRange {
  p11: Array<number>
  p12: Array<number>
  p13: Array<number>
  p21: Array<number>
  p22: Array<number>
  p23: Array<number>
}

interface AnswerCorrection {
  p11: boolean
  p12: boolean
  p13: boolean
  p21: boolean
  p22: boolean
  p23: boolean
}

const isNextButtonHidden = ref(true)

const studentAnswer = useStudentAnswerStore()

const inputValues = reactive<TableInputValues>({
  p11: '0.5',
  p12: '1.10',
  p13: '3',
  p21: '1.5',
  p22: '3',
  p23: '5',
})

const answer: TableAnswerRange = {
  p11: [0.5,  0.9],
  p12: [1.05, 1.45],
  p13: [2.65, 3.05],
  p21: [1.25, 1.65],
  p22: [2.6,  3.0],
  p23: [4.7,  5.1],
}

const answerCorrection = reactive<AnswerCorrection>({
  p11: true,
  p12: true,
  p13: true,
  p21: true,
  p22: true,
  p23: true,
})

const correctAudioRef = useTemplateRef<HTMLAudioElement>('audioCorrect')
const incorrectAudioRef = useTemplateRef<HTMLAudioElement>('audioIncorrect')

const checkTableFilled = () => {
  correctAudioRef.value?.pause()
  incorrectAudioRef.value?.pause()

  let correctCount = 0
  for (const [key, val] of Object.entries(inputValues)) {
    if(
      parseFloat(val) >= answer[key as keyof TableAnswerRange][0] &&
      parseFloat(val) <= answer[key as keyof TableAnswerRange][1]
    ) {
      answerCorrection[key as keyof AnswerCorrection] = true
      correctCount++
    }
    else {
      answerCorrection[key as keyof AnswerCorrection] = false
    }
  }

  if(correctCount >= 6){
    isNextButtonHidden.value = false
    correctAudioRef.value?.play()
  }
  else {
    incorrectAudioRef.value?.play()
    isAnswerWrong.value = true
  }
}




const completePhase = () => {
  studentAnswer.$patch({
    table_p1_1: parseFloat(inputValues.p11),
    table_p1_2: parseFloat(inputValues.p12),
    table_p1_3: parseFloat(inputValues.p13),
    table_p2_1: parseFloat(inputValues.p21),
    table_p2_2: parseFloat(inputValues.p22),
    table_p2_3: parseFloat(inputValues.p23)
  })
  router.push({name: 'level-5b'})
}

const isAnswerWrong = ref(false)

const backToExperiment = () => {
  router.push({name: 'level-4', query: {next: 'level-5a'}})
}

</script>

<template>
  <ScreenBackground sky="4" color="light" ground="6">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="py-8 md:py-12 md:px-12 md:grid md:grid-cols-4">
        <div class="md:col-span-3 flex flex-col items-center ">
          <div class="mb-8 w-3/4 text-left font-neucha font-black text-amber-700 text-3xl md:text-5xl">
            Apa yang kamu temukan?
          </div>
          <div class="w-full overflow-scroll">
            <table class="min-w-lg border-separate border-spacing-2 table-fixed">
              <caption class="caption-top font-knewafe text-amber-700">
                Tabel 1
              </caption>
              <thead>
                <tr>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded" rowspan="2">Percobaan ke-</th>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded font-bold text-green-600" rowspan="2">Jumlah Kisi (N)</th>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded" rowspan="2">Lebar Celah (d)</th>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded" colspan="2">Jarak Pola Difraksi (y)</th>
                </tr>
                <tr>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded font-bold">P1 Kanan</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded font-bold">P1 Kiri</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded">1</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded font-bold text-green-600">200</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded">0,005</td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-yellow-500 rounded">
                    <BaseInput
                      id="p11"
                      v-model="inputValues.p11"
                      :backgroundColor="answerCorrection.p11 ? '!bg-transparent' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1  !text-base text-center"
                    />
                  </td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-yellow-500 rounded">
                    <BaseInput
                      id="p21"
                      v-model="inputValues.p21"
                      :backgroundColor="answerCorrection.p21 ? '!bg-transparent' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded">2</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded font-bold text-green-600">350</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded">0,003</td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-yellow-500 rounded">
                    <BaseInput
                      id="p12"
                      v-model="inputValues.p12"
                      :backgroundColor="answerCorrection.p12 ? '!bg-transparent' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-yellow-500 rounded">
                    <BaseInput
                      id="p22"
                      v-model="inputValues.p22"
                      :backgroundColor="answerCorrection.p22 ? '!bg-transparent' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded">3</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded font-bold text-green-600">500</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded">0,002</td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-yellow-500 rounded">
                    <BaseInput
                      id="p13"
                      v-model="inputValues.p13"
                      :backgroundColor="answerCorrection.p13 ? '!bg-transparent' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-yellow-500 rounded">
                    <BaseInput
                      id="p23"
                      v-model="inputValues.p23"
                      :backgroundColor="answerCorrection.p23 ? '!bg-transparent' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="w-full md:flex md:gap-4">
            <TheButton
              v-if="isAnswerWrong"
              class="left-[50%] mt-4"
              text="Go Back"
              buttonColor="dark-sky"
              @click="backToExperiment"
            />
            <TheButton
              class="left-[50%] mt-4"
              text="Check Answer"
              buttonColor="dark-sky"
              @click="checkTableFilled"
            />
          </div>
        </div>
        <div class="flex flex-col mt-4 md:mt-0">
          <TheButton
            :class="{'hidden': isNextButtonHidden}"
            text="NEXT"
            buttonColor="button-red"
            @click="completePhase"
          />
          <AudioPlayer class="mt-4 md:mt-26" :audioPath="page8Audio" />
          <img class="w-32 md:w-64" :src="Ivory" alt="Mascot named Ivory">
        </div>
      </div>
    </div>
  </ScreenBackground>
  <audio ref="audioCorrect" :src="CorrectAudio" controls hidden></audio>
  <audio ref="audioIncorrect" :src="IncorrectAudio" controls hidden></audio>
</template>
