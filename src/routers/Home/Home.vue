<template>
<div class="home"> 
<HHeader
licon = 'icon-jiahao'
ricon = 'icon-gouwudai'
ctext = '搜索菜谱,食材'
/>
<Grid
:grid-datas = 'gridDatas'
/>
<div class="content">
    <div class="cube-wrapper">
      <Cube
      imgUrl = '/static/image/1556504428155.jpg'
      time = '本周'
      des = '流行菜谱'
      />
    </div>
     <div class="cube-wrapper">
      <Cube
      imgUrl = '/static/image/1556505701262.jpg'
      des = '关注动态'
      />
    </div>
</div>
<div class="banner-wrapper">
<!-- <slider class="slider-img">
    <img slot="item-0" src="../../../static/image/e5913e2e89eb11e6a9a10242ac110002_800w_533h.jpg" alt="">
    <img slot="item-1" src="../../../static/image/e391c41c890111e6a9a10242ac110002_1000w_663h.jpg" alt="">
    <img slot="item-2" src="../../../static/image/de64c32289b511e6a9a10242ac110002_1948w_1742h.jpg" alt="">
    <img slot="item-3" src="../../../static/image/a545570a01ae49ceb9b43ff909ad7208_1242w_1242h.jpg" alt="">
</slider> -->
<Slider/>
</div>

<!-- 注:当数据定义在实例里面的时候,如果想要引用该数据,则需要将引号内的被当成函数而不是字符串,所以要写成v-bind形式. -->
<h1>Home Page</h1>
</div>
</template>
<script>
import HHeader from '@/components/HHeader/HHeader'
import Grid from "@/components/Grid/Grid"
import Cube from "@/components/Home/Cube"
import Slider from '@/components/Slider/Slider'
export default {
    components:{
        HHeader,
        Grid,
        Cube,
        Slider
    },
    data (){
        return{
            gridDatas:[
            {
                icon:'icon-chufangchujukitchen-shaozichaziscoo',
                text:'厨房好物品'
            },
            {
                icon:'icon-chufangyongpin',
                text:'发现新菜'
            },
            {
                icon:'icon-huangguan',
                text:'排行榜'
            },
            {
                icon:'icon-caipudaquan',
                text:'菜谱分类'
            },
        ]
        }
    }

}
</script>
<style scoped>
.home{
    width: 90%;   /* 可以用百分比,也可以用rem */
    margin: 0 auto;
    overflow: hidden;
}
.home .content{
    display: flex;
}
.home .content .cube-wrapper{
   width: 50%;
}
.cube-wrapper:first-child{
   margin-right: 15px;
}
.banner-wrapper{
    margin-top: 20px;
}
.slider-img img{
    width: 100%;
}
</style>
