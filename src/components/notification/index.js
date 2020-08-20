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
        const removeHeight = instance.height;
        notifications.splice(index,1);
        document.body.removeChild(instance.$el);
        for(let i = index; i < notifications.length; i++){
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
                    id:1,
                    verticalHeight:0,
                    visible:true,
                    timeout:7000
                }
            },
            created(){
                this.timer = null;
            },
            mounted(){
                this.createTimer()
            },
            methods:{
                createTimer(){
                    this.timer = setTimeout(() => {
                        this.visible = false;
                    },this.timeout);
                },
                clearTimer(){
                    if(this.timer) {
                        clearTimeout(this.timer);
                    }
                }
            },
            beforeDestroy(){
                this.clearTimer()
            }
        });
        document.body.appendChild(instance.$el);

        // 将新创建的提醒框 添加进一个数组里面。然后遍历每个实例对象,计算它在页面底部的高度。
        notifications.push(instance);

        // 遍历添加到数组的instance,每个instance的id 自增
        notifications.forEach((instance,index) => {
            instance.id = `notification_${seed++}`;
            instance.verticalHeight = index * (instance.$el.offsetHeight + 6) + 5;
        });

        instance.$on('closed',() => {
            removeInstance(instance);
        });

        instance.$on('close',() => {
            instance.visible = false;
        });

        if(notifications.length > 3) {
            setTimeout(() => {
                notifications[0].visible = false;
            },400)
        }
    }
})()