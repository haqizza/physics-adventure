<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue'
import TheButton from '@/components/TheButton.vue'
import router from '@/router'
import { useStudentAnswerStore } from '@/stores/studentAnswer'
import { ref } from 'vue'

interface QuestionData {
  number: number
  question: string
  option: Array<string>
  answer: number
  url: string
}

const evaluationData: Array<QuestionData> = [
  {
    number: 1,
    question: 'Jika jumlah garis per mm pada kisi difraksi ditingkatkan, apa yang terjadi pada pola difraksi yang diamati di layar?',
    option: [
      'Pola menjadi lebih terang',
      'Sudut deviasi menjadi lebih kecil',
      'Jarak antar pita terang menjadi lebih besar',
      'Semua pita terang menjadi satu',
      'Tidak terjadi perubahan'
    ],
    answer: 3,
    url: 'https://youtu.be/wjzfcFCu0OM?si=XRT7K9hqb4vkyENZ'
  },
  {
    number: 2,
    question: 'Jika jarak antara kisi difraksi dan layar diperbesar, maka pola difraksi yang diamati akan...',
    option: [
      'Menghilang',
      'Menjadi lebih sempit',
      'Tidak mengalami perubahan',
      'Menjadi lebih lebar (tersebar)',
      'Menjadi lebih gelap'
    ],
    answer: 4,
    url: 'https://youtu.be/I1iokg8x7OI?feature=shared'
  },
  {
    number: 3,
    question: 'Dua cahaya monokromatik, merah dan ungu, masing-masing dilewatkan satu per satu melalui kisi difraksi yang sama. Jika panjang gelombang cahaya merah lebih besar daripada cahaya ungu, maka yang akan terjadi adalah...',
    option: [
      'Pola difraksi cahaya ungu muncul lebih jauh dari pusat dibandingkan cahaya merah',
      'Pola difraksi cahaya merah dan ungu berada pada posisi yang sama',
      'Pola difraksi cahaya merah muncul lebih dekat ke pusat dibandingkan cahaya ungu',
      'Cahaya ungu tidak menghasilkan pola difraksi karena panjang gelombangnya kecil',
      'Kedua cahaya tidak mengalami deviasi karena monokromatik'
    ],
    answer: 3,
    url: 'https://youtube.com/shorts/ETwW1rHf4sU?si=IaUcEd5tcshXHsjM'
  }
]

const studentAnswer = useStudentAnswerStore()

const selected = ref<number>(0)
const evaluationQuestionNumber = ref<number>(0)
const answerFalse = ref<boolean>(false)

const selectAnswer = (value: number) => {
  selected.value = value
}

const nextQuestion = () => {
  if (selected.value == evaluationData[evaluationQuestionNumber.value].answer) {
    evaluationQuestionNumber.value++

    if (evaluationQuestionNumber.value == 3) {
      studentAnswer.storeStudentAnswer()
      router.push({name: 'closing'})
    }
  }
  else {
    answerFalse.value = true
  }

  selected.value = 0
}

const prevQuestion = () => {
  evaluationQuestionNumber.value--
}

const resetAnswer = () => {
  answerFalse.value = false
}
</script>

<template>
  <div v-if="answerFalse" class="fixed inset-0 z-8000">
    <ScreenBackground sky="8" color="white" ground="10">
      <div
        id="ContentWrapper"
        class="absolute h-screen w-full md:px-40 overflow-scroll z-9999"
      >
      <div class="
        mt-24 md:mt-30
        w-full md:w-144 px-2 py-4 md:px-12 md:py-8 bg-white
        font-neucha text-red-900 text-lg md:text-2xl
        border-2 border-red-900 rounded-lg
      ">
        Jawabanmu salah. Untuk mengetahui penjelasan mengenai jawaban benar dari soal tersebut, silahkan klik link di bawah ini
      </div>
      <div class="
        mt-4 md:mt-4 md:ml-20
        w-full md:w-144 px-2 py-4 md:px-12 md:py-8 bg-white
        font-neucha text-red-900 text-lg md:text-2xl
        border-2 border-red-900 rounded-lg
      ">
        <a
          :href="evaluationData[evaluationQuestionNumber].url"
          target="_blank"
          class="hover:text-blue-800"
          @click="resetAnswer"
        >
          {{ evaluationData[evaluationQuestionNumber].url }}
        </a>
      </div>
    </div>
    </ScreenBackground>
  </div>
  <ScreenBackground sky="7" color="yellow" ground="9">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-scroll"
    >
      <div class="py-4 px-3 md:py-4 md:px-12 md:pr-42 flex flex-col">
        <div class="mb-4 text-center font-knewafe text-brown-plank text-3xl md:text-6xl">
          EVALUASI
        </div>
        <div class="flex flex-col gap-4 md:w-1/2 md:self-end">
          <p id="question" class="font-neucha text-red-950 text-base md:text-2xl font-bold">
            {{ evaluationData[evaluationQuestionNumber].question }}
          </p>
          <div
            :class="{
              'px-4 py-2 md:px-6 md:py-4 brown-plank font-neucha text-white text-base md:text-xl font-semibold hover:shadow-2xl hover:shadow-black/50 rounded-full cursor-pointer': true,
              'border-4 border-yellow-400': selected == 1
            }"
            @click="() => selectAnswer(1)"
          >
            A. {{ evaluationData[evaluationQuestionNumber].option[0] }}
          </div>
          <div
            :class="{
              'px-4 py-2 md:px-6 md:py-4 brown-plank font-neucha text-white text-base md:text-xl font-semibold hover:shadow-2xl hover:shadow-black/50 rounded-full cursor-pointer': true,
              'border-4 border-yellow-400': selected == 2
            }"
            @click="() => selectAnswer(2)"
          >
            B. {{ evaluationData[evaluationQuestionNumber].option[1] }}
          </div>
          <div
            :class="{
              'px-4 py-2 md:px-6 md:py-4 brown-plank font-neucha text-white text-base md:text-xl font-semibold hover:shadow-2xl hover:shadow-black/50 rounded-full cursor-pointer': true,
              'border-4 border-yellow-400': selected == 3
            }"
            @click="() => selectAnswer(3)"
          >
            C.  {{ evaluationData[evaluationQuestionNumber].option[2] }}
          </div>
          <div
            :class="{
              'px-4 py-2 md:px-6 md:py-4 brown-plank font-neucha text-white text-base md:text-xl font-semibold hover:shadow-2xl hover:shadow-black/50 rounded-full cursor-pointer': true,
              'border-4 border-yellow-400': selected == 4
            }"
            @click="() => selectAnswer(4)"
          >
            D.  {{ evaluationData[evaluationQuestionNumber].option[3] }}
          </div>
          <div
            :class="{
              'px-4 py-2 md:px-6 md:py-4 brown-plank font-neucha text-white text-base md:text-xl font-semibold hover:shadow-2xl hover:shadow-black/50 rounded-full cursor-pointer': true,
              'border-4 border-yellow-400': selected == 5
            }"
            @click="() => selectAnswer(5)"
          >
            E.  {{ evaluationData[evaluationQuestionNumber].option[4] }}
          </div>
        </div>
        <div class="self-end flex gap-6 mt-4">
          <TheButton
          v-if="evaluationQuestionNumber != 0"
            text="Back"
            buttonColor="button-red"
            @click="prevQuestion"
          />
          <TheButton
            text="Next"
            buttonColor="button-red"
            @click="nextQuestion"
          />
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
