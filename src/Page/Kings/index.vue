<template>
  <div >
    <el-container>
      <el-aside width="200px" class="left">
        <div>王者专区</div>
        <div @click="nav('/king/changename', 1)" :class="{ active: activeUtils === 1 }">王者改名</div>
        <div @click="nav('/king/changeplace', 2)" :class="{ active: activeUtils === 2 }">王者改战区</div>
      </el-aside>
      <el-main class="right"  @scroll="changeScroll($event)">
        <RouterView > </RouterView>
      </el-main>
    </el-container>
    
  </div>
</template>

<script setup lang="ts">
import { useRouter ,useRoute} from "vue-router";
import { ref, onMounted, onUpdated ,watch} from "vue";
import { useUtilsStore } from '@/Store/utils';
import { storeToRefs } from 'pinia'

import type {Ref} from "vue";

const router = useRouter();
const UtilsStore = useUtilsStore();



const InstRig :Ref<HTMLElement |null> = ref(null);

const { activeUtils, } = storeToRefs(UtilsStore)

const nav = (str: string, num: number) => {
  router.push(str)
  UtilsStore.changeActiveUtils(num)
  // UtilsStore.$patch({
  //   activeUtils:num
  // })
}


const changeScroll = (e :Element)=>{
  // console.log((InstRig.value?.scroll))
}



</script>

<style scoped lang="less">
div {
  width: 100%;
  height: 100%;

  >.el-container {
    height: 100%;
  }
}

.left {
  text-align: center;
  overflow-y: scroll;
  height: calc(100vh - 60px);
  position: fixed;
  background: linear-gradient(135deg,hsl(170deg,80%,70%),hsl(190deg,80%,70%),hsl(250deg,80%,70%),hsl(320deg,80%,70%));
  background-size: 200% 200%;

  >div {
    height: 20px;
    padding-top: 20px;
    cursor: pointer;
  }
}

.active {
  color: #42B883 !important;
}
.right{
  overflow: visible;
  padding-left: 215px;
}

</style>