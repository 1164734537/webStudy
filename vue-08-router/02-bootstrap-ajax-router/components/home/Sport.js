;(function(){
    const template = `
    <!--体育栏目-->
    <div>
        <ul>
            <li v-for="(sport,index) in sportArr" :key="sport.id">
                <!--
                     <a href="#">{{ sport.title }}</a>
                -->
                <router-link :to="'/news/sport/detail/' + sport.id">
                    {{ sport.title }}
                </router-link>
            </li>
        </ul>
        <!--详情
        -->
        <router-view></router-view>
    </div>`

    window.Sport = {
        data(){
            return {
             sportArr:[],
            } 
        },
        // 钩子函数异步加载数据
        created(){
            this.getSportArr()
        },
        methods:{
            getSportArr(){
                axios.get('http://127.0.0.1:8080/vue-08-router/02-bootstrap-ajax-router/db/sport.json')
                .then(response =>{
                    console.log(response.data,this)
                    this.sportArr = response.data
                })
                .catch(error =>{
                    alert(error.message)
                })
            }
        },
        template,

    }
})()