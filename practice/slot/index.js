import Vue from 'vue';

Vue.component('alert-box',{
    template:`<div>
        <strong>Error!</strong>
        <slot></slot>
    </div>`,
    data(){
        return {
            username:'hello,slot'
        }
    }
});


Vue.component('base-button',{
    template:`<button type="button">
        <slot>Submit</slot>
    </button>`
})

Vue.component('vue-container',{
    template:`<div class="container">
        <header><slot name="header"></slot></header>
        <main><slot name="main"></slot></main>
        <footer><slot name="footer"></slot></footer>
    </div>`
});


Vue.component('current-user',{
    template:`
        <span>
            <slot v-bind:user="user">{{user.firstName}}</slot>
        </span>
    `,
    data(){
        return {
            user:{
                firstName:'kyrie',
                lastName:'irving'
            }
        }
    }
})



const vm = new Vue({
    el:"#root",
    template:`<div>
        <p>{{message}}</p>
        <alert-box>
            Something bad happend
            {{username}}
        </alert-box>
        <base-button/>
        <base-button>Confirm</base-button>
        <vue-container>
            <template v-slot:header>
                <h3>hello,我是标题</h3>
            </template>
            <template v-slot:main>
                <p>A paragraph for the main content.</p>
                <p>And another one</p>
            </template>
            <template v-slot:footer>
                <p>Here's some contact info</p>
            </template>
        </vue-container>
        <current-user>
            <template v-slot:default="slotProps">
                {{slotProps.user.lastName}}
            </template>
        </current-user>
    </div>`,
    data:{
        message:'hello world',
        username:'hello vue.js',
    },
});
