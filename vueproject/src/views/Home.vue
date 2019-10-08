<template>
  <div class="home">
    <!-- 轮播图 -->
    <lunbo></lunbo>
    <!-- 新鲜水果 -->
    <div class="fruite">
      <div class="type">
        <div class="title">新鲜水果</div>
        <div class="item">
          <div class="el" v-for="e in products" :key="e.pid">
           <img :src="e.img" @click="goInfo(e.pid)"/>
            <!-- <router-link :to="{path:'cominfo',query: e}">  <img :src="e.img" /></router-link> -->
            <div>{{e.name}}</div>
            <div>
              ￥
              <span class="price">{{e.price}}</span>
              <span class="oprice">￥{{e.oriprice}}</span>
            </div>
          </div>
          <div>
            <img src="../assets/one.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- 肉禽蛋类 -->
    <div class="fruite meat">
      <div class="type">
        <div class="title">肉禽蛋类</div>
        <div class="item">
          <div class="el" v-for="e in meat" :key="e.pid">
            <router-link :to="{path:'cominfo',query: e}"> <img :src="e.img" /></router-link>
            <div>{{e.name}}</div>
            <div>
              ￥
              <span class="price">{{e.price}}</span>
              <span class="oprice">￥{{e.oriprice}}</span>
            </div>
          </div>
          <div>
            <img src="../assets/two.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- 田园时蔬 -->
    <div class="fruite">
      <div class="type">
        <div class="title">田园时蔬</div>
        <div class="item">
          <div class="el" v-for="e in vegetable" :key="e.pid">
            <router-link :to="{path:'cominfo',query: e}"> <img :src="e.img" /></router-link>
            <div>{{e.name}}</div>
            <div>
              ￥
              <span class="price">{{e.price}}</span>
              <span class="oprice">￥{{e.oriprice}}</span>
            </div>
          </div>
          <div>
            <img src="../assets/three.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- 大家关注 -->
    <div class="fruite attentions">
      <div class="type">
        <div class="item">
          <div class="attention">
            <div class="title">大家关注</div>
            <ul>
              <li v-for="a in attention" :key="a.aid">{{a.name}}</li>
            </ul>
          </div>
          <div class="fashion">
            <div class="title">近期流行</div>
            <ul>
              <li v-for="a in fashion" :key="a.aid">
                <img :src="a.img" />
                <p>{{a.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 生活常识 -->
    <div class="fruite attentions know">
      <div class="type">
        <div class="item life">
          <div class="fashion">
            <div class="title">生活常识</div>
            <ul>
              <li v-for="a in knowledge" :key="a.aid">
               <router-link :to="{path:'life',query: a}"> <img :src="a.img"  @click="detail"/></router-link>
                <p>{{a.title}}</p>
                <p>{{a.text}}</p>
              </li>
            </ul>
          </div>
          <div class="fashion">
            <div class="title">种养知识</div>
            <ul class="plant">
              <li v-for="a in plant" :key="a.aid">
               <router-link :to="{path:'life',query: a}"> <img :src="a.img" /></router-link>
                <p>{{a.title}}</p>
                <p>{{a.text}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 质检 -->
    <div class="fruite check">
      <div class="type">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <img src="../assets/01.png">
              <div class="test"><p>质检中心</P><p>原料检验、出产检验</P></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <img src="../assets/02.png">
              <div class="test"><p>自营农场</P><p>全年持续供应优质食材</P></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <img src="../assets/03.png">
              <div class="test"><p>冷链配送</P><p>自建物流体系，封闭式</P></div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <img src="../assets/04.png">
              <div class="test"><p>会员专享</P><p>针对会员制定膳食方案</P></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      products: [],
      meat: [],
      vegetable: [],
      attention: [],
      fashion: [],
      knowledge: [],
      plant: []
    };
  },
  methods:{
    detail:function(e){
      // console.log(e.target,this.knowledge)
      // this.$router.push({path:"/life?knowledge=1"})
    },
    goInfo:function(pid){
      this.$router.push({ path: 'cominfo', query: { pid: pid } })
    }
  },
  created: function() {
    this.axios.get("/getFruit").then(response => {
      this.products = response.data;
    });

    this.axios.get("/getMeat").then(response => {
      console.log(response.data);
      
      this.meat = response.data;
    });

    this.axios.get("/getVegetable").then(response => {
      this.vegetable = response.data;
    });

    this.axios.get("/getAttention").then(response => {
      this.attention = response.data;
    });

    this.axios.get("/getFashion").then(response => {
      this.fashion = response.data;
    });

    this.axios.get("/getLifeKnowledge").then(response => {
      this.knowledge = response.data;
    });
    this.axios.get("/getPlantKnowledge").then(response => {
      this.plant = response.data;
      // console.log(response.data);
    });
  }
};
</script>

<style scoped>

.fruite {
  height: 485px;
  /* background-color: rgb(124, 219, 124); */
}
.type {
  width: 960px;
  height: 485px;
  margin: 0 auto;
  /* background-color: yellow; */
}
.title {
  height: 100px;
  font-size: 26px;
  line-height: 110px;
  color: #444444;
  text-align: left;
  /* background-color: blue; */
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.el {
  /* background-color: pink; */
  width: 217px;
  height: 312px;
  overflow: hidden;
  text-align: left;
}
.el img {
  width: 225px;
  height: 215px;
}
.el img:hover {
  cursor: pointer;
  margin: 0 0 0 -10px;
  transition: margin 0.8s;
}
.el div {
  margin-top: 10px;
}
.el div:last-child {
  color: #4ab344;
}
.price {
  font-size: 20px;
  /* color: #000; */
}
.oprice {
  font-size: 12px;
  color: #767676;
  text-decoration: line-through;
  margin-left: 10px;
}
.meat,
.attentions {
  background-color: #d6d4d426;
}
.know {
  height: 420px;
  background-color: #fff;
}
.attention {
  width: 48%;
  height: 200px;
}
.fashion {
  width: 48%;
}
.attentions ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.attention ul li {
  width: 214px;
  height: 85px;
  line-height: 85px;
  margin-top: 20px;
  color: #ffffff;
  font-size: 16px;
}
.attention ul li:nth-child(1) {
  background-color: #7fc16a;
}
.attention ul li:nth-child(2) {
  background-color: #5b7564;
}
.attention ul li:nth-child(3) {
  background-color: #a6cde7;
}
.attention ul li:nth-child(4) {
  background-color: #c5d1a3;
}

.fashion li {
  width: 48%;
  height: 210px;
  border: 1px solid #9999994d;
}
.life p {
  padding: 8px 14px;
  height: 48px;
  overflow: hidden;
}
.life img {
  width: 100%;
}
.life ul {
  height: 265px;
  background-color: #fff;
}
.life li {
  height: 265px;
  text-align: justify;
}
.life li p:nth-child(3) {
  font-size: 14px;
  color: #999999;
}
.plant li {
  width: 100%;
}
.check {
  height: 200px;
}
.check .type {
  width: 71%;
  height: 100%;
  border-top: 1px solid #9999994d;
}
.fruite.attentions{
  height: 400px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .test{
    display: inline-block;
    text-align: left;
    padding:0 12px;
  }
  .test p:nth-child(2){
    font-size: 14px;
    color: #777777;
  }
.bg-purple[data-v-fae5bece] {
    background: #fff;
}
.el-row[data-v-fae5bece] {
    margin-top: 50px;
}
</style>