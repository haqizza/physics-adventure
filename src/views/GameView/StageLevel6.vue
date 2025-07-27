<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import page9Audio from '@/assets/audio/page-9.m4a';
import router from '@/router';
import LiteYoutubeEmbed from 'vue-lite-youtube-embed'
import { onMounted, ref } from 'vue';

const toLevel7 = () => {
  router.push({name: 'level-7'})
}

const videoIframe = ref()


onMounted(() => {
  videoIframe.value.warmConnections()
})

const isNextButtonHidden = ref(true)

setTimeout(() => {
  videoIframe.value.addIframe()
  videoIframe.value.playVideo()
}, 6000)

setTimeout(() => {
  isNextButtonHidden.value = false
}, 255000)

onMounted(() => {
  document.addEventListener('keyup', waitTimeSkip)
})

const waitTimeSkip = (event:KeyboardEvent) => {
  if (event.key == 'ArrowRight') {
    isNextButtonHidden.value = false
  }
}
</script>

<template>
  <ScreenBackground sky="3" color="dark" ground="3">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="py-4 px-12 flex flex-col md:grid md:grid-cols-4">
        <div id="title" class="col-span-3 flex flex-col items-center gap-8">
          <div class="mt-2 font-knewafe text-white text-shadow-lg text-3xl md:text-5xl">
            Ayo cari tahu bagaimana<br>konsep fisika yang tepat!!
          </div>
          <LiteYoutubeEmbed
            ref="videoIframe"
            playerClass="w-screen md:w-full"
            iframeClass="w-screen md:w-full h-52 md:h-100"
            wrapperClass="w-screen md:w-full h-52 md:h-100"
            id="d2z6pzsELcw"
            title="Penjelasan Kisi Difraksi"
            :cookie="true"
          />
        </div>
        <div class="flex flex-col">
          <TheButton
            :class="{'hidden mt-4': isNextButtonHidden}"
            text="NEXT LEVEL"
            buttonColor="button-red"
            @click="toLevel7"
          />
          <AudioPlayer class="mt-10 md:mt-26" :audioPath="page9Audio" />
          <img class="w-32 md:w-64" :src="Ivory" alt="Mascot named Ivory">
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
