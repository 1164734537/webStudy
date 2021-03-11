;(function(){
    const template =`
     <div class="jumbotron">
         <h1>ID: {{ id }}</h1>        
         <h2>{{sportDetail.title}}</h2>
         <p>{{sportDetail.content}}</p>
     </div>
    `
    window.SportDetail={
        data() {
            return {
                id:null,
                sportDetail:{}
            }
        },
        created() {
            // 注意：
            // 1.是$route,最后没有r字母
            // 2.created 钩子只会调用1次，当切换标题列表的路由时，此钩子不会再次调用，
            // 所以对应ID
            this.getSportById()
        },
        methods: {
            getSportById(){
                // 将路径变量赋值给id
                this.id = this.$route.params.id-0
                // 1.异步获取所有数据
                axios.get('http://127.0.0.1:8080/vue-08-router/02-bootstrap-ajax-router/db/Sport.json')
                .then(response => {
                    const sportArr = response.data
                    // 2.通过id获取指定数据
                    // find 会将满足条件的数据返回，仅返回一条
                    this.sportDetail = sportArr.find((detail)=>{
                        // this 要代表当前组件实现，则要使用箭头函数
                        return detail.id = this.id
                    })
                })
                .catch(error =>{
                    alert(error.message)
                })
            }, 
        },
        watch:{//是对象，不是函数
            //使用watch 监听 $route 路由的变化，获取ID值
            '$route':function(){
                this.getSportById()
                console.log('$router改变了',this.id)
            }

        },
        template
    }
})()