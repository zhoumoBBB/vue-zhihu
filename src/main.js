import Vue from 'vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import MintUi from "mint-ui"
import "mint-ui/lib/style.css"
import "animate.css"
import "font-awesome.css"

import Rem from "./config/rem"
import routes from "./router/router"
import {store} from "./store/index"

import footerBar from "./components/footerBar"
import "./style/overall_common.less"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(MintUi)
let router=new VueRouter(routes)
let vm=new Vue({
  el: '#app',
  router,
  store,
  components:{footerBar},
  computed:{
    showFooterBar(){
      return this.$store.getters.get_showFooterBar
    },
  }
})
