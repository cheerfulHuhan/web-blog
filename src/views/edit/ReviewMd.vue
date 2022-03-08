<template>
  <v-md-preview :text="text" style="height: 100%;width: 100%;" />
</template>

<script lang="ts" setup>
import {useMd} from '@/stores/md'
import { onMounted, ref } from 'vue';
const md=useMd()
const text=ref<any>()
onMounted(()=>{
  text.value=md.text
})
</script>