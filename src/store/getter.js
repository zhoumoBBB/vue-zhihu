let getters={
        get_hotNews:(state)=>{
            return state.home.hot_news
        },
        get_showFooterBar:(state)=>{
            return state.show_footerBar
        },
        get_aliveRouter:(state)=>{
            return state.live_router
        }
}
export {getters}