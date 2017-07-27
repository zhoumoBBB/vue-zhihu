<style lang="less" scoped>
.content-control{
    width:100%;
    position:fixed;
    bottom:0;
    left:0px;
    background:#fff;
    box-shadow: 0px 0px 6px #000;
    >div{
        width:18%;
        float:left;
        text-align:center;
        position:relative;
        top:0.09rem;
    }
    >div:nth-child(2){
        margin-left:0.15rem;
    }
    >div:nth-child(1){
        width:23%;
        padding-left:1%;
        margin-left:1%;
    }
}
.praise-box{
    border:2px solid #D4D4D4;
    border-radius: 4px;
    height:0.5rem;
    width:0.8rem;
    .praise-arrow{
        i{
            display:block;
            width:0.3rem;
            position:relative;
        }
        i:nth-child(1){
            top:-0.04rem;
        }
        i:nth-child(2){
            top:-0.18rem;
        }
    }
    span{
        float:left;
    }
    span:nth-child(2){
        margin-top:10px;
        font-size:0.18rem;
    }
}
</style>
<template>
    <div class="content-control clear">
        <div class="">
            <div class="praise-box clear">
                <span class="praise-arrow">
                    <i class="fa fa-caret-up fa-2x"></i>
                    <i class="fa fa-caret-down fa-2x"></i>
                </span>
                <span>345</span>
            </div>
        </div>
        <div>
            <i @click="toggleState('help')" :class="[!help?'fa-flag-o':'fa-flag']" class="fa fa-2x" ></i>
            <p>没有帮助</p>
        </div>
        <div>
            <i @click="toggleState('thank')" :class="[!thank?'fa-heart-o':'fa-heart']" class="fa  fa-2x"></i>
            <p>感谢</p>
        </div>
        <div>
            <i @click="toggleState('collect')" :class="[!collect?'fa-star-o':'fa-star']" class="fa fa-2x"></i>
            <p>收藏</p>
        </div>
        <div>
            <i @click="toggleState('comment')" :class="[!comment?'fa-comment-o':'fa-comment']" class="fa fa-2x"></i>
            <p>4356</p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                help:false,
                thank:false,
                collect:false,
                comment:false,
            }
        },
        methods:{
            toggleState(name){
                this[name]=!this[name]
            }
        }
    }
</script>

