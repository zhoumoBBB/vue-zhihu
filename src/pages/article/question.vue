<style lang="less" scoped>
.question-page{
    position: absolute;
    top:0;
    left:0;
    padding:0px;
    background: #F0F4F5;
}
.question-title{
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
    height: 6.05rem;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right:0.2rem;
    box-sizing:content-box;
}
.description-box{
    div{
        border-top:0.1rem solid #fff;
        padding:0.08rem;
        background:#fff;
    }
    .type-list{
        span{
            border-radius:13px;
            background:#EEF6F9;
            padding:0.06rem 0.1rem;
        }
    }
    .description-title{
        font-size: 0.22rem;
        color: #000;
        font-weight: 600;
    }
    .description-inner{
        font-size:0.17rem;
    }
    .description-control{
        i{
            font-size:0.25rem;
        }
    }
    .answer-typ{
        border-top:1px solid #D6D3D3;
        border-bottom:1px solid #D6D3D3;
        p{
          width:49%;
          float:left;
          text-align:center;
          font-size:0.18rem;
          padding:0.1rem 0rem;
          i{
              font-size:0.18rem;
          }
        }
        p:nth-child(2){
            border-left:1px solid #D6D3D3;
        }
    }
    .answer-sort{
        border:0;
        margin-top:0.1rem;
        background: transparent;
        font-size: 0.18rem;
        padding:0 0.1rem;
    }
}
.answer-box{
    .answer-list{
        background:#fff;
        margin-top:0.1rem;
        padding:0.05rem 0.08rem;
        box-shadow: 0px 2px 3px #B2C1D1;
        >p,div{
            margin-top:0.05rem;
        }
        >div{
            span{
                margin-left:0.05rem
            }
        }
        p:nth-child(1){
            img,span{
                vertical-align:middle;
            }
        }
        p:nth-child(2){
            height:0.63rem;
            overflow: hidden;
        }
    }
}
.fa-angle-left:before {
    position: relative;
    top: 1px;
}
</style>
<template>
    <div class="question-page main-page cover-pop cl">
        <div class="pop-header">
            <span @click="backPage" class="fa fa-angle-left aligning"></span>
            <span class="question-title">问题列表</span>
            <span class="el-icon-share aligning"></span>
            <span class="el-icon-more aligning"></span>
        </div>
        <div @scroll="scrolling($event)" class="content-box">
            <div class="description-box">
                <div class="type-list">
                    <span>段子</span>
                    <span>历史</span>
                    <span>电影桥段</span>
                    <span>IT技术</span>
                    <span>思想哲学</span>
                </div>
                <div class="description-title">腹有诗书气自华是真的吗？</div>
                <div class="description-inner">
                    腹有诗书」怎么在「气」中体现出来？如何在生活中体现出来
                </div>
                <div class="description-control clear">
                    <span>
                        <i class="fa fa-eye fa-1x"></i>
                        <span>239</span>
                    </span>
                    <span>
                        <i class="fa fa-comment-o fa-1x"></i>
                        <span>9886</span>
                    </span>
                    <span class="btn rt">关注</span>
                </div>
                <div class="answer-typ clear">
                    <p>
                        <i class="fa fa-address-book-o fa-1x"></i>
                        <span>邀请回答</span>
                    </p>
                    <p>
                        <i class="fa fa-pencil fa-1x"></i>
                        <span>邀请回答</span>
                    </p>
                </div>
                <div class="answer-sort clear">
                    <p class="lt">132回答</p>
                    <p class="rt" @click="toggleFilter">
                        <span v-show="!timeFilter">按质量排序</span>
                        <span v-show="timeFilter">按时间排序</span>
                        <i class="fa fa-angle-down fa-1x"></i>
                    </p>
                </div>
            </div>
            <div class="answer-box">
                <div v-for="item in questionList" class="answer-list">
                    <!--此router参数为日后做页面轮回查看保留   -->
                    <router-link :to="{name:'detail',params:{detailId:item.id,history:false,fromPath:'question'}}">
                        <p>
                            <img :src="item.src"> 
                            <span>{{item.name}}</span>
                        </p>
                        <p>{{item.inner}}</p>
                        <div>
                            <span>{{item.like}}赞同</span>
                            <span>{{item.comment}}评论</span>
                            <span>{{item.time}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {eventBus} from "../../eventBus/eventBus"
    export default{
        data(){
            return {
                timeFilter:false,
                questionList:[],
                lastScrollTop:0,
                lastScrollTime:"",
                scrollDelay:100,
                history:"",
                questionId:"",
                fromPath:"",
            }
        },
        methods:{
            backPage(){
                this.$router.push({name:this.fromPath,params:{detailId:"",history:true,fromPath:''}})
            },
            toggleFilter(){
                this.timeFilter=!this.timeFilter
            },
            scrolling(e){
                let nowTime=new Date().getTime();
                if(this.lastScrollTime==""||nowTime-this.lastScrollTime>this.scrollDelay){
                    let nowTop=e.target.scrollTop
                    if(nowTop-this.lastScrollTop>0){
                        eventBus.$emit("slide-footer","down")
                    }else if(nowTop-this.lastScrollTop<0){
                        eventBus.$emit("slide-footer","up")
                    }
                    this.lastScrollTop=nowTop
                }
            },
            getQuestionData(){
                let id=this.$route.params.questionId
                this.$store.dispatch("getQuestionPage",{questionId:id})
                    .then(
                        (data)=>{
                            this.questionList=data
                        },
                        (msg)=>{
                            console.log(msg)
                        }
                    )
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm=>{
                vm.history=(vm.$route.params.history==''?vm.history:vm.$route.params.history)
                vm.questionId=(vm.$route.params.questionId==''?vm.detailId:vm.$route.params.questionId)
                vm.fromPath=(vm.$route.params.fromPath==''?vm.fromPath:vm.$route.params.fromPath)
                if(!vm.history){
                    vm.questionList=""
                    vm.getQuestionData()
                }
            })
        },
    } 
</script>