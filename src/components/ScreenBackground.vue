<script setup lang="ts">
import { ref } from 'vue';
import SkyImage1 from '@/assets/background/sky1.png'
import SkyImage2 from '@/assets/background/sky2.png'
import SkyImage3 from '@/assets/background/sky3.png'
import SkyImage4 from '@/assets/background/sky4.png'
import SkyImage5 from '@/assets/background/sky5.png'
import SkyImage6 from '@/assets/background/sky6.png'
import DesertImage1 from '@/assets/background/desert1.png';
import DesertImage2 from '@/assets/background/desert2.png';
import DesertImage3 from '@/assets/background/desert3.png';
import DesertImage4 from '@/assets/background/desert4.png';
import ForestImage5 from '@/assets/background/forest1.png';
import ForestImage6 from '@/assets/background/forest2.png';
import ForestImage7 from '@/assets/background/forest3.png';

interface Props {
  sky: string,
  color: string
  ground: string
}

interface BackgroundData { [key: string]: string }

const props = defineProps<Props>()

const skyClass: BackgroundData = {
  dark: 'dark-sky',
  red : 'red-sky',
  light : 'light-sky',
  cream : 'cream-sky'
}

const skyImage: BackgroundData = {
  sky1: SkyImage1,
  sky2: SkyImage2,
  sky3: SkyImage3,
  sky4: SkyImage4,
  sky5: SkyImage5,
  sky6: SkyImage6
}

const groundImage: BackgroundData = {
  ground1: DesertImage1,
  ground2: DesertImage2,
  ground3: DesertImage3,
  ground4: DesertImage4,
  ground5: ForestImage5,
  ground6: ForestImage6,
  ground7: ForestImage7
}


const skyBg = ref('')
const groundBg = ref('')
const skyColor = ref('')

skyBg.value = skyImage[`sky${props.sky}`]
groundBg.value = groundImage[`ground${props.ground}`]
skyColor.value = skyClass[props.color]
</script>

<template>
  <div :class="`relative h-screen w-full ${skyColor}`">
    <img class="absolute top-0 z-1" :src="skyBg" alt="sky">
    <img class="absolute bottom-0 z-2" :src="groundBg" alt="ground">
    <slot />
  </div>
</template>

<style scoped>
.dark-sky { background-color: #2c5859}
.red-sky { background-color: #d04b27}
.light-sky { background-color: #d1efd7}
.cream-sky { background-color: #fffdcf}
</style>
