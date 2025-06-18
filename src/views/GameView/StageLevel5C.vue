<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import IncorrectAudio from '@/assets/audio/page-9-before false-answer.m4a';
import CorrectAudio from '@/assets/audio/page-9-before right-answer.m4a';
import router from '@/router';
import { onMounted, reactive, ref, useTemplateRef } from 'vue';
import BaseInput from '@/components/Form/BaseInput.vue';

interface TableInputValues {
  p11: string
  p12: string
  p13: string
  p21: string
  p22: string
  p23: string
  yL1: string
  yL2: string
  yL3: string
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

const inputValues = reactive<TableInputValues>({
  p11: '',
  p12: '',
  p13: '',
  p21: '',
  p22: '',
  p23: '',
  yL1: '',
  yL2: '',
  yL3: '',
})

const answer: TableAnswerRange = {
  p11: [2.10, 2.20],
  p12: [1.7],
  p13: [1.17, 1.24],
  p21: [4.56, 4.69],
  p22: [3.50, 3.62],
  p23: [2.20, 2.52],
}

const answerCorrection = reactive<AnswerCorrection>({
  p11: true,
  p12: true,
  p13: true,
  p21: true,
  p22: true,
  p23: true,
})

onMounted(() => {
  document.addEventListener('keyup', fillAnswer)
})

const fillAnswer = (event:KeyboardEvent) => {
  if (event.ctrlKey && event.key == 'ArrowRight') {
    inputValues.p11 = '2.10'
    inputValues.p12 = '1.7'
    inputValues.p13 = '1.17'
    inputValues.p21 = '4.56'
    inputValues.p22 = '3.50'
    inputValues.p23 = '2.20'
  }
}

const correctAudioRef = useTemplateRef<HTMLAudioElement>('audioCorrect')
const incorrectAudioRef = useTemplateRef<HTMLAudioElement>('audioIncorrect')

const checkTableFilled = () => {
  let correctCount = 0
  for (const [key, val] of Object.entries(inputValues)) {
    if (key.search('y') >= 0) {
      break
    }

    const answerPair:Array<number> = answer[key as keyof TableAnswerRange]
    let result = false

    if (answerPair.length == 1) {
      result = parseFloat(val) == answerPair[0]
    }
    else {
      result = (parseFloat(val) >= answerPair[0]) && (parseFloat(val) <= answerPair[1])
    }

    if (result) {
      correctCount++
    }

    answerCorrection[key as keyof AnswerCorrection] = result
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

const completeLevel = () => {
  router.push({name: 'level-5c-question'})
}

const isAnswerWrong = ref(false)

const backToExperiment = () => {
  router.push({name: 'level-4', query: {next: 'level-5c'}})
}
</script>

<template>
  <ScreenBackground sky="3" color="dark" ground="6">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="py-8 md:py-12 md:px-12 md:grid md:grid-cols-4">
        <div class="md:col-span-3 flex flex-col items-center ">
          <div class="mb-8 w-3/4 text-left font-neucha font-black text-white text-3xl md:text-5xl">
            Apa yang kamu temukan?
          </div>
          <div class="w-full overflow-scroll md:overflow-hidden">
            <table class="min-w-lg border-separate border-spacing-2 table-fixed">
              <caption class="caption-top font-knewafe text-white">
                Tabel 3
              </caption>
              <thead>
                <tr>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded" rowspan="2">Percobaan ke-</th>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600" rowspan="2">Jarak Kisi Ke Layar (L)</th>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600" rowspan="2">Panjang Gelombang (nm)</th>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600" rowspan="2">Spektrum Warna</th>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded" colspan="2">Jarak Pola Difraksi</th>
                  <th class="px-2 py-2 bg-yellow-100 text-center border-4 border-yellow-500 rounded font-bold" rowspan="2">y/L</th>
                </tr>
                <tr>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold">P1 Kanan</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold">P1 Kiri</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded">1</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600">10 m</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600">700 nm</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600">Merah</td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-blue-300 rounded">
                    <BaseInput
                      id="p11"
                      v-model="inputValues.p11"
                      :backgroundColor="answerCorrection.p11 ? '!bg-white/25' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1  !text-base text-center"
                    />
                  </td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-blue-300 rounded">
                    <BaseInput
                      id="p21"
                      v-model="inputValues.p21"
                      :backgroundColor="answerCorrection.p21 ? '!bg-white/25' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-yellow-500 rounded">
                    <BaseInput
                      id="yL1"
                      v-model="inputValues.yL1"
                      :backgroundColor="answerCorrection.p11 && answerCorrection.p21 ? '!bg-white/25' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                      placeholder="0"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded">2</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600">10 m</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600">560 nm</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600">Hijau</td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-blue-300 rounded">
                    <BaseInput
                      id="p12"
                      v-model="inputValues.p12"
                      :backgroundColor="answerCorrection.p12 ? '!bg-white/25' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-blue-300 rounded">
                    <BaseInput
                      id="p22"
                      v-model="inputValues.p22"
                      :backgroundColor="answerCorrection.p22 ? '!bg-white/25' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-yellow-500 rounded">
                    <BaseInput
                      id="yL2"
                      v-model="inputValues.yL2"
                      :backgroundColor="answerCorrection.p12 && answerCorrection.p22 ? '!bg-white/25' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                      placeholder="0"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded">3</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600">10 m</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600">400 nm</td>
                  <td class="px-2 py-2 bg-yellow-100 text-center border-4 border-blue-300 rounded font-bold text-green-600">Biru</td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-blue-300 rounded">
                    <BaseInput
                      id="p13"
                      v-model="inputValues.p13"
                      :backgroundColor="answerCorrection.p13 ? '!bg-white/25' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-blue-300 rounded">
                    <BaseInput
                      id="p23"
                      v-model="inputValues.p23"
                      :backgroundColor="answerCorrection.p23 ? '!bg-white/25' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                    />
                  </td>
                  <td class="w-min-xs md:px-2 md:py-2 text-center border-4 border-yellow-500 rounded">
                    <BaseInput
                      id="yL3"
                      v-model="inputValues.yL3"
                      :backgroundColor="answerCorrection.p13 && answerCorrection.p23 ? '!bg-white/25' : '!bg-red-400'"
                      labelClass="!w-0 !p-0"
                      inputClass="!w-full !p-1 !text-base text-center"
                      placeholder="0"
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
              buttonColor="button-red"
              @click="backToExperiment"
            />
            <TheButton
              class="left-[50%] mt-4"
              text="Check Answer"
              buttonColor="button-red"
              @click="checkTableFilled"
            />
          </div>
        </div>
        <div class="flex flex-col mt-4 md:mt-0">
          <TheButton
            :class="{'hidden': isNextButtonHidden}"
            text="NEXT LEVEL"
            buttonColor="button-red"
            @click="completeLevel"
          />
          <img class="w-32 md:w-64 md:mt-18" :src="Ivory" alt="Mascot named Ivory">
        </div>
      </div>
    </div>
  </ScreenBackground>
  <audio ref="audioCorrect" :src="CorrectAudio" controls hidden></audio>
  <audio ref="audioIncorrect" :src="IncorrectAudio" controls hidden></audio>
</template>
