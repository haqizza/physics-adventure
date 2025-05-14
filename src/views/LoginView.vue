<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import Page2Audio from '@/assets/audio/page-2-identity.m4a';
import BaseInput from '@/components/Form/BaseInput.vue';
import { useStudentAnswerStore } from '@/stores/studentAnswer';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import TheButton from '@/components/TheButton.vue';
import router from '@/router';

const studentAnswer = useStudentAnswerStore()

const { name, studentClass } = storeToRefs(studentAnswer)

const classText = ref<string>('')

const studentClassConverter = (text: string) => {
  const grade = parseInt(text.split('-')[0])
  if (Number.isNaN(grade)){
    return text
  }

  let result = 'X'

  if (grade == 11){
    result = 'XI'
  }
  else if(grade == 12) {
    result = 'XII'
  }

  return result + '-' + text.split('-')[1]
}

const saveData = () => {
  if(classText.value == '' || name.value == '') {
    alert('Isi nama dan kelas')
    return
  }

  studentClass.value = studentClassConverter(classText.value)

  router.push('/instruction')
}

</script>


<template>
  <ScreenBackground sky="1" color="red" ground="2">
    <div id="ContentWrapper" class="absolute md:h-screen w-full z-100 overflow-hidden">
      <div class="py-8 md:py-20 md:px-16">
        <h1 class="text-center italic text-yellow-100 text-4xl md:text-7xl font-black">
          Let Me Know You
        </h1>
        <div class="flex flex-col md:grid md:grid-cols-5">
          <div class="md:col-span-2 mx-4 md:mx-auto place-self-end order-last md:order-none">
            <AudioPlayer :audioPath="Page2Audio" class="w-full" />
            <img class="w-34 md:w-92 scale-x-[-1]" :src="Ivory" alt="Mascot named Ivory">
          </div>
          <div id="title" class="md:col-span-3 flex flex-col items-start mt-2 md:mt-12">
            <BaseInput class="my-4" label="Nama" v-model="name" placeholder="Asep Nurdin"/>
            <BaseInput class="my-4" label="Kelas" v-model="classText" placeholder="XI-2"/>
            <div class="self-center">
              <TheButton text="LOGIN" buttonColor="dark-sky" @click="saveData" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
