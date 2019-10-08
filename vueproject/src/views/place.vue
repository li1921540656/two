<template>
  <div>
    <div class="mainTitle">拥有三种类型农场</div>

    <!-- 农场图片 -->
    <div class="placeImg">
      <div class="block" v-for="e in place" :key="e.pid">
        <el-image :src="e.farmImg"></el-image>
        <br />
        <span class="demonstration">{{e.name}}</span>
      </div>
    </div>

    <div class="placeline"></div>
    <div class="mainTitle">主要四大目的</div>

    <div class="four-target">
      <div>
        <div>农场跨纬度设置</div>
        <div>利用自然气候来保证供应</div>
      </div>
      <div>
        <div>农场夸海拔设置</div>
        <div>利用海拔延长供应时段</div>
      </div>
      <div>
        <div>不同土壤</div>
        <div>利用海拔延长供应时段</div>
      </div>
      <div>
        <div>产品多农场种植</div>
        <div>抵抗农业自然风险更优质</div>
      </div>
    </div>

    <img src="https://15647476.s61i.faiusr.com/2/AD0I9IW7BxACGAAgiMq40QUoueLymgIwwAc4kAI.jpg" />

    <div class="mainTitle">我们的农场</div>
    <div class="myabout">我们踏遍整个四川，从XXX到XX再到XX、XX，跨越不同纬度，建立了多个不同形态的农场全年不间断为会员供应200余种当季蔬菜。</div>
    <div>目前，XXX农场、XXX农场、西昌西郊农场、XXX农场均取得了有机认证；。每个品种109项农残扫描、5项重金属检测。</div>
    <!-- 认证证书 -->
    <div class="identifyimg">
      <el-image :src="e.identifyImg" v-for="e in identifyimg" :key="e.iid" class="identimg"></el-image>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Vue from "vue";

export default {
  data() {
    return {
      farmImg: "",
      name: "",
      identifyImg: "",
      place: [],
      identifyimg: []
    };
  },
  methods: {
    //   农场图片
    getImgPlace: function() {
      this.axios
        .get("/getPlace", {
          params: {
            farmImg: this.$route.query.farmImg,
            name: this.$route.query.name
          }
        })
        .then(response => {
          console.log(response.data);
          this.place = response.data;

        })
        .catch(function(error) {
          console.log(error);
        });


        this.axios
        .get("/getIdentifyImg", {
          params: {
            identifyImg: this.$route.query.identifyImg
          }
        })
        .then(response => {
          console.log(response.data);
          this.identifyimg = response.data;

        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  watch: {
    "$route.query.farmImg": function() {
      this.name = this.$route.query.name; //kw值改变随时监听的到
    }
  },

  created: function() {
    this.farmImg = this.$route.query.farmImg;
    this.name = this.$route.query.name;
    this.identifyImg = this.$route.query.identifyImg;

    this.getImgPlace(); //直接调用封装好的方法

  }
};
</script>



<style scoped>
.mainTitle {
  font-size: 26px;
  padding-top: 0px;
  font-family: 微软雅黑;
  color: #444444;
  margin-top: 30px;
}

.placeImg {
  width: 975px;
  height: 287px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
}
.block {
  /* width: 315px; */
  height: 287px;
}
.placeline {
  width: 975px;
  height: 1px;
  background-color: #eee;
  margin: 0 auto;
  margin-top: 30px;
}
.four-target {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 948px;
  height: 50px;
  margin-top: 30px;
}

img {
  margin-top: 30px;
}
.myabout {
  margin-top: 30px;
}
.identifyimg {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 948px;
  height: 162px;
  margin: 0 auto;
  margin-top: 30px;
}
.identimg {
  width: 100px;
  height: 138px;
}
</style>