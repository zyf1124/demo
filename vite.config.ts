import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html"
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postcsspxtoviewport from 'postcss-px-to-viewport-8-plugin'
const pathResolve = (dir) => resolve(__dirname, dir);
// https://vitejs.dev/config/
export default (({ mode }: any) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_NODE_TITLE || "CRM移动端"
          }
        }
      }),
      Components({
        resolvers: [VantResolver()],
      }),
    ],

    resolve: {
      // 配置 @ 指向 src目录
      alias: {
        '@': pathResolve("./src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData:"@import '@/assets/scss/global.scss';"
        }
      },
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: [], // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
            exclude: [],
            landscape: false // 是否处理横屏情况
          })
        ]
      }
    },
    server: {
      port: 8080,
      host: '0.0.0.0',
      proxy: {
        [env.VITE_PUBLIC_PATH]: {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_PUBLIC_PATH}`), '')
        }
      }
    }

  })
})

