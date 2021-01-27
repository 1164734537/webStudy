(function (Vue) { //表示依赖了全局的Vue
	 'use strict';
// 
	var STORAGE_KEY ='items-vuejs';
	
	//本地存储数据对象
	const itemStorage = {
		fetch:function(){//获取本地数据 JSON.parse() 方法用于将一个 JSON 字符串转换为对象
			return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');
		},
		save:function(items){//保存数据到本地 JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串
			localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
		}
	};
	// 初始化
	const items = [];

	// 注册全局指令

	
	Vue.directive('app-focus',{
		inserted:function(el,binding){
			el.focus()
		}
	});

	var app = new Vue({
		el:'#todoapp',
		data:{
			// items,
			items:itemStorage.fetch(),   //ES6 对象属性简写，等价于items:items
			currentItem: null, //定义当前点击的项
			filterStatus: 'all'
		},
		// 监听器
		watch:{
			items:{
				deep:true, //发现对象内部值的变化，要在选项参数中指定 deep:true
				handler:function(newItems,oldItems){
					// 本地进行存储
					itemStorage.save(newItems)
				}
			}
		},
		// 定义局部指令，用于编辑输入框
		directives:{
			'todo-focus':{
				// 更新的时候自动获取焦点
				update(el,binding) {//当指令的值更新后，会调用这个函数
					// el.focus()
					// console.log(binding)
					console.log(binding.value)
					if(binding.value){
						el.focus()
					}
				},
			}
		},
		methods: {
			addItem(event){ //对象属性函数简写，等价于 addItem: function(){}
				console.log('addItem',event.target.value);
				// 1.获取文本框输入的数据
				const content = event.target.value.trim()
				// 2.判断是否为空
				// console.log(content.length)
				if(!content.length){
					return 
				}
				console.log('非空');
				//3.内容不为空 把内容添加入items    准备好 id content completed
				// 生成id 
				// const id = this.items.length + 1;
				const id = this.items.length ? this.items[this.items.length - 1].id + 1 : 1;
				console.log(id)
				this.items.push({
					id,  //等价于 id:id
					content,
					completed:false
				})
				// 4.清空输入框内容
				event.target.value = ''
			},
			removeItem(index){
				console.log('removeItem',index);
				this.items.splice(index,1);

				// 数组长度发生改变 id值发生改变 要把id 进行重新赋值？
				// console.log(this.items);
			},
			removeCompleted(){
				console.log(this.items.filter(item=>!item.completed))
				this.items = this.items.filter(item=>!item.completed)
			},
			toEdit(item){
				 console.log('edit',item.content);
				return this.currentItem = item;
				
			},
			// 取消编辑
			cancelEdit(){
				// 移除样式
				console.log('1');
				this.currentItem = null
			},
			finishEdit(item,index,event){
				console.log(event.target.value.trim())
				const content = event.target.value.trim();
				// 判断值是否为空
				if(!event.target.value.trim()){
					this.removeItem(index);
					return
				}
				item.content= content;
				// 失去焦点移除样式
				this.currentItem = null

			}
		},
		computed:{
			// 过滤出所有未完成的任务项
			remaining(){
				// return this.items.filter(function(item){
				// 	return !item.completed
				// }).length

				// ES6箭头函数
				return this.items.filter(item => !item.completed).length
			},
			toggleAll:{
				get(){
					console.log('get');
					// 当所有项目都是完成的时候， 显示光亮 
					// 当 remaining 的值为 0 时 显示光亮 
					// console.log(this.remaining);
					return this.remaining === 0
				},
				set(newValue){
					console.log('set','当前的值',newValue);
					//1.获得当前的新值，然后遍历 赋值 到每一个item.completed 
					// this.items.forEach(function(item){
					// 	item.completed = newValue
					// 	console.log(item.completed);
					// })
					this.items.forEach(item=>item.completed = newValue);
				}
			},
			ﬁlterItems(){
				console.log('add');
				switch(this.filterStatus){
					case "active": //未完成
						return this.items.filter(item=>!item.completed)
						break
					case "completed"://已完成
						return this.items.filter(item=>item.completed)
						break
					default:
						return this.items 
				}
			}

		}
	})

	// 当路由 hash 值改变之后会自动调用此函数
	window.onhashchange = function(){
		console.log(window.location.hash)

		// 1.获取点击的路由hash，当截取的hash 不为空返回截取部分，为空返回 'all'
		var hash = window.location.hash.substr(2) || 'all'

		// 2.状态一旦改变，将hash复制给filterStatus
		// 当计算属性filterItems 感知到filterStatus 变化后，就会重新过滤
		// 当filterItems 重新过滤出目标数据后，则自动同步更新到视图中
		app.filterStatus = hash
	}
	// 第一次访问页面时,调用一次让状态生效
	window.onhashchange()
	
	// Your starting point. Enjoy the ride!

})(Vue);
