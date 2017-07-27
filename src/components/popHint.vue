<style lang="less" scoped>
.pop-hint-box{
    background: #fff;
    width:2rem;
    height: 1rem;
    position: absolute;
    top:0px;
    left:1.49rem;
    z-index: 10;
    padding: 0.1rem 0.1rem;
    font-size: 0.2rem;
    border-radius: 3px;
    border: 1px solid #B2C1D1;
    .hint-type>p{
        line-height: 0.35rem;
        cursor:pointer;
    }
}
.contact-type-box{
    width:100%;
    color:#fff;
    .contact-type-list-box>li{
        float:left;
        width:25%;
        text-align:center;
        line-height:0.4rem;
    }
}
</style>
<template>
    <div class="pop-hint-box">
        <div class="hint-type" v-show="hintType" @click="isClick">
            <p @click.stop="toggleContactPop">分享</p>
            <p @click.stop="removeNews">不感兴趣</p> 
        </div>
        <mt-popup v-model="isShowContactPop" position="bottom" model="false" class="contact-type-box">
            <slot>
                <ul class="contact-type-list-box clear" @click.stop="alertShareBox">
                    <li>新浪</li>
                    <li>微信</li>
                    <li>QQ</li>
                    <li>GitHub</li>
                    <li>QQ</li>
                    <li>GitHub</li>
                    <li>新浪</li>
                    <li>微信</li>
                </ul>
            </slot>
        </mt-popup>
    </div>
</template>
<script>
    import {Popup,Toast} from "mint-ui"
    export default{
        props:{
            showPopHint:{
                type:Boolean,
                default:false,
            },
            removeItem:{
                type:[Object]
            },
        },
        components:{
            Popup,
            Toast
        },
        data(){
            return {
                isShowContactPop:false,
                hintType:true
            }
        },
        methods:{
            toggleContactPop(){
                this.isShowContactPop=!this.isShowContactPop
            },
            closePopHint(){
                this.$emit("closePopHint")
            },
            alertShareBox(){
                let time=1000;
                Toast({
                    message:"分享成功!",
                    position:"middle",
                    duration:time,
                });
                setTimeout(()=>{
                    this.toggleContactPop();
                    this.closePopHint();
                }, time+100);
            },
            removeNews(){
                this.$store.commit('REMOVE_NEWS',this.removeItem);
                this.closePopHint();
            },
            isClick(){
                console.log("parent-click")
            }
        }
    }
</script>