<script setup lang="ts">
   function onClickLeft(){

   }
</script>
<template>
   <van-nav-bar
        title="测试demo"
        left-arrow
        @click-left="onClickLeft"
        />
</template>
<style scoped>
::v-deep(.van-nav-bar__content){
    background: #548fdc;
}
:v-deep(.van-nav-bar__title){
    color: #FFF;
}
::v-deep(.van-nav-bar .van-icon){
    color: #FFF;
}


</style>