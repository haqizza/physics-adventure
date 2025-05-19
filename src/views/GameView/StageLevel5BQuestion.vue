<script setup lang="ts">
import CorrectAudio from '@/assets/audio/page-9b-question-true.m4a'
import Level5QuestionComponent from '@/components/Level5QuestionComponent.vue'
</script>

<template>
  <Level5QuestionComponent
    nextPage="level-5c"
    prevPage="level-5b"
    question="Bagaimana nilai perbandingan antara jarak pola difraksi yang terbentuk dengan jarak kisi ke layar untuk setiap percobaan?"
    title="Pertanyaan 2"
    :correctAnswer="['relatif konstan', 'hampir sama', 'mendekati']"
    :correctAudio=CorrectAudio
  />
</template>
