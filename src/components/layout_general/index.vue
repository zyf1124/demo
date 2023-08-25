<script lang="ts" setup>
defineProps<{ list: Array<any>, activeTab: number }>()
const emits = defineEmits<{
    (e: 'clickChange', child: object): void
}>()
function btn(child: object): void {
    emits('clickChange', child)
}
</script>
<template>
    <section>
        <div class="container" v-for="item in list" :key="item.title">
            <div class="container-header">
                <div class="lane" :style="{ background: item.color }"></div>
                <div class="title">{{ item.title }}</div>
            </div>
            <div class="container-content" :style="[activeTab == 1 ? 'justify-content:space-between' : '']">
                <div class="container-empty" v-for="(child, index) in item.children" :key="index" @click="btn(child)">
                    <div class="container-radius" :style="{ 'border-bottom': `2px solid ${item.color}` }">
                        <div class="container-svg">
                            <div v-html="child.html"></div>
                        </div>
                        <div class="arc"></div>
                    </div>
                    <div style="margin-top: 10px;text-align: center;color: #333333;font-size: 12px;">{{ child.title }}</div>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.container {
    background: #FFFFFF;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.container-header {
    padding-left: 10px;
    padding-top: 22px;
    display: flex;
    align-items: center;


    .lane {
        width: 4px;
        height: 16px;
        border-radius: 2px;
    }

    .title {
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        margin-left: 8px;
    }
}

.container-radius {
    position: relative;
    width: 46.1px;
    height: 46.1px;
    margin: 0 auto;
    background: #f6f6f6;
    border-radius: 50%;
    padding-top: 10px;
    box-sizing: border-box;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;
}

.container-content {
    padding-left: 14px;
    padding-right: 14px;
    margin-top: 16px;
    display: flex;
    // justify-content: space-between;
}

.container-empty+.container-empty {
    margin-left: 27px;
}

.container-svg {
    width: 28px;
    height: 28px;
    border: 1px dashed #D0CFCF;
    background: #F6F6F6;
    margin: 0 auto;
    box-sizing: border-box;
}

::v-deep(svg) {
    width: 28px;
    height: 28px;
}
</style>