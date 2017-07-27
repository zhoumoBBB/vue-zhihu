const REMOVE_NEWS="REMOVE_NEWS"
const GET_DETAILPAGE="GET_DETAILPAGE"
const TOOGLE_FOOTERBAR="TOOGLE_FOOTERBAR"
const TOGGLE_ROUTERVIEW="TOGGLE_ROUTERVIEW"
let mutations={
    REMOVE_NEWS(state,newsOnly){
        state.home.hot_news.splice(newsOnly.index,1)
    },
    TOOGLE_FOOTERBAR(state,toogle){
        state.show_footerBar=toogle.boolean
    },
    TOGGLE_ROUTERVIEW(state){
        state.live_router=!state.live_router
    }
}

export {mutations}