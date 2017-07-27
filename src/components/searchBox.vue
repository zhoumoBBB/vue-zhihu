<style lang="less">
.search-box{
    .input-box{
        background:#1D8AE7;
        width:100%;
        padding:0.1rem 4%;
        span{
            line-height:0.49rem;
            width:0.4rem;
            background: #fff;
            text-align: center;
            color: #000;
            font-size: 0.24rem;
        }
    }
}
.input-control{
    background: #fff;
    line-height:0.49rem;
    margin-left:-1px;
    >input{
        height:0.29rem;
        width:3rem;
        font-size:0.2rem;
    }
}
.mint-tab-item-label{
    font-size:0.2rem;
}
.mint-cell-text{
    font-size:0.18rem;
}
.search-box>.input-box>.fa-angle-left{
    font-size:0.3rem;
}
.fa-angle-left:before {
    position: relative;
    top: -3px;
}
</style>
<template>
    <div class="search-box">
        <div class="input-box clear">
            <span @click="sendToggleSearchBox" class="fa fa-angle-left lt"></span>
            <div class="input-control lt">
                <input v-model="searchEssay" placeholder="搜索知乎内容">
            </div>
        </div>
        <div>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">综合</mt-tab-item>
                <mt-tab-item id="2">用户</mt-tab-item>
                <mt-tab-item id="3">话题</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <mt-cell v-for="item in list.synthesize" :title="item" :key="item"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 4" :title="'用户' + n" :key="n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell v-for="item in list.topic" :title="item" :key="item"/>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
    import { Navbar, TabItem } from 'mint-ui';
    export default{
        props:{
            showSearchBox:{
                type:Boolean
            }
        },
        components:{
            Navbar, 
            TabItem,
        },
        data(){
            return {
                searchEssay:"",
                selected:"1",
                list:{
                    "synthesize":["node网易云音乐","web服务器","怎么扎实自己的JavaScript基础","哪些不错的书籍","node 爬虫"],
                    "topic":["你知道什么苦涩的故事","腹有诗书气自华是真的吗？","你有哪些误伤队友的操作？","从艺术层面考虑,蒋介石的书法是什么水平","未来百度、阿里巴巴、腾讯谁会独领风骚？"]
                }
            }
        },
        methods:{
            sendToggleSearchBox(){
                this.$emit("closeSearchBox")
            }
        }
    }
</script>