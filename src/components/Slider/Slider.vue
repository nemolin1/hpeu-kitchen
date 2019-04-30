<template>
<div class="banner-wrapper" ref="bwrapper">
    <ul class="slider-content">
        <li v-for="(sliderData,i) in sliderDatas" :key="i">
            <SliderCell
            :imgUrl = 'sliderData.imgUrl'
            :badge = 'sliderData.badge'
            :text1 = 'sliderData.text1'
            :text2 = 'sliderData.text2'
            />
           <!-- <slot name="item-0"/>  -->
        </li>
        <!-- <li >
            <slot name="item-1"/> 
        </li>
        <li >
            <slot name="item-2"/>
        </li>
        <li >
            <slot name="item-3"/>
        </li> -->
    </ul>
</div>
    
</template>
<script>
//1.引入better-scroll插件  
//2.指明在确定的执行时机下绑定
import BetterScroll from 'better-scroll'   //内部或者外部安装的模块,引入都直接使用名字引入,而下面的引入方式是引入的文件
import SliderCell from "./SliderCell";
export default {
    data (){
        return{
        bscroll :null,
        sliderDatas:[{
            imgUrl : '../../../static/image/e5913e2e89eb11e6a9a10242ac110002_800w_533h.jpg',
            badge : '菜谱合集',
            text1 : '不趁青梅尝煮酒',
            text2 : '要看细雨熟黄梅'
        },
        {
            imgUrl : '../../../static/image/e391c41c890111e6a9a10242ac110002_1000w_663h.jpg',
            badge : '菜谱合集',
            text1 : '不趁青梅尝煮酒',
            text2 : '要看细雨熟黄梅'
        },
        {
            imgUrl : '../../../static/image/de64c32289b511e6a9a10242ac110002_1948w_1742h.jpg',
            badge : '菜谱合集',
            text1 : '不趁青梅尝煮酒',
            text2 : '要看细雨熟黄梅'
        },
        {
            imgUrl : '../../../static/image/a545570a01ae49ceb9b43ff909ad7208_1242w_1242h.jpg',
            badge : '菜谱合集',
            text1 : '不趁青梅尝煮酒',
            text2 : '要看细雨熟黄梅'
        }
        ]  

        }
        
    },
    mounted (){
        this.bscroll = new BetterScroll(this.$refs.bwrapper,{
           scrollX:true,
           //轮播图  按页切换
           snap:{
               loop: true,  //循环  无缝链接
               threshold: 0.4, //移动多少百分比的时候切换
            //    stepX: 100,
            //    stepY: 100

           }
        })
        console.log(this.$refs.bwrapper);
    },
    components:{
        SliderCell
    }
}
</script>
<style scoped>
.slider-content{
  width: 600%;
}
.slider-content li{
    float: left;
    width: 16.66%;
    height: 150px;
    list-style: none;
}
.banner-wrapper{
  width: 100%;
  height: 150px;
  overflow: hidden;
}
</style>
