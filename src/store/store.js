import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


const state = {
    count :1
}
const mutations = {//改变state的方法一定写在mutations中  同步
    add(state){
        state.count+=1
    },
    reduce(state){
        state.count-=1
    }
}
const getters = {//在获取数据之前的一次编辑
    count:function(state){
        return state.count+=100
    }
}
const actions = {//异步
    addAction(context){//上下文对象，可以理解称之为store本身
        context.commit('add',10)
    },
    reduceAction({commit}){//让方法体逻辑和代码更清晰明了
        commit('reduce')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})