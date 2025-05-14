<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import page1Audio from '@/assets/audio/page-1.m4a';
import router from '@/router';

const toLoginPage = () => {
  router.push('/login')
}
</script>


<template>
  <ScreenBackground sky="3" color="dark" ground="1">
    <div id="startNowWrapper" class="absolute h-screen w-full z-100 overflow-hidden">
      <div class="py-8 px-6 md:py-20 md:px-16 flex flex-col md:grid md:grid-cols-3">
        <div id="title" class="md:col-span-2 flex flex-col items-center ">
          <div class="my-1 md:my-2 font-cookie text-yellow-100 text-5xl md:text-8xl font-bold tracking-wider">Let's have a</div>
          <div class="mt-2 md:mt-2 mb-6 font-knewafe text-center md:text-left text-white text-4xl md:text-6xl">PHYSICS ADVENTURE</div>
          <TheButton text="START NOW" buttonColor="button-red" @click="toLoginPage"  />
        </div>
        <div class="flex flex-col items-end">
          <AudioPlayer :audioPath="page1Audio" />
          <img class="w-34 md:w-121" :src="Ivory" alt="Mascot named Ivory">
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
