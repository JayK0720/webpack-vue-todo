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

Vue.component('data-date-picker',{
    template:`<div class="data-picker">
        <input type="text" v-model="date">
        <p>date:{{date}}</p>
    </div>`,
    data(){
        return {
            date:new Date().getDate()
        }
    },
    props:{
        activated:{
            validator(value){
                return typeof value === 'number';
            }
        }
    }
});

Vue.component('base-input',{
    props:['value'],
    template:`<input 
        type="text"
        :value="value"
        @input="$emit('input',$event.target.value)"
    />`,
})


Vue.component('blog-content',{
    props:['post'],
    template:`<div>
        <h3>{{post.title}}</h3>
        <button @click="handleEnlargeText">Enlarge text</button>
        <div v-html="post.content"></div>
    </div>`,
    methods:{
        handleEnlargeText(){
            this.$emit("enlarge-text",123)
        }
    }
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
        <data-date-picker :activated="123"/>
        <base-input
            v-model="username"
            placeholder="Enter your username"
        />
        <base-input
            v-model.number="age"
            placeholder="Enter your age"
        />
        <base-input
            v-model="email"
            placeholder="Enter your email"
        />
        <div :style="{fontSize:postFontSize + 'em'}">
            <blog-content 
                :post="{title:'hello,post-title',content:'我是blog内容'}"
                @enlarge-text="handleEnlargeText"
            />
        </div>
    </div>`,
    data:{
        message:"Hello World",
        username:'',
        age:26,
        email:'',
        postFontSize:1
    },
    components:{
        ChildComponent
    },
    methods:{
        handleEnlargeText(data){
            console.log(data);
            this.postFontSize += 0.1;
        }
    }
})