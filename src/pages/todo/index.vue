<template>
	<div class="todo-wrapper">
		<div class="todo-title">Just Todo</div>
		<div class="todo-container">
			<div class="input-wrapper">
				<v-input placeholder="接下来做点什么?" v-model="todo" @keyup="add"></v-input>
				<v-button @click="add">添加</v-button>
			</div>
			<div class="list-wrapper">
				<template v-if="todo_list.length">
					<todo-list
						:list="todo_list"
						@delete="delete_todo"
					></todo-list>
				</template>
				<empty v-else/>
			</div>
		</div>
	</div>
</template>

<script>
	import VButton from '@/components/v-button'
	import VInput from '@/components/v-input'
	import TodoList from '@/components/todo-list'
	import Empty from '@/components/empty'
	export default {
		name:'todo',
		data(){
			return {
				todo:"",
				todo_list:[]
			}
		},
		components:{
			VButton,
			VInput,
			TodoList,
			Empty
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
			},
			delete_todo(id){
				let index = this.todo_list.findIndex(todo => todo['id'] == id);
				this.todo_list.splice(index,1);
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
		font-size:36px;
		font-style:italic;
		color:#fbbbb5;
	}
	.list-wrapper{
		padding-top:15px;
	}
	.input-wrapper{
		padding-top:20px;
		height:32px;
		display:flex;
	}
</style>
