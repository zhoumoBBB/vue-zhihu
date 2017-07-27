import HomePage from "../pages/home/index"
import DiscoverPage from "../pages/discover/discover"
import BazaarPage from "../pages/bazaar/bazaar"
import InformPage from "../pages/inform/inform"
import MorePage from "../pages/more/more"
import DetailPage from "../pages/article/detail"
import QuestionPage from "../pages/article/question"

let routes={
  mode: 'history',
  routes:[
    {
      path:"/",
      name:"home",
      component:HomePage,
    },
    {
      path:"/discover",
      name:"discover",
      component:DiscoverPage
    },
    {
      path:"/bazaar",
      name:"bazaar",
      component:BazaarPage
    },
    {
      path:"/infrom",
      name:"infrom",
      component:InformPage
    },
    {
      path:"/more",
      name:"more",
      component:MorePage
    },
    {
      // path:"/detail/:detailId/:history",
      // name:"detail",
      // component:DetailPage,
      path:"/detail",
      name:"detail",
      component:DetailPage,
    },
    {
      path:"/question",
      name:"question",
      component:QuestionPage
    },
  ],
  scrollBehavior(to,from,savedPosition){
    // console.log(arguments)
    // console.log(savedPosition)
  }
}
export default routes
