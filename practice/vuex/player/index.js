export default {
    state:() => ({
        player:[
            {number:11,name:'kyrie'},
            {number:23,name:'lebron'},
            {number:35,name:'durant'},
            {number:23,name:'jordan'},
            {number:24,name:'kobe'}
        ]
    }),
    mutations:{
        addPlayer(state,payload){
            state.player.push(payload)
        },
        removePlayer(state,index){
            state.player.splice(index,1);
        }
    },
    getters:{
        filterPlayer(state,getters,rootState){
            console.log(getters);
            console.log(rootState);
            return state.player.filter((player) => player.number === 23);
        }
    },
    actions:{
        addPlayerAsync({state,commit,dispatch,rootState},payload){
            setTimeout(() => {
                console.log("state:",state);
                console.log("rootState:",rootState)
                commit('addPlayer',payload);
            },1000);
        }
    }
}






