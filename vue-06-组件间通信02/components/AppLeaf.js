;(function(){
    const template=`<div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active">
      <a href="#">Overview 
      <!--是否显示和显示总删除数-->
      <span v-show="delNum">({{delNum}})</span>
      </a>
      </li>

      <li><a href="#">Reports</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Export</a></li>
    </ul>
  </div>`
  window.AppLeaf={
      template,
      data(){
        return {
          delNum:0 //初始化数量
        }
      },
      created(){
        // 一开始初始化实例时，就进行订阅消息
        PubSub.subscribe('changeNum',(event,num)=>{
          // 箭头函数
          // 删除成功
          this.delNum = this.delNum + num
          //console.log('触发成功')
        })
      }
  }
})()