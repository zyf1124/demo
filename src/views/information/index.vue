<script lang="ts" setup>
import { ref } from "vue"
import inform from "./components/inform.vue"
import address_ from "./components/address.vue"
const active = ref(0);

</script>
<template>
    <section>
        <div class="message_wrap">
            <div class="message_content">
                <div class="tabs">
                    <van-tabs v-model:active="active" background="none" color="#488AFF" title-active-color="#FFFFFF">
                        <van-tab title="通知" title-class='tab'>
                            <inform></inform>
                        </van-tab>
                        <van-tab title="通讯录" title-class='tab'>
                            <address_ />
                        </van-tab>
                    </van-tabs>
                </div>

            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
::v-deep(.tabs>.van-tabs:nth-of-type(1)>.van-tabs__wrap:nth-of-type(1)) {
    position: sticky;
    top: 0;
    z-index: 6;
    height: 88px;
    background-image: url("@/assets/message/1.png");
    background-repeat: no-repeat;
    background-size: 100% 88px;
}

::v-deep(.tab) {
    font-size: 15px;
    color: #FFFFFF;
    opacity: 0.6;
    flex: inherit;
}

::v-deep(div.van-tab.tab:nth-of-type(1)) {
    margin-left: 15px;
}

::v-deep(div.van-tab.tab:nth-of-type(2)) {
    margin-left: 25px;
}

::v-deep(div.van-tab--active.tab) {
    opacity: 1;
    font-size: 18px;
    font-weight: bold;
}
</style>