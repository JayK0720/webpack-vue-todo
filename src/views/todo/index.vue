<template>
	<div class="todo-page">
		<h1 class="title">Just to do</h1>
		<div class="todo-wrapper">
			<div class="input-wrapper">
				<a-input placeholder="What next to do" class="todo-input" v-model.trim="todo" @keyup.enter='add_todo'></a-input>
				<a-button type="primary" class="confirm-button" @click.stop="add_todo">确定</a-button>
			</div>
			<div class="todo-list-wrapper">
				<ul class="todo-list">
					<li v-for="(todo,index) in todo_list" :key="'todo-'+index" class="todo-item">
						<a-checkbox v-model='todo["completed"]'></a-checkbox>
						<span class="todo-text" :class="{'completed': todo.completed ? true : false}">{{todo['text']}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {Input,Checkbox} from 'ant-design-vue'
	export default {
		name:"todo",
		data(){
			return {
				todo:"",
				todo_list:[]
			}
		},
		components:{
			[Input.name]:Input,
			[Checkbox.name]:Checkbox
		},
		methods:{
			add_todo(){
				if(!this.todo){
					this.$message.warning("添加的事项不能为空");
					return;
				}
				let find_todo = this.todo_list.find((todo) => todo['text'] == this.todo);
				if(find_todo){
					this.$message.warning("该事项已经添加,请勿重复操作");
					return;
				}
				let id = new Date().getTime();
				this.todo_list.push({
					completed:false,
					id,
					text:this.todo
				})
				this.todo = "";
			}
		}
	}
</script>

<style lang="scss" scoped>
	.todo-page{
		.title{
			padding-top:20px;
			text-align:center;
			color:rgba(0,0,0,.65);
			font-size:36px;
			line-height:50px;
		}
		.todo-wrapper{
			margin:15px auto;
			width:600px;
			font-size:16px;
		}
		.input-wrapper{
			width:100%;
			display:flex;
		}
		.confirm-button{
			margin-left:10px;
		}
		.todo-item{
			line-height:46px;
			border-bottom:1px solid #e8e8e8;
			.todo-text{
				padding-left:10px;
				&.completed{
					color:rgba(0,0,0,.3);
					text-decoration:line-through;
				}
			}
		}
	}
</style>
