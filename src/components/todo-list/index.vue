<template>
	<ul class="list">
		<li v-for="(todo,index) in list" :key="'todo-'+index" class="todo-item">
			<div class="left">
				<input type="checkbox" v-model="todo['completed']" :id="'check-'+index">
				<label class="todo" :class="{completed:todo['completed'] ? true : false}" :for="'check-'+index">{{todo['text']}}</label>
			</div>
			<span class="close-button" @click.stop="delete_todo(todo['id'])">
				<svg 
					viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
				</span>
		</li>
	</ul>
</template>

<script>
	export default {
		name:'todo-list',
		props:{
			list:{
				type:Array,
				default:function(){
					return []
				}
			}
		},
		methods:{
			delete_todo(id){
				this.$emit("delete",id);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list{
		.todo-item{
			display:flex;
			height:60px;
			justify-content:space-between;
			padding-right:12px;
			align-items:center;
			border-bottom:1px solid #e8e8e8;
			user-select:none;
		}
		.todo{
			padding-left:5px;
			color:rgba(0,0,0,.65);
			font-size:18px;
			&.completed{
				color:#999;
				text-decoration:line-through;
				font-style:italic;
			}
		}
		.close-button{
			font-size:14px;
			cursor:pointer;
			transition:all .3s;
			&:hover{
				color:rgb(240,20,20);
			}
		}
	}
</style>
