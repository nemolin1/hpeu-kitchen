<template>
  <div class="grid">
    <ul class="grid-list">
      <li class="grid-item" v-for='(gridData,i) in gridDatas' :key='i'>
        <i class="iconfont" :class = 'gridData.icon'></i>
        <p>{{gridData.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    props:['gridDatas']
};
</script>

<style scoped>
.grid-list{
    display: flex;
    /* 排列方式 */
    flex-direction: row; /* 横向排列 */
    /* flex-direction: column; 纵向排列 */
    /* 主轴对齐方式  主轴方向,主轴由flex-direction决定,row:横向 column:纵向 */
    justify-content: space-around;
    flex-wrap: wrap;  /* 如果内容超出盒子,做换行处理 */
}
.grid-list li{
    display: flex;
    width: 25%;
    padding: 10px 0;
    /* 主轴对齐方式 这里因为前面是column,所以主轴为纵向*/
    flex-direction: column;
    justify-content: flex-start;  /* 主轴对齐 */
    align-items: center;/* 侧轴对齐 */
}
.grid-list li i{
  font-size: 36px; 
  color: pink; 
}
.grid-list li p{
    font-size: 14px;

}
</style>

