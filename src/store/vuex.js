import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store= new Vuex.Store({
    state:sessionStorage.getItem('state')?JSON.parse(sessionStorage.getItem('state')):{
        city:'北京',
        cityId:110100,
        num:0,
        count:'1'
    },
    mutations:{
        changeCity(state,name){
            state.city=name
        },
        changeId(state,id){
            state.cityId=id
        },
        // add(state,v){
        //     console.log(state);
        //     state.num=state.num+v
        // }
    },
    actions:{
        // action1(context,v){
        //     console.log(context);
        //     console.log('进入了actions');
        //     setTimeout(() => {
        //         context.commit('add',v)
        //     }, 3000);
        // }
    },
    getters:{
        // getCount(state){
        //     return state.count+'xasxa'
        // }
    }
})
export default store