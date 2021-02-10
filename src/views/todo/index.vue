<template>
	<div class="todo-page">
		<h1 class="title">Just to do</h1>
		<div class="todo-wrapper">
			<div class="input-wrapper">
				<a-input placeholder="What next to do" class="todo-input" v-model.trim="todo" @keyup.enter='add_todo'></a-input>
				<a-button type="primary" class="confirm-button" @click.stop="add_todo">确定</a-button>
			</div>
			<filtered 
				:current_filter="current_filter" 
				@set_filter="set_filter" 
				@clear="clear"
				:unfinished_todo_length="unfinished_todo_length"
			/>
			<div class="todo-list-wrapper" v-if="filter_todo_list.length">
				<todo-list :list="filter_todo_list" @delete="delete_todo"></todo-list>
			</div>
			<a-empty v-else description="暂无数据"></a-empty>
		</div>
	</div>
</template>

<script>
	import {Input,Empty} from 'ant-design-vue'
	import TodoList from '@/components/todo-list'
	import Filtered from '@/components/filtered'
	const ALL = 'all', UNFINISHED = 'unfinished', FINISHED = 'finished';
	export default {
		name:"todo",
		data(){
			return {
				todo:"",
				todo_list:[],
				current_filter:ALL
			}
		},
		components:{
			[Input.name]:Input,
			TodoList,
			[Empty.name]:Empty,
			Filtered
		},
		computed:{
			filter_todo_list(){
				if(this.current_filter == ALL){
					return this.todo_list;
				}
				if(this.current_filter == FINISHED){
					return this.todo_list.filter(todo => todo['completed'])
				}else{
					return this.todo_list.filter(todo => !todo['completed'])
				}
			},
			unfinished_todo_length(){
				return this.todo_list.filter(todo => !todo.completed).length;
			}
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
			},
			set_filter(filter){
				this.current_filter = filter;
			},
			delete_todo(id){
				let index = this.todo_list.findIndex(todo => todo['id'] == id);
				this.$confirm({
					title:"删除事项",
					content:h => <div style="color:#f81d22;">确定删除此条记录吗</div>,
					okText:"确定",
					cancelText:"我再想想",
					okType:"danger",
					onOk:() => {
						this.todo_list.splice(index,1);
					},
				})
			},
			clear(){
				if(!this.todo_list.length){
					this.$message.error("当前没有可删除的事项记录");
					return;
				}
				this.$confirm({
					title:"清空事项",
					content:h => <div style="color:#f81d22;">确定清空所有事项记录吗?</div>,
					onText:"确定",
					cancelText:"我再想想",
					okType:"danger",
					onOk:() => {
						this.todo_list = [];
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ant-modal-confirm-title{
		color:rgba(0,0,0,.65);
	}
	.todo-page{
		.title{
			padding-top:20px;
			font-style:italic;
			text-align:center;
			color:#c41d7f;
			font-size:36px;
			line-height:54px;
		}
		.todo-wrapper{
			margin:15px auto;
			width:600px;
			font-size:16px;
		}
		.input-wrapper{
			width:100%;
			display:flex;
			.todo-input{
				border-radius:0;
			}
		}
		.confirm-button{
			border-radius:0;
		}
		.ant-empty{
			padding-top:20px;
			color:rgba(0,0,0,.5);
		}
	}
</style>
