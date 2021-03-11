;(function(){
    const template =`
        <div class="jumbotron">
           <h2>{{ techDetail.title }}</h2>
           <p>{{ techDetail.content }}</p>
        </div>
    `
    window.TechDetail = {
        template,
        data() {
            return {
                techDetail:{}
            }
        },
        created() {
            this.getTechById()
        },
        methods: {
            getTechById(){
                // 1.获取路径变量id值
                const id = this.$route.params.id-0
                // 2.获取所有数据信息
                axios.get('http://127.0.0.1:8080/vue-08-router/02-bootstrap-ajax-router/db/tech.json')
                .then(response =>{
                    const techArr = response.data
                    // 3.筛选出指定id的数据
                    this.techDetail = techArr.find(tech =>{
                        return tech.id === id
                    })
                })
                .catch(error =>{
                   alert(error.message)
                })
            } 
        },
        watch:{//是对象，不是函数
            // 使用watch 监听 $route 路由的变化，获取id值
            'route':function(){
                this.getTechById()
            }

        }
    }
})()