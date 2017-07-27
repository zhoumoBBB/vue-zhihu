<style lang="less" scoped>

</style>
<template>
    <div class="item-body">
        <div>
            <!--此router参数为日后做页面轮回查看保留   -->
            <router-link :to="{name:'question',params:{questionId:newBody.topicId,history:false,fromPath:'home'}}">
                <p class="news-title">{{newBody.title}}</p>
            </router-link>
            <div class="news-inner">
                {{newBody.inner}}
            </div>
            <div class="news-operate">
                <span>{{newBody.like}}赞同</span>
                <span>{{newBody.comment}}评论</span>
                <span>关注问题</span>
            </div>
        </div>
    </div>

</template> 
<script>
    export default{
        props:{
            newBody:{
                type:Object,
            }

        },
        data(){
            return {

            }
        },
    }
</script>

