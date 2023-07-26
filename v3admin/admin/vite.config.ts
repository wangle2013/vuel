import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import { loadEnv } from 'vite';
import {createStyleImportPlugin,ElementPlusResolve} from "vite-plugin-style-import";

import path from 'path'   // 需安装此模块

// 解决message和notification引入不生效问题

// 路径
const pathSrc = path.resolve(__dirname,'src')



// https://vitejs.dev/config/

export default({ command, mode }) => {
 
  return defineConfig({

  plugins: [
    vue(),
    
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等

      imports: ["vue"],
      resolvers: [
        // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon",
        }),
        ElementPlusResolver(),
      ],
      dirs:['./src/utils','./src/api'],
      dts: path.resolve(pathSrc, "auto-imports.d.ts"),
      vueTemplate:true
    }),
    Components({
      resolvers: [
        
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        // Auto register Element Plus components
        ElementPlusResolver()
      ],
      dts: path.resolve(pathSrc, "components.d.ts"),

    }),
    //开启gzip压缩
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    //解决message和notification引入不生效问题
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
    }),

    // 图标
    Icons({
      autoInstall: true,
    }),

  ],
  // 全局 css 注册
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "src/assets/style/scss/components.scss";`
      }
    }
  },
  server:{
    host: '127.0.0.1',
    //port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),
    port: 3000,
    strictPort: true, // 端口被占用直接退出
    https: false,
    open: false,// 在开发服务器启动时自动在浏览器中打开应用程序
    proxy: {
        // 字符串简写写法
        '^/api': {
            // target: mode==='development'?loadEnv(mode, process.cwd()).VITE_APP_DEV_URL:loadEnv(mode, process.cwd()).VITE_APP_PROD_URL,
            target:"https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    },
    hmr:{
        overlay: false // 屏蔽服务器报错
    }
},
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  build: {
    // 浏览器兼容性  “esnext | modules”
    target: "modules",
    outDir: "./dist",
    // 构建后是否生成 sourcemap 文件
    sourcemap: false,
    // 块大小警告大小限制(kb)
    chunkSizeWarningLimit: 1000,
    /** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
    minify: "terser",
    /** 在打包代码时移除 console.log、debugger 和 注释 */
    terserOptions: {
      //打包后移除console和注释
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ["console.log"],
      },
      format: {
        /** 删除注释 */
        comments: false,
      },
    },

    /** 打包后静态资源目录 */
    assetsDir: "static",
    rollupOptions: {
      output: {
        // 分解大块js,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: "static/js/[name].[hash].js",
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: "static/js/[name].[hash].js",
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: "static/[ext]/[name].[hash].[ext]",
      },
    },
  },
  // optimizeDeps: {
  //   include: [
  //     "vue",
  //     "element-plus/es",
  //     "element-plus/es/components/form/style/index",
  //     "element-plus/es/components/radio-group/style/index",
  //     "element-plus/es/components/radio/style/index",
  //     "element-plus/es/components/checkbox/style/index",
  //     "element-plus/es/components/checkbox-group/style/index",
  //     "element-plus/es/components/switch/style/index",
  //     "element-plus/es/components/time-picker/style/index",
  //     "element-plus/es/components/date-picker/style/index",
  //     "element-plus/es/components/col/style/index",
  //     "element-plus/es/components/form-item/style/index",
  //     "element-plus/es/components/alert/style/index",
  //     "element-plus/es/components/breadcrumb/style/index",
  //     "element-plus/es/components/select/style/index",
  //     "element-plus/es/components/input/style/index",
  //     "element-plus/es/components/breadcrumb-item/style/index",
  //     "element-plus/es/components/tag/style/index",
  //     "element-plus/es/components/pagination/style/index",
  //     "element-plus/es/components/table/style/index",
  //     "element-plus/es/components/table-column/style/index",
  //     "element-plus/es/components/card/style/index",
  //     "element-plus/es/components/row/style/index",
  //     "element-plus/es/components/dialog/style/index",
  //     "element-plus/es/components/button/style/index",
  //     "element-plus/es/components/menu/style/index",
  //     "element-plus/es/components/sub-menu/style/index",
  //     "element-plus/es/components/menu-item/style/index",
  //     "element-plus/es/components/option/style/index",
  //     "element-plus/es/components/empty/style/index",
  //     "@element-plus/icons-vue",
  //     "element-plus/es/components/upload/style/index",
  //     "pinia",
  //     "axios",
  //     "vue-router",
  //     "@vueuse/core",
  //   ],
  // },
})
}
