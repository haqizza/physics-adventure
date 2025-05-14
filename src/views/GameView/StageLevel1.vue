<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import Ivory from '@/assets/mascot/ivory.png';
import AudioPlayer from '@/components/AudioPlayer.vue';
import page4Audio from '@/assets/audio/page-4.m4a';
import router from '@/router';
import LiteYoutubeEmbed from 'vue-lite-youtube-embed'
import { onMounted, ref } from 'vue';

const toLevel2 = () => {
  router.push({name: 'level-2'})
}

const videoIframe = ref()


onMounted(() => {
  videoIframe.value.warmConnections()
})

const isNextButtonHidden = ref(true)

setTimeout(() => {
  videoIframe.value.addIframe()
}, 7000)

setTimeout(() => {
  isNextButtonHidden.value = false
}, 143000)

</script>

<template>
  <ScreenBackground sky="3" color="dark" ground="2">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="py-4 px-12 flex flex-col md:grid md:grid-cols-4">
        <div id="title" class="col-span-3 flex flex-col items-center ">
          <div class="mt-2 self-start font-knewafe text-white text-2xl md:text-5xl">
            Adventures often come with
          </div>
          <div
            class="
              self-start md:self-center mb-2 md:my-2 font-cookie tracking-wider
              text-yellow-100 text-3xl md:text-7xl font-bold
            "
          >
            Challenges
          </div>
          <LiteYoutubeEmbed
            ref="videoIframe"
            playerClass="w-screen md:w-full"
            iframeClass="w-screen md:w-full h-52 md:h-100"
            wrapperClass="w-screen md:w-full h-52 md:h-100"
            id="ShQJjdj7QxA"
            title="Fenomena Difraksi Cahaya"
            :cookie="true"
          />

        </div>
        <div class="flex flex-col">
          <TheButton
            :class="{'hidden': isNextButtonHidden}"
            text="NEXT LEVEL"
            buttonColor="button-red"
            @click="toLevel2"
          />
          <AudioPlayer class="md:mt-26" :audioPath="page4Audio" />
          <img class="w-32 md:w-64" :src="Ivory" alt="Mascot named Ivory">
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
