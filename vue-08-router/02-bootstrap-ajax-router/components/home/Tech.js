;(function(){
    const template =`
    <!--科技栏目-->
    <div>
        <ul >
            <li v-for="(tech,index) in techArr" :key="tech.id">
                <span>{{tech.title}} </span>
                <button class="btn  btn-default btn-xs" @click="pushTech(tech.id)">查看(Push)</button>&nbsp;
                <button class="btn btn-default btn-xs" @click="replaceTech(tech.id)">查看(replace)</button>
            </li>
        </ul>
        <button @click="$router.back()">后退</button>
        <!--详情
        <div class="jumbotron">
            <h2>世界杯开赛啦</h2>
            <p>世界杯于明晚8点举行开幕式.....</p>
        </div>
        -->
        <router-view></router-view>
    </div>
    `
    window.Tech = {
        data() {
            return {
                techArr:[]
            }
        },
        // 钩子一步加载数据


        
        created() {
            this.getTechArr()
        },
        methods: {
            pushTech(id){
                // push 可后退回来
                // 是$router,有字母r路由器.用的反单引号``拼接
                this.$router.push(`/news/tech/detail/${id}`)

            },
            replaceTech(id){
                // replace不可后退回来
                this.$router.replace(`/news/tech/detail/${id}`)
            },
            getTechArr(){
                axios.get('http://127.0.0.1:8080/vue-08-router/02-bootstrap-ajax-router/db/tech.json')
                .then(response=>{
                    console.log(response.data,this)
                    this.techArr = response.data
                } )
                .catch(error =>{
                    alert(error.message)
                })
            }
        },
        template,
    }

})()