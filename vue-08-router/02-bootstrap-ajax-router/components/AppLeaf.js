;(function(){
    const template=`<div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active">
        <router-link to="/">首页</router-link> 
      </li>
      <li>
       <router-link to="/news">新闻管理</router-link> 
      </li>
      <li>
      <router-link to="/about">关于我们</router-link> 
      </li>
    </ul>
  </div>`
  window.AppLeaf={
      template
  }
})()