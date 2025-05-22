<script setup lang="ts">
import CorrectAudio from '@/assets/audio/page-9b-question-true.m4a'
import Level5QuestionComponent from '@/components/Level5QuestionComponent.vue'
import { useStudentAnswerStore } from '@/stores/studentAnswer';
import { storeToRefs } from 'pinia';

const studentAnswer = useStudentAnswerStore()
const { table_q_2 } = storeToRefs(studentAnswer)

const handleAnswer = (answerValue: string) => {
  table_q_2.value = answerValue
}
</script>

<template>
  <Level5QuestionComponent
    nextPage="level-5c"
    prevPage="level-5b"
    question="Bagaimana nilai perbandingan antara jarak pola difraksi yang terbentuk dengan jarak kisi ke layar untuk setiap percobaan?"
    title="Pertanyaan 2"
    :correctAnswer="['relatif konstan', 'hampir sama', 'mendekati']"
    :correctAudio=CorrectAudio
    @answerFinished="handleAnswer"
  />
</template>
