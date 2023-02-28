<template>
    <div>
        <div id="circle-org"></div>
        <div id="subject-div" class="glass glass-light" style="width: 500px;">
         <span><svg t="1677485768599" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1952" width="25" height="25"><path d="M282.3 416a147.8 147.2 0 1 0 295.6 0 147.8 147.2 0 1 0-295.6 0Z" fill="#FFECB6" p-id="1953"></path><path d="M349.7 636.8l45 44.8-38.6 211.2H163.3s-6.4-179.2 186.4-256zM510.4 636.8l-45 44.8L504 892.8h192.8s6.4-179.2-186.4-256z" fill="#F4BA64" p-id="1954"></path><path d="M430.1 681.6l-33-32.8H463zM430.1 681.6l-32.2 153.6 32.2 57.6 32.1-57.6z" fill="#F7931E" p-id="1955"></path><path d="M404.4 572.8c-88.6 0-160.7-71.8-160.7-160s72.1-160 160.7-160c44.5 0 66.4 14.2 78.1 21.8l2.5 1.6c4.5 2.8 5.8 8.8 3 13.3-2.9 4.5-8.8 5.8-13.3 3l-2.7-1.7c-10.8-7-28.8-18.7-67.6-18.7-78 0-141.4 63.2-141.4 140.8s63.4 140.8 141.4 140.8 141.4-63.2 141.4-140.8c0-44.6-13.8-68.2-34.4-89.8-3.7-3.8-3.5-9.9 0.3-13.6 3.9-3.7 10-3.5 13.6 0.3 20.6 21.6 39.7 49.1 39.7 103.1 0 88.1-72.1 159.9-160.6 159.9zM671.1 896c-5.3 0-9.6-4.3-9.6-9.6 0-141.2-115.3-256-257.1-256-68.4 0-121.2 18-161.5 55.1-3.9 3.6-10 3.4-13.6-0.5-3.6-3.9-3.4-10 0.5-13.6 44-40.5 101.1-60.2 174.6-60.2 152.4 0 276.4 123.5 276.4 275.2-0.1 5.3-4.4 9.6-9.7 9.6zM137.6 896c-5.3 0-9.6-4.3-9.6-9.6 0-74.3 19.3-128.5 62.6-176 3.6-3.9 9.7-4.2 13.6-0.6s4.2 9.6 0.7 13.6c-40.4 44.3-57.6 93-57.6 163.1 0 5.2-4.3 9.5-9.7 9.5z" fill="" p-id="1956"></path><path d="M892.8 250.4c0-67.6-65.5-122.4-146.2-122.4s-146.2 54.8-146.2 122.4c0 57.5 47.4 105.7 111.2 118.9 7.3 18.4 12.9 47.2-9.3 69.1 0 0 51.3-19 72.1-67.8 67.4-10.9 118.4-60.5 118.4-120.2z" fill="#FFDB69" p-id="1957"></path><path d="M896 553.9c0-39-39.6-70.7-88.4-70.7-48.8 0-88.4 31.6-88.4 70.7 0 34.4 30.8 63.1 71.6 69.4 12.5 28.2 43.6 39.1 43.6 39.1-13.4-12.6-10-29.3-5.6-39.9 38.6-7.6 67.2-35.4 67.2-68.6z" fill="#FFECB6" p-id="1958"></path><path d="M667.8 249.6a16.1 16 0 1 0 32.2 0 16.1 16 0 1 0-32.2 0Z" fill="#F7931E" p-id="1959"></path><path d="M735.3 249.6a16.1 16 0 1 0 32.2 0 16.1 16 0 1 0-32.2 0Z" fill="#F7931E" p-id="1960"></path><path d="M802.8 249.6a16.1 16 0 1 0 32.2 0 16.1 16 0 1 0-32.2 0Z" fill="#F7931E" p-id="1961"></path></svg>
        也许，你想要找到更好玩的工具，或者志同道合的同志</span>
        <div>or 你觉得本站做的不够好？</div>
        <div>or 你有更好的学习资料提供？</div>
    <div>那么，我们欢迎您的加入</div>
    <div class="img"><img src="@/assets/img/coder.jpg"/></div>
    </div>
        <div id="circle-blue"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.img{
    height: 169px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
   >img{
    max-width: 100%;
    height: 100%;
    display: block;
   }

}
div:nth-child(1) {
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: linear-gradient(135deg, (#a7cee0) 50%, (#d0dea7));
}

#circle-org {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-top: -230px;
    margin-right: -180px;
    background: linear-gradient(135deg, #ffb566, #ff6677);
}

#subject-div {
    position: relative;
    top:-10%;
    height: 270px;
    border-radius: (19px);
    text-align: center;
    >span{
       display: flex;
       align-items: center;
       justify-content: center;
    }
}

.glass-light {
    background: hsla(0, 0%, 100%, (0.25));
    box-shadow: 0 6px 15px 0 #8e8e8e30;
}

.glass {
    backdrop-filter: blur((8px));
    -webkit-backdrop-filter: blur((8px));
    border: 1px solid #ffffff2e;
    --blur: 6px;
    --color1: #a7cee0;
    --color2: #d0dea7;
    --text-color: rgb(255, 255, 255, calc((0.25)*3));
    --sidebar-width: 250px;
    --highlight-color: orange;
    --support-color: grey;
    --border-radius: 12px;
    user-select: none;
}

#circle-blue {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    margin-top: 225px;
    margin-left: -90px;
    background: linear-gradient(135deg, #de82ca, #259fac);
}</style>