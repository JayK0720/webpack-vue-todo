<template>
	<div class="todo-wrapper">
		<div class="todo-title">Just Todo</div>
		<div class="todo-container">
			<div class="input-wrapper">
				<v-input placeholder="接下来做点什么?"></v-input>
				<v-button @click="add">添加</v-button>
			</div>
			<todo-list :list="todo_list"></todo-list>
		</div>
	</div>
</template>

<script>
	import VButton from '@/components/v-button'
	import VInput from '@/components/v-input'
	import TodoList from '@/components/todo-list'
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
			TodoList
		},
		methods:{
			add(){
				
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
	.input-wrapper{
		padding-top:20px;
		height:32px;
		display:flex;
	}
</style>
