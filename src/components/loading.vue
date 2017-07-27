<style lang="less" scoped>
@keyframes scale {
  0% {
      transform: scale(1);
      opacity: 1; 
  }
  45% {
    transform: scale(0.1);
    opacity: 0.7;
  }
  80% {
    transform: scale(1);
    opacity: 1;
  }
}
.ball-pulse{
    text-align: center;  
}
.ball-pulse > div:nth-child(1) {
          animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.ball-pulse > div:nth-child(2) {
          animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.ball-pulse > div:nth-child(3) {
          animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}

.ball-pulse > div {
  background-color: #1D8AE7;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
}
.mint-loadmore-top>.ball-pulse{
  margin-left:-0.8rem;
}
</style>
<template>
    <div class="loader-inner ball-pulse">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                
            }
        }
    }
</script>
