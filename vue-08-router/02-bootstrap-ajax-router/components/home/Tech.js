;(function(){
    const template =`
    <!--科技栏目-->
    <div>
        <ul >
            <li v-for="(tech,index) in techArr" :key="tech.id">
                <span>{{tech.title}} </span>
                <button class="btn  btn-default btn-xs">查看(Push)</button>&nbsp;
                <button class="btn btn-default btn-xs">查看(replace)</button>
            </li>
        </ul>
        <!--详情-->
        <div class="jumbotron">
            <h2>世界杯开赛啦</h2>
            <p>世界杯于明晚8点举行开幕式.....</p>
        </div>
    </div>
    `
    window.Tech = {
        data() {
            return {
                techArr:[]
            }
        },
        created() {
            this.getTechArr()
        },
        methods: {
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