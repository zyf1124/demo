<script lang="ts" setup>
import { ref } from "vue"
let value = ref('');
let svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="master_svg0_36_248"><rect x="0" y="0" width="16" height="16" rx="0"/></clipPath></defs><g clip-path="url(#master_svg0_36_248)"><g><path d="M8.25603515625,11.392021875C7.30403515625,11.392021875,6.53603515625,12.160021875,6.53603515625,13.112021875C6.53603515625,14.064021875,7.30403515625,14.832021875,8.25603515625,14.832021875C9.20803515625,14.832021875,9.97603515625,14.064021875,9.97603515625,13.112021875C9.98403515625,12.160021875,9.20803515625,11.392021875,8.25603515625,11.392021875ZM8.25603515625,13.976021875C7.77603515625,13.976021875,7.39203515625,13.592021875,7.39203515625,13.112021875C7.39203515625,12.632021875,7.77603515625,12.248021875,8.25603515625,12.248021875C8.73603515625,12.248021875,9.12003515625,12.632021875,9.12003515625,13.112021875C9.12003515625,13.592021875,8.73603515625,13.976021875,8.25603515625,13.976021875ZM13.86403515625,11.392021875C12.91203515625,11.392021875,12.14403515625,12.160021875,12.14403515625,13.112021875C12.14403515625,14.064021875,12.91203515625,14.832021875,13.86403515625,14.832021875C14.81603515625,14.832021875,15.58403515625,14.064021875,15.58403515625,13.112021875C15.58403515625,12.160021875,14.81603515625,11.392021875,13.86403515625,11.392021875ZM13.86403515625,13.976021875C13.38403515625,13.976021875,13.00003515625,13.592021875,13.00003515625,13.112021875C13.00003515625,12.632021875,13.38403515625,12.248021875,13.86403515625,12.248021875C14.34403515625,12.248021875,14.72803515625,12.632021875,14.72803515625,13.112021875C14.72003515625,13.592021875,14.33603515625,13.976021875,13.86403515625,13.976021875ZM2.6560351562499998,11.392021875C1.70403515625,11.392021875,0.93603515625,12.160021875,0.93603515625,13.112021875C0.93603515625,14.064021875,1.70403515625,14.832021875,2.6560351562499998,14.832021875C3.60803515625,14.832021875,4.3760351562499995,14.064021875,4.3760351562499995,13.112021875C4.3760351562499995,12.160021875,3.60803515625,11.392021875,2.6560351562499998,11.392021875ZM2.6560351562499998,13.976021875C2.17603515625,13.976021875,1.7920351562499999,13.592021875,1.7920351562499999,13.112021875C1.7920351562499999,12.632021875,2.17603515625,12.248021875,2.6560351562499998,12.248021875C3.13603515625,12.248021875,3.52003515625,12.640021875,3.52003515625,13.112021875C3.52003515625,13.592021875,3.12803515625,13.976021875,2.6560351562499998,13.976021875ZM13.43203515625,6.648051875L8.688035156249999,6.648051875L8.688035156249999,5.376051875C9.85603515625,5.136051875,10.60803515625,4.0000518750000005,10.36803515625,2.8320518750000003C10.12803515625,1.664046875,8.99203515625,0.9120478750000001,7.82403515625,1.152047375C6.65603515625,1.392047875,5.90403515625,2.528051875,6.14403515625,3.696051875C6.32003515625,4.544051875,6.97603515625,5.200051875,7.82403515625,5.376051875L7.82403515625,6.648051875L3.08803515625,6.648051875C2.6080351562499997,6.648051875,2.2240351562500003,7.032041875,2.2240351562500003,7.512041875L2.2240351562500003,10.096051875C2.2240351562500003,10.336051875,2.41603515625,10.528051875,2.6560351562499998,10.528051875C2.89603515625,10.528051875,3.08803515625,10.336051875,3.08803515625,10.096051875L3.08803515625,7.944051875C3.08803515625,7.704051875,3.28003515625,7.512041875,3.52003515625,7.512041875L13.00003515625,7.512041875C13.24003515625,7.512041875,13.43203515625,7.704041875,13.43203515625,7.944051875L13.43203515625,10.096051875C13.43203515625,10.336051875,13.62403515625,10.528051875,13.86403515625,10.528051875C14.10403515625,10.528051875,14.29603515625,10.336051875,14.29603515625,10.096051875L14.29603515625,7.512051875C14.29603515625,7.032051875,13.90403515625,6.648051875,13.43203515625,6.648051875ZM6.96803515625,3.264051875C6.96803515625,2.552051875,7.54403515625,1.968046875,8.26403515625,1.968046875C8.98403515625,1.968046875,9.56003515625,2.544051875,9.56003515625,3.264051875C9.56003515625,3.976051875,8.98403515625,4.560051875,8.26403515625,4.560051875C7.54403515625,4.560051875,6.96803515625,3.984051875,6.96803515625,3.264051875Z" fill="#0972E7" fill-opacity="1"/></g><g><path d="M4.3759541015625,8.02392578125L12.0399541015625,8.02392578125C12.5119541015625,8.02392578125,12.8879541015625,8.40792578125,12.8879541015625,8.87192578125L12.8879541015625,9.71992578125C12.8879541015625,10.19192578125,12.5039541015625,10.56792578125,12.0399541015625,10.56792578125L4.3759541015625,10.56792578125C3.9039541015625,10.56792578125,3.5279541015625,10.18392578125,3.5279541015625,9.71992578125L3.5279541015625,8.87992578125C3.5279541015625,8.40792578125,3.9039541015625,8.02392578125,4.3759541015625,8.02392578125Z" fill="#CAE4FF" fill-opacity="1"/></g></g></svg>`;
let iphone_svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="24" height="24" viewBox="0 0 24 24"><defs><clipPath id="master_svg0_36_241"><rect x="0" y="0" width="24" height="24" rx="0"/></clipPath></defs><g clip-path="url(#master_svg0_36_241)"><g><path d="M6.6674751953125,3.0127982812500003C3.4642791953125,5.40279828125,3.0674781953125,10.64679828125,5.9166751953125,15.93278828125C8.7010751953125,21.09758828125,13.1134751953125,23.84158828125,17.6758751953125,22.43278828125C18.8618751953125,22.06678828125,19.999875195312498,21.05318828125,19.999875195312498,19.91158828125C20.0002751953125,17.92718828125,17.7294751953125,13.97558828125,16.028675195312502,13.66878828125C15.5514751953125,13.58318828125,14.9746751953125,13.75518828125,14.1166751953125,14.12558828125C14.0278751953125,14.16398828125,13.9366751953125,14.20438828125,13.8430751953125,14.24678828125L13.6294751953125,14.34518828125C13.4206751953125,14.44238828125,13.2450751953125,14.52758828125,12.9466751953125,14.67518828125L12.8182751953125,14.73838828125L12.8122751953125,14.73278828125C12.7582851953125,14.68048828125,12.7063851953125,14.62598828125,12.6566751953125,14.56958828125C12.4106851953125,14.29198828125,12.1206751953125,13.88318828125,11.8282751953125,13.40238828125L11.743475195312499,13.26078828125C11.350675195312501,12.59678828125,11.0018751953125,11.88239828125,10.7750751953125,11.28719828125L10.7538751953125,11.22999828125L11.295875195312501,10.99799828125C11.4078751953125,10.94999828125,11.514675195312499,10.90239828125,11.626675195312501,10.85239828125L11.9426751953125,10.70959828125L12.1858751953125,10.59639828125C12.8018751953125,10.30479828125,13.1674751953125,10.09359828125,13.3730751953125,9.86999828125C14.5478751953125,8.59119828125,12.2190751953125,2.41600028125,10.3082751953125,2.06000038125C9.1714751953125,1.84800028125,7.7978751953125,2.21720028125,6.7790751953125,2.93200028125L6.6670751953125,3.0127982812500003L6.6674751953125,3.0127982812500003ZM10.0150751953125,3.63279828125C10.2590751953125,3.67839828125,10.9702751953125,4.7767982812500005,11.5042751953125,6.19279828125C11.7710751953125,6.89959828125,11.9730751953125,7.61279828125,12.0674751953125,8.17559828125L12.0834751953125,8.27319828125C12.1090951953125,8.43196828125,12.1229951953125,8.59239828125,12.1250751953125,8.75319828125L12.1226751953125,8.82679828125L12.0218751953125,8.88479828125L11.9666751953125,8.91559828125C11.7898751953125,9.01159828125,11.555875195312499,9.126398281250001,11.273875195312499,9.255998281250001L10.8098751953125,9.46439828125C10.645875195312499,9.536398281250001,10.480275195312501,9.60839828125,10.277475195312501,9.694398281249999L9.5414751953125,10.00759828125L9.4318751953125,10.05879828125L9.3950751953125,10.07839828125L9.3742751953125,10.05759828125C9.330275195312499,10.02759828125,9.292275195312499,10.13479828125,8.999475195312499,10.96639828125C9.4854751953125,13.04798828125,11.5386751953125,16.42598828125,12.7994751953125,16.427988281250002L12.9550751953125,16.41078828125C12.9882751953125,16.40678828125,13.0070751953125,16.40318828125,13.0242751953125,16.39838828125L13.1306751953125,16.36038828125L13.2222751953125,16.32078828125L13.5522751953125,16.16078828125L14.1134751953125,15.88598828125C14.1998751953125,15.84478828125,14.2814751953125,15.80598828125,14.3726751953125,15.76398828125L14.6286751953125,15.64798828125L14.7510751953125,15.59438828125C14.9951751953125,15.48588828125,15.2451751953125,15.39118828125,15.4998751953125,15.31078828125L15.5890751953125,15.28598828125C15.6970751953125,15.25718828125,15.7610751953125,15.24638828125,15.7450751953125,15.24358828125C16.5450751953125,15.38758828125,18.4002751953125,18.61558828125,18.3998751953125,19.91158828125C18.3998751953125,20.18358828125,17.796675195312503,20.72118828125,17.2038751953125,20.90438828125C13.4998751953125,22.04798828125,9.7862751953125,19.73878828125,7.3250751953125,15.17318828125C4.8154771953125,10.51839828125,5.1470751953125,6.14359828125,7.624275195312499,4.29519828125C8.3138751953125,3.78039828125,9.3046751953125,3.50039828125,10.0150751953125,3.63279828125Z" fill="#444444" fill-opacity="1"/></g><g><path d="M15.7056580078125,1.7802734375C17.8848580078125,3.5562734375,18.5216580078125,6.2646734375,17.5784580078125,8.9374734375L17.5264580078125,9.0806734375L16.0280580078125,8.5198734375C16.7976580078125,6.4626734375,16.3760580078125,4.460673437500001,14.7968580078125,3.1058734374999997L14.6944580078125,3.0202734375L15.7056580078125,1.7802734375Z" fill="#00B386" fill-opacity="1"/></g></g></svg>`;
let indexList: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "j", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
</script>
<template>
    <div class="address">
        <div class="address_search">
            <van-sticky :offset-top="88">
                <van-search v-model="value" shape="round" background="#FFF" placeholder="搜索" />
            </van-sticky>

        </div>
        <div class="framework">
            <div class="framework_svg" v-html="svg"></div>
            <span>公司组织架构</span>
        </div>
        <div class="address_details">
            <div style="padding-right: 30px;">
                <van-index-bar :index-list="indexList" highlight-color="#488AFF" :sticky-offset-top="140" :sticky="true">
                    <van-index-anchor index="A"></van-index-anchor>
                    <van-cell>
                        <div class="cell_wrap">
                            <div style="color: #488AFF;font-weight: bold;" class="letter">A</div>
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-index-anchor index="B"></van-index-anchor>
                    <van-cell>
                        <div class="cell_wrap">
                            <div style="color: #488AFF;font-weight: bold;" class="letter">B</div>
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-index-anchor index="C"></van-index-anchor>
                    <van-cell>
                        <div class="cell_wrap">
                            <div style="color: #488AFF;font-weight: bold;" class="letter">C</div>
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>

                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-index-anchor index="D"></van-index-anchor>
                    <van-cell>
                        <div class="cell_wrap">
                            <div style="color: #488AFF;font-weight: bold;" class="letter">D</div>
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>

                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-index-anchor index="E"></van-index-anchor>
                    <van-cell>
                        <div class="cell_wrap">
                            <div style="color: #488AFF;font-weight: bold;" class="letter">E</div>
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>

                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                    <van-cell>
                        <div class="cell_wrap">
                            <!-- <div style="color: #488AFF;font-weight: bold;padding-right: 10px;">A</div> -->
                            <div class="cell_img"></div>
                            <div class="cell-right">
                                <div class="cell-right-left">
                                    <div><span>安玉环</span></div>
                                    <div><span>学术代表(一部) 鲁东区(日照市)</span></div>
                                </div>
                                <div v-html="iphone_svg" class="cell-right-right">

                                </div>
                            </div>
                        </div>
                    </van-cell>
                </van-index-bar>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.address {
    background: #F6F6F6;
}

