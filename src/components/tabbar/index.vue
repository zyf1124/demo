<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router";
let active = ref(0);
let router = useRouter();
let list = [{
    path: '/',
    name: 'home'
}, {
    path: '/information',
    name: 'information'
}, {
    path: '/meter',
    name: 'meter'
}, {
    path: '/user',
    name: 'user'
}];
function changeTab(index: number) {
    let { path } = list[index];
    router.push({ path })
}
</script>
<template>
    <van-tabbar v-model="active" @change="changeTab">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
        <van-tabbar-item icon="chart-trending-o">仪表盘</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
</template>
<style scoped lang="scss"></style>