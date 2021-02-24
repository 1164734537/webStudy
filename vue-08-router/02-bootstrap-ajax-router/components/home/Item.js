;(function(){
    const template =`<tr>
    <td>{{emp.id}}</td>
    <td>{{ emp.name }}</td>
    <td>{{ emp.salary }}</td>
    <a href="#" @click="deleteItem">删除</a>
  </tr>`
  window.Item = {
    props:{
      emp:{
        type:Object,
        required:true
      },
      deleteEmp:Function,
      index:Number
    },
      template,
      methods: {
        deleteItem(){
          if(window.confirm(`确定删除${this.emp.name}的记录嘛？`)){
            this.deleteEmp(this.index)
          } 
          
        }
      },
  }
})()