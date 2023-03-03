<template>
    <div class="movies">
        <div class="content">
            <h1> 影视会员在线观看 -请选取设备进行操作</h1>
            <p class="description">本站后续会推出各种前端实用的好工具，杜绝充钱，每款白嫖工具都经过精心选取，帮助所有人提高效率！</p>
            <div class="box">
                <ul>
                    <li>
                        <div class="position">
                            <span class="head"><svg t="1677573801080" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2796" width="45" height="45">
                                    <path
                                        d="M341.333333 106.666667c-29.44 0-53.333333 23.893333-53.333333 53.333333v704c0 29.44 23.893333 53.333333 53.333333 53.333333h341.333334c29.44 0 53.333333-23.893333 53.333333-53.333333V160c0-29.44-23.893333-53.333333-53.333333-53.333333H341.333333z"
                                        fill="#000000" opacity=".3" p-id="2797"></path>
                                    <path
                                        d="M341.333333 106.666667c-29.44 0-53.333333 23.893333-53.333333 53.333333v704c0 29.44 23.893333 53.333333 53.333333 53.333333h341.333334c29.44 0 53.333333-23.893333 53.333333-53.333333V160c0-29.44-23.893333-53.333333-53.333333-53.333333H341.333333zM341.333333 42.666667h341.333334a117.333333 117.333333 0 0 1 117.333333 117.333333v704A117.333333 117.333333 0 0 1 682.666667 981.333333H341.333333a117.333333 117.333333 0 0 1-117.333333-117.333333V160A117.333333 117.333333 0 0 1 341.333333 42.666667z m64 32h213.333334a21.333333 21.333333 0 0 1 21.333333 21.333333v42.666667a21.333333 21.333333 0 0 1-21.333333 21.333333h-213.333334a21.333333 21.333333 0 0 1-21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 1 21.333333-21.333333z"
                                        fill="#000000" p-id="2798"></path>
                                </svg></span>

                        <div>
                            我是ios设备
                        </div>
                        <div class="describe">ios设备可通过苹果应用商店安装第三方软件，即可观看会员视频</div>
                        <a class="bottom" @click="openApple">查看教程</a>
                        </div>
                    </li>
                    <li>
                        <div class="position">
                            <span class="head"><svg t="1677575028030" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5105" width="45" height="45"><path d="M57.6 89.6h915.2c19.2 0 38.4 19.2 38.4 38.4v659.2c0 19.2-19.2 38.4-38.4 38.4H550.4V876.8h211.2c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6H262.4c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6h211.2V825.6H57.6c-19.2 0-38.4-19.2-38.4-38.4V128c0-25.6 12.8-38.4 38.4-38.4zM864 640c-19.2 0-38.4 19.2-38.4 38.4s19.2 38.4 38.4 38.4 38.4-19.2 38.4-38.4c0-25.6-19.2-38.4-38.4-38.4z m70.4-473.6H96v582.4h838.4V166.4z" fill="" p-id="5106"></path></svg></span>

                        <div>
                            我是电脑设备
                        </div>
                        <div class="describe">电脑设备在线观看</div>
                        <a class="bottom" @click="link">我要观看</a>
                        </div>
                    </li>
                    <!-- <li>
                        <div></div>
                    </li> -->
                </ul>
            </div>
        </div>
        <el-dialog
    v-model="dialogVisible"
    title="IOS设备教程"
    width="30%"
    :before-close="handleClose"
  >
    <div>1、打开苹果应用商店，不用越狱，搜索ZJF_ZheerJasmineFood安装</div>
    <div>2、打开软件需要切换模式</div>
    <div class="png">
        <img src="@/assets/img/model.png"/>
        <img  src="@/assets/img/movies.png"/>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">离开</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          我已操作完毕
        </el-button>
      </span>
    </template>
  </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
const dialogVisible = ref(false);
const openApple = ()=>{
    dialogVisible.value = true
}
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const link = ()=>{
   window.open("https://www.dianyinggou.com/")
}
</script>

<style scoped lang="less">
.pbg{
    display: flex;
}
img{
    width:250px;
    height: auto;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.position{
    position: relative;
}
.bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 44px;
    display: block;
    box-sizing: border-box;
    border-top: 1px solid #dcdfe6;
    line-height: 44px;
    color: #409EFF;
}
.bottom:hover{
    background-color: #409EFF;
    color: #FFFFFF;
}
.describe{
    font-size: 14px;
    color: #99a9bf;
    padding: 0 25px;
    line-height: 20px;
    padding-top: 25px;
}
.head {
    padding: 48px 0;
    width: 100%;
    height: 160px;
    display: block;
}

.flex {
    display: flex;
}

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;

}

.box {
    >ul {
        display: flex;
        justify-content: center;

        >li {
            width: 33.3%;
            padding: 0 19px;

            >div {
                height: 430px;
                width: 100%;
                background: #ffffff;
                border: 1px solid #dcdfe6;
                border-radius: 5px;
                box-sizing: border-box;
                text-align: center;
                position: relative;
                transition: all .3s ease-in-out;
                bottom: 0;
                box-sizing: border-box;
            }

            >div:hover {
                bottom: 6px;
                box-shadow: 0 12px 32px 4px #edeff53d, 0 8px 20px #edeff57a;
            }
        }
    }
}

.movies(1) {
    height: calc(100vh - 60px);
}

.content {
    margin: 0 auto;
    max-width: 980px;

    >h1 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 30px;
        color: #303659;
        font-weight: normal;
        margin-top: 40px;
    }

    >.description {
        text-align: center;
        margin-bottom: 40px;
        font-size: 14px;
        font-weight: 400;
        color: #303659;
    }

}</style>