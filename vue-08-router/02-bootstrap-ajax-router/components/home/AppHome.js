;(function(){
    const template =`<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
  
    <!--右边上半区域-->
    <!--<h1 class="page-header">Dashboard</h1>-->
    <!--定义插槽-->
    <slot name="dashboard"></slot>
      <dashboard @delete_hobby="deleteHobby" :hobbies="hobbies"></dashboard>
    <!--右边下半区域-->      
        <h2 class="sub-header">Section title</h2>
        <home-list :emp-list="empList" :deleteEmp="deleteEmp"></home-list>
      </div>`
      window.AppHome = {
          template,
          data(){
            return{
              hobbies:['看书','台球','睡觉','撸代码'],
              empList:[]
            }
          },
          created() {
            axios.get('http://127.0.0.1:8080/vue-08-router/02-bootstrap-ajax-router/emp.json')
            .then(respone =>{
              console.log(respone.data);
              this.empList = respone.data
            })
            .catch(error =>{
              console.log(error.message)
            })
          },
          methods: {
            deleteEmp(index){
              this.empList.splice(index,1)
            },
            // 删除爱好
            deleteHobby(index){
              this.hobbies.splice(index,1)
            }
          },
          components:{
            Dashboard,
            HomeList
          }   
      }
})()