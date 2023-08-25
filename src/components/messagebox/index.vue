<script lang="ts" setup>
import moment from "moment"
defineProps<{
    dataList: Array<any>,
    svg: Array<any>
}>()
</script>
<template>
    <section>
        <div class="message-box">
            <div class="wrap" v-for="item in dataList" :key="item.name">
                <div class="wrap-left-img">
                    <div v-html="svg[item.type].value"></div>
                </div>
                <div class="wrap-center">
                    <div class="wrap-center-top">
                        <span>{{ item.name }}</span>
                        <span>{{ moment(item.time).format("YYYY-MM-DD HH:mm:ss") }}</span>
                    </div>
                    <div class="wrap_center-bottom">
                        <span>{{ item.message }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.wrap {
    display: flex;
}

.message-box {
    padding: 0 16px;
    margin-top: 18px;
}

.wrap-center {
    margin-left: 16px;
}

.wrap+.wrap {
    margin-top: 25px;
}

.wrap-center-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:nth-of-type(1) {
        display: inline-block;
        font-size: 15px;
        text-transform: capitalize;
        font-weight: bold;
        color: #333333;
    }

    span:nth-of-type(2) {
        display: inline-block;
        font-size: 13px;
        color: #BBBBBB;
    }
}

.wrap_center-bottom {
    font-size: 13px;
    color: #999999;
    margin-top: 6px;
}
</style>