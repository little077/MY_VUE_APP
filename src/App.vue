<script setup lang="ts">
import Header from './components/Header.vue';
import {onMounted} from "vue"

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
    <div class="content">
      <RouterView/>
    </div>
    </el-container>
  </div>
</template>

<style scoped lang="less" >
.common-layout{
  width: 100%;
  height: 100%;

  >.el-container.is-vertical{
    width: 100%;
    height: 100%;
  
  }
}
.el-header{
  // background-color: #fff;
  position: fixed;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  z-index: 1;
}
.content{
  padding-top: 60px;
  height: calc(100vh - 60px);
  width: 100%;
}
.header{
  background-color: #fff;
}
</style>
