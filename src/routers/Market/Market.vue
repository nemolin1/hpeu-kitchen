<template>
<div class="market">
<HHeader
licon = 'icon-daohang'
ricon = 'icon-gouwuche'
ctext = '搜索商品'
/>
<Grid
:grid-datas = 'gridDatas'
/>
<h1>Market Page</h1>
</div>
</template>
<script>
import HHeader from '@/components/HHeader/HHeader'
import Grid from "@/components/Grid/Grid"
export default {
    components:{
        HHeader,
        Grid
    },
    data (){
        return {
            gridDatas:[
                {
                    icon:'icon-hongbei',
                    text:'烘焙'
                },
                {
                    icon:'icon-guoshu',
                    text:'果蔬生鲜'
                },
                {
                    icon:'icon-qiju',
                    text:'器具'
                },
                {
                    icon:'icon-lingquan',
                    text:'领券儿'
                },
                {
                    icon:'icon-fangbianmian_',
                    text:'方便食品'
                },
                {
                    icon:'icon-jinkoushipin',
                    text:'进口食品'
                },
                {
                    icon:'icon-xinxianshicai',
                    text:'时令鲜食'
                },
                {
                    icon:'icon-jiebantubiao-',
                    text:'全部分类'
                },
            ]
        }
    }
}
</script>
<style scoped>
.market{
    width: 90%;   /* 可以用百分比,也可以用rem */
    margin: 0 auto;
}
</style>