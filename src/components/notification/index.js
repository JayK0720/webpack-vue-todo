import Vue from 'vue';
import Notification from './index.vue';

export const notification = (function(){
    const defaults = {
        content:'',
        cancel:'',
        handleCancel:null
    }
    // 新增加的实例数组,用于添加新创建的实例对象
    let notifications = [];
    let seed = 0;
    // 移除$el 在动画完成之后再删除
    function removeInstance(instance){
        let index = notifications.findIndex((notification) => notification.id === instance.id);
        if(index <= 1) return;
        notifications.splice(index,1);
        const removeHeight = instance.height;
        for(let i = index; i < notifications.length -1; i++){
            notifications[i].verticalHeight = notifications[i].verticalHeight - removeHeight - 5;
        }
    }
    return function(options) {
        for(let key in options){
            defaults[key] = options[key]
        }
        var notification = Vue.extend(Notification);
        const instance = new notification({
            el:document.createElement('div'),
            data(){
                return {
                    content:defaults['content'],
                    cancel:defaults['cancel'],
                    id:0,
                    verticalHeight:6,
                    visible:true,
                }
            },
            created(){
                this.timer = null;
            },
            mounted(){
                this.clearTimer()
            },
            methods:{
                clearTimer(){
                    if(this.timer) return;
                    this.timer = setTimeout(() => {
                        this.visible = false;
                    },3500);
                }
            },
            beforeDestroy(){
                this.clearTimer();
            }
        });
        document.body.appendChild(instance.$el);

        // 将新创建的提醒框 添加进一个数组里面。然后遍历每个实例对象,计算它在页面底部的高度。
        notifications.push(instance);

        instance.$on('closed',() => {
            removeInstance(instance);
            document.body.removeChild(instance.$el);
        });

        instance.$on('close',() => {
            instance.visible = false;
        });
        console.log(instance,instance.id);
    }
})()