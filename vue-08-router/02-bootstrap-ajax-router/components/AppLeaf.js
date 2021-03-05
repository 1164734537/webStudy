;(function(){
    const template=`<div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
    <!--
      <li class="active">
        <router-link to="/">首页</router-link> 
      </li>
      <li>
       <router-link to="/news">新闻管理</router-link> 
      </li>
      <li>
      <router-link to="/about">关于我们</router-link> 
      </li>

      active-class 更改类名
      <router-link to="/" tag="li" active-class="active" ><a>首页</a></router-link>
    -->
      <router-link to="/" tag="li" exact><a>首页</a></router-link>
      <router-link to="/news" tag="li"><a>新闻管理</a></router-link>
      <router-link to="/about" tag="li"><a>关于我们</a></router-link> 
    </ul>
  </div>`
  window.AppLeaf={
      template
  }
})()