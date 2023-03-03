<template>
   <div class="box">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="coderwhy" name="first">
        
      </el-tab-pane>
      <el-tab-pane label="剪辑软件" name="second">Config</el-tab-pane>
    </el-tabs>
   </div>
  </template>
  <script lang="ts" setup>
  import type { TabsPaneContext } from 'element-plus'
  
  const activeName = ref('first')
  
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }
  </script>
  <style>
  .box{
   padding: 24px;
  }
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  </style>