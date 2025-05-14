<script setup lang="ts">

interface Props {
  label?: string,
  placeholder?: string
  inputClass?: string,
  labelClass?: string,
  rows?: number
}

interface Emits {
  updateText: [updated: boolean]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const model = defineModel<string>()

</script>

<template>
  <div class="min-w-3xs w-full flex">
    <label
      :for="`${props.label?.toLowerCase()}Text`"
      :class="`px-2 py-2 md:px-5 md:py-3 font-cookie text-3xl bg-yellow-200 rounded-l-xl ${labelClass}`"
    >
      {{ props.label }}
    </label>
    <textarea
      type="text"
      :id="`${props.label?.toLowerCase()}Text`"
      :class="`px-2 py-2 md:px-5 md:py-3 text-2xl font-[500] bg-white rounded-r-xl outline-none ${inputClass}`"
      v-model="model"
      :rows="rows"
      :placeholder="props.placeholder"
      @change="() => emit('updateText', true)"
    >
    </textarea>
  </div>
</template>
