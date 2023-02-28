<template>
    <div style="background: #ececec; padding: 30px">
        <a-card :bordered="false">
            <p>1、首先，你需要一部手机（iphone）及电脑，安卓自行找模拟器或者第三方多开软件</p>
            <p style="color:aqua" @click="nav" class="link">2、电脑下载爱思助手</p>
            <p>3、连接手机，打开爱思助手“工具箱 - 虚拟定位”</p>
            <p><img src="../../../assets/img/爱思助手1.jpeg
            " /></p>
            <p>4、你可以通过三种方式来修改定位：输入地名并搜索、输入精确的经纬度、在地图上直接点击</p>
            <p>5、选择好虚拟定位后点击“修改虚拟定位”，出现“修改虚拟定位成功”弹窗表示完成。
                注意：在修改虚拟定位时请解锁设备屏幕锁，否则可能修改失败！</p>
            <p>6、修改完毕后如想还原，关机即可</p>
        </a-card>
    </div>
</template>

<script setup lang="ts">
const nav = () => {
    window.open("https://www.i4.cn/")
}
</script>

<style scoped>
img {
    width: 500px;
    height: 500px;
}
.link{
    cursor: pointer;
}
</style>