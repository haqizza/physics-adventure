<script setup lang="ts">
import ScreenBackground from '@/components/ScreenBackground.vue';
import TheButton from '@/components/TheButton.vue';
import router from '@/router';

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <ScreenBackground sky="6" color="cream" ground="7">
    <div
      id="ContentWrapper"
      class="absolute h-screen w-full z-100 overflow-hidden"
    >
      <div class="flex justify-center gap-4">
        <div class="flex flex-col items-center py-8 md:pl-12 gap-6">
          <div class="mt-8 text-center font-knewafe text-gray-900 text-7xl">
            404
          </div>
          <div
            class="
              px-12 py-8 bg-slate-400/90 font-kalam text-2xl text-center
              border-2 border-orange-900 border-dashed rounded-4xl
            "
          >
            <p class="mb-4">Seems you are lost</p>
            <TheButton
              text="GO HOME"
              @click="goHome"
            />
          </div>
        </div>
      </div>
    </div>
  </ScreenBackground>
</template>
