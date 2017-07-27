<style lang="less" scoped>

</style>
<template>
    <div>
        <span class="news-title-img">
            <img :src="newHead.src">
        </span>
        <span class="news-title-topic">来自话题：{{newHead.topic}}</span>
        <span @click.stop="chooseTopic($event,newHead.id,itemIndex)" id="newHead.id" class="close-news-list rt">X</span>
    </div>
</template>
<script>
    export default{
        components:{
        
        },
        props:{
            newHead:{
                type:Object,
            },
            itemIndex:{
                type:[Number,String]
            }
        },
        data(){
            return {

            }
        },
        methods:{
            chooseTopic(e,id,index){
                let pageY=event.pageY;
                this.$emit("closePopHint",pageY,id,index)
            }
        },
        created:function(){
            //console.log(this.newHead)
        }
    }
</script>