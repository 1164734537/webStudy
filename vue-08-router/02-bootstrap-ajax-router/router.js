;(function(){
    window.router = new VueRouter({
        // 设置全局类名 router-link 标签生成的 css 类名
        linkActiveClass:'active',
        routes:[
            {path: '/', component: AppHome}, 
            {
                path: '/news', 
                component: News,
                children:[
                    // 当匹配到/new/sport 请求时，
                    //组件 Sport 会被渲染在News 组件中的
                    {
                        //path:'/news/sport',
                        // 简写方式，等价于 /news/sport路径，注意前面没有/,有就是根目录了
                        path:'sport',
                        component:Sport,
                        children:[
                            {//配置详情请求路径
                             path:'/news/sport/detail/:id', //:id路径变量占位符
                             component:SportDetail
                            }
                        ]
                    },
                    {
                        path:'tech',
                        component:Tech,
                        children:[
                            {
                                // 点击栏目标题列表，查看详情
                                path:'/news/tech/detail/:id',
                                component: TechDetail
                            }
                        ] 
                    },
                    {
                        path:'',
                        redirect:'/news/sport'
                    }
                ]
        },
            {path: '/about', component: About} 
        ]
    })
}
)()