<script setup lang="ts">

interface Props {
  text: string,
  buttonColor?: string,
  bothClass?: string
}

const props = defineProps<Props>()

</script>

<template>
  <div class="flex justify-center ">
    <div
      :class="
        `w-fit px-5 py-3
        font-knewafe text-xl md:text-2xl text-[#f2e6ab] tracking-widest
        bg-[#f2e6ab] rounded-full
        border-3 border-black ${bothClass}`
      "
    >
      {{ props.text }}
    </div>
    <div
      id="startButton"
      :class="
        `absolute w-fit px-5 py-3
        font-knewafe text-xl md:text-2xl text-white tracking-widest rounded-full
        -translate-y-2.5 -translate-x-1.5
        hover:translate-none hover:none duration-300
        cursor-pointer ${props.buttonColor || 'button-red'} ${bothClass}`
      "

    >
      {{ props.text }}
    </div>
  </div>
</template>
