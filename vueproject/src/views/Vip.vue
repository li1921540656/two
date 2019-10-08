<template>
  <div>
    <!-- 背景 -->
    <div class="bg">
      <img src="../assets/bg3.png" />
    </div>
    <p class="title">专属会员可享受以下服务</p>
    <p class="gray">将您的需要放在心上，我们会始终如一地关怀您的家庭健康</p>
    <img src="../assets/line.png" class="line" />
    <ul>
      <li v-for="el in datas" :key="el.vid">
        <img :src="el.img" />
        <p class="p1">{{el.title}}</p>
        <p class="gray p2">{{el.content}}</p>
      </li>
    </ul>

    <p class="title">专属服务</p>
    <p class="gray">你将享受到以下增值服务</p>
    <ul>
      <li v-for="el in datas2" :key="el.vid">
        <img :src="el.img" />
        <p class="p1">{{el.title}}</p>
        <p class="gray p2">{{el.content}}</p>
      </li>
    </ul>
    <button class="btn" @click="concat" v-if="btn">联系客服</button>
    <img src="../assets/concat.png" class="concat" v-if="flag" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      datas: [],
      datas2: [],
      flag: false,
      btn: true
    };
  },
  methods: {
    concat: function() {
      this.flag = true;
      this.btn = false;
    }
  },
  created: function() {
    this.axios
      .get("/getService")
      .then(result => {
        this.datas = result.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.axios
      .get("/getService2")
      .then(result => {
        this.datas2 = result.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.bg > img {
  width: 100%;
}

.title {
  font-size: 26px;
  color: #444444;
  margin-top: 50px;
}

.gray {
  font-size: 14px;
  color: #777777;
  margin-top: 10px;
}

.line {
  width: 961px;
  border: 0;
}
.p2 {
  width: 182px;
  text-align: left;
  margin-bottom: 55px;
}
ul {
  width: 70%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  min-width: 960px;
}
.btn {
  width: 120px;
  height: 41px;
  background-color: #4ab344;
  border: 0;
  color: white;
  font-size: 14px;
  font-family: "微软雅黑";
  margin-top: 20px;
  border-radius: 5px;
  margin-bottom: 40px;
}
.concat{
    width: 100px;
}
</style>