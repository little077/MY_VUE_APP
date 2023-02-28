<template>
    <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel key="1" header="某度下载">
            <p>1、您仍需通过网盘下载第三方工具（群主自费，使用就行了，不要传播）<span style="color:aquamarine;" @click="link">点击下载</span><span>(密码：3ygm)</span></p>
            <p>2、卡号：1N-7a1581b4f163180a<span></span></p>
            <p>3、打开exe文件，电脑一般会报病毒，可以关掉杀毒软件，（如不放心可不使用）</p>
            <p>4、我只是搬运工，不建议账号密码登陆使用，直接外链下载即可</p>
        </a-collapse-panel>

    </a-collapse>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue"


const activeKey = ref(['1']);

watch(activeKey, val => {
    console.log(val);
})
const link = ()=>{
  window.open("https://pan.baidu.com/s/172_FQdFHhbHZ8a4CUMoCjA")
}


</script>
<style lang="less" scoped>
span:nth-child(1){
    padding-left: 20px;
    cursor: pointer;
}
</style>