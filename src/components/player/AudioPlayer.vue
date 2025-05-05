<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';
import IconPlay from '../icons/IconPlay.vue';
import IconPause from '../icons/IconPause.vue';
import IconReplay from '../icons/IconReplay.vue';
interface Props {
  audioPath: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

const audioRef = useTemplateRef<HTMLAudioElement>('audio');
const currentTime = ref(0);
const duration = ref(0);
const isPlaying = ref(false);

onMounted(() => {
  audioRef.value!.addEventListener("timeupdate", updateTime);
  audioRef.value!.addEventListener("loadedmetadata", () => {
    duration.value = audioRef.value!.duration;
  });
});

const togglePlay = () => {
  if (isPlaying.value) {
    audioRef.value!.pause();
  } else {
    audioRef.value!.play();
  }
  isPlaying.value = !isPlaying.value;
};

const updateTime = () => {
  currentTime.value = audioRef.value!.currentTime;
  if(currentTime.value == duration.value) {
    isPlaying.value = false
  }
};


const seek = () => {
  audioRef.value!.currentTime = currentTime.value;
  isPlaying.value = true
};

const replay = () => {
  audioRef.value!.currentTime = 0;
  isPlaying.value = true
};
</script>

<template>
  <div>
    <audio ref="audio" :src="audioPath" autoplay controls hidden></audio>
    <div id="audioController" class="flex gap-4 w-fit py-2 px-4 bg-white rounded-full">
      <IconPause v-if="isPlaying" class="w-8 fill-blue-800 cursor-pointer" @click="togglePlay" />
      <IconPlay v-else class="w-8 fill-blue-800 cursor-pointer" @click="togglePlay" />

      <input type="range" v-model="currentTime" min="0" :max="duration" @input="seek">
      <!-- <p>Current Time: {{ currentTime }}</p>
      <p>Duration: {{ duration }}</p> -->
      <IconReplay class="w-8 fill-blue-800 cursor-pointer" @click="replay" />
    </div>
  </div>
</template>
