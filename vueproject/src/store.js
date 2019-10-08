import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const ADD_COUNT='ADD_COUNT';
const REMOVE_COUNT="REMOVE_COUNT"
var username=sessionStorage.getItem("userinfo");
var avator=sessionStorage.getItem("img");


export default new Vuex.Store({
  state: {
    userinfo: {
      isLogin: true,
      avator: avator,
      username:username,
      uid:2
    }
  },
  mutations: {
    [ADD_COUNT](state,userinfo){//数据存入本地
      sessionStorage.setItem("userinfo",userinfo.username);
      sessionStorage.setItem("img",userinfo.avator);
      state.userinfo.username=userinfo.username;
      state.userinfo.avator=userinfo.avator;


    },
    [REMOVE_COUNT](state,userinfo){//退出登陆
      sessionStorage.removeItem("userinfo",userinfo)
    }
  },
  actions: {

  }
})
