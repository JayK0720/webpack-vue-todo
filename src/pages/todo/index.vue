<template>
	<div class="todo-wrapper">
		<div class="todo-title">Just Todo</div>
		<div class="todo-container">
			<div class="input-wrapper">
				<input type="text" placeholder="接下来做点什么?" class="input" v-model="todo" @keyup.enter="add">
				<v-button @click="add">添加</v-button>
			</div>
			<tab @toggle="toggle" :current_tab="current_tab" :left="unfinished_items_left"/>
			<div class="list-wrapper">
				<template v-if="filtered_todo.length">
					<todo-list :list="filtered_todo" @delete="delete_todo"></todo-list>
				</template>
				<empty v-else/>
			</div>
		</div>
	</div>
</template>

<script>
	import VButton from '@/components/v-button'
	import TodoList from '@/components/todo-list'
	import Empty from '@/components/empty'
	import tab from '@/components/tab'
	const ALL = "all", FINISHED = 'finished';
	export default {
		name:'todo',
		data(){
			return {
				todo:"",
				todo_list:[],
				current_tab:ALL
			}
		},
		components:{
			VButton,
			TodoList,
			Empty,
			tab
		},
		computed:{
			unfinished_items_left(){
				return this.todo_list.filter(todo => !todo['completed']).length
			},
			filtered_todo(){
				if(this.current_tab == ALL){
					return this.todo_list;
				}
				let completed = this.current_tab == FINISHED;
				return this.todo_list.filter(todo => todo['completed'] == completed);
			}
		},
		methods:{
			add(){
				if(!this.todo){
					window.alert("代办事项不能为空");
					return;
				}
				let index = this.todo_list.findIndex(todo => todo['text'] == this.todo);
				if(index < 0){
					this.todo_list.unshift({
						text:this.todo,
						completed:false,
						id:Date.now()
					});
				}else{
					window.alert("该代办事项已添加,不能重复添加");
					return;
				}
				this.todo = "";
			},
			delete_todo(id){
				let index = this.todo_list.findIndex(todo => todo['id'] == id);
				this.todo_list.splice(index,1);
			},
			toggle(tab){
				this.current_tab = tab;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.todo-wrapper{
		margin:50px auto 0;
		width:600px;
	}
	.todo-title{
		text-align:center;
		font-size:40px;
		font-style:italic;
		color:#fbbbb5;
	}
	.input-wrapper{
		padding-top:30px;
		height:40px;
		display:flex;
	}
</style>
