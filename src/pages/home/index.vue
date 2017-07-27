<style lang="less" scoped>
  .header{
    padding:0.1rem 0rem;
  }
  .homer-search-box{
    background: #49A1E9;
    width:75%;
    line-height:0.45rem;
    margin-left:5%;
    border-radius:3px;
    padding-left:0.1rem;
    .homer-search-icon{
      width:0.4rem;
      height:0.4rem;
      text-align: center;
      margin-right:0.1rem;
      margin-top: 0.09rem;
    }
    .homer-search-text{
      font-size:0.20rem;
      color:#fff;
    }
  }
  .el-icon-search:before,.el-icon-message:before{
    font-size: 0.3rem;
  }
  .el-icon-message{
    width:20%;
    text-align:center;
    margin-top:0.09rem;
  }
  section{
    overflow-y: auto;
    overflow-x: hidden;
    width:calc(100vw + 20px);
    height:6rem;
    .news-box{
      width: 100vw;
    }
  }
  .homer-search-icon,.fa-envelope,.fa-angle-left{
    font-size:0.3rem;
    color:#fff;
  }
  .fa-envelope{
    margin-right: 0.2rem;
    margin-top: 0.1rem;
  }
  .fa-angle-left:before {
    position: relative;
    top: 1px;
  }
</style>
<template>
    <div class="main-page" @click="closeOverlay">
        <header class="header clear">
          <div @click="toggleSearchBox" class="homer-search-box lt clear">
            <p class="homer-search-icon lt fa fa-search">
            <p class="homer-search-text lt">搜索知乎内容</p>
          </div>
          <div @click="togglePop" class="rt fa fa-envelope"></div>
        </header>
        <section id="scrollBox" v-infinite-scroll="scrollLoadMore" infinite-scroll-distance="20" @scroll="scrolling($event)">
          <mt-loadmore  :top-method="loadTop" :maxDistance="80" :auto-fill=false ref="loadmore">
            <div id="scrollele" class="news-box">
              <div v-for="(item,index) in newsList" class="news-list">
                <news-head :newHead="item" @closePopHint="togglePopHint" :itemIndex="index"></news-head>
                <!--此router参数为日后做页面轮回查看保留   -->
                <router-link :to="{name:'detail',params:{detailId:item.id,history:false,fromPath:'home',detailId:item.id}}">
                    <news-body :newBody="item" ></news-body>
                </router-link>
              </div>
              <loading-animate v-show="isShowBottomLoading"></loading-animate>
            </div>
            <div slot="top" class="mint-loadmore-top">
              <loading-animate></loading-animate>
            </div>
          </mt-loadmore>
        </section>
        <mt-popup modal="false" position="right" v-model="showPop" class="cover-pop">
          <slot>
            <div>
              <div class="pop-header">
                <span @click="togglePop" class="fa fa-angle-left"></span>
                <span>私信</span>
              </div>
              <div class="pop-hint">
                暂没有私信
              </div>
            </div>
          </slot>
        </mt-popup>
        <mt-popup modal="false" position="right" v-model="isShowSearchBox" class="cover-pop" >
          <slot>
             <search-box :showSearchBox="isShowSearchBox" @closeSearchBox="toggleSearchBox"></search-box> 
          </slot>
        </mt-popup>
        <pop-hint id="popHint" v-show="isShowPopHint" :showPopHint="isShowPopHint" :removeItem="removeOnly" @closePopHint="togglePopHint">

        </pop-hint>
        <div v-for="item in createList" :is="item.component" :id="item.data"></div>
    </div>
</template>
<script>
    import NewsHead from "../../components/news/newsHead"
    import NewsBody from "../../components/news/newsBody"
    import {Popup,Loadmore,InfiniteScroll} from "mint-ui"
    import SearchBox from "../../components/searchBox"
    import PopHint from  "../../components/popHint"
    import {eventBus} from "../../eventBus/eventBus"
    import LoadingAnimate from "../../components/loading"
    import NewsArticle from "../../components/news/newsArticle"
    export default{
      components:{
        NewsHead,
        NewsBody,
        Popup,
        SearchBox,
        PopHint,
        Loadmore,
        InfiniteScroll,
        LoadingAnimate,
        NewsArticle
      },
      data(){
        return {
          showPop:false,
          isShowSearchBox:false,
          isShowPopHint:false,
          removeOnly:{},
          touchStartP:0,
          topLoaded:true,
          isShowBottomLoading:false,
          scrollLoaded:true,
          lastScrollTop:0,
          lastScrollTime:"",
          scrollDelay:100,
          createList:[],
        }
      },
      methods:{
        togglePop(){
          this.showPop=!this.showPop
        },
        toggleSearchBox(){
          this.isShowSearchBox=!this.isShowSearchBox
        },
        togglePopHint(pageY,id,index){
          if(pageY==undefined){
            pageY=0;
          }
          this.removeOnly={
            id:id,
            index:index
          }
          document.querySelector("#popHint").style.top=pageY+"px"
          this.isShowPopHint=!this.isShowPopHint
        },
        closeOverlay(){
          eventBus.$emit("close-overlay")
        },
        loadTop(){
          //判断防止上下同时加载数据
          if(!this.scrollLoaded)return
          this.topLoaded=false;
          this.$store.dispatch("getNewsList")
            .then(
              (data)=>{
                this.$refs.loadmore.onTopLoaded();
                this.topLoaded=true
              },
              (error)=>{
                console.log(error)
              }
            )
        },
        touchMoveStart(e){
          let rect=e.target.getBoundingClientRect();
          this.touchStartP=rect.top
        },
        touchMoving(e){
          let nowTop=e.touches[0].pageY
          let distance=nowTop-this.touchStartP;
          let scrollTop=document.querySelector("#scrollBox").scrollTop
          if(scrollTop==0||distance<0){
            
          }
        },
        scrollLoadMore(){
          //双重判断防止上下同时加载数据
          if(this.scrollLoaded&&this.topLoaded==true){
            this.scrollLoaded=false
            this.isShowBottomLoading=true
            this.$store.dispatch("downLoadNewsList")
              .then(
                (data)=>{
                  this.scrollLoaded=true
                  this.isShowBottomLoading=false
                },
              )
          }
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
      },
      computed:{
        newsList(){
          return this.$store.getters.get_hotNews
        }
      },
      mounted(){
        eventBus.$on("close-overlay",()=>{
          this.isShowPopHint=false
        })
      },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
            vm.$store.commit("TOOGLE_FOOTERBAR",{boolean:true})
        })
      }
    }
</script>
