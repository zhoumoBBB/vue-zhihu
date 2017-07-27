<style>
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
.content-box{
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    padding-right: 20px;
    box-sizing:content-box;
}
.author-box>span{
    float:left;
}
.author-box>span:nth-child(2){margin-left:0.08rem}
.author-box>span:nth-child(2) span{
    display: block;
}
.author-box>span:nth-child(1){
    width:0.5rem;
}
.author-box>span:nth-child(1) img{
    width:100%;
}
.author-box>span:nth-child(3){
    float:right;
    margin-top: 0.07rem;

}
.author-box{
    border:1px solid #E0DEDE;
}
.author-box{
    padding:0.08rem 0.1rem;
}
.content-inner{padding-bottom:0.66rem}
.content-inner img{width:100%;}
.content-inner .markdown-text p,
.content-inner .markdown-text h3,
.content-inner .markdown-text ul{
    margin-top:0.08rem;
    padding:0 0.08rem;
}
.fa-angle-left:before {
    position: relative;
    top: 1px;
}
</style>
<template>
    <div class="article-page main-page cover-pop clear">
        <div class="pop-header">
            <span @click="backPage" class="fa fa-angle-left aligning"></span>
            <!--此为日后做页面轮回查看保留 
                <router-link :to="{name:'question',params:{questionId:pageData.topicId,history:false,fromPath:'detail'}}">
                <span class="artcle-title">{{pageData.title}}</span>
            </router-link> -->
            <span class="artcle-title">{{pageData.title}}</span>
            <span class="el-icon-share aligning"></span>
            <span class="el-icon-more aligning"></span>
        </div>
        <div class="content-box clear">
            <div class="author-box clear">
                <span>
                    <img :src="pageData.src">
                </span>
                <span>
                    <span>{{pageData.author}}</span>
                    <span>{{pageData.intorduce}}</span>
                </span>
                <span class="btn">+关注</span>
            </div>
            <loading-animate v-if="pageData==''" style="margin-top:2rem;"></loading-animate>
            <div v-html="pageData.content" class="content-inner">
                
            </div>
        </div>
        <content-control></content-control>
    </div>
</template>
<script>
    import ContentControl from "../../components/news/contentControl"
    import LoadingAnimate from "../../components/loading"
    export default{
        components:{
            ContentControl,
            LoadingAnimate
        },
        data(){
            return{
                detailId:"",
                history:"",
                fromPath:"",
                pageData:"",
            }
        },
        methods:{
            backPage(){
                if(this.fromPath=='question'){
                    this.$router.push({name:this.fromPath,params:{questionId:'',history:true,fromPath:''}})
                }else{
                    this.$router.push({name:this.fromPath})
                }
            },
            getPageData(){
                let detailId=this.$route.params.detailId
                this.$store.dispatch("getDeatilPage",{pageId:detailId}).then(
                    (data)=>{
                        this.pageData=data
                    },
                    (msg)=>{
                        console.log(msg)
                    }
                )
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm=>{
                vm.$store.commit("TOOGLE_FOOTERBAR",{boolean:false})
                vm.history=(vm.$route.params.history==''?vm.history:vm.$route.params.history)
                vm.detailId=(vm.$route.params.detailId==''?vm.detailId:vm.$route.params.detailId)
                vm.fromPath=(vm.$route.params.fromPath==''?vm.fromPath:vm.$route.params.fromPath)
                if(!vm.history){
                    vm.pageData=""
                    vm.getPageData()
                }
            })
        },
    } 
</script>
