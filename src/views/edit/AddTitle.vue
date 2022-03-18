<template>
  <v-md-editor
    v-model="text"
    height="100%"
    @save="saveText" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useMd} from '@/stores/md'
import { ElMessage } from 'element-plus';
      const md=useMd()
      const text=ref<any>()
      const saveText=()=>{
        console.log(text.value)
        md.setText(text.value)
        ElMessage.success("保存成功")
      }

</script>