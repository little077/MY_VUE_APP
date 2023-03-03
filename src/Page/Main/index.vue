<template>
    <el-container>
        <el-main class="main">
            <div class="content">
                <div class="text">白嫖式</div>
                <div>我们只会<span class="free">白嫖</span></div>
                <div class="normal">提供一些简单的、可使用的、需求</div>

            </div>
            <div class="text">
                <div>
                    <div>
                        <span>🤝 参与共建</span>
                    </div>
                    <Code lineNumber :code="['git clone git@github.com:alibaba/hooks.git', 'cd hooks', 'pnpm run init', 'pnpm start']" />
                </div>
            </div>
            <div class="after">
                <div> 打开浏览器访问 <span>http://localhost:5173/</span><span><svg t="1677491194061" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7967" width="15" height="15"><path d="M911.6 651.6l0 209.2c0 36-30.4 66.2-66.2 66.2l-699.6 1.2c-35.8 0-65-29.2-65-65.2l1.2-699.6c0-35.8 30.4-66.2 66.2-66.2l387 0L535.2 20.2 148.2 20.2c-81.8 0-143 82.8-143 156.8l0 686c0 77.6 63 140.8 140.8 140.8l686 0c82 0 156.6-68.2 156.6-143L988.6 651.6 911.6 651.6 911.6 651.6zM730.2 60.8l288.6 289.2L730.2 639l0-165.2c0 0-286.4-31.8-453.6 206.6 0 0 52.6-454.4 453.6-454.4L730.2 60.8 730.2 60.8z" fill="#4569D4" p-id="7968"></path></svg></span></div>
                <div>我们欢迎所有人参与共建，<span>请参考README.md</span></div>
                <div>感谢所有贡献者：</div>
            </div>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.after {
    margin: 0 auto;
    color: #454D64;
    max-width: 960px;
    >div:nth-child(2){
        >span:hover {
            text-decoration: underline;
            cursor: pointer;
        }
        >span{
            color: #4569D4;
        }
    }
    >div{
        margin: 16px 0;
        display: flex;
        align-items: center;
    }
    >div:nth-child(1){
        >span:nth-child(2){
            padding-left: 20px;
            width: 15px;
            height: 15px;
            
        }
        >span:nth-child(1){
            color: #4569D4;
            cursor: pointer;
        }
        >span:nth-child(1):hover{
             text-decoration: underline;

        }
    }
}

.copy {
    display: none;
    margin: 0;
}

.structure {
    background-color: #f5f6f8;

    >div:nth-child(1) {
        display: flex;
        justify-content: space-between;
    }
}

.text :hover {
    .house {
        display: block;
    }
}

.text {
    margin: 0 auto;

    max-width: 960px;
    padding-top: 100px;

    >div>div:nth-child(1) {
        display: flex;
        align-items: center;
    }

    >span:nth-child(1) {
        font-size: 25px;
        font-weight: 500px;
    }
}

.main {
    width: 100%;
    height: 100%;
    padding: 96px 32px;

    >.content {
        height: 100%;
        margin: 0 auto;
        max-width: 960px;
        text-align: center;
        background-color: #f5f6f8;

        >div {
            padding-top: 20px;
        }

        >div:nth-child(2) {
            font-size: 76px;
        }

        >div:nth-child(3) {
            font-size: 22px;
            color: rgba(60, 60, 60, .7);
        }

        .free {
            font-weight: 900;
        }

        >.text {
            background-image: linear-gradient(to top, #00C6FF, #8AFFD2);
            /* 线性渐变背景，方向向上 */
            -webkit-background-clip: text;
            /* 背景被裁剪成文字的前景色 */
            -webkit-text-fill-color: transparent;
            /* 文字填充颜色变透明 */
            font-size: 76px;

        }
    }
}</style>