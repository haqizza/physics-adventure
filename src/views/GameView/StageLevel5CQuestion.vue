<script setup lang="ts">
import CorrectAudio from '@/assets/audio/page-9c-question-true.m4a'
import Level5QuestionComponent from '@/components/Level5QuestionComponent.vue';
import { useStudentAnswerStore } from '@/stores/studentAnswer';
import { storeToRefs } from 'pinia';

const studentAnswer = useStudentAnswerStore()
const { table_q_1 } = storeToRefs(studentAnswer)

const handleAnswer = (answerValue: string) => {
  table_q_1.value = answerValue
}
</script>

<template>
  <Level5QuestionComponent
    nextPage="level-6"
    prevPage="level-5c"
    question="Bagaimana hubungan panjang gelombang terhadap nilai perbandingan antara jarak pola difraksi dengan jarak kisi ke layar?"
    title="Pertanyaan 3"
    :correctAnswer="['berbanding lurus', 'sebanding']"
    :correctAudio=CorrectAudio
    @answerFinished="handleAnswer"
  />
</template>
