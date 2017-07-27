<style lang="less" scoped>
.article-page{
    position: absolute;
    top:0;
    left:0;
    padding:0px;
    background: #FFF;
}
.artcle-title{
    width: 2.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
}
.aligning{
    vertical-align: sub;
}
.pop-header>span:nth-child(3){
    margin-left:0.13rem
}
</style>
<template>
    <div class="article-page main-page cover-pop cl">
        <div class="pop-header">
            <span class="el-icon-arrow-left aligning"></span>
            <span class="artcle-title">11111111111111111111111111111111111111111111111</span>
            <span class="el-icon-share aligning"></span>
            <span class="el-icon-more aligning"></span>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            id:{

            }
        },
        data(){
            return{

            }
        }
    }
</script>
