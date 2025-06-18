<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';
import IconPlay from '@/components/icons/IconPlay.vue';
import IconPause from '@/components/icons/IconPause.vue';
import IconReplay from '@/components/icons/IconReplay.vue';

interface Props {
  audioPath: string
}

interface Emits {
  updateTime: [time: number]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

const audioRef = useTemplateRef<HTMLAudioElement>('audio')
const currentTime = ref(0)
const duration = ref(0)
const isPlaying = ref(false)

onMounted(() => {
  audioRef.value!.addEventListener("timeupdate", updateTime)
  audioRef.value!.addEventListener("loadedmetadata", () => {
    duration.value = audioRef.value!.duration
  })
  isPlaying.value = true
})

const togglePlay = () => {
  if (isPlaying.value) {
    audioRef.value!.pause();
  } else {
    audioRef.value!.play();
  }
  isPlaying.value = !isPlaying.value;
};


const emit = defineEmits<Emits>()



const updateTime = () => {
  currentTime.value = audioRef.value!.currentTime;
  if(currentTime.value >= duration.value) {
    isPlaying.value = false
  }

  emit('updateTime', currentTime.value)
};


// const seek = () => {
//   audioRef.value!.currentTime = currentTime.value;
// };

const replay = () => {
  audioRef.value!.currentTime = 0;
};

onMounted(() => {
  document.addEventListener('keyup', keyupHandler)
})

const keyupHandler = (event:KeyboardEvent) => {
  if (event.ctrlKey && event.key == 'ArrowRight') {
    skipAudio()
  }
}

const skipAudio = () => {
  audioRef.value!.currentTime = duration.value - 1
}
</script>

<template>
  <div>
    <audio ref="audio" :src="props.audioPath" autoplay controls hidden></audio>
    <div id="audioController" class="flex gap-4 w-fit py-2 px-4 bg-white rounded-full">
      <IconPause v-if="isPlaying" class="w-8 fill-blue-800 cursor-pointer" @click="togglePlay" />
      <IconPlay v-else class="w-8 fill-blue-800 cursor-pointer" @click="togglePlay" />

      <!-- <input type="range" v-model="currentTime" min="0" :max="duration" @input="seek"> -->
      <!-- <p>Current Time: {{ currentTime }}</p> -->
      <!-- <p>Duration: {{ duration }}</p> -->
      <IconReplay class="w-8 fill-blue-800 cursor-pointer" @click="replay" />
    </div>
  </div>
</template>
