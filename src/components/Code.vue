<script setup lang="ts">
import { ref, toRefs } from 'vue'

interface Props {
  code: string[]
  lineNumber?: boolean
  copyable?: boolean
  linePrefix?: string
  background: string
}
const props = withDefaults(defineProps<Props>(), {
  code: () => [''],
  lineNumber: false,
  copyable: true,
  linePrefix: '$',
  background: '#fafafa'
})
const { background } = toRefs(props)

const copied = ref<boolean>(false)
const time = ref()
const copy = async () => {
  const text = props.code.map((line) => `${line}`).join('\n')
  await navigator.clipboard.writeText(text)
  copied.value = true
  clearTimeout(time.value)
  time.value = setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<template>
  <div>
    <pre>{{
      props.code
        .map(
          (line, index) => `${props.lineNumber ? `${index + 1} ` : ''}${props.linePrefix} ${line}`
        )
        .join('\n')
    }}</pre>
    <span @click="copy">{{ copied ? '已复制' : '复制' }}</span>
  </div>
</template>

<style scoped>
div {
  position: relative;
}
pre {
  background-color: v-bind(background);
  padding: 8px 16px;
}
span {
  color: #8c8c8c;
  position: absolute;
  top: 4px;
  right: 10px;
  user-select: none;
}
</style>
