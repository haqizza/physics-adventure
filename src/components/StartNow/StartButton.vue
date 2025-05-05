<script setup lang="ts">
import router from '@/router';


const toLoginPage = () => {
  router.push('/login')
}

</script>

<template>
  <div class="">
    <div
      class="
        absolute w-fit px-5 py-3 mt-4 mx-2.25
        font-knewafe text-2xl text-[#f2e6ab] tracking-widest
        bg-[#f2e6ab] rounded-full
        border-3 border-black
      "
    >
      START NOW
    </div>
    <div
      id="startButton"
      class="
        absolute w-fit px-5 py-3 mt-2 mx-1.5
        font-knewafe text-2xl text-white tracking-widest
        bg-[#c54122] rounded-full
        hover:translate-y-2.5 hover:translate-x-1.5 duration-300
        cursor-pointer
      "
      @click="toLoginPage"
    >
      START NOW
    </div>
  </div>
</template>
