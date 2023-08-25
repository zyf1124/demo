
<script setup lang="ts">
import { ref, reactive } from 'vue'
import layout_general from "@/components/layout_general/index.vue"
import { function_project, create_project } from "./index.ts"

defineProps<{}>()
const activeTab = ref(0);
const function_project_data = reactive(function_project);
const create_project_data = reactive(create_project);
function clickBtn(child: object): void {
  console.log(child)
}
</script>

<template>
  <header>
    <div class="container">
      <div class="header-img">
        <img src="@/assets/banner.png" alt="" srcset="">
      </div>
    </div>
  </header>
  <section>
    <div class="external">
      <div class="section">
        <van-tabs v-model:active="activeTab">
          <van-tab title="功能项目">
            <layout_general :list="function_project_data" :activeTab="activeTab" @clickChange="clickBtn" />
          </van-tab>
          <van-tab title="创建项目">
            <layout_general :list="create_project_data" :activeTab="activeTab" @clickChange="clickBtn" />
          </van-tab>
        </van-tabs>
      </div>

    </div>

  </section>
</template>
 
<style scoped lang="scss">
header {

  .container {
    background-image: #F6F6F6;

    .header-img {
      padding-top: 44px;
      padding-left: 10px;
      padding-right: 10px;
      background-image: linear-gradient(#488AFF, #FFFFFF);

      img {
        width: 100%;
        height: 153.7px;
      }
    }
  }
}

section {
  background: #F6F6F6;

  .external {
    margin-top: -5px;
    padding-bottom: 79px;
    background: #FFFFFF;
  }
}

::v-deep(.van-tab) {
  width: 64px;
  height: 22px;
  font-size: 16px;
  font-weight: bold;
  line-height: normal;
  color: #CCCCCC;
}


::v-deep(.van-tab--active) {
  color: #333333;
}

::v-deep(.van-tabs__line) {
  bottom: 35px;
  width: 72px;
  height: 10px;
  background: linear-gradient(0deg, #488AFF 0%, rgba(72, 138, 255, 0.00) 100%);
}

::v-deep(.van-tabs--line .van-tabs__wrap) {
  height: 66px;
  padding-top: 22px;
  box-sizing: border-box;
  background: #F6F6F6;
}

::v-deep(.van-tabs__nav) {
  background: #F6F6F6;
}

::v-deep(.van-tabs__content) {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: #FFFFFF;
}

svg {
  width: 28px;
  height: 28px;
}

::v-deep(.van-tabs--line .van-tabs__wrap) {
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
