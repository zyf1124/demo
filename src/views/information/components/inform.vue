<script lang="ts" setup>
import { ref } from "vue"
import messagebox from "@/components/messagebox/index.vue"
import { dataList, svg } from "./inform.ts";
import img from "@/assets/1.png"
const active_ = ref(0);

</script>
<template>
    <section>
        <van-tabs v-model:active="active_" color="#FFF" title-active-color="#488AFF" title-inactive-color="#BBBBBB">
            <van-tab title="全部">
                <messagebox :dataList="dataList" :svg="svg" />
            </van-tab>
            <van-tab title="档案">
                <van-empty :image="img" image-size="80" description="暂无数据" />
            </van-tab>
            <van-tab title="拜访">
                <van-empty :image="img" image-size="80" description="暂无数据" />
            </van-tab>
            <van-tab title="活动">
                <van-empty :image="img" image-size="80" description="暂无数据" />
            </van-tab>
            <van-tab title="工作报告">
                <van-empty :image="img" image-size="80" description="暂无数据" />
            </van-tab>
            <van-tab title="审批流程">
                <van-empty :image="img" image-size="80" description="暂无数据" />
            </van-tab>
        </van-tabs>
    </section>
</template>
<style scoped lang="scss"></style>