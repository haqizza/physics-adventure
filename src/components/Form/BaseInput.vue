<script setup lang="ts">

interface Props {
  label?: string,
  backgroundColor?: string,
  placeholder?: string
  inputClass?: string,
  labelClass?: string
}

const model = defineModel()

const props = defineProps<Props>()

</script>

<template>
  <div class="flex px-2 w-full">
    <label
      :for="`${props.label?.toLowerCase()}Text`"
      :class="`
        px-2 py-2 md:px-5 md:py-3 font-cookie text-xl md:text-3xl rounded-l-xl
        ${backgroundColor || 'bg-yellow-200'} ${labelClass}
      `"
    >
      {{ props.label }}
    </label>
    <input
      type="text"
      :id="`${props.label?.toLowerCase()}Text`"
      :class="`
        px-2 py-2 md:px-5 md:py-3 w-full text-lg md:text-2xl font-[500] rounded-r-xl outline-none
        ${backgroundColor || 'bg-white'} ${inputClass}
      `"
      v-model="model"
      :placeholder="props.placeholder"
    >
  </div>
</template>
