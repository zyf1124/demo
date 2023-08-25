<script lang="ts" setup>
import user_content_info from "./components/user_content_info.vue"
import job from "./components/job.vue"
import { ref } from "vue";
let switch_: any = ref(0);
let svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="14" height="14" viewBox="0 0 14 14"><defs><clipPath id="master_svg0_36_259"><rect x="0" y="0" width="14" height="14" rx="0"/></clipPath></defs><g clip-path="url(#master_svg0_36_259)"><g><path d="M11.0842765625,2.80817C12.6951765625,2.80817,14.0009765625,4.114,14.0009765625,5.72483L14.0009765625,7.47483L12.8342765625,7.47483L12.8342765625,5.72483C12.8342765625,4.75834,12.0507765625,3.97483,11.0842765625,3.97483L0.5843095625,3.97483C0.3307705625,3.97461,0.1064045625,3.81065,0.0291903625,3.56915C-0.0480242375,3.32766,0.0395952625,3.06394,0.2459765625,2.91667L4.3281465625,0L5.0048065625,0.949667L2.4031465625,2.80817L11.0831765625,2.80817L11.0842765625,2.80817ZM2.9176465625,10.9748C1.3068165625,10.9748,0.000976771116,9.669,0.000976771116,8.05817L0.000976771116,6.30817L1.1676465625,6.30817L1.1676465625,8.05817C1.1676465625,9.02466,1.9511465625,9.80817,2.9176465625,9.80817L13.4176765625,9.80817C13.6711765625,9.80839,13.8955765625,9.97235,13.9727765625,10.2138C14.0499765625,10.4553,13.9623765625,10.7191,13.7559765625,10.8663L9.6726465625,13.783L8.9959765625,12.8333L11.5976765625,10.9748L2.9164765625,10.9748L2.9176465625,10.9748Z" fill="#488AFF" fill-opacity="1"/></g></g></svg>`;
function switch_btn(name: number) {
    switch_.value = name
}
</script>
<template>
    <section>
        <div class="user">
            <div class="header">
                <div class="userInfo">
                    <div class="portrait"></div>
                    <div class="header_info">
                        <div class="header_svg" v-html="svg" v-if="switch_ == 0"></div>
                        <div class="cut" @click="switch_btn(1)" v-if="switch_ == 0"><span>切换岗位</span></div>
                    </div>
                    <div class="header_kernel">
                        <div class="kernel_top">
                            <span>张虹伦</span>
                            <span>/</span>
                            <span v-if="switch_ == 0">子管理员</span>
                            <span v-if="switch_ == 1">13818629999</span>
                        </div>
                        <div class="kernel_down">
                            <div v-if="switch_ == 0"><span>山西振东制药股份有限公司</span></div>
                            <div class="present_job" v-if="switch_ == 1">
                                <span>当前岗位：</span>
                                <span>子管理员</span>
                                <span>/</span>
                                <span>全国</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- 个人信息、扫码登录、版本号  -->
            <div class="user_content">
                <user_content_info v-if="switch_ == 0"></user_content_info>
                <job v-if="switch_ == 1" />
            </div>
            <!-- 确认按钮 -->
            <div class="user_btn" v-if="switch_ == 1">
                <van-button type="primary" @click="switch_btn(0)" color="#488AFF">确认</van-button>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.user_content {
    width: 311px;
    min-height: 174px;
    height: auto;
    background: #FFFFFF;
    border-radius: 15px;
    margin-top: 75px;
    margin-left: 32px;
}

.present_job {
    font-size: 14px;
    color: #488AFF;

    >span {
        display: inline-block;

    }

    >span:nth-last-of-type(2) {
        padding-left: 5px;
        padding-right: 5px;
    }
}

.user_btn {
    width: 100%;
    padding: 78px 32px 0;
    box-sizing: border-box;

    ::v-deep(.van-button) {
        width: 100%;
    }
}

.header {
    position: relative;
    height: 148px;
    background: url("@/assets/message/2.png");
    background-size: 100% 148px;

}

.header_kernel {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.kernel_down {
    margin-top: 16px;
    color: #BBBBBB;
    font-size: 14px;
}

.kernel_top {
    margin-top: 16px;

    span {
        display: inline-block;
    }

    span:nth-of-type(1) {
        font-size: 18px;
        font-weight: 700;
        color: #333333;
    }

    span:nth-of-type(2) {
        padding: 0 5px;
    }

    span:nth-of-type(2),
    span:nth-of-type(3) {
        font-size: 14px;
        color: #999999;
    }
}

.header_info {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 18px;
    padding-top: 20px;
    padding-right: 20px;

    .cut {
        font-size: 12px;
        margin-left: 2px;
        color: #488AFF;
    }
}

.userInfo {
    position: absolute;
    top: 80px;
    left: 32px;
    width: 311px;
    height: 129px;
    background: #FFFFFF;
    border-radius: 15px;
}

.portrait {
    position: absolute;
    top: -41px;
    left: 110px;
    width: 80px;
    height: 80px;
    background: #F6F6F6;
    border-radius: 50%;
}
</style>