<template>
<div class="collection">
    <HHeader
    ctext = '搜索我的收藏'
    />
<h1>Collection Page</h1>
</div>
</template>
<script>
import HHeader from '@/components/HHeader/HHeader'
export default {
    components:{
        HHeader
    }
}
</script>
<style scoped>
.collection{
    width: 90%;   /* 可以用百分比,也可以用rem */
    margin: 0 auto;
}
</style>