::v-deep(.van-search__field) {
    height: 38px;
}

.cell_wrap {
    display: flex;
    align-items: center;

}

.letter {
    padding-right: 10px;
}

.van-cell+.van-cell {
    margin-left: 22px;
}

.cell-right-right {
    margin-left: 28px;

    ::v-deep(svg) {
        width: 25px;
        height: 20.8px;

    }
}

.cell-right-left {
    div:nth-of-type(1) span {
        font-size: 15px;
        color: #333333;
        font-weight: bold;
    }

    div:nth-of-type(2) span {
        font-size: 13px;
        color: #777777;
    }
}

.cell-right {
    display: flex;
    align-items: center;
    text-align: left;
    margin-left: 16px;
}

.cell_img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #F6F6F6;
}

.address_details {
    margin-top: 4px;
    padding-bottom: 79px;
    background: #FFF;
}

::v-deep(.van-index-anchor) {
    color: #488AFF;
    display: none;
}

::v-deep(.van-index-bar__index) {
    color: #488AFF;
}

::v-deep(.van-index-bar__sidebar) {
    // top: 60%;
}

.framework {
    display: flex;
    align-items: center;
    padding: 8px 0 8px 0;
    justify-content: center;
    background: #FFF;

    span {
        margin-left: 11px;
        font-size: 14px;
        display: inline-block;
        color: #333333;
    }
}
</style>