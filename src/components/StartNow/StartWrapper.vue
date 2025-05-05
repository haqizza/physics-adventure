<script setup lang="ts">
import ScreenBackground from '../ScreenBackground.vue';
import StartButton from './StartButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '../player/AudioPlayer.vue';
import page1Audio from '@/assets/audio/page-1.m4a';
</script>


<template>
  <ScreenBackground sky="3" color="dark" ground="1">
    <div id="startNowWrapper" class="absolute h-screen w-full z-100 overflow-hidden">
      <div class="py-20 px-16 grid grid-cols-3">
        <div id="title" class="col-span-2 flex flex-col items-center ">
          <div class="my-2 font-cookie text-yellow-100 text-8xl font-bold tracking-wider">Let's have a</div>
          <div class="mt-2 mb-6 font-knewafe text-white text-6xl">PHYSICS ADVENTURE</div>
          <StartButton />
        </div>
        <div>
          <AudioPlayer :audioPath="page1Audio"/>
          <img class="w-121" :src="Ivory" alt="Mascot named Ivory">
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
