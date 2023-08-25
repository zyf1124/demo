<script lang="ts" setup>
let svg_arrows: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_50_641"><rect x="0" y="16" width="16" height="16" rx="0"/></clipPath></defs><g transform="matrix(0,-1,1,0,-16,16)" clip-path="url(#master_svg0_50_641)"><g><path d="M7.64509,26.62912L7.99738,27L12.85517,21.894687C13.0483,21.689716,13.0483,21.359477,12.85517,21.154506C12.66108,20.9489933,12.34497,20.9487584,12.1506,21.153982L7.99838,25.51754L3.849649,21.153982C3.655584,20.9486726,3.339636,20.9486726,3.145571,21.153982C2.9518656,21.358727000000002,2.9514207,21.689367,3.144574,21.894687L7.62566,26.60765L7.64559,26.62912L7.64509,26.62912Z" fill="#999999" fill-opacity="1"/></g></g></svg>`;
</script>
<template>
    <section>
        <div class="userInfo">
            <div class="userInfo_above">
                <div class="userInfo_above_title">
                    <span></span>
                    <span>账号信息</span>
                </div>
                <div class="head public">
                    <div class="head_left">
                        <span>头像</span>
                    </div>
                    <div class="head_right">
                        <span></span>
                        <span v-html="svg_arrows"></span>
                    </div>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>人员编码</span>
                    </div>
                    <div class="public_right">
                        <span>HR00039</span>
                    </div>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>姓名</span>
                    </div>
                    <div class="public_right">
                        <span>李育泉</span>
                    </div>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>性别</span>
                    </div>
                    <div class="public_right">
                        <span>男</span>
                    </div>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>手机号</span>
                    </div>
                    <div class="public_right">
                        <span>13592357387</span>
                    </div>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>生日</span>
                    </div>
                    <div class="public_right">
                        <span>2022-09-05</span>
                    </div>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>邮箱</span>
                    </div>
                    <div class="public_right">
                        <span>j0110240808151@35.com</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="userInfo">
            <div class="userInfo_job">
                <div class="userInfo_above_title">
                    <span></span>
                    <span>岗位信息</span>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>岗位编码</span>
                    </div>
                    <div class="public_right">
                        <span>PT00087</span>
                    </div>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>岗位名称</span>
                    </div>
                    <div class="public_right">
                        <span>子管理员</span>
                    </div>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>负责区域</span>
                    </div>
                    <div class="public_right">
                        <span>全国</span>
                    </div>
                </div>
                <div class="code public">
                    <div class="public_left">
                        <span>所属部门</span>
                    </div>
                    <div class="public_right">
                        <span>信息部</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
section {
    padding-bottom: 79px;
}

.userInfo {
    padding: 16px;
}

.public {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 32px;
    padding-right: 35px;
    padding-top: 20px;
}

.public_left {
    font-size: 14px;
    color: #999999;
}

.code {
    margin-top: 10px;
}

.public_right {
    font-size: 14px;
    color: #333333;
}

.head_left {
    font-size: 14px;
    color: #999999;
}

.head_right {
    span {
        vertical-align: middle;

    }

    span:nth-of-type(1) {
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 15px;
        background: #F6F6F6;
    }
}

.userInfo_job {
    height: 250px;
    border-radius: 15px;
    background: #FFFFFF;
}

.userInfo_above {
    height: 400px;
    border-radius: 15px;
    background: #FFFFFF;
}

.userInfo_above_title {
    padding-top: 23px;
    padding-left: 20px;

    span:nth-of-type(1) {
        display: inline-block;
        width: 4px;
        height: 16px;
        border-radius: 2px;
        background: #488AFF;
        vertical-align: middle;
    }

    span:nth-of-type(2) {
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        margin-left: 8px;
        vertical-align: middle;
    }
}
</style>