<script lang="ts" setup>
import { ref } from "vue"
let checked: number = ref("1");
</script>
<template>
    <div class="job">
        <van-radio-group v-model="checked">
            <div class="job_content">
                <div class="job_content_left">
                    <span>学术代表</span>
                    <span>昌平区</span>
                </div>
                <div class="job_content_right">
                    <van-radio name="1" />
                </div>
            </div>
            <div class="job_content">
                <div class="job_content_left">
                    <span>学术代表</span>
                    <span>昌平区</span>
                </div>
                <div class="job_content_right">
                    <van-radio name="2" />
                </div>
            </div>
        </van-radio-group>

    </div>
</template>
<style scoped lang="scss">
.job_content {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 20px;
}

.job_content_left {
    span:nth-of-type(1) {
        font-size: 14px;
        color: #333333;
    }

    span:nth-of-type(2) {
        font-size: 14px;
        color: #999999;
        margin-left: 10px;
    }
}

::v-deep(.van-radio__icon--round .van-icon) {
    border: 1px dashed #D0CFCF;
    border-radius: 10px;
}
</style>