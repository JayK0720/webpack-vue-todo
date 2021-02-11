<template>
	<ul class="todo-list">
		<li v-for="(todo,index) in list" :key="'todo-'+index" class="todo-item">
			<a-checkbox v-model='todo["completed"]'></a-checkbox>
			<span class="todo-text" :class="{'completed': todo.completed ? true : false}">{{todo['text']}}</span>
			<span class="delete-text" @click.stop="delete_todo(todo['id'])">
				<a-icon type="close" class="close-icon"/>
			</span>
		</li>
	</ul>
</template>

<script>
	import {Checkbox,Icon} from 'ant-design-vue'
	export default {
		name:"todo-list",
		props:{
			list:{
				type:Array,
				default:function(){
					return []
				}
			}
		},
		components:{
			[Checkbox.name]:Checkbox,
			[Icon.name]:Icon
		},
		methods:{
			delete_todo(id){
				this.$emit("delete",id);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.todo-item{
		display:flex;
		height:56px;
		line-height:56px;
		align-items:center;
		padding:0 10px;
		border-bottom:1px solid #e8e8e8;
		&:hover{
			.delete-text{
				opacity:1;
			}
		}
		.todo-text{
			flex:1;
			padding-left:10px;
			align-items:center;
			user-select:none;
			&.completed{
				color:rgba(0,0,0,.3);
				text-decoration:line-through;
			}
		}
		.delete-text{
			cursor:pointer;
			color:rgba(0,0,0,.45);
			font-size:13px;
			user-select:none;
			opacity:0;
			&:hover{
				color:#ff4d4f;
			}
			.close-icon{
				font-size:16px;
			}
		}
	}
</style>
