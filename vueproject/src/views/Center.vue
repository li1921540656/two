<template>
  <div class="appone">
    <div class="left">
      <el-row class="tac">
        <el-col :span="12">
          <!-- <h5>自定义颜色</h5> -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @select="cenetrP"
            background-color="rgb(198, 248, 122)"
            text-color="black"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!-- <el-menu-item index="2">
              <i class="el-icon-goods"></i>
              <span slot="title"><router-link to="/center">我的购物车</router-link></span>
            </el-menu-item> -->
            <el-menu-item index="3" @click="per">
              <i class="el-icon-setting"></i>
              <span slot="title">个人基本信息</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="rig">
      <person v-if="key==3?true:false" ></person>
      <person v-else-if="key==3?true:false" ></person>
      <person v-else ></person>


    </div>
  </div>
</template>


<script>
import person from "../components/person.vue";
// import leftNav from "./leftNav.vue";

// var username=this.$store.state.userinfo.username
export default {
  data(){
    return {
       key:1,
      //  username:username
    }
  },
  components: {
   person
  },
  // created:function(){
  //   // this.username=this.$store.
    
  
  // },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    per(){
      this.falg=true
    },
    cenetrP(key, keyPath){
     if(key==1){
       console.log(1111)
       this.key=1
       console.log(this.key)
     }else if(key==2){
       this.key=2
       console.log(222)
       console.log(this.key)


     }else{
      this.key=3
       console.log(3333)
       console.log(this.key)
     }
  },
  }
}
</script>

<style  scoped>
.el-menu-item {
  width: 100%;
  margin: 0 auto;
  text-align: left;
  padding-left: 65px !important;
}

.el-menu-item:hover {
  background: #bfe7bb !important;
  width: 100%;
  /* text-align: center */
}
.el-submenu:hover {
  background: #acfda7 !important;
}
.el-menu-item {
  color: #909399 !important;
  background: #f1fbf0c7  !important ;
}
.appone {
  width: 1150px;
  margin: 10px 150px 0 169px;
  display: flex;
  background: #e7fad6;
}
.left {
  width: 240px;
  height: 500px;
  /* background: rgb(198, 248, 122); */
}
.rig{
  width: 920px;
  background: #f1fbf0c7;
}
.el-col-12 {
  width: 100%;
}

#logo {
  height: 105px;
  padding: 0 176px;
  margin: 0 auto;
  line-height: 105px;
  background-color: #d6d4d426;
  border-top: 3px solid #4ab344;
  text-align: left;
  position: relative;
}
.green {
  font-size: 32px;
  color: #4ab344;
}
.grey {
  font-size: 32px;
  color: #cccccc;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "微软雅黑";
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.right {
  position: absolute;
  right: 120px;
  top: 0px;
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: space-around;
}
.right a {
  text-decoration: none;
  display: block;
  text-align: center;
  color: black;
}
.right a:hover {
  color: red;
}
.userinfo {
  position: absolute;
  right: 120px;
  top: 0px;
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
</style>