import Vue from 'vue';

Vue.component('button-counter',{
    template:`<button @click="handleClick">
           you clicked me {{count}} times
    </button>`,
    data:function(){
        return {
            count:0
        }
    },
    methods:{
        handleClick(){
            this.count++;
        }
    }
})

const ChildComponent = {
    template:`<div>
        <p>{{msg}}</p>
        <p v-show="show">when show is true show me {{msg}}</p>
        <p>{{postTitle}}</p>
    </div>`,
    props:{
        show:{
            type:Boolean,
            default:true
        },
        postTitle:{
            type:String,
        }
    },
    data(){
        return {
            msg:"我是子组件"
        }
    }
}



Vue.component('blog-post',{
    props:{
        likes:{
            type:Number
        },
        isPublished:{
            type:Boolean
        },
        commentIds:{
            type:Array,
            default:function(){
                return  [234,266];
            }
        },
        author:{
            type:Object,
        }
    },
    template:`<div>
        <p>likes:{{likes}}</p>
        <p>isPublished:{{isPublished}}</p>
        <ul>
            <li>commentId:</li>
            <li 
                v-for="(commentId) in commentIds"
                :key="commentId"
            >{{commentId}}</li>
        </ul>
        <p>author:{{author.name}}</p>
        <p>company:{{author.company}}</p>
    </div>`
})


const vm = new Vue({
    el:'#root',
    template:`<div>
        <p>{{message}}</p>
            <button-counter/>
            <child-component :show="true" post-title="hello,I am post title"/>
            <child-component :show="false" post-title="hello,I am post title"/>
            <blog-post
                :likes="42"
                :is-published="false"
                :commend-ids="[123,456,789]"
                :author="{name:'kyrie',company:'Veridian Dynamics'}"
            />
    </div>`,
    data:{
        message:"Hello World",
    },
    components:{
        ChildComponent
    }
})