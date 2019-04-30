<template>
   <div class="slider-cell">
    <img :src="imgUrl" alt="">    
    <p class="badge-wrapper"><span class="badge">{{badge}}</span></p>
    <p class="text-1">{{text1}}</p>
    <p class="text-2">{{text2}}</p>
    </div> 
</template>
<script>
export default {
    props:['imgUrl','badge','text1','text2']
}
</script>
<style scoped>
.slider-cell{
position: relative;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;

}
.slider-cell img{
    position: absolute;
    width: 100%;
    z-index: -1;
}
.slider-cell p{
    margin-left: 10px;
    color: white;
    font-size: 18px;
    font-weight: bold;
}
.slider-cell .badge{
    padding: 3px;
    margin-left: 10px;
    border-radius: 4px;
    background-color: #fff;
    color: #2d2d2d
}
.badge-wrapper{
    margin-bottom: 5px;
}
</style>
