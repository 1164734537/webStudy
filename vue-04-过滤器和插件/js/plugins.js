(function(){
    // 声明 MyPlugin 插件对象
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 属性 
        Vue.myGlobalMethod = function () {
          // 逻辑...
          alert('MyPlugins.myGlobalMethod全局方法调用了')
        }
      
        // 2. 添加全局指令
        Vue.directive('my-directive', {
           inserted(el, binding) {
            // 逻辑...
            el.innerHTML = "MyPlugin.my-directive指令被调用了" +binding.value
          }
        })
      
        // 3. 注入组件选项
        // Vue.mixin({
        //   created: function () {
        //     // 逻辑...
        //   }
        // })
      
        // 4. 添加实例方法 new Vue()
        Vue.prototype.$myMethod = function (value) {
          // 逻辑...
            alert('Vue 实例方法myMethod被调用了:'+value)
        }
      }

     //将插件添加 到 window 对象
      window.MyPlugin = MyPlugin
})()