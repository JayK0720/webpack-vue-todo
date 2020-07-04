import Vue from 'vue';

Vue.component('title-component',{
    props:{
        level:{
            type:Number,
            default:1
        }
    },
    template:`
        <div>
            <template>
                <h1 v-if="level === 1">
                    <slot/>
                </h1>
                <h2 v-else-if="level === 2">
                    <slot/>
                </h2>
                <h3 v-else-if="level === 3">
                    <slot/>
                </h3>
                <h4 v-else-if="level === 4">
                    <slot/>
                </h4>
                <h5 v-else-if="level === 5">
                    <slot/>
                </h5>
                <h6 v-else>
                    <slot/>
                </h6>
            </template>
        </div>
    `
})


Vue.component('anchored-heading',{
    props:{
        level:{
            type:Number,
            default:1
        }
    },
    render:function(createElement){
        return createElement(
            'h'+this.level,
            this.$slots.default
        )
    }
});

Vue.component('base-component',{
    props:{
        size:{
            type:Number,
            default:30
        }
    },
    render(createElement){
        return createElement(
            'div',
            {
                'class':{
                    foo:true,
                    bar:false
                },
                style:{
                    color:'red',
                    fontSize:this.size + 'px'
                },
                'attrs':{
                    id:'foo'
                },
                domProps:{
                    innerHTML:"我是通过createElement创建的"
                },
                on:{
                    click:this.clickHandler
                }
            },
        )
    },
    methods:{
        clickHandler(){
            console.log("clicked");
        }
    }
})


function getChildrenTextContent(children){
    return children.map(function(node){
        return node.children
            ? getChildrenTextContent(node.children)
            : node.text;
    }).join("");
}

Vue.component('anchored-head',{
    render:function(createElement){
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase();
        return createElement(
            'h' + this.level,
            [
                createElement('a',{
                    'attrs':{
                        name:headingId,
                        href:'#' + headingId
                    }
                },this.$slots.default)
            ]
        )
    },
    props:{
        level:{
            type:Number,
            required:true
        }
    }
});

Vue.component('player-list',{
    props:{
        players:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    render:function(createElement){
        if(this.players.length > 0){
            return createElement(
                'ol',
                this.players.map(function(player){
                    return createElement('li',[
                        createElement('span',
                            {
                                attrs:{
                                    id:'number'
                                }
                            },'号码:' + player.number),
                        createElement('span',
                            {
                                attrs:{
                                    id:'name'
                                }
                            }, '名字:' + player.name
                        )
                    ])
                })
            )
        }else{
            return createElement('p',{
                attrs:{
                    attrs:{
                        class:'no-player'
                    }
                }
            },'no-player')
        }
    }
})




new Vue({
    template:`<div>
<!--        <template>
            <title-component :level="1">
                我是h1
            </title-component>
        </template>
        <title-component :level="2">
            我是h2
        </title-component>
        <title-component :level="3">
            我是h3
        </title-component>
        <title-component :level="4">
            我是h4
        </title-component>
        <title-component :level="5">
            我是h5
        </title-component>
        <title-component :level="6">
            我是h6
        </title-component>
        <anchored-heading :level="1">我是h1</anchored-heading>
        <anchored-heading :level="2">我是h2</anchored-heading>
        <anchored-heading :level="3">我是h3</anchored-heading>
        <anchored-heading :level="4">我是h4</anchored-heading>
        <anchored-heading :level="5">我是h5</anchored-heading>
        <anchored-heading :level="6">我是h6</anchored-heading>
        <base-component/>-->
        <p>{{message}}</p>
        <anchored-head :level="1">124</anchored-head>
        <div>
            <p>我是直接通过 v-if 和 v-for指令渲染的</p>
            <ol v-if="players.length > 0">
                <li v-for="player in players">
                    <span>号码:{{player.number}}</span>
                    <span>名字:{{player.name}}</span>
                </li>
            </ol>
            <p v-else>No player</p>
        </div>
        <div>
            <p>我是通过render函数渲染的</p>
            <player-list :players="players"/>
        </div>
    </div>`,
    data:{
        message: 'hello world!',
        players:[
            {number:11,name:'kyrie'},
            {number:23,name:'lebron'},
            {number:24,name:'kobe'},
            {number:35,name:'durant'},
            {number:3,name:"wade"}
        ]
    }
}).$mount('#root')