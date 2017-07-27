//此处定时器模拟请求时间
let actions={
        getNewsList(context){
            let index=parseInt(Math.random()*context.state.home.hot_news.length)
            let newItem=context.state.home.hot_news[index]
            let old=context.state.home.hot_news.length;
            return new Promise((resolve,reject)=>{
                setTimeout(function() {
                    context.state.home.hot_news.unshift(newItem)
                    resolve(context.state.home.hot_news)
                }, 3000)
            })
        },
        downLoadNewsList(context){
            return new Promise((resolve,reject)=>{
                setTimeout(function() {
                    let newList=context.state.home.standby_news
                    context.state.home.hot_news=context.state.home.hot_news.concat(context.state.home.standby_news)
                    resolve(context.state.home.hot_news)
                }, 2000)
            })
        },
        getDeatilPage(context,pageId){
            return new Promise((resolve,reject)=>{
                setTimeout(function() {
                    let pageData=context.state.detail_article[pageId.pageId]
                    resolve(pageData)
                }, 800);
            })
        },
        getQuestionPage(context,questionId){
            return new Promise((resolve,reject)=>{
                setTimeout(function() {
                    let questionData=context.state.question_list[questionId.questionId]
                    resolve(questionData)
                }, 800);
            })
        }
}
export {actions}