<style lang="less" scoped>
  .footer-bar{
    width:100%;
    position: fixed;
    bottom: 0px;
    font-size: 1.6rem;
    box-shadow: 0px 0px 6px #000;
    background:#fff;
    transition:all .3s linear;
    .footer-bar-item{
      width:20%;
      text-align: center;
      font-size:20px;
      float:left;
      padding:0.1rem 0rem;
    }
  }
  .router-link-exact-active.active{
    color:#1C8BE7;
  }
  .footer-bar.down{
    bottom:-0.5rem;
  }
  /* .footer-bar {
    -vendor-animation-duration: 3s;
    -vendor-animation-delay: 2s;
    -vendor-animation-iteration-count: 1;
  } */
</style>
<template>
    <div :class="{down:isDown}" class="footer-bar">
      <router-link :to="{name:'home'}" tag="div" class="footer-bar-item active">首页</router-link>
      <router-link :to="{name:'discover'}" tag="div" class="footer-bar-item active">发现</router-link>
      <router-link :to="{name:'bazaar'}"tag="div" class="footer-bar-item active">市场</router-link>
      <router-link :to="{name:'infrom'}"tag="div" class="footer-bar-item active">通知</router-link>
      <router-link :to="{name:'more'}"tag="div" class="footer-bar-item active">更多</router-link>
    </div>
</template>
<script>
    import {eventBus} from "../eventBus/eventBus"
    export default{
      data(){
        return {
          isDown:false
        }
      },
      mounted(){
        eventBus.$on("slide-footer",(judge)=>{
          if(judge=="down"){
            this.isDown=true;
          }else{
            this.isDown=false
          }
        })
      },
    }
</script>
