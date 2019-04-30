<template>
    <div class="header icon-size-32px">
        <div class="h-left h-col"><i class="iconfont icon-size-24px" v-bind:class='licon'></i> </div>
        <div class="h-center h-col"><i class="iconfont icon-sousuo icon-size-24px"></i> <input type="text" class="header-inp " :placeholder="ctext"> </div>
        <div class="h-right h-col"><i class="iconfont icon-size-24px" :class='ricon'></i></div>
    </div>
</template>
<script>
export default {
    props:['licon','ricon','ctext']  //属性传值
}
</script>
<style scoped>
.header{
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    height: 36px;
}
/* .header .h-col{

} */
.header .h-center{
    width: 75%;
    background-color: #efefef;
    display: flex;
    /* 水平对齐方式 */
    /* justify-content: flex-start;  左对齐 */
    /* justify-content: flex-end;  右对齐 */
    justify-content: space-around; /* 等分 */
    /* justify-content: space-between; 两者之间有距离 */

    /* 垂直对齐方式 */
    align-items: center;  /* 居中对齐 */
    /* align-items: flex-end; 下对齐 */
    /* align-items: stretch; 拉伸对齐 */
    border-radius: 4px;
}
.header .h-center i{
    margin: 0 3px;
    line-height: 30px;
    font-size: 20px;

}
.header .h-center .header-inp{
height: 24px;
width: 100%;
border: none;
outline: none;
background-color: #efefef;
}
</style>
