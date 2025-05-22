<script setup lang="ts">
import CorrectAudio from '@/assets/audio/page-9a-question-true.m4a'
import Level5QuestionComponent from '@/components/Level5QuestionComponent.vue'
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
    nextPage="level-5b"
    prevPage="level-5a"
    question="Bagaimana hubungan antara lebar celah dengan jarak pola difraksi yang terbentuk?"
    title="Pertanyaan 1"
    :correctAnswer="['berbanding terbalik']"
    :correctAudio=CorrectAudio
    @answerFinished="handleAnswer"
  />
</template>
