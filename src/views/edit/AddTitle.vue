<!-- <template>
  <Editor :value="value" :plugins="plugins" @change="handleChange" />
</template> -->

<!-- <script lang="ts" setup>
import { Editor, Viewer } from '@bytemd/vue'
import gfm from '@bytemd/plugin-gfm'
import { ref } from 'vue'

const plugins = [
  gfm(),
  // Add more plugins here
]
const value=ref('')


const handleChange=(v:any) =>{
      value.value=v
    }

</script> -->
<template>
  <v-md-editor
    v-model="text"
    height="100%"
    default-fullscreen="true"
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