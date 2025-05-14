<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import Ivory from '@/assets/mascot/ivory.png';
import TheBestImage from '@/assets/decorative/theBest.png';
import closingAudio from '@/assets/audio/closing.m4a'
import AudioPlayer from '@/components/AudioPlayer.vue';
</script>

<template>
  <ScreenBackground sky="6" color="cream" ground="7">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="flex justify-center gap-4">
        <div class="flex flex-col items-center py-8 pl-12 gap-6">
          <div class="mt-8 text-center font-knewafe text-gray-900 text-5xl">
            THANK YOUUUUU
          </div>
          <div
            class="
              px-12 py-8 bg-slate-400/90 font-kalam text-2xl text-center
              border-2 border-orange-900 border-dashed rounded-4xl
            "
          >
            See you in another physics Adventure
          </div>
          <img
            class="self-start w-60"
            :src="TheBestImage"
            alt="experiment tools image"
          >
        </div>
        <div class="absolute -bottom-5 right-0 flex flex-col items-end">
          <AudioPlayer class="" :audioPath="closingAudio" />
          <img class="w-46" :src="Ivory" alt="Mascot named Ivory">
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
