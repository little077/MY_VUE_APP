import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    vue(),
    Components({
      dirs:['src/components', 'src/Page'],
      resolvers: [AntDesignVueResolver(), ElementPlusResolver()],
      dts: true
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'pinia', 'vue-router'],
      eslintrc: {
        // enabled: true, // 默认 false, true 启用, 改动 imports 后只需生成一次
        // filepath: './.eslintrc-auto-import.json', // 生成 json 文件
        globalsPropValue: true
      }
    })
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "router":path.resolve(__dirname,"./src/router")
    },
    
  },
  build:{
    rollupOptions:{
      output:{
        
      }
    },
    
    
  },
  
  
  
})
