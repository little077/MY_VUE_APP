<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="title">王者改名
            <span> <svg t="1677229352546" class="icon" viewBox="0 0 1118 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2907" width="20" height="20">
                <path
                  d="M821.248 186.368q40.96-34.816 92.672-43.008t96.768 5.632 75.776 48.64 30.72 86.016l0 385.024q0 43.008-12.8 79.36t-36.864 60.416-58.368 32.768-77.312-3.584q-28.672-8.192-52.224-22.016t-45.056-28.16-43.008-26.624-46.08-16.384l-372.736 0q-24.576 0-46.592 11.776t-43.52 27.136-45.056 30.72-51.2 23.552q-43.008 12.288-77.312 3.584t-58.88-33.28-37.376-61.44-12.8-79.872l0-382.976q6.144-50.176 37.888-84.992t73.728-49.152 88.576-6.144 82.432 43.008q15.36 15.36 44.032 38.912t65.024 46.08 79.36 38.4 88.064 15.872q44.032 0 84.48-16.384t74.24-38.912 59.904-46.08 43.52-37.888zM232.448 651.264q19.456 0 36.352-7.168t29.696-19.456 19.968-29.184 7.168-36.352q0-38.912-27.136-66.048t-66.048-27.136q-19.456 0-36.352 7.168t-29.696 19.968-19.968 29.696-7.168 36.352q0 38.912 27.136 65.536t66.048 26.624zM977.92 512l-46.08 0 0-46.08-93.184 0 0 46.08-47.104 0 0 93.184 47.104 0 0 46.08 93.184 0 0-46.08 46.08 0 0-93.184z"
                  p-id="2908"></path>
              </svg></span>
          </span>
          <el-popover
    placement="top-start"
    title="为神马只能改五字"
    :width="200"
    trigger="hover"
    content="因为这不是我做的，另外就是搞明白原理了都一样的"
  >
    <template #reference>
      <el-button class="m-2">我有疑问?</el-button>
    </template>
  </el-popover>
        </div>
      </template>
      <div><Button :link="{ link: 'http://smwan.cn/gm/', text: '立即跳转' }"></Button></div>
    </el-card>
    <div>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="如果您对王者重复名原理感兴趣？" name="1">
            <div>
              首先，您需要了解一点点的计算机的知识
            </div>
            <div>
              其实就了解：Unicode就好了，Unicode
              是一种字符集标准，用于对来自世界上不同语言、文字系统和符号进行编号和字符定义。通过给每个字符分配一个编号，程序员可以创建字符编码，让计算机在同一个文件或程序中存储、处理和传输任何语言组合。

              在 Unicode
              定义之前，在同一数据中混合使用不同的语言是很困难的，而且容易出错。例如，一个字符集存储的是日文字符，而另一个字符集存储的是阿拉伯字母。如果没有明确标明数据的哪些部分属于哪个字符集，其他程序和计算机就会错误地显示文本，或者在处理过程中损坏文本。如果你曾经见过像
              (“”) 被替换为胡言乱语 Ã‚Â£，那么你就已经看到过这个被称为 Mojibake 的问题。

              网络上最常见的 Unicode 字符编码是UTF-8。还存在一些其他编码，如 UTF-16 或过时的 UCS-2，但推荐使用 UTF-8。<span class="mdnclass"
                @click="link('https://developer.mozilla.org/zh-CN/docs/Glossary/Unicode')">（来自mdn）</span>
            </div>
            <div>
              <div>说人话就是：世界上有很多语言，计算机对全世界所有的语言做了万国码以此记录所有语言对应的编码，也就是对语言进行一对一的收录确定，以便于计算机能识别。</div>
              <div>每个字符都对应着unicode里的编码，且是唯一的，重复名就是找到看不见的字符对应的unicode，就这样用就可以了</div>
              <div>如果您想知道他们是如何转译的，请点击<span :style="{ color: 'blue', cursor: 'pointer' }"
                  @click="link('http://www.jsons.cn/unicode', 'http://www.tamasoft.co.jp/en/general-info/unicode.html')">此处</span>
              </div>
              <div>请按照如下进行理解</div>
              <div class="demo-image__preview">
                <el-image style="width: 100px; height: 100px" :src="unicodeImg" :zoom-rate="1.2"
                   :preview-src-list="[tranUnicode,unicodeImg,]"
                   fit="cover" />
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import { onMounted, ref, onUpdated ,reactive} from 'vue';
import type { Ref } from 'vue';
import unicodeImg from "@/assets/img/unicode.png";
import tranUnicode from "@/assets/img/tranUnicode.png"
const InstRig: Ref<HTMLElement | null> = ref(null);

const activeNames = ref([''])
const handleChange = (val: string[]) => {
}

const link = (str: string, str1?: string) => {
  window.open(str, "name")
  window.open(str1, "name2")
}



</script>

<style scoped lang="less">
.title {
  display: flex;
  justify-content: center;

  >span {
    padding-left: 10px;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.item {
  margin-bottom: 18px;
}

.box-card {
  width: 320px;
}

.mdnclass {
  cursor: pointer;
  color: blue
}

.demo-image__error .image-slot {
  font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}

.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>