<template>
    <div class="cube">
        <img :src="imgUrl" alt="imgUrl" class="cube-bg">
        <p class="time">{{time}}</p>
        <p class="des">{{des}}</p>
    </div>
</template>
<script>
export default {
    props:['imgUrl','time','des']
}
</script>
<style scoped>
.cube{
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.cube .cube-bg{
    width: 100%;
    position: absolute;
    z-index: -1;
}
.cube .des,.cube .time{
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin: 0 0 0 5px;
}
</style>
