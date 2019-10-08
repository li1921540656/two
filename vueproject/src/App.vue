<template>
  <div id="app">
    <div id="logo">
      <b class="green">生鲜蔬果</b>
      <b class="grey">商城</b>
    </div>
    <div class="navRight" v-if="!userinfo.username">
      <router-link to="/login">登录</router-link>
      <router-link to="/regs">注册</router-link>
    </div>

    <div class="userinfo" v-else>
      <img :src="userinfo.avator" class="avator" @click="Pcenter" />
      {{userinfo.username}}
      <button @click="Outer" class="bt">退出</button>
    </div>

    <div id="nav">
      <router-link to="/allproducts">全部商品</router-link>
      <router-link to="/">首页</router-link>
      <router-link to="/place">种养产地</router-link>
      <router-link to="/shop">全国门店</router-link>
      <router-link to="/vip">会员专享</router-link>
      <router-link to="/shopcar">购物车</router-link>
      <router-link to="/life"></router-link>
      <router-link to="/admin"></router-link>
    </div>
    <router-view />
    <bottom-nav></bottom-nav>
  </div>
</template>

<style lang="scss" >
#app {
  font-family: "微软雅黑", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  font-size: 16px;
}
#nav {
  height: 50px;
  background-color: #d6d4d426;
  min-width: 100%;
  overflow: hidden;
  a {
    width: 100px;
    height: 50px;
    line-height: 50px;
    // background-color: palevioletred;
    padding: 14px 50px;
    text-decoration: none;
    color: #333333;
    margin-bottom: 0px;
    &.router-link-exact-active {
      color: #4ab344;
      background-color: #fff;
    }
  }
}
#logo {
  height: 105px;
  padding: 0 176px;
  margin: 0 auto;
  line-height: 105px;
  background-color: #d6d4d426;
  border-top: 3px solid #4ab344;
  text-align: left;
}
.green {
  font-size: 32px;
  color: #4ab344;
}
.grey {
  font-size: 32px;
  color: #cccccc;
}
#nav a:nth-child(1) {
  padding: 14px 88px;
  background-color: #4ab344;
  color: #fff;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "微软雅黑";
}
ul li {
  list-style: none;
  text-align: center;
}

.navRight {
  position: absolute;
  right: 30px;
  top: 20px;
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: space-around;
}
.navRight a {
  text-decoration: none;
  display: block;
  text-align: center;
  color: black;
}
.navRight a:hover {
  color: red;
}
.userinfo {
  position: absolute;
  right: 120px;
  top: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 20px;
  user-select: none;
}
.avator {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 10px 0;
  cursor: pointer;
}
.bt{
  border: none;
  margin-top: 10px;
  border-radius: 2px;
  height: 25px;
}
</style>

<script>
export default {
  data: function() {
    return {
    };
  },
   computed:{
    userinfo:{
      set:function(val){
      },
      get:function(){
        return this.$store.state.userinfo
      }
    }
  },
  created: function() {
    this.userinfo = this.$store.state.userinfo;
  },
  methods: {
    Pcenter: function() {
      window.location.href = "./Center";
    },
    Outer: function() {
      this.$store.commit("REMOVE_COUNT", this.userinfo);

      this.$router.go(-3);
    }
  }
};
</script